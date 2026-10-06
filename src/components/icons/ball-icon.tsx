export function BallIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 5.6c3 2.4 3.9 8.4.4 12.6" />
      <path d="M18.4 5.6c-3 2.4-3.9 8.4-.4 12.6" />
    </svg>
  );
}
