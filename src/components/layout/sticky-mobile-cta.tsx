"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons/close-icon";
import { MenuIcon } from "@/components/icons/menu-icon";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { NAV_ITEMS, PHONE, REGISTER_HREF } from "@/lib/content/navigation";
import { useMenu } from "@/lib/hooks/use-menu";

const PILL =
  "inline-flex min-h-[52px] items-center justify-center rounded-full text-[15px] font-semibold whitespace-nowrap";

interface StickyMobileCtaProps {
  /** Hide while this element (the hero's own buttons) is on screen, so Register never shows twice. */
  watchId: string;
  /** Hide while this element (the enquiry section) is on screen; its own Call and form take over. */
  hideWithinId: string;
}

/**
 * Below 1180px: Menu, Call and Register stay in thumb reach once the header has scrolled
 * away. The menu opens as a sheet above the bar, so navigation never needs a stretch to
 * the top of the screen.
 */
export function StickyMobileCta({ watchId, hideWithinId }: StickyMobileCtaProps) {
  const [heroOut, setHeroOut] = useState(false);
  const [inside, setInside] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const hero = document.getElementById(watchId);
    const section = document.getElementById(hideWithinId);
    const observers: IntersectionObserver[] = [];
    if (hero) {
      const o = new IntersectionObserver(([e]) => {
        setHeroOut(!e.isIntersecting);
        if (e.isIntersecting) setOpen(false);
      });
      o.observe(hero);
      observers.push(o);
    }
    if (section) {
      // "Inside" once the section covers the bar's zone at the bottom of the viewport.
      const o = new IntersectionObserver(
        ([e]) => {
          setInside(e.isIntersecting);
          if (e.isIntersecting) setOpen(false);
        },
        { rootMargin: "0px 0px -85% 0px" },
      );
      o.observe(section);
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [watchId, hideWithinId]);

  const visible = heroOut && !inside;
  // A hidden bar never shows an open sheet (the observers above also close it).
  const sheetOpen = open && visible;

  const close = useCallback(() => setOpen(false), []);
  useMenu(sheetOpen, close, { root: rootRef, toggle: toggleRef, panel: panelRef });

  return (
    <div
      hidden={!visible}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-3 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] nav:hidden"
    >
      <div className="mx-auto grid max-w-[640px] grid-cols-[auto_auto_1fr] gap-2.5">
        <div ref={rootRef} className="contents">
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={sheetOpen}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
            className={`${PILL} gap-2 px-3.5 text-navy transition-[background-color] duration-200 hover:bg-tint`}
          >
            {sheetOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            {sheetOpen ? "Close" : "Menu"}
          </button>

          <nav
            ref={panelRef}
            id={panelId}
            aria-label="Sections"
            hidden={!sheetOpen}
            className="absolute inset-x-3 bottom-full mb-2 rounded-[20px] bg-white px-5 py-2 shadow-raised"
          >
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="border-b border-border-soft last:border-b-0">
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex min-h-11 items-center py-3.5 text-[17px] font-medium text-navy transition-[color] duration-200 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a
          href={PHONE.href}
          aria-label={`${PHONE.label} ${PHONE.display}`}
          className={`${PILL} min-w-[52px] gap-2 border-[1.5px] border-navy px-3.5 text-navy`}
        >
          {/* Narrowest phones: icon only. From 400px the number, from 520px "Call" too. */}
          <PhoneIcon className="size-5 shrink-0 min-[400px]:hidden" />
          <span className="hidden min-[400px]:inline">
            <span className="hidden min-[520px]:inline">Call </span>
            {PHONE.display}
          </span>
        </a>

        <a
          href={REGISTER_HREF}
          className={`${PILL} px-3 bg-primary text-white transition-[background-color] duration-200 hover:bg-primary-hover`}
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
