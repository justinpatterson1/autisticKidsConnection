export interface Testimonial {
  /** The parent's words, verbatim. */
  quote: string;
  name: string;
  /** e.g. "Parent of a 6-year-old" — as the family chose to be described. */
  relationship: string;
}

export const TESTIMONIALS_HEADER = {
  eyebrow: "What families say",
  heading: "In their own words",
} as const;

// Genuine quotes only, each with the family's written consent to publish.
// Never invent or paraphrase. While this is empty the section is hidden, or
// shown as a [Placeholder] preview when SHOW_PLACEHOLDER_SECTIONS=true.
export const TESTIMONIALS: readonly Testimonial[] = [];

/** How many [Placeholder] cards the preview shows. */
export const TESTIMONIAL_PLACEHOLDER_COUNT = 2;
