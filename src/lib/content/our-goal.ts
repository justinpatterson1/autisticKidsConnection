export type GoalColor = "red" | "orange" | "yellow" | "green" | "blue";

export interface GoalPill {
  /** Sentence case so screen readers say the word; shown uppercase via CSS. */
  label: string;
  color: GoalColor;
}

export interface OurGoalContent {
  eyebrow: string;
  heading: string;
  lead: string;
  goals: readonly GoalPill[];
  body: string;
  // [Placeholder] Reuses the small-group Unsplash stand-in — replace with a real AKC classroom photo, with consent.
  backgroundSrc: string;
}

export const OUR_GOAL: OurGoalContent = {
  eyebrow: "Our goal",
  heading: "Our goal is not simply to help children complete schoolwork.",
  lead: "We want to help children become more:",
  goals: [
    { label: "Confident", color: "red" },
    { label: "Independent", color: "orange" },
    { label: "Communicative", color: "yellow" },
    { label: "Capable", color: "green" },
    { label: "Connected", color: "blue" },
  ],
  body: "We celebrate progress, whether it is a first word, a new skill, completing an activity independently, making a friend, learning to write a name, or simply feeling comfortable enough to participate.",
  backgroundSrc: "/images/service-small-group-placeholder.jpg",
};
