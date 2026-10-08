"use server";

import { Resend } from "resend";
import { EMAIL } from "@/lib/content/navigation";
import {
  HONEYPOT_FIELD,
  hasErrors,
  readEnquiry,
  validateEnquiry,
  type EnquiryState,
  type EnquiryValues,
} from "@/lib/enquiry";

// Resend's shared test sender works until AKC's own domain is verified in Resend;
// it only delivers to the address that owns the Resend account.
const DEFAULT_FROM = "AKC Website <onboarding@resend.dev>";

/**
 * Collapses whitespace and control characters (line breaks, tabs, NUL…) into single
 * spaces, so a crafted name can't carry anything but plain text into the subject line.
 */
function toSubjectText(value: string) {
  return value.replace(/[\s\p{Cc}]+/gu, " ").trim();
}

function formatEnquiry(values: EnquiryValues) {
  const line = (label: string, value: string) => `${label}: ${value || "—"}`;
  return [
    "New registration enquiry from the website.",
    "",
    line("Name", values.name),
    line("Phone", values.phone),
    line("Email", values.email),
    line("Child's age", values.childAge),
    line("Package", values.package),
    "",
    "Notes:",
    values.notes || "—",
  ].join("\n");
}

export async function sendEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot !== "") {
    return { status: "success" };
  }

  const values = readEnquiry(formData);
  const errors = validateEnquiry(values);
  if (hasErrors(errors)) return { status: "invalid", errors };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("sendEnquiry: RESEND_API_KEY is not set; enquiry not sent.");
    return { status: "error" };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      // || not ??: a blank line copied from .env.example is "", which must fall back too.
      from: process.env.RESEND_FROM || DEFAULT_FROM,
      to: process.env.ENQUIRY_TO || EMAIL,
      replyTo: values.email || undefined,
      subject: `Registration enquiry from ${toSubjectText(values.name)}`,
      text: formatEnquiry(values),
    });
    if (error) {
      // Log the failure, never the family's details.
      console.error(`sendEnquiry: Resend error (${error.name}): ${error.message}`);
      return { status: "error" };
    }
  } catch (cause) {
    console.error("sendEnquiry: request to Resend failed.", cause);
    return { status: "error" };
  }

  return { status: "success" };
}
