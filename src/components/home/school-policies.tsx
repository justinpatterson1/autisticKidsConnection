import { PolicyAccordion } from "@/components/home/policy-accordion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  POLICIES,
  POLICIES_HEADER,
  POLICIES_THANK_YOU,
} from "@/lib/content/policies";

export function SchoolPolicies() {
  return (
    <section
      id="policies"
      aria-labelledby="policies-heading"
      className="bg-tint px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <Eyebrow centered>{POLICIES_HEADER.eyebrow}</Eyebrow>
          <SectionHeading id="policies-heading" className="mt-4">
            {POLICIES_HEADER.heading}
          </SectionHeading>
        </div>

        <div className="mt-14">
          <PolicyAccordion items={POLICIES} />
        </div>

        <p className="mx-auto mt-12 max-w-[34em] text-center text-[17px] leading-[1.7] text-pretty text-text-muted">
          <strong className="font-semibold text-navy">
            {POLICIES_THANK_YOU.lead}
          </strong>
          {POLICIES_THANK_YOU.rest}
        </p>
      </div>
    </section>
  );
}
