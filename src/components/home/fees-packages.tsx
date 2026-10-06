import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  FEES_HEADER,
  PACKAGES,
  REGISTRATION,
  SCHOOL_TERMS,
  type PackageCard,
} from "@/lib/content/fees";

const CARD_TONES = {
  plain: {
    card: "bg-white shadow-card",
    kicker: "text-primary",
    heading: "text-navy",
    muted: "text-text-muted",
    rule: "border-border",
    divide: "divide-border",
  },
  featured: {
    card: "bg-navy shadow-featured",
    kicker: "text-sky",
    heading: "text-white",
    muted: "text-text-on-dark-muted",
    rule: "border-border-on-dark",
    divide: "divide-border-on-dark",
  },
} as const;

/** Stops "One-on-One" breaking at its hyphens (Poppins has no U+2011 glyph). */
function KeepHyphenated({ text }: { text: string }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i > 0 && " "}
      {word.includes("-") ? <span className="whitespace-nowrap">{word}</span> : word}
    </span>
  ));
}

function PriceCard({ pkg }: { pkg: PackageCard }) {
  const tone = CARD_TONES[pkg.featured ? "featured" : "plain"];

  return (
    // Subgrid rows (header · prices · extras) line the hairlines up across the 3-up row.
    <li
      className={`row-span-3 grid grid-rows-subgrid gap-0 rounded-[24px] p-[clamp(28px,3vw,36px)] ${tone.card}`}
    >
      <div>
        <p
          className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${tone.kicker}`}
        >
          {pkg.kicker}
        </p>
        <h3 className={`mt-2 text-2xl leading-[1.3] font-bold text-balance ${tone.heading}`}>
          <KeepHyphenated text={pkg.name} />
        </h3>
        {pkg.subtitle && (
          <p className={`mt-2 text-[15px] leading-[1.6] text-pretty ${tone.muted}`}>
            {pkg.subtitle}
          </p>
        )}
      </div>

      <div className={`mt-6 flex flex-col gap-3 border-b pb-6 ${tone.rule}`}>
        {pkg.prices.map((price) => (
          <p
            key={price.period}
            className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
          >
            <span
              className={`text-[clamp(30px,3vw,38px)] leading-none font-bold tracking-[-0.02em] ${tone.heading}`}
            >
              {price.amount}
            </span>
            <span className={`text-[15px] ${tone.muted}`}>{price.period}</span>
          </p>
        ))}
      </div>

      <div className="pt-6">
        <h4 className={`text-[15px] font-semibold ${tone.heading}`}>
          {pkg.extrasLabel}
        </h4>
        <dl className={`mt-2 divide-y ${tone.divide}`}>
          {pkg.extras.map((extra) => (
            <div
              key={extra.name}
              className="flex items-baseline justify-between gap-4 py-3 text-[15px] leading-[1.5]"
            >
              <dt className={tone.muted}>{extra.name}</dt>
              <dd className={`text-right font-semibold whitespace-nowrap ${tone.heading}`}>
                {extra.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </li>
  );
}

function RegistrationCard() {
  const { fee, extraShirts, bottoms, footwear } = REGISTRATION;

  return (
    <div className="rounded-[24px] bg-white p-[clamp(28px,3vw,36px)] shadow-card">
      <h3 className="text-xl leading-[1.3] font-semibold text-navy">
        {REGISTRATION.title}
      </h3>
      <dl className="mt-4 divide-y divide-border">
        {/* A dl group may only hold dt/dd, so the T-shirt note is a second dd of the fee. */}
        <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 py-3">
          <dt className="text-base text-text-muted">{fee.name}</dt>
          <dd className="text-xl font-bold text-navy">{fee.value}</dd>
          <dd className="col-span-2 mt-1 text-[15px] text-text-muted">
            {REGISTRATION.feeIncludes}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-base text-text-muted">
            <KeepHyphenated text={extraShirts.name} />
          </dt>
          <dd className="font-semibold whitespace-nowrap text-navy">
            {extraShirts.value}
          </dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-6 min-[520px]:grid-cols-2">
        <div>
          <h4 className="text-base font-semibold text-navy">{bottoms.title}</h4>
          <p className="mt-2 text-[15px] leading-[1.6] text-pretty text-text-muted">
            {bottoms.body}
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold text-navy">{footwear.title}</h4>
          <ul className="mt-2 space-y-1.5 text-[15px] leading-[1.6] text-text-muted">
            {footwear.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="flex h-6 shrink-0 items-center">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TermsCard() {
  return (
    <div className="rounded-[24px] bg-white p-[clamp(28px,3vw,36px)] shadow-card">
      <h3 className="text-xl leading-[1.3] font-semibold text-navy">
        {SCHOOL_TERMS.title}
      </h3>
      <ol className="mt-5 space-y-3">
        {SCHOOL_TERMS.terms.map((term) => (
          <li
            key={term.label}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[14px] bg-tint px-5 py-4"
          >
            <span className="rounded-full bg-primary px-3 py-1 text-[13px] font-semibold tracking-[0.08em] text-white uppercase">
              {term.label}
            </span>
            <span className="text-base font-medium text-navy">{term.dates}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function FeesPackages() {
  return (
    <section
      id="fees"
      aria-labelledby="fees-heading"
      className="bg-sand px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Eyebrow centered>{FEES_HEADER.eyebrow}</Eyebrow>
          <SectionHeading id="fees-heading" className="mt-4">
            {FEES_HEADER.heading}
          </SectionHeading>
        </div>

        <ul className="mt-14 grid gap-6 min-[1000px]:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PriceCard key={pkg.name} pkg={pkg} />
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-6">
          <RegistrationCard />
          <TermsCard />
        </div>
      </div>
    </section>
  );
}
