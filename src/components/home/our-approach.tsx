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
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
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
          className="mt-14 text-base font-semibold text-navy"
        >
          {OUR_APPROACH.listLabel}
        </p>
        <ul
          aria-labelledby="approach-list-label"
          className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3"
        >
          {OUR_APPROACH.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3.5 rounded-[14px] bg-white px-5 py-[18px] text-base font-medium text-navy"
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
