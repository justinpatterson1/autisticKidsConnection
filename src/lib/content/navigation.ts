export interface NavItem {
  label: string;
  href: string;
}

export const PHONE = {
  label: "Call us",
  display: "371-7281",
  // Trinidad & Tobago is +1-868; the full number dials from any SIM.
  href: "tel:+18683717281",
} as const;

export const EMAIL = "autistickidstutoring@gmail.com";

export const DESCRIPTOR = "Homeschooling • Tutoring • Developmental Support";

export const AGE_RANGE = "Ages 2–12";

export const ADDRESS = {
  street: "#2 Mc Inroy Street",
  town: "Curepe",
  area: "Curepe, Trinidad & Tobago",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=2+Mc+Inroy+Street%2C+Curepe%2C+Trinidad+and+Tobago",
} as const;

// "Register Now" and the Contact nav item go to the enquiry form (feature 14),
// which sends submissions to the school's email via Resend.
export const CONTACT_HREF = "#contact";

export const REGISTER_HREF = CONTACT_HREF;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Families", href: "#families" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: CONTACT_HREF },
] as const;
