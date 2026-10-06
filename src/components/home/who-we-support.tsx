import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Callout } from "@/components/ui/callout";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHO_WE_SUPPORT } from "@/lib/content/who-we-support";

export function WhoWeSupport() {
  const { mainPhoto, insetPhoto } = WHO_WE_SUPPORT;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center lg:grid-cols-2 gap-[clamp(40px,6vw,88px)]">
        <div>
          <Eyebrow>{WHO_WE_SUPPORT.eyebrow}</Eyebrow>
          <SectionHeading id="about-heading" className="mt-4">
            {WHO_WE_SUPPORT.heading}
          </SectionHeading>
          <p className="mt-5 max-w-[34em] text-[17px] leading-[1.7] text-pretty text-text-muted">
            {WHO_WE_SUPPORT.body}
          </p>
          <div className="mt-7">
            <Callout>{WHO_WE_SUPPORT.callout}</Callout>
          </div>
          <div className="mt-8">
            <ButtonLink
              href={WHO_WE_SUPPORT.cta.href}
              variant="secondary"
              arrow
            >
              {WHO_WE_SUPPORT.cta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative w-full max-w-[560px] sm:pr-[12%] sm:pb-[14%] lg:order-first lg:mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] lg:aspect-[4/5]">
            <Image
              src={mainPhoto.src}
              alt={mainPhoto.alt}
              fill
              sizes="(min-width: 640px) 500px, 100vw"
              className="object-cover object-[30%_center]"
            />
          </div>
          <div className="absolute right-0 bottom-0 hidden aspect-square w-[52%] overflow-hidden rounded-[20px] border-8 border-white shadow-raised sm:block">
            <Image
              src={insetPhoto.src}
              alt={insetPhoto.alt}
              fill
              sizes="300px"
              className="object-cover object-[60%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
