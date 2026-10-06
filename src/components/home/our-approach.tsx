import { CheckMark } from "@/components/ui/check-mark";
import { Eyebrow } from "@/components/ui/eyebrow";
import { QuoteBlock } from "@/components/ui/quote-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { OUR_APPROACH } from "@/lib/content/our-approach";

export function OurApproach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-tint px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <Eyebrow>{OUR_APPROACH.eyebrow}</Eyebrow>
            <SectionHeading id="approach-heading" className="mt-4">
              {OUR_APPROACH.heading}
            </SectionHeading>
          </div>
          <p className="max-w-[460px] text-[17px] leading-[1.7] text-pretty text-text-muted">
            {OUR_APPROACH.intro}
          </p>
        </div>

        <p
          id="approach-list-label"
          className="mt-14 text-[17px] leading-[1.7] text-text-muted"
        >
          {OUR_APPROACH.listLabel}
        </p>
        {/* Fills down each column (5 + 4, then 3 + 3 + 3), so the hairline is dropped on each column's last item. */}
        <ul
          aria-labelledby="approach-list-label"
          className="mt-3 rounded-[20px] bg-white px-6 py-2 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5 sm:gap-x-10 sm:px-8 lg:grid-cols-3 lg:grid-rows-3"
        >
          {OUR_APPROACH.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3.5 border-b border-border py-4 text-base font-medium text-navy last:border-b-0 sm:max-lg:nth-5:border-b-0 lg:nth-[3n]:border-b-0"
            >
              <CheckMark />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <QuoteBlock>{OUR_APPROACH.quote}</QuoteBlock>
        </div>
      </div>
    </section>
  );
}
