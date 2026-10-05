export interface OurApproachContent {
  eyebrow: string;
  heading: string;
  intro: string;
  listLabel: string;
  items: readonly string[];
  quote: string;
}

export const OUR_APPROACH: OurApproachContent = {
  eyebrow: "Our approach",
  heading: "Every child is different.",
  intro:
    "That means every child deserves an approach that recognizes their individual strengths, needs and learning style.",
  listLabel: "Our learning environment combines:",
  items: [
    "Child-led and play-based learning",
    "Individualized academic support",
    "Sensory activities and movement",
    "Communication development",
    "Fine- and gross-motor activities",
    "Life-skills development",
    "Social and emotional support",
    "Structured routines and visual supports",
    "Small-group and one-on-one instruction",
  ],
  quote:
    "We believe that connection comes before correction and that children learn best when they feel safe and supported.",
};
