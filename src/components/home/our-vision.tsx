import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { OUR_VISION } from "@/lib/content/our-vision";

export function OurVision() {
  const [first, second] = OUR_VISION.heading;
  return (
    <section
      aria-labelledby="vision-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[880px] text-center">
        <Eyebrow centered>{OUR_VISION.eyebrow}</Eyebrow>
        <p className="mx-auto mt-5 max-w-[36em] text-[clamp(19px,1.8vw,23px)] leading-[1.6] text-pretty text-text-muted sm:text-balance">
          {OUR_VISION.body}
        </p>
        {/* Each sentence is its own balanced line block, so neither leaves a widow. */}
        <SectionHeading id="vision-heading" size="large" className="mt-8">
          <span className="block text-balance">{first}</span>{" "}
          <span className="block text-balance text-primary">{second}</span>
        </SectionHeading>
      </div>
    </section>
  );
}
