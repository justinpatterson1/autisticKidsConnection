interface Photo {
  src: string;
  alt: string;
}

export interface WhoWeSupportContent {
  eyebrow: string;
  heading: string;
  body: string;
  callout: string;
  cta: { label: string; href: string };
  mainPhoto: Photo;
  insetPhoto: Photo;
}

export const WHO_WE_SUPPORT: WhoWeSupportContent = {
  eyebrow: "Who we support",
  heading: "A smaller, more individualized place to learn",
  body: "AKC provides support for children who may benefit from a smaller, more individualized learning environment, including children with autism and other developmental or learning differences.",
  callout:
    "We recognize that children develop at different rates—and different does not mean less.",
  cta: { label: "Explore our services", href: "#services" },
  // [Placeholder] Unsplash stand-ins (BQ3ryrV9Zh4, O5EMzfdxedg) — replace with real AKC photos, with consent.
  mainPhoto: {
    src: "/images/about-main-workbook-placeholder.jpg",
    alt: "A young boy concentrates on writing in a colourful workbook while an adult beside him points to the page at a wooden table",
  },
  insetPhoto: {
    src: "/images/about-inset-notebook-placeholder.jpg",
    alt: "A boy in a red top leans in close, carefully writing in a small notebook at a shared table beside another child",
  },
};
