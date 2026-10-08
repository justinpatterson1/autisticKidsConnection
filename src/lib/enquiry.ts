// Shared by the enquiry form (client) and the sendEnquiry Server Action, so both
// apply the same rules. No server-only imports here.

export const ENQUIRY_PACKAGES = [
  "Preschool",
  "Autism Support",
  "Personal Tutor",
  "Not sure yet",
] as const;

export type EnquiryPackage = (typeof ENQUIRY_PACKAGES)[number];

export interface EnquiryValues {
  name: string;
  phone: string;
  email: string;
  childAge: string;
  package: EnquiryPackage | "";
  notes: string;
}

export type EnquiryField = keyof EnquiryValues;

/** `contact` covers the "phone or email" rule, which belongs to both fields. */
export type EnquiryErrors = Partial<Record<"name" | "phone" | "email" | "contact", string>>;

export type EnquiryState =
  | { status: "idle" }
  | { status: "invalid"; errors: EnquiryErrors }
  | { status: "error" }
  | { status: "success" };

/**
 * Off-screen field people never see; bots that fill every input get a silent "success".
 * Deliberately meaningless: a name like "company" can be autofilled by the browser,
 * which would silently drop a real parent's enquiry.
 */
export const HONEYPOT_FIELD = "akc_hp";

export const MAX_LENGTH: Record<EnquiryField, number> = {
  name: 100,
  phone: 30,
  email: 254,
  childAge: 30,
  package: 30,
  notes: 2000,
};

export const EMPTY_ENQUIRY: EnquiryValues = {
  name: "",
  phone: "",
  email: "",
  childAge: "",
  package: "",
  notes: "",
};

const ERROR_MESSAGES = {
  name: "Please tell us your name.",
  contact: "Please give a phone number or an email address so we can reply.",
  // Non-breaking spaces keep the example number on one line.
  phone: "Please check the phone number. Use numbers only, for example 868 123 4567.",
  email: "Please check the email address, for example name@example.com.",
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s().-]+$/;

function isPhone(value: string) {
  const digits = value.replace(/\D/g, "").length;
  return PHONE_PATTERN.test(value) && digits >= 7 && digits <= 15;
}

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const phone = values.phone.trim();
  const email = values.email.trim();

  if (!values.name.trim()) errors.name = ERROR_MESSAGES.name;
  if (!phone && !email) errors.contact = ERROR_MESSAGES.contact;
  if (phone && !isPhone(phone)) errors.phone = ERROR_MESSAGES.phone;
  if (email && !EMAIL_PATTERN.test(email)) errors.email = ERROR_MESSAGES.email;

  return errors;
}

export function hasErrors(errors: EnquiryErrors) {
  return Object.keys(errors).length > 0;
}

function isPackage(value: string): value is EnquiryPackage {
  return (ENQUIRY_PACKAGES as readonly string[]).includes(value);
}

/** Reads, trims and length-caps the submitted fields; unknown packages become "". */
export function readEnquiry(formData: FormData): EnquiryValues {
  const read = (field: EnquiryField) => {
    const value = formData.get(field);
    return typeof value === "string"
      ? value.trim().slice(0, MAX_LENGTH[field])
      : "";
  };
  const pkg = read("package");
  return {
    name: read("name"),
    phone: read("phone"),
    email: read("email"),
    childAge: read("childAge"),
    package: isPackage(pkg) ? pkg : "",
    notes: read("notes"),
  };
}

/** Window event other sections fire to pre-select a package in the enquiry form. */
export const SELECT_PACKAGE_EVENT = "akc:select-package";
