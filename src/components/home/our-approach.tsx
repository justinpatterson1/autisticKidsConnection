import { BookIcon } from "@/components/icons/book-icon";
import { HeartIcon } from "@/components/icons/heart-icon";
import { SproutIcon } from "@/components/icons/sprout-icon";
import { CheckMark } from "@/components/ui/check-mark";
import { Eyebrow } from "@/components/ui/eyebrow";
import { QuoteBlock } from "@/components/ui/quote-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { OUR_APPROACH, type ApproachIcon } from "@/lib/content/our-approach";

// Same badge language as the school-day visual schedule.
const GROUP_ICONS: Record<ApproachIcon, typeof BookIcon> = {
  book: BookIcon,
  sprout: SproutIcon,
  heart: HeartIcon,
};

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

        <p className="mt-14 text-[17px] leading-[1.7] text-text-muted">
          {OUR_APPROACH.listLabel}
        </p>
        {/* Three clusters of three instead of one run of nine: stacked on phones, side by side
            with hairline dividers from lg. */}
        <div className="mt-3 divide-y divide-border rounded-[20px] bg-white px-6 sm:px-8 lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-0 lg:py-2">
          {OUR_APPROACH.groups.map((group, index) => {
            const headingId = `approach-group-${index}`;
            const Icon = GROUP_ICONS[group.icon];
            return (
              <div key={group.label} className="py-6 lg:px-8 lg:py-5">
                <div className="flex items-center gap-3.5">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <Icon className="size-[22px]" />
                  </span>
                  <h3 id={headingId} className="text-lg leading-[1.3] font-semibold text-navy">
                    {group.label}
                  </h3>
                </div>
                <ul aria-labelledby={headingId} className="mt-4 space-y-3.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3.5 text-base leading-[1.45] font-medium text-navy"
                    >
                      <CheckMark />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <QuoteBlock>{OUR_APPROACH.quote}</QuoteBlock>
        </div>
      </div>
    </section>
  );
}
