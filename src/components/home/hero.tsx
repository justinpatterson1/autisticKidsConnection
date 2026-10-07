import Image from "next/image";
import { MailIcon } from "@/components/icons/mail-icon";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { Badge } from "@/components/ui/badge";
import { HERO } from "@/lib/content/hero";
import {
  ADDRESS,
  AGE_RANGE,
  DESCRIPTOR,
  EMAIL,
  PHONE,
} from "@/lib/content/navigation";

// "Understanding Differences." is ~13.45em wide, so each sentence gets its own line
// once the column can hold it; on narrow phones each sentence wraps as its own unit.
const HEADING_LINES = HERO.heading.split(/(?<=\.)\s+/);

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex items-center nav:min-h-[clamp(640px,90vh,880px)] overflow-hidden bg-navy"
    >
      <Image
        src={HERO.image.src}
        alt={HERO.image.alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[center_35%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-(image:--hero-overlay) max-nav:bg-(image:--hero-overlay-mobile)"
      />

      <div className="mx-auto w-full max-w-[1320px] px-[clamp(20px,4vw,48px)] pt-[calc(97px+clamp(40px,6vw,72px))] pb-[clamp(130px,14vw,180px)]">
        <div className="max-w-[820px]">
          {/* Says what AKC is and who it's for before the slogans. The descriptor only shows where the header's is hidden (<640px, 1180–1479px). */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {HERO.badge && <Badge>{HERO.badge}</Badge>}
            <p className="text-[15px] font-medium text-sky-light">
              <span className="sm:max-nav:hidden wide:hidden">
                {DESCRIPTOR} ·{" "}
              </span>
              {AGE_RANGE} · {ADDRESS.town}
            </p>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-[clamp(34px,5.4vw,60px)] leading-[1.08] font-bold tracking-[-0.025em] text-white min-[360px]:text-[clamp(38px,5.4vw,60px)]"
          >
            {HEADING_LINES.map((line, i) => (
              <span key={line} className="block text-balance">
                {line}
                {i < HEADING_LINES.length - 1 && " "}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[36em] text-[clamp(18px,1.5vw,20px)] leading-[1.65] text-pretty text-text-on-photo">
            {HERO.lead}
          </p>

          <div
            id="hero-actions"
            className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap"
          >
            <a
              href={HERO.primaryCta.href}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-base font-semibold text-white transition-[color,background-color] duration-200 hover:bg-primary-hover"
            >
              {HERO.primaryCta.label}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={HERO.secondaryCta.href}
              className="inline-flex min-h-14 items-center justify-center rounded-full border-[1.5px] border-white/70 px-7 text-base font-semibold text-white transition-[color,background-color] duration-200 hover:bg-white/12"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>

          {/* Visible contact details: a fallback when no mail app is set up, and something to copy. */}
          <ul className="mt-6 hidden flex-wrap gap-x-6 gap-y-1 text-[15px] font-medium text-text-on-photo sm:flex">
            <li>
              <a
                href={PHONE.href}
                className="inline-flex min-h-11 items-center gap-2.5 rounded-md hover:text-white"
              >
                <PhoneIcon className="size-[18px] shrink-0 text-sky-light" />
                {PHONE.display}
              </a>
            </li>
            <li className="min-w-0">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center gap-2.5 rounded-md break-all hover:text-white"
              >
                <MailIcon className="size-[18px] shrink-0 text-sky-light" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
