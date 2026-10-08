"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Matches the `nav` breakpoint in globals.css, where the inline nav takes over. */
const NAV_QUERY = "(min-width: 1180px)";

interface MenuRefs {
  /** Wraps the toggle and the panel; clicks outside it close the menu. */
  root: RefObject<HTMLElement | null>;
  toggle: RefObject<HTMLButtonElement | null>;
  panel: RefObject<HTMLElement | null>;
}

/**
 * Shared behaviour for the disclosure menus: focus moves to the first link on open,
 * Tab cycles between the toggle and the panel, Escape closes and returns focus to the
 * toggle, a tap outside closes, and crossing into the desktop nav closes too.
 */
export function useMenu(open: boolean, close: () => void, refs: MenuRefs) {
  const { root, toggle, panel } = refs;

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        toggle.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !root.current) return;
      const items = [
        toggle.current,
        ...(panel.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []),
      ].filter((el): el is HTMLElement => el !== null);
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (!root.current.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) close();
    }
    const desktop = window.matchMedia(NAV_QUERY);
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) close();
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, close, root, toggle, panel]);
}
