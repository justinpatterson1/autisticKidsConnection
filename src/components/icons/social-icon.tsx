import type { SocialNetwork } from "@/lib/content/footer";

// Simplified brand glyphs, drawn in currentColor like the rest of the icon set.
const PATHS: Record<SocialNetwork, React.ReactNode> = {
  facebook: (
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.2Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.3-2.3l.8-1-1-2Z" />
    </>
  ),
};

export function SocialIcon({
  network,
  className,
}: {
  network: SocialNetwork;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[network]}
    </svg>
  );
}
