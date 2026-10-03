export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#main" },
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Families", href: "#families" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
] as const;

export const ACTIVE_NAV_HREF = "#main";

export const REGISTER_HREF = "#contact";

export const PHONE = {
  label: "Call us",
  display: "371-7281",
  href: "tel:3717281",
} as const;
