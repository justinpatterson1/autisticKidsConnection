import { BookIcon } from "@/components/icons/book-icon";
import { ClockIcon } from "@/components/icons/clock-icon";
import { HomeIcon } from "@/components/icons/home-icon";
import { SunriseIcon } from "@/components/icons/sunrise-icon";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SCHOOL_HOURS,
  type TimelineColor,
  type TimelineIcon,
} from "@/lib/content/school-hours";

// Logo-colour badges. Yellow carries a navy icon: white on yellow is only ~1.9:1.
const BADGES: Record<TimelineColor, string> = {
  green: "bg-logo-green text-white",
  blue: "bg-primary text-white",
  yellow: "bg-logo-yellow text-navy",
  purple: "bg-logo-purple text-white",
};

const ICONS: Record<TimelineIcon, typeof ClockIcon> = {
  sunrise: SunriseIcon,
  book: BookIcon,
  clock: ClockIcon,
  home: HomeIcon,
};

export function SchoolHours() {
  const { aftercare } = SCHOOL_HOURS;

  return (
    <section
      id="hours"
      aria-labelledby="school-hours-heading"
      className="bg-sand px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Eyebrow>{SCHOOL_HOURS.eyebrow}</Eyebrow>
        <SectionHeading id="school-hours-heading" className="mt-4">
          {SCHOOL_HOURS.heading}
        </SectionHeading>

        {/* The day as a visual schedule, the picture-card sequence AKC teaches with: read top to
            bottom on phones, left to right from lg. A short rail joins each card to the next at the
            badge's centre (24px padding + 28px half-badge = 52px), spanning exactly the gap. */}
        <ol className="mt-14 grid gap-4 lg:grid-cols-4 lg:gap-6">
          {SCHOOL_HOURS.timeline.map((entry) => {
            const Icon = ICONS[entry.icon];
            return (
              <li
                key={entry.label}
                className="relative flex items-center gap-5 rounded-[20px] bg-white p-6 shadow-card after:absolute after:top-full after:left-[51px] after:h-4 after:w-0.5 after:bg-sky last:after:hidden lg:flex-col lg:items-start lg:gap-0 lg:after:top-[51px] lg:after:left-full lg:after:h-0.5 lg:after:w-6"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full ${BADGES[entry.color]}`}
                >
                  <Icon className="size-[26px]" />
                </span>
                <div className="lg:mt-6">
                  <p className="text-[clamp(20px,1.9vw,26px)] leading-[1.2] font-bold tracking-[-0.01em] text-balance text-navy">
                    {entry.time}
                  </p>
                  <p className="mt-1.5 text-base leading-[1.5] text-pretty text-text-muted">
                    {entry.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Title and footnote on the left, rules on the right from lg; one column below. */}
        <div className="mt-6 grid gap-y-4 rounded-[20px] bg-white p-[clamp(24px,3vw,32px)] shadow-card lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12">
          <h3 className="text-xl leading-[1.3] font-semibold text-navy">
            {aftercare.title}
          </h3>
          <ul className="space-y-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            {aftercare.rules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-3.5 text-base leading-[1.6] text-pretty text-navy"
              >
                <span aria-hidden="true" className="flex h-[1.6em] shrink-0 items-center">
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-2 border-t border-border pt-5 text-[15px] leading-[1.6] text-pretty text-text-muted lg:mt-0 lg:border-t-0 lg:pt-0">
            {aftercare.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
