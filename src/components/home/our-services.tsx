import Image from "next/image";
import { BallIcon } from "@/components/icons/ball-icon";
import { CakeIcon } from "@/components/icons/cake-icon";
import { MusicNoteIcon } from "@/components/icons/music-note-icon";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  EXTRACURRICULARS,
  EXTRACURRICULARS_HEADING,
  SERVICES,
  SERVICES_HEADER,
  type ExtracurricularIcon,
} from "@/lib/content/services";

const ICONS: Record<ExtracurricularIcon, typeof MusicNoteIcon> = {
  music: MusicNoteIcon,
  ball: BallIcon,
  cake: CakeIcon,
};

export function OurServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Eyebrow centered>{SERVICES_HEADER.eyebrow}</Eyebrow>
          <SectionHeading id="services-heading" className="mt-4">
            {SERVICES_HEADER.heading}
          </SectionHeading>
        </div>

        <ul className="mt-14 grid gap-6 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="overflow-hidden rounded-[20px] bg-white shadow-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1100px) 290px, (min-width: 600px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-[30px] pt-[26px] pb-[30px]">
                <h3 className="text-xl leading-[1.3] font-semibold text-navy min-[1100px]:min-h-[2lh]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-pretty text-text-muted">
                  {service.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Names the second row so it reads as extras alongside the four core services. */}
        <h3
          id="extracurriculars-heading"
          className="mt-16 text-xl leading-[1.3] font-semibold text-navy"
        >
          {EXTRACURRICULARS_HEADING}
        </h3>
        <ul
          aria-labelledby="extracurriculars-heading"
          className="mt-5 grid gap-6 min-[900px]:grid-cols-3"
        >
          {EXTRACURRICULARS.map((card) => {
            const Icon = ICONS[card.icon];
            return (
              <li key={card.title} className="rounded-[20px] bg-sand p-7">
                <div className="flex items-center gap-4">
                  <span className="flex size-[60px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="size-[26px]" />
                  </span>
                  <h4 className="text-xl leading-[1.3] font-semibold text-navy">
                    {card.title}
                  </h4>
                </div>
                {card.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-[15px] leading-[1.6] text-pretty text-text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
