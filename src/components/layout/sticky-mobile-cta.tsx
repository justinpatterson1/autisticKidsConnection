"use client";

import { useEffect, useState } from "react";
import { PHONE, REGISTER_HREF } from "@/lib/content/navigation";

/**
 * Below 1180px: Call and Register stay in thumb reach. Hidden while the hero's
 * own buttons are on screen, so the first screen never shows Register twice.
 */
export function StickyMobileCta({ watchId }: { watchId: string }) {
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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-3 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] nav:hidden"
    >
      <div className="mx-auto grid max-w-[640px] grid-cols-[1fr_1.4fr] gap-2.5">
        <a
          href={PHONE.href}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-navy px-3 text-[15px] font-semibold whitespace-nowrap text-navy"
        >
          Call {PHONE.display}
        </a>
        <a
          href={REGISTER_HREF}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-3 text-[15px] font-semibold whitespace-nowrap text-white transition-[background-color] duration-200 hover:bg-primary-hover"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
