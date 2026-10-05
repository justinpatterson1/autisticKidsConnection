export function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <figure className="rounded-[20px] bg-navy px-[clamp(28px,4vw,44px)] py-[clamp(28px,4vw,44px)]">
      <svg
        viewBox="0 0 32 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-6 w-8 text-sky"
      >
        <path d="M0 24V14.4C0 6.4 4.3 1.6 11.2 0l1.6 3.4C8.8 4.8 6.9 7.5 6.6 11.2H12V24H0Zm19.2 0V14.4C19.2 6.4 23.5 1.6 30.4 0L32 3.4c-4 1.4-5.9 4.1-6.2 7.8h5.4V24h-12Z" />
      </svg>
      <blockquote className="mt-5 text-[clamp(19px,2vw,24px)] leading-[1.5] font-medium text-pretty text-white">
        <p>{children}</p>
      </blockquote>
    </figure>
  );
}
