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
  submit: "Send enquiry",
  pending: "Sending…",
  // Factual only: what is sent, to whom, and why.
  privacy:
    "Your details are sent by email to the AKC team and used only to reply to your enquiry.",
  success: {
    heading: "Thank you, your enquiry has been sent.",
    body: `We'll be in touch soon. If it's urgent, call us on ${PHONE.display}.`,
  },
  error: `Sorry, your enquiry couldn't be sent. Please try again, or call ${PHONE.display} or email ${EMAIL}.`,
} as const;
