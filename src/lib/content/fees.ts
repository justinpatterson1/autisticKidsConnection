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

/**
 * One line under the heading naming the currency, e.g. "All prices are in Trinidad and
 * Tobago dollars (TT$)." null until AKC confirms it: hidden in production, shown as a
 * [Placeholder] when SHOW_PLACEHOLDER_SECTIONS=true.
 */
export const FEES_CURRENCY_NOTE: string | null = null;
export const FEES_CURRENCY_PLACEHOLDER =
  "[Placeholder] Currency, e.g. “All prices are in TT$”, awaiting AKC's confirmation.";

/**
 * Next to the prices, so "$2,000 per month" beside "$8,000 per term" reads as one fee paid
 * two ways. The rules are the payment policy's own words (policies.ts).
 */
export const FEES_PAYMENT_NOTE = {
  heading: "Paying monthly or by the term",
  rules: [
    "Monthly payments are installments toward the full termly commitment.",
    "All school fees must be fully paid by the end of the term.",
  ],
  link: "Read the full payment policy",
} as const;

/** Under the cards: a way forward for parents who can't yet tell which package fits. */
export const FEES_UNSURE = {
  question: "Not sure which package fits your child?",
  link: "Tell us about your child",
} as const;

// Prices exactly as supplied by AKC. The currency is pending: see FEES_CURRENCY_NOTE.
// The three cards carry equal weight: they suit different children, not upgrade tiers.
// Extras share one order (Music · PE · Potty Care) so cards can be compared row by row.
// NBSP ( ) keeps "(PE)" on the same line as "Education" in narrow cards.
export const PACKAGES: readonly PackageCard[] = [
  {
    kicker: "Preschool Package",
    name: "Preschool",
    // Reframed from AKC's supplied "For children who are not on the autism spectrum"
    // (2026-10-08): same eligibility, framed by support need, not diagnosis.
    // Pending AKC's sign-off before launch.
    subtitle: "For children who don't need autism-specific support",
    prices: [{ amount: "$1,000", period: "per month" }],
    extrasLabel: "Extracurricular Activities",
    extras: [
      { name: "Music", value: "$200 per month" },
      { name: "Physical Education (PE)", value: "$200 per term" },
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
      { name: "Physical Education (PE)", value: "$200 per term" },
      { name: "Potty Care", value: "$300 per month" },
    ],
  },
  {
    kicker: "Personal Tutor Package",
    name: "Individualized One-on-One Support",
    prices: [{ amount: "$3,500–$4,000", period: "per month" }],
    extrasLabel: "Additional Services",
    extras: [
      { name: "Music", value: "$200 per month" },
      { name: "Physical Education (PE)", value: "$200 per term" },
      { name: "Potty Care", value: "$300 per month" },
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
