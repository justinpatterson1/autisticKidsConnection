"use client";

import { useEffect, useId, useRef, useState } from "react";
import { NAV_ITEMS, REGISTER_HREF } from "@/lib/content/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    // Move focus into the menu so keyboard and screen-reader users land on its first link.
    panelRef.current?.querySelector("a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    // A tap or click anywhere outside the toggle and panel closes the menu.
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className="nav:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 min-w-[88px] items-center justify-center rounded-full border-[1.5px] border-white/70 px-5 text-[15px] font-semibold text-white transition-[color,background-color] duration-200 hover:bg-white/12"
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        ref={panelRef}
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-[clamp(20px,4vw,48px)] top-full mt-2 rounded-[20px] bg-white px-5 pt-2 pb-5 shadow-raised"
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.href}
              className="border-b border-border-soft last:border-b-0"
            >
              <a
                href={item.href}
                onClick={close}
                className="flex min-h-11 items-center py-4 text-[17px] font-medium text-navy transition-[color,background-color] duration-200 hover:text-primary aria-[current=page]:font-semibold aria-[current=page]:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={REGISTER_HREF}
          onClick={close}
          className="mt-3 flex min-h-[52px] w-full items-center justify-center rounded-full bg-primary px-[26px] text-base font-semibold text-white transition-[color,background-color] duration-200 hover:bg-primary-hover"
        >
          Register Now
        </a>
      </nav>
    </div>
  );
}
