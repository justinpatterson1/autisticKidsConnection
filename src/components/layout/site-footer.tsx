import Image from "next/image";
import { MailIcon } from "@/components/icons/mail-icon";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { PinIcon } from "@/components/icons/pin-icon";
import { SocialIcon } from "@/components/icons/social-icon";
import {
  FOOTER,
  LEGAL_LINKS,
  SOCIAL_LINKS,
  SOCIAL_PLACEHOLDER_COUNT,
  type FooterLink,
} from "@/lib/content/footer";
import { ADDRESS, EMAIL, PHONE } from "@/lib/content/navigation";
import { showPlaceholderSections } from "@/lib/content/site-flags";

// Read at build time (the page is static), so the year updates with each deploy.
const YEAR = new Date().getFullYear();

const LINK_COLOR =
  "text-text-on-dark-muted transition-[color] duration-200 hover:text-white";
const LINK = `inline-flex min-h-11 items-center text-[15px] ${LINK_COLOR}`;
const TITLE = "text-[15px] font-semibold text-sky-light";

const CONTACTS = [
  {
    Icon: PinIcon,
    label: `${ADDRESS.street}, ${ADDRESS.area}`,
    href: ADDRESS.mapHref,
  },
  { Icon: PhoneIcon, label: PHONE.display, href: PHONE.href },
  { Icon: MailIcon, label: EMAIL, href: `mailto:${EMAIL}` },
];

function LinkColumn({
  id,
  title,
  links,
}: {
  id: string;
  title: string;
  links: readonly FooterLink[];
}) {
  return (
    <nav aria-labelledby={id}>
      <h3 id={id} className={TITLE}>
        {title}
      </h3>
      <ul className="mt-3">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={LINK}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialButtons() {
  if (SOCIAL_LINKS.length > 0) {
    return (
      <ul className="mt-6 flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-label={link.label}
              className="flex size-11 items-center justify-center rounded-full border border-border-on-dark text-sky-light transition-[background-color] duration-200 hover:bg-navy"
            >
              <SocialIcon network={link.network} className="size-5" />
            </a>
          </li>
        ))}
      </ul>
    );
  }
  if (!showPlaceholderSections) return null;
  return (
    <div className="mt-6">
      <p className="font-mono text-sm text-text-on-dark-muted">
        [Placeholder] Social links
      </p>
      <div aria-hidden="true" className="mt-3 flex gap-3">
        {Array.from({ length: SOCIAL_PLACEHOLDER_COUNT }, (_, i) => (
          <span
            key={i}
            className="size-11 rounded-full border border-dashed border-border-on-dark"
          />
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="footer"
      aria-labelledby="footer-heading"
      // Below 1180px the sticky Call/Register bar covers the bottom 77px + safe area.
      className="bg-navy-deep px-[clamp(20px,4vw,48px)] pt-[clamp(56px,7vw,88px)] pb-8 max-nav:pb-[calc(32px+77px+env(safe-area-inset-bottom))]"
    >
      <h2 id="footer-heading" className="sr-only">
        {FOOTER.heading}
      </h2>
      <div className="mx-auto max-w-[1200px]">
        {/* Explicit 1 → 2 → 4 columns: auto-fit(210px) gave 3 + 1 with Admissions orphaned at ~1024px.
            sm is capped with max-nav because Tailwind emits the px nav breakpoint before rem sm, so sm would win. */}
        <div className="grid gap-x-10 gap-y-12 sm:max-nav:grid-cols-2 nav:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <div className="w-fit rounded-[20px] bg-white p-2">
              <Image
                src={FOOTER.logo.src}
                alt={FOOTER.logo.alt}
                width={180}
                height={180}
                sizes="180px"
                className="block size-[180px]"
              />
            </div>
            <ul className="mt-6">
              {CONTACTS.map(({ Icon, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`flex min-h-11 items-start gap-3 py-2.5 text-[15px] leading-[1.5] ${LINK_COLOR}`}
                  >
                    <Icon className="mt-0.5 size-[18px] shrink-0 text-sky-light" />
                    <span className="[overflow-wrap:anywhere]">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={TITLE}>{FOOTER.hours.title}</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-text-on-dark-muted">
              {FOOTER.hours.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <SocialButtons />
          </div>

          <LinkColumn
            id="footer-explore"
            title={FOOTER.explore.title}
            links={FOOTER.explore.links}
          />
          <LinkColumn
            id="footer-admissions"
            title={FOOTER.admissions.title}
            links={FOOTER.admissions.links}
          />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-footer-divider pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-on-dark-muted">
            © {YEAR} {FOOTER.copyrightName}
          </p>
          {LEGAL_LINKS.length > 0 && (
            <ul className="flex flex-wrap gap-x-6">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`inline-flex min-h-11 items-center text-sm ${LINK_COLOR}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
