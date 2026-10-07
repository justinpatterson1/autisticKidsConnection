import { CONTACT_HREF } from "@/lib/content/navigation";
import { TIMES } from "@/lib/content/school-hours";

export interface FooterLink {
  label: string;
  href: string;
}

export type SocialNetwork = "facebook" | "instagram" | "whatsapp";

export interface SocialLink {
  network: SocialNetwork;
  /** Accessible name, e.g. "AKC on Facebook". */
  label: string;
  href: string;
}

export const FOOTER = {
  heading: "Site footer",
  logo: {
    src: "/assets/akc-logo.png",
    // The image carries the name and descriptor, so they aren't repeated as text.
    alt: "Autistic Kids Connection: Homeschooling, Tutoring, Understanding Differences",
  },
  hours: {
    title: "School hours",
    lines: [
      TIMES.schoolDay,
      `Early drop-off from ${TIMES.earlyDropOff}`,
      `Latest pickup ${TIMES.latestPickup}`,
    ],
  },
  explore: {
    title: "Explore",
    links: [
      { label: "Who We Support", href: "#about" },
      { label: "Our Approach", href: "#approach" },
      { label: "Our Services", href: "#services" },
      { label: "Family & Community", href: "#families" },
    ] satisfies readonly FooterLink[],
  },
  admissions: {
    title: "Admissions",
    links: [
      { label: "Fees & Packages", href: "#fees" },
      { label: "School Policies", href: "#policies" },
      { label: "Register Now", href: CONTACT_HREF },
    ] satisfies readonly FooterLink[],
  },
  copyrightName: "Autistic Kids Connection",
} as const;

// Real AKC accounts only. While empty, no social buttons render (or [Placeholder]
// circles when SHOW_PLACEHOLDER_SECTIONS=true). Add one entry per account.
export const SOCIAL_LINKS: readonly SocialLink[] = [];

// Accessibility and Privacy Policy links appear once those pages exist.
export const LEGAL_LINKS: readonly FooterLink[] = [];

/** How many [Placeholder] social circles the preview shows. */
export const SOCIAL_PLACEHOLDER_COUNT = 3;
