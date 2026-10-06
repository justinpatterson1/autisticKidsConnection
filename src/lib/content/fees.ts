export interface PriceLine {
  amount: string;
  /** "per month" / "per term" — rendered smaller beside the amount. */
  period: string;
}

export interface ExtraRow {
  name: string;
  value: string;
}

export interface PackageCard {
  kicker: string;
  name: string;
  subtitle?: string;
  prices: readonly PriceLine[];
  extrasLabel: string;
  extras: readonly ExtraRow[];
  featured?: boolean;
}

export interface SchoolTerm {
  /** Sentence case so screen readers say "Term 1"; shown uppercase via CSS. */
  label: string;
  dates: string;
}

export const FEES_HEADER = {
  eyebrow: "School fees & program pricing",
  heading: "Programs and packages",
} as const;

// Prices exactly as supplied by AKC. Open question: show currency as "TT$"?
export const PACKAGES: readonly PackageCard[] = [
  {
    kicker: "Preschool Package",
    name: "Preschool",
    subtitle: "For children who are not on the autism spectrum",
    prices: [{ amount: "$1,000", period: "per month" }],
    extrasLabel: "Extracurricular Activities",
    extras: [
      { name: "Music", value: "$200 per month" },
      { name: "Physical Education (PE)", value: "$200 per term" },
      { name: "Potty Care", value: "$200 per month" },
    ],
  },
  {
    kicker: "Autism Support Package",
    name: "Standard Support Package",
    prices: [
      { amount: "$2,000", period: "per month" },
      { amount: "$8,000", period: "per term" },
    ],
    extrasLabel: "Extracurricular Activities",
    extras: [
      { name: "Music", value: "$200 per month" },
      { name: "PE", value: "$200 per term" },
      { name: "Potty Care", value: "$300 per month" },
    ],
    featured: true,
  },
  {
    kicker: "Personal Tutor Package",
    name: "Individualized One-on-One Support",
    prices: [{ amount: "$3,500–$4,000", period: "per month" }],
    extrasLabel: "Additional Services",
    extras: [
      { name: "Potty Care", value: "$300 per month" },
      { name: "Music", value: "$200 per month" },
      { name: "PE", value: "$200 per term" },
    ],
  },
];

export const REGISTRATION = {
  title: "Registration & uniform",
  fee: { name: "Registration Fee", value: "$500" },
  feeIncludes: "Includes 2 AKC T-shirts",
  extraShirts: { name: "Additional T-shirts", value: "$100 each" },
  bottoms: {
    title: "Uniform Bottoms",
    body: "Black pants or black skirts can be purchased at Charran's Bookstore.",
  },
  footwear: {
    title: "Footwear",
    items: ["Black shoes", "Black sneakers are acceptable", "Crocs are also permitted"],
  },
} as const;

export const SCHOOL_TERMS = {
  title: "Our school terms",
  terms: [
    { label: "Term 1", dates: "September – December" },
    { label: "Term 2", dates: "January – Easter" },
    { label: "Term 3", dates: "After Easter – August" },
  ] satisfies readonly SchoolTerm[],
} as const;
