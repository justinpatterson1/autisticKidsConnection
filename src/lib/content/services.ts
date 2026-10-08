export interface ServiceCard {
  title: string;
  body: string;
  image: { src: string; alt: string };
}

export type ExtracurricularIcon = "music" | "ball" | "cake";

export interface ExtracurricularCard {
  title: string;
  icon: ExtracurricularIcon;
  paragraphs: readonly string[];
}

export const SERVICES_HEADER = {
  eyebrow: "Our services",
  heading: "Support shaped around each child",
} as const;

// [Placeholder] Unsplash stand-ins (6c86TCPmNRQ, rk57BkkhCaE, 20YP7NENJzk, 26vlm0cVvE4) — replace with real AKC photos, with consent.
export const SERVICES: readonly ServiceCard[] = [
  {
    title: "One-on-One Tutoring",
    body: "Individual attention designed around your child's learning needs and goals.",
    image: {
      src: "/images/service-tutoring-placeholder.jpg",
      alt: "A teacher sits across a desk from a young boy, pointing to a colourful page in his workbook",
    },
  },
  {
    title: "Small-Group Learning",
    body: "A supportive classroom environment that allows children to learn alongside peers while receiving individualized guidance.",
    image: {
      src: "/images/service-small-group-placeholder.jpg",
      alt: "A small group of children writing at classroom tables while a teacher leans in to help one of them",
    },
  },
  {
    title: "Life Skills",
    body: "Developing practical skills that encourage independence, confidence and participation in everyday life.",
    image: {
      src: "/images/service-life-skills-handwashing-placeholder.jpg",
      alt: "A father stands beside his young daughter at a kitchen sink, guiding her as she lathers soap and washes her hands",
    },
  },
  {
    title: "Sensory Play & Movement",
    body: "Activities designed to support regulation, body awareness, coordination and engagement.",
    image: {
      src: "/images/service-sensory-placeholder.jpg",
      alt: "Young children playing with buckets and toy trucks in an outdoor sandbox while an educator joins in",
    },
  },
];

/** Same term the Fees cards use for these extras. */
export const EXTRACURRICULARS_HEADING = "Extracurricular activities";

export const EXTRACURRICULARS: readonly ExtracurricularCard[] = [
  {
    title: "Music Program",
    icon: "music",
    paragraphs: [
      "Our music program gives children opportunities to explore rhythm, sound, movement and self-expression in a fun and supportive environment.",
    ],
  },
  {
    title: "Physical Education",
    icon: "ball",
    paragraphs: [
      "Our Physical Education program encourages children to move, play and develop their physical abilities in a supportive environment.",
    ],
  },
  {
    title: "Birthday Club",
    icon: "cake",
    paragraphs: [
      "We believe every child deserves to feel celebrated and included.",
      "Our Birthday Club gives us an opportunity to recognize and celebrate our children's special days together, creating positive memories and strengthening our AKC community.",
    ],
  },
];
