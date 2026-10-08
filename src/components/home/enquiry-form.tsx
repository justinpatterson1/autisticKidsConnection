"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendEnquiry } from "@/app/actions/send-enquiry";
import { EnquiryField } from "@/components/home/enquiry-field";
import { PackageChips } from "@/components/home/package-chips";
import { BreakableEmail } from "@/components/ui/breakable-email";
import { CheckMark } from "@/components/ui/check-mark";
import { ENQUIRY_FORM } from "@/lib/content/contact";
import { EMAIL, PHONE } from "@/lib/content/navigation";
import {
  EMPTY_ENQUIRY,
  ENQUIRY_PACKAGES,
  HONEYPOT_FIELD,
  MAX_LENGTH,
  SELECT_PACKAGE_EVENT,
  hasErrors,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryPackage,
  type EnquiryState,
  type EnquiryValues,
} from "@/lib/enquiry";

const INITIAL_STATE: EnquiryState = { status: "idle" };
const CONTACT_ERROR_ID = "enquiry-contact-error";
const { labels } = ENQUIRY_FORM;

/** First field to focus for each error, in form order. */
const FOCUS_ORDER: [keyof EnquiryErrors, string][] = [
  ["name", "enquiry-name"],
  ["contact", "enquiry-phone"],
  ["phone", "enquiry-phone"],
  ["email", "enquiry-email"],
];

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, INITIAL_STATE);
  const [values, setValues] = useState<EnquiryValues>(EMPTY_ENQUIRY);
  // null until the first failed submit; after that, errors update as the parent types.
  const [clientErrors, setClientErrors] = useState<EnquiryErrors | null>(null);
  // The success state the parent chose to edit. A resubmit yields a new state object, so
  // the confirmation returns on its own without resetting anything.
  const [editedFrom, setEditedFrom] = useState<EnquiryState | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const sent = state.status === "success" && state !== editedFrom;
  const errors =
    clientErrors ?? (state.status === "invalid" ? state.errors : {});
  const replyTo = [values.email.trim(), values.phone.trim()].filter(Boolean);

  // Keyed on the state object, not its status, so a second success also moves focus.
  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  useEffect(() => {
    if (editedFrom) document.getElementById("enquiry-name")?.focus();
  }, [editedFrom]);

  // Other sections (e.g. "Not sure which package fits?") can pre-select a chip.
  useEffect(() => {
    function select(event: Event) {
      const pkg = (event as CustomEvent<unknown>).detail;
      if ((ENQUIRY_PACKAGES as readonly unknown[]).includes(pkg)) {
        setValues((current) => ({ ...current, package: pkg as EnquiryPackage }));
      }
    }
    window.addEventListener(SELECT_PACKAGE_EVENT, select);
    return () => window.removeEventListener(SELECT_PACKAGE_EVENT, select);
  }, []);

  function update<K extends keyof EnquiryValues>(field: K, value: EnquiryValues[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (clientErrors) setClientErrors(validateEnquiry(next));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (pending) {
      event.preventDefault();
      return;
    }
    const found = validateEnquiry(values);
    if (!hasErrors(found)) {
      setClientErrors(null);
      return;
    }
    event.preventDefault();
    setClientErrors(found);
    const first = FOCUS_ORDER.find(([key]) => found[key]);
    if (first) document.getElementById(first[1])?.focus();
  }

  return (
    <div className="rounded-[24px] bg-navy p-[clamp(24px,4vw,44px)] text-white">
      {sent ? (
        <div className="flex flex-col items-start gap-4">
          <CheckMark />
          <h3
            ref={successRef}
            tabIndex={-1}
            className="text-2xl leading-[1.3] font-semibold text-balance"
          >
            {ENQUIRY_FORM.success.heading}
          </h3>
          <p className="text-base leading-[1.65] text-text-on-dark-muted">
            {ENQUIRY_FORM.success.body}
          </p>
          {replyTo.length > 0 && (
            <div className="w-full rounded-xl bg-input-on-dark px-5 py-4">
              <p className="text-sm text-text-on-dark-muted">{ENQUIRY_FORM.success.replyTo}</p>
              <ul className="mt-1 space-y-0.5 text-base font-semibold wrap-anywhere">
                {replyTo.map((detail) => (
                  <li key={detail}>
                    <BreakableEmail email={detail} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            type="button"
            onClick={() => setEditedFrom(state)}
            className="inline-flex min-h-11 items-center text-left text-base font-semibold text-sky-light underline decoration-sky/60 decoration-2 underline-offset-4 transition-[color] duration-200 hover:text-white"
          >
            {ENQUIRY_FORM.success.edit}
          </button>
        </div>
      ) : (
        <>
          <h3 id="enquiry-heading" className="text-2xl leading-[1.3] font-semibold">
            {ENQUIRY_FORM.heading}
          </h3>
          <p className="mt-2 text-base leading-[1.65] text-pretty text-text-on-dark-muted">
            {ENQUIRY_FORM.intro}
          </p>
          <p className="mt-1 text-sm text-text-on-dark-muted">
            {ENQUIRY_FORM.requiredNote}
          </p>

          <form
            action={formAction}
            onSubmit={handleSubmit}
            noValidate
            aria-labelledby="enquiry-heading"
            className="relative mt-8"
          >
            {/* Name + age, then phone + email side by side so the shared "phone or email"
                message sits directly under the two fields it is about. */}
            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <EnquiryField
                id="enquiry-name"
                name="name"
                label={labels.name}
                autoComplete="name"
                value={values.name}
                onChange={(value) => update("name", value)}
                maxLength={MAX_LENGTH.name}
                error={errors.name}
                required
              />
              <EnquiryField
                id="enquiry-age"
                name="childAge"
                label={labels.childAge}
                optional
                placeholder={ENQUIRY_FORM.agePlaceholder}
                autoComplete="off"
                value={values.childAge}
                onChange={(value) => update("childAge", value)}
                maxLength={MAX_LENGTH.childAge}
              />
              <EnquiryField
                id="enquiry-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                label={labels.phone}
                autoComplete="tel"
                value={values.phone}
                onChange={(value) => update("phone", value)}
                maxLength={MAX_LENGTH.phone}
                error={errors.phone}
                sharedErrorId={errors.contact ? CONTACT_ERROR_ID : undefined}
              />
              <EnquiryField
                id="enquiry-email"
                name="email"
                type="email"
                inputMode="email"
                label={labels.email}
                autoComplete="email"
                value={values.email}
                onChange={(value) => update("email", value)}
                maxLength={MAX_LENGTH.email}
                error={errors.email}
                sharedErrorId={errors.contact ? CONTACT_ERROR_ID : undefined}
              />
              {errors.contact && (
                <p
                  id={CONTACT_ERROR_ID}
                  className="-mt-2 text-sm text-error-on-dark sm:col-span-2"
                >
                  {errors.contact}
                </p>
              )}
            </div>

            <div className="mt-6">
              <PackageChips
                value={values.package}
                onChange={(value) => update("package", value)}
              />
            </div>

            <EnquiryField
              id="enquiry-notes"
              name="notes"
              label={labels.notes}
              optional
              multiline
              value={values.notes}
              onChange={(value) => update("notes", value)}
              maxLength={MAX_LENGTH.notes}
              showCount
              className="mt-6"
            />

            {/* Honeypot: off-screen, unlabelled for assistive tech, out of the tab order. */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] size-px overflow-hidden"
            >
              <label htmlFor="enquiry-hp">{ENQUIRY_FORM.honeypotLabel}</label>
              <input
                id="enquiry-hp"
                name={HONEYPOT_FIELD}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>

            {state.status === "error" && !pending && (
              <p
                role="alert"
                className="mt-6 rounded-xl border border-error-on-dark px-4 py-3 text-sm leading-[1.6] text-error-on-dark"
              >
                {ENQUIRY_FORM.error.lead}{" "}
                <a href={PHONE.href} className="font-semibold whitespace-nowrap underline underline-offset-2">
                  {PHONE.display}
                </a>{" "}
                {ENQUIRY_FORM.error.or}{" "}
                <a href={`mailto:${EMAIL}`} className="font-semibold underline underline-offset-2 [overflow-wrap:anywhere]">
                  <BreakableEmail email={EMAIL} />
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              aria-disabled={pending || undefined}
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-sky px-7 text-base font-semibold text-navy transition-[background-color] duration-200 hover:bg-sky-light aria-disabled:cursor-wait"
            >
              {pending ? (
                ENQUIRY_FORM.pending
              ) : (
                <>
                  {ENQUIRY_FORM.submit}
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>

            <p className="mt-4 text-sm leading-[1.6] text-text-on-dark-muted">
              {ENQUIRY_FORM.privacy}
            </p>
          </form>
        </>
      )}
    </div>
  );
}
