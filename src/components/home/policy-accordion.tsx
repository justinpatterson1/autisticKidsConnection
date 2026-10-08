"use client";

import { useEffect, useId, useState } from "react";
import {
  OPEN_POLICY_EVENT,
  policyAnchor,
  type PolicyBlock,
  type PolicyItem,
} from "@/lib/content/policies";

/** Plus that becomes a minus: the vertical bar hides when open. */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-9 shrink-0 items-center justify-center rounded-full transition-[background-color] duration-200 ${open ? "bg-primary text-white" : "bg-tint text-primary"}`}
    >
      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
      {!open && <span className="absolute h-3.5 w-0.5 rounded-full bg-current" />}
    </span>
  );
}

function Block({ block }: { block: PolicyBlock }) {
  return (
    <div>
      {block.heading && (
        <h4 className="mb-3 text-base font-semibold text-navy">{block.heading}</h4>
      )}
      {block.style === "rules" ? (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span aria-hidden="true" className="flex h-[1.7em] shrink-0 items-center">
                <span className="size-2 rounded-full bg-primary" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-3">
          {block.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export function PolicyAccordion({ items }: { items: readonly PolicyItem[] }) {
  // One item open at a time. All start closed so the section doesn't open on a wall of
  // payment rules, unless a link (e.g. "Read the full payment policy") asks for one.
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  useEffect(() => {
    function open(id: unknown) {
      const index = items.findIndex((item) => item.id === id);
      if (index !== -1) setOpenIndex(index);
    }
    const fromHash = () =>
      open(items.find((item) => location.hash === `#${policyAnchor(item.id)}`)?.id);
    const fromEvent = (event: Event) => open((event as CustomEvent<unknown>).detail);

    fromHash();
    window.addEventListener("hashchange", fromHash);
    window.addEventListener(OPEN_POLICY_EVENT, fromEvent);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener(OPEN_POLICY_EVENT, fromEvent);
    };
  }, [items]);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.id}
            id={policyAnchor(item.id)}
            className="rounded-[18px] bg-white shadow-card"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-[72px] w-full cursor-pointer items-center justify-between gap-4 rounded-[18px] px-[clamp(20px,3vw,28px)] py-4 text-left text-lg leading-[1.35] font-semibold text-navy"
              >
                {item.title}
                <ToggleIcon open={open} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="space-y-6 px-[clamp(20px,3vw,28px)] pt-1 pb-7 text-base leading-[1.7] text-pretty text-text-muted"
            >
              {item.blocks.map((block, blockIndex) => (
                <Block key={block.heading ?? blockIndex} block={block} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
