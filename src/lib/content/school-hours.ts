// NBSP ( ) keeps "AM"/"PM" on the same line as its time.
export const TIMES = {
  earlyDropOff: "7:30 AM",
  schoolDay: "8:30 AM – 2:30 PM",
  pickupDeadline: "3:00 PM",
  latestPickup: "3:30 PM",
} as const;

export type TimelineColor = "green" | "blue" | "yellow" | "purple";

/** Picture for each schedule card, as on a child's visual schedule. */
export type TimelineIcon = "sunrise" | "book" | "clock" | "home";

export interface TimelineEntry {
  time: string;
  label: string;
  color: TimelineColor;
  icon: TimelineIcon;
}

export const SCHOOL_HOURS = {
  eyebrow: "School hours & aftercare",
  heading: "A predictable school day",
  timeline: [
    { time: TIMES.earlyDropOff, label: "Early drop-off", color: "green", icon: "sunrise" },
    { time: TIMES.schoolDay, label: "Regular school hours", color: "blue", icon: "book" },
    {
      time: TIMES.pickupDeadline,
      label: "Pickup deadline, aftercare after this time",
      color: "yellow",
      icon: "clock",
    },
    { time: TIMES.latestPickup, label: "Latest pickup time", color: "purple", icon: "home" },
  ] satisfies readonly TimelineEntry[],
  aftercare: {
    title: "Aftercare",
    rules: [
      "Children must be picked up by 3:00 PM.",
      "Any pickup after 3:00 PM will be considered aftercare and a $20 fee will apply.",
      "The latest pickup time is 3:30 PM.",
    ],
    footnote:
      "Please ensure that children are picked up on time to avoid additional fees.",
  },
} as const;
