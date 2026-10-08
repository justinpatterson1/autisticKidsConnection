import { ADDRESS, EMAIL, PHONE } from "@/lib/content/navigation";

export type ContactIcon = "pin" | "phone" | "mail";

export interface ContactRow {
  icon: ContactIcon;
  label: string;
  value: string;
  href: string;
}

export const CONTACT_HEADER = {
  badge: "Now registering",
  heading: "Come grow with us",
  line: "Every child has potential. Our job is to help them discover it.",
} as const;

export const CONTACT_ROWS: readonly ContactRow[] = [
  {
    icon: "pin",
    label: "Visit us",
    value: `${ADDRESS.street}, ${ADDRESS.area}`,
    href: ADDRESS.mapHref,
  },
  { icon: "phone", label: PHONE.label, value: PHONE.display, href: PHONE.href },
  { icon: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

export const ENQUIRY_FORM = {
  heading: "Registration enquiry",
  intro: "Tell us a little about your child and we'll be in touch.",
  requiredNote: "Your name and a phone number or email are required.",
  labels: {
    name: "Your name",
    phone: "Phone",
    email: "Email",
    childAge: "Child's age",
    package: "Package you're interested in",
    notes: "Anything you'd like us to know?",
  },
  optional: "(optional)",
  /** Example only (placeholders are not labels). */
  agePlaceholder: "e.g. 4 years",
  honeypotLabel: "Leave this field empty",
  // Shown under a long field once it nears its limit, so pasted text is never cut silently.
  charactersLeft: (left: number) =>
    left === 1 ? "1 character left" : `${left.toLocaleString("en")} characters left`,
  limitReached: (max: number) =>
    `You've reached the ${max.toLocaleString("en")}-character limit.`,
  submit: "Send enquiry",
  pending: "Sending…",
  // Factual only: what is sent, to whom, and why.
  privacy:
    "Your details are sent by email to the AKC team and used only to reply to your enquiry.",
  success: {
    heading: "Thank you, your enquiry has been sent.",
    body: `We'll be in touch soon. If it's urgent, call us on ${PHONE.display}.`,
    // Echoes the details the parent gave, so a typo is caught now, not after a silent wait.
    replyTo: "We'll reply to",
    edit: "Spotted a mistake? Edit and send again",
  },
  // Rendered with the phone number and email as tappable links between these parts.
  error: {
    lead: "Sorry, your enquiry couldn't be sent. Please try again, or call",
    or: "or email",
  },
} as const;

export interface NextStep {
  title: string;
  body: string;
}

export const NEXT_STEPS_HEADING = "What happens next";

// AKC's real enquiry-to-enrolment steps (e.g. reply time, visit, start), confirmed by
// the school. While empty the block is hidden, or shown as [Placeholder] steps when
// SHOW_PLACEHOLDER_SECTIONS=true. Never invent visits, timeframes or assessments.
export const NEXT_STEPS: readonly NextStep[] = [];

/** How many [Placeholder] steps the preview shows. */
export const NEXT_STEPS_PLACEHOLDER_COUNT = 3;
