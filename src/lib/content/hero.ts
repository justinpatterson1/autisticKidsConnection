export interface HeroContent {
  /** Set to null to remove the badge. */
  badge: string | null;
  heading: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
}

export const HERO: HeroContent = {
  badge: "Now registering",
  heading:
    "Understanding Differences. Building Confidence. Creating Possibilities.",
  lead: "At Autistic Kids Connection (AKC), we believe every child deserves an environment where they feel safe, understood, accepted and capable of learning.",
  primaryCta: { label: "Register Now", href: "#contact" },
  secondaryCta: { label: "Programs & Fees", href: "#fees" },
  // [Placeholder] Unsplash stand-in (Rewired Digital) — replace with a real AKC photo, with consent.
  image: {
    src: "/images/hero-placeholder.jpg",
    alt: "Two educators guiding a small group of young children as they draw and colour at a classroom table",
  },
};
