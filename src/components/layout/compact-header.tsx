"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { NAV_ITEMS, PHONE, REGISTER_HREF } from "@/lib/content/navigation";

/**
 * Desktop only (≥1180px): once the full header has scrolled out of view, a
 * compact navy bar keeps the nav, phone and Register within reach. Below
 * 1180px the sticky bottom CTA bar does this job instead.
 */
export function CompactHeader({ watchId }: { watchId: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  return (
    <div
      hidden={!visible}
      className="fixed inset-x-0 top-0 z-50 hidden bg-navy shadow-raised nav:block"
    >
      <div className="mx-auto flex min-h-16 max-w-[1320px] items-center gap-6 px-[clamp(20px,4vw,48px)]">
        <a
          href="#main"
          aria-label="Autistic Kids Connection, home"
          className="flex min-h-11 shrink-0 items-center gap-3 rounded-xl"
        >
          <Image
            src="/assets/akc-mark.png"
            alt=""
            width={60}
            height={40}
            className="h-10 w-[60px] object-contain"
          />
          {/* Name hides below 1480px so the full +1-868 number and Register fit; the link keeps its label. */}
          <span className="hidden text-base font-bold whitespace-nowrap text-white wide:inline">
            Autistic Kids Connection
          </span>
        </a>

        <nav aria-label="Quick navigation" className="mx-auto">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center px-2.5 text-[15px] font-medium whitespace-nowrap text-white transition-[color,background-color] duration-200 hover:text-sky-light wide:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href={PHONE.href}
            aria-label={`${PHONE.label} ${PHONE.display}`}
            className="flex min-h-11 items-center gap-2.5 rounded-xl text-base font-semibold text-white"
          >
            <PhoneIcon className="size-5 text-sky-light" />
            {PHONE.display}
          </a>
          <a
            href={REGISTER_HREF}
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-[15px] font-semibold whitespace-nowrap text-white transition-[background-color] duration-200 hover:bg-primary-hover"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
