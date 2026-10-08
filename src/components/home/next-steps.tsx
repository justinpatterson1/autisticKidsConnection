import {
  NEXT_STEPS,
  NEXT_STEPS_HEADING,
  NEXT_STEPS_PLACEHOLDER_COUNT,
  type NextStep,
} from "@/lib/content/contact";
import { showPlaceholderSections } from "@/lib/content/site-flags";

const PLACEHOLDER_STEPS: readonly NextStep[] = Array.from(
  { length: NEXT_STEPS_PLACEHOLDER_COUNT },
  (_, i) => ({
    title: `[Placeholder] Step ${i + 1}`,
    body: "Awaiting AKC's confirmed enrolment steps.",
  }),
);

/** The steps after an enquiry, so the form isn't a leap into the unknown. Numbered because order matters. */
export function NextSteps() {
  const placeholder = NEXT_STEPS.length === 0;
  if (placeholder && !showPlaceholderSections) return null;
  const steps = placeholder ? PLACEHOLDER_STEPS : NEXT_STEPS;

  return (
    <div className="mt-12">
      <h3 className="text-xl leading-[1.3] font-semibold text-navy">
        {NEXT_STEPS_HEADING}
      </h3>
      <ol className="mt-5 space-y-5">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary text-[15px] font-semibold text-primary"
            >
              {index + 1}
            </span>
            <div className="pt-0.5">
              <p
                className={`leading-[1.4] text-navy ${placeholder ? "font-mono text-base" : "text-[17px] font-semibold"}`}
              >
                {step.title}
              </p>
              <p className="mt-1 text-[15px] leading-[1.6] text-pretty text-text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
