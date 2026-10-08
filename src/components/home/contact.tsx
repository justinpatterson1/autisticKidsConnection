import { EnquiryForm } from "@/components/home/enquiry-form";
import { NextSteps } from "@/components/home/next-steps";
import { MailIcon } from "@/components/icons/mail-icon";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { PinIcon } from "@/components/icons/pin-icon";
import { Badge } from "@/components/ui/badge";
import { BreakableEmail } from "@/components/ui/breakable-email";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CONTACT_HEADER,
  CONTACT_ROWS,
  type ContactIcon,
} from "@/lib/content/contact";

const ICONS: Record<ContactIcon, typeof PinIcon> = {
  pin: PinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
};

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-[clamp(48px,6vw,88px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
        <div>
          <Badge>{CONTACT_HEADER.badge}</Badge>
          <SectionHeading id="contact-heading" size="cta" className="mt-5">
            {CONTACT_HEADER.heading}
          </SectionHeading>
          <p className="mt-5 max-w-[36em] text-[clamp(18px,1.5vw,20px)] leading-[1.65] text-pretty text-text-muted">
            {CONTACT_HEADER.line}
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {CONTACT_ROWS.map((row) => {
              const Icon = ICONS[row.icon];
              return (
                <li key={row.label}>
                  <a
                    href={row.href}
                    className="flex items-center gap-4 rounded-2xl bg-tint px-5 py-[18px] transition-[background-color] duration-200 hover:bg-tint-strong"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Icon className="size-[22px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-text-muted">
                        {row.label}
                      </span>
                      {/* The email breaks after "@" (BreakableEmail); overflow-wrap:anywhere is the 320px fallback. */}
                      <span className="block text-[17px] font-semibold text-navy [overflow-wrap:anywhere]">
                        {row.icon === "mail" ? <BreakableEmail email={row.value} /> : row.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <NextSteps />
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
