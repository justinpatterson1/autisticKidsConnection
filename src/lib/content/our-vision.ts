export interface OurVisionContent {
  eyebrow: string;
  body: string;
  /** Two sentences, one per line; the second is set in primary blue. */
  heading: readonly [string, string];
}

export const OUR_VISION: OurVisionContent = {
  eyebrow: "Our vision",
  body: "We envision a community where children with developmental differences are understood, supported and given meaningful opportunities to learn and grow.",
  heading: [
    "At AKC, we are building more than a classroom.",
    "We are building a community of understanding.",
  ],
};
