import Image from "next/image";
import { PeopleIcon } from "@/components/icons/people-icon";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAMILY_COMMUNITY } from "@/lib/content/family-community";

export function FamilyCommunity() {
  const { photo, collaboration } = FAMILY_COMMUNITY;

  return (
    <section
      id="families"
      aria-labelledby="families-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,6vw,88px)]">
        <div>
          <Eyebrow>{FAMILY_COMMUNITY.eyebrow}</Eyebrow>
          <SectionHeading id="families-heading" className="mt-4">
            {FAMILY_COMMUNITY.heading}
          </SectionHeading>
          <p className="mt-5 text-[17px] leading-[1.7] text-pretty text-text-muted">
            {FAMILY_COMMUNITY.body}
          </p>

          <p
            id="families-list-label"
            className="mt-8 text-base font-semibold text-navy"
          >
            {FAMILY_COMMUNITY.listLabel}
          </p>
          <ul
            aria-labelledby="families-list-label"
            className="mt-3 divide-y divide-border"
          >
            {FAMILY_COMMUNITY.initiatives.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3.5 py-4 text-base leading-6 font-medium text-navy"
              >
                <span aria-hidden="true" className="flex h-6 shrink-0 items-center">
                  <span className="size-2.5 rounded-full bg-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-[20px] bg-tint p-[clamp(24px,3vw,32px)]">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
              <PeopleIcon className="size-[26px]" />
            </span>
            <h3 className="mt-5 text-xl leading-[1.3] font-semibold text-navy">
              {collaboration.title}
            </h3>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-pretty text-text-muted">
              {collaboration.before}
              <strong className="font-semibold text-navy">
                {collaboration.partner}
              </strong>
              {collaboration.after}
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-pretty text-text-muted">
              {collaboration.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
