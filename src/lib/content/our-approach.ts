export type ApproachIcon = "book" | "sprout" | "heart";

export interface ApproachGroup {
  /** Our grouping label; the items themselves are AKC's words, verbatim. */
  label: string;
  /** Picture badge, echoing the school-day visual schedule. */
  icon: ApproachIcon;
  items: readonly string[];
}

export interface OurApproachContent {
  eyebrow: string;
  heading: string;
  intro: string;
  listLabel: string;
  groups: readonly ApproachGroup[];
  quote: string;
}

export const OUR_APPROACH: OurApproachContent = {
  eyebrow: "Our approach",
  heading: "Every child is different.",
  intro:
    "That means every child deserves an approach that recognizes their individual strengths, needs and learning style.",
  listLabel: "Our learning environment combines:",
  // The nine supplied items, grouped into three clusters of three so the list can be
  // taken in at a glance instead of read as one long run.
  groups: [
    {
      label: "Learning",
      icon: "book",
      items: [
        "Child-led and play-based learning",
        "Individualized academic support",
        "Small-group and one-on-one instruction",
      ],
    },
    {
      label: "Development",
      icon: "sprout",
      items: [
        "Communication development",
        "Fine- and gross-motor activities",
        "Life-skills development",
      ],
    },
    {
      label: "Wellbeing",
      icon: "heart",
      items: [
        "Sensory activities and movement",
        "Social and emotional support",
        "Structured routines and visual supports",
      ],
    },
  ],
  quote:
    "We believe that connection comes before correction and that children learn best when they feel safe and supported.",
};
