"use client";

import { OPEN_POLICY_EVENT, policyAnchor } from "@/lib/content/policies";

interface PolicyLinkProps {
  /** A policy item's `id` from policies.ts. */
  policy: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Jumps to a policy and opens it. The event covers a repeat click, when the hash is already
 * set and no hashchange fires; without JavaScript it is still a plain anchor link.
 */
export function PolicyLink({ policy, className, children }: PolicyLinkProps) {
  return (
    <a
      href={`#${policyAnchor(policy)}`}
      onClick={() =>
        window.dispatchEvent(new CustomEvent(OPEN_POLICY_EVENT, { detail: policy }))
      }
      className={className}
    >
      {children}
    </a>
  );
}
