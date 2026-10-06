import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SCHOOL_HOURS, type TimelineColor } from "@/lib/content/school-hours";

const DOT_COLORS: Record<TimelineColor, string> = {
  green: "bg-logo-green",
  blue: "bg-primary",
  yellow: "bg-logo-yellow",
  purple: "bg-logo-purple",
};

export function SchoolHours() {
  const { aftercare } = SCHOOL_HOURS;

  return (
    <section
      aria-labelledby="school-hours-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      {/* At lg the aftercare panel sits beside the timeline, level with its first stop. */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-[clamp(40px,6vw,88px)]">
        <div>
          <Eyebrow>{SCHOOL_HOURS.eyebrow}</Eyebrow>
          <SectionHeading id="school-hours-heading" className="mt-4">
            {SCHOOL_HOURS.heading}
          </SectionHeading>
        </div>

        {/* Each stop draws the rail down to the next dot centre (dot top 1px + 12px; 32px gap), so it ends at the last dot. */}
        <ol className="space-y-8 lg:row-start-2">
          {SCHOOL_HOURS.timeline.map((entry) => (
            <li
              key={entry.label}
              className="relative pl-12 before:absolute before:top-[13px] before:-bottom-[45px] before:left-[11px] before:w-0.5 before:bg-border-tint last:before:hidden"
            >
              <span
                aria-hidden="true"
                className={`absolute top-px left-0 size-6 rounded-full ring-6 ring-white ${DOT_COLORS[entry.color]}`}
              />
              <p className="text-xl leading-[1.3] font-bold text-navy">{entry.time}</p>
              <p className="mt-1 text-base leading-[1.6] text-pretty text-text-muted">
                {entry.label}
              </p>
            </li>
          ))}
        </ol>

        <div className="self-start rounded-[20px] bg-tint p-[clamp(24px,3vw,32px)] lg:col-start-2 lg:row-start-2">
          <h3 className="text-xl leading-[1.3] font-semibold text-navy">
            {aftercare.title}
          </h3>
          <ul className="mt-4 space-y-3">
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
          <p className="mt-6 border-t border-border-tint pt-5 text-[15px] leading-[1.6] text-pretty text-text-muted">
            {aftercare.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
