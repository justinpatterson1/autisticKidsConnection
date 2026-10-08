"use client";

import { CONTACT_HREF } from "@/lib/content/navigation";
import { SELECT_PACKAGE_EVENT, type EnquiryPackage } from "@/lib/enquiry";

interface PackagePromptLinkProps {
  pkg: EnquiryPackage;
  children: React.ReactNode;
}

/**
 * Jumps to the enquiry form and pre-selects a package chip. Still a plain #contact link
 * without JavaScript, so the jump works even if the pre-selection can't.
 */
export function PackagePromptLink({ pkg, children }: PackagePromptLinkProps) {
  return (
    <a
      href={CONTACT_HREF}
      onClick={() =>
        window.dispatchEvent(new CustomEvent(SELECT_PACKAGE_EVENT, { detail: pkg }))
      }
      className="inline-flex min-h-11 items-center gap-2 text-[17px] font-semibold text-primary underline decoration-sky decoration-2 underline-offset-4 transition-[color] duration-200 hover:text-primary-hover"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
