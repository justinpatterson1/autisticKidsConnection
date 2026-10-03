import Image from "next/image";
import { HERO } from "@/lib/content/hero";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[clamp(640px,90vh,880px)] items-center overflow-hidden bg-navy"
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
        <div className="max-w-[760px]">
          {HERO.badge && (
            <p className="inline-flex items-center gap-2 rounded-full bg-sky px-3.5 py-1.5 text-sm font-semibold text-navy">
              <span aria-hidden="true" className="size-2 rounded-full bg-navy" />
              {HERO.badge}
            </p>
          )}

          <h1
            id="hero-heading"
            className="mt-6 text-[clamp(34px,5.4vw,70px)] leading-[1.08] font-bold tracking-[-0.025em] text-balance text-white min-[360px]:text-[clamp(38px,5.4vw,70px)]"
          >
            {HERO.heading}
          </h1>

          <p className="mt-6 max-w-[36em] text-[clamp(18px,1.5vw,20px)] leading-[1.65] text-pretty text-text-on-photo">
            {HERO.lead}
          </p>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <a
              href={HERO.primaryCta.href}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary-hover"
            >
              {HERO.primaryCta.label}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={HERO.secondaryCta.href}
              className="inline-flex min-h-14 items-center justify-center rounded-full border-[1.5px] border-white/70 px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/12"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
