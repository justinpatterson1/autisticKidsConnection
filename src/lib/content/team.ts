export interface TeamMember {
  name: string;
  role: string;
  /** One or two sentences, supplied by AKC. */
  description: string;
  qualification?: string;
  photo: { src: string; alt: string };
}

export const TEAM_HEADER = {
  eyebrow: "Meet the team",
  heading: "The people who will know your child",
} as const;

// Real staff only, supplied and approved by AKC (with photo consent).
// Never invent names, roles or credentials. While this is empty the section
// is hidden, or shown as a [Placeholder] preview when SHOW_PLACEHOLDER_SECTIONS=true.
export const TEAM: readonly TeamMember[] = [];

/** How many [Placeholder] cards the preview shows. */
export const TEAM_PLACEHOLDER_COUNT = 3;
