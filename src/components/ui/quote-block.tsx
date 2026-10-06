import { QuoteIcon } from "@/components/icons/quote-icon";

export function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <figure className="rounded-[20px] bg-navy px-[clamp(28px,4vw,44px)] py-[clamp(28px,4vw,44px)]">
      <QuoteIcon className="h-6 w-8 text-sky" />
      <blockquote className="mt-5 max-w-[32em] text-[clamp(19px,2vw,24px)] leading-[1.5] font-medium text-pretty text-white">
        <p>{children}</p>
      </blockquote>
    </figure>
  );
}
