import Image from "next/image";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NAV_ITEMS, PHONE, REGISTER_HREF } from "@/lib/content/navigation";

const STRIPE_COLORS = [
  "bg-logo-red",
  "bg-logo-orange",
  "bg-logo-yellow",
  "bg-logo-green",
  "bg-logo-blue",
  "bg-logo-purple",
] as const;

export function SiteHeader() {
  return (
    <header id="site-header" className="absolute inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-full focus:bg-white focus:px-5 focus:text-[15px] focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>

      <div className="grid h-[5px] grid-cols-6" aria-hidden="true">
        {STRIPE_COLORS.map((color) => (
          <span key={color} className={color} />
        ))}
      </div>

      <div className="relative border-b border-border-on-photo">
        <div className="mx-auto flex min-h-[92px] max-w-[1320px] items-center gap-4 px-[clamp(20px,4vw,48px)] nav:gap-6">
          <a
            href="#main"
            aria-label="Autistic Kids Connection, home"
            className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-xl sm:gap-3.5"
          >
            <Image
              src="/assets/akc-mark.png"
              alt="Autistic Kids Connection butterfly logo with children"
              width={84}
              height={56}
              loading="eager"
              className="h-10 w-[60px] shrink-0 object-contain sm:h-14 sm:w-[84px]"
            />
            <span className="flex min-w-0 flex-col">
              <span className="text-[15px] leading-tight font-bold text-white sm:text-lg">
                <span className="whitespace-nowrap">Autistic Kids</span>{" "}
                <span className="whitespace-nowrap">Connection</span>
              </span>
              <span className="mt-1 hidden text-sm font-medium text-sky-light sm:max-nav:block wide:block">
                Homeschooling • Tutoring •{" "}
                <span className="whitespace-nowrap">Developmental Support</span>
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="mx-auto hidden nav:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-center px-2.5 text-[15px] font-medium whitespace-nowrap text-white transition-[color,background-color] duration-200 hover:text-sky-light aria-[current=page]:shadow-[inset_0_-2px_0_var(--sky)] wide:px-3"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-6 nav:ml-0 nav:gap-5 wide:gap-6">
            <a
              href={PHONE.href}
              aria-label={`${PHONE.label} ${PHONE.display}`}
              className="hidden min-h-11 items-center gap-2.5 rounded-xl text-white nav:flex wide:gap-3"
            >
              <PhoneIcon className="size-5 text-sky-light wide:size-[22px]" />
              <span className="flex flex-col leading-tight">
                <span className="hidden text-sm font-medium text-sky-light wide:block">
                  {PHONE.label}
                </span>
                <span className="text-base font-semibold">{PHONE.display}</span>
              </span>
            </a>

            <a
              href={REGISTER_HREF}
              className="hidden min-h-[52px] items-center rounded-full bg-primary px-[26px] text-[15px] font-semibold whitespace-nowrap text-white transition-[color,background-color] duration-200 hover:bg-primary-hover nav:inline-flex"
            >
              Register Now
            </a>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
