export interface PolicyBlock {
  /** Optional sub-heading (rendered as an H4). */
  heading?: string;
  /** Rules render as a dotted list; otherwise as paragraphs. */
  style: "rules" | "paragraphs";
  items: readonly string[];
}

export interface PolicyItem {
  /** Stable slug: the item is reachable at #policy-{id}, which opens it. */
  id: string;
  title: string;
  blocks: readonly PolicyBlock[];
}

export const POLICIES_HEADER = {
  eyebrow: "School policies",
  heading: "Good to know",
} as const;

export const POLICIES: readonly PolicyItem[] = [
  {
    id: "payment",
    title: "Payment policy",
    blocks: [
      {
        heading: "Monthly payments",
        style: "rules",
        items: [
          "All school fees are due by the 1st of each month.",
          "Parents are given a one-week grace period to make payment.",
          "After the one-week grace period, a $100 late fee will be added to the outstanding balance.",
        ],
      },
      {
        heading: "Termly payments",
        style: "rules",
        items: [
          "Parents who choose to pay by the term must pay the full term fee.",
          "Monthly payments are installments toward the full termly commitment.",
          "All school fees must be fully paid by the end of the term.",
        ],
      },
    ],
  },
  {
    id: "potty-care",
    title: "Potty care",
    blocks: [
      {
        style: "paragraphs",
        items: [
          "If a child is reported as fully toilet trained but still requires staff assistance, supervision or support with toileting, the applicable potty-care fee will be charged.",
        ],
      },
    ],
  },
  {
    id: "property-damage",
    title: "Property damage policy",
    blocks: [
      {
        style: "paragraphs",
        items: [
          "We understand that children may have accidents or moments of dysregulation. However, if a child intentionally or through repeated unsafe behaviour damages school property or another child's personal property, the parent/guardian will be responsible for the cost of repairing or replacing the damaged item.",
          "Parents will be informed of the incident and the applicable cost of the damage.",
          "We appreciate your cooperation in helping us maintain a safe and respectful environment for everyone.",
        ],
      },
    ],
  },
];

/** Element id of a policy item; linking to `#${policyAnchor(id)}` opens that item. */
export const policyAnchor = (id: string) => `policy-${id}`;

/** Window event a link fires to open a policy item, even when the hash is already set. */
export const OPEN_POLICY_EVENT = "akc:open-policy";

// Reads `${lead}${rest}`; the lead is bold.
// "considering" replaces AKC's supplied "choosing" (2026-10-08): policies now sit before the
// enquiry form, where most readers haven't chosen yet. Pending AKC's sign-off before launch.
export const POLICIES_THANK_YOU = {
  lead: "Thank you",
  rest: " for considering Autistic Kids Connection and for partnering with us in supporting your child's growth, development and independence.",
} as const;
