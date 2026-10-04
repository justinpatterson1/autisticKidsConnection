import { ClockIcon } from "@/components/icons/clock-icon";
import { PinIcon } from "@/components/icons/pin-icon";
import { SunriseIcon } from "@/components/icons/sunrise-icon";
import { KEY_INFO, type KeyInfoIcon } from "@/lib/content/key-info";

const ICONS: Record<KeyInfoIcon, typeof ClockIcon> = {
  clock: ClockIcon,
  sunrise: SunriseIcon,
  pin: PinIcon,
};

export function KeyInfoStrip() {
  return (
    <section
      aria-labelledby="key-info-heading"
      className="relative z-10 -mt-[clamp(64px,7vw,100px)] px-[clamp(20px,4vw,48px)]"
    >
      <h2 id="key-info-heading" className="sr-only">
        Key information
      </h2>
      <ul className="mx-auto flex max-w-[1200px] flex-wrap gap-px overflow-hidden rounded-[20px] bg-border-soft shadow-raised">
        {KEY_INFO.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li
              key={item.label}
              className="flex flex-[1_1_260px] items-center gap-4 bg-white px-6 py-6 sm:px-7 sm:py-7"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-tint-strong text-primary">
                <Icon className="size-6" />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-text-muted">{item.label}</p>
                <p className="mt-0.5 text-lg font-semibold text-balance text-navy">
                  {item.value}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
