import { QuoteIcon } from "@/components/icons/quote-icon";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { showPlaceholderSections } from "@/lib/content/site-flags";
import {
  TESTIMONIAL_PLACEHOLDER_COUNT,
  TESTIMONIALS,
  TESTIMONIALS_HEADER,
  type Testimonial,
} from "@/lib/content/testimonials";

// An odd last card spans both columns at md and centres at one column's width.
const CARD =
  "flex flex-col rounded-[20px] bg-white p-[clamp(28px,3vw,36px)] md:odd:last:col-span-2 md:odd:last:mx-auto md:odd:last:w-[calc(50%-12px)]";

function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <li className={CARD}>
      <figure className="flex grow flex-col">
        <QuoteIcon className="h-6 w-8 text-primary" />
        <blockquote className="mt-5 grow text-[19px] leading-[1.5] font-medium text-pretty text-navy">
          <p>{testimonial.quote}</p>
        </blockquote>
        <figcaption className="mt-6 border-t border-border pt-5 text-[15px] text-text-muted">
          <span className="font-semibold text-navy">{testimonial.name}</span>
          {" · "}
          {testimonial.relationship}
        </figcaption>
      </figure>
    </li>
  );
}

/** Layout preview only: no words attributed to anyone, labelled so it can't pass as real. */
function PlaceholderCard() {
  return (
    <li className={`${CARD} font-mono text-sm text-text-muted`}>
      <QuoteIcon className="h-6 w-8 text-tint-strong" />
      <p className="mt-5 grow">
        [Placeholder] Genuine parent quote, shared with written consent.
      </p>
      <p className="mt-6 border-t border-border pt-5">
        [Placeholder] Parent name · Relationship to child
      </p>
    </li>
  );
}

export function Testimonials() {
  const preview = TESTIMONIALS.length === 0;
  if (preview && !showPlaceholderSections) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-primary px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Eyebrow centered tone="primary">
            {TESTIMONIALS_HEADER.eyebrow}
          </Eyebrow>
          <SectionHeading id="testimonials-heading" tone="dark" className="mt-4">
            {TESTIMONIALS_HEADER.heading}
          </SectionHeading>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {preview
            ? Array.from({ length: TESTIMONIAL_PLACEHOLDER_COUNT }, (_, i) => (
                <PlaceholderCard key={i} />
              ))
            : TESTIMONIALS.map((t) => (
                <QuoteCard key={`${t.name}-${t.quote.slice(0, 24)}`} testimonial={t} />
              ))}
        </ul>
      </div>
    </section>
  );
}
