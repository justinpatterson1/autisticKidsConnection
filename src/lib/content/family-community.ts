export interface FamilyCommunityContent {
  eyebrow: string;
  heading: string;
  body: string;
  listLabel: string;
  initiatives: readonly string[];
  photo: { src: string; alt: string };
  collaboration: {
    title: string;
    partner: string;
    // Paragraph 1 reads `${before}${partner}${after}`; the partner name is emphasised.
    before: string;
    after: string;
    closing: string;
  };
}

export const FAMILY_COMMUNITY: FamilyCommunityContent = {
  eyebrow: "Family & community support",
  heading: "AKC is more than a learning environment.",
  body: "We believe in supporting the whole family.",
  listLabel: "Our community initiatives include:",
  initiatives: [
    "Parent counselling and support",
    "Community fundraisers and family events",
    "Parent education and workshops",
    "Collaboration with professionals and specialists",
    "Developmental support and referrals when needed",
  ],
  // [Placeholder] Unsplash stand-in (kPkRpy6pIIg) — replace with a real AKC photo, with consent.
  photo: {
    src: "/images/family-placeholder.jpg",
    alt: "An educator leans over a small table to help a group of young children as they draw and write together",
  },
  collaboration: {
    title: "Professional collaboration",
    partner: "Neuroness Child Psychology Clinic",
    before: "AKC collaborates with ",
    after:
      ", allowing families to access professional child psychology and evaluation services when appropriate.",
    closing:
      "We believe collaboration between educators, parents and professionals helps us better understand each child's individual needs and support their development.",
  },
};
