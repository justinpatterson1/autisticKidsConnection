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
  // [Placeholder] Unsplash stand-ins (r-_71cqvTUo, 7fF0iei80AQ) — replace with real AKC photos, with consent.
  mainPhoto: {
    src: "/images/about-main-placeholder.jpg",
    alt: "An educator sits beside a young girl at a classroom table, colouring alongside her as she concentrates on her worksheet",
  },
  insetPhoto: {
    src: "/images/about-inset-placeholder.jpg",
    alt: "A woman and a young boy share a picture book in a library, reading the page together",
  },
};
