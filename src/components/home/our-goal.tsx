import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { OUR_GOAL, type GoalColor } from "@/lib/content/our-goal";

const BORDERS: Record<GoalColor, string> = {
  red: "border-logo-red",
  orange: "border-logo-orange",
  yellow: "border-logo-yellow",
  green: "border-logo-green",
  blue: "border-logo-blue",
};

export function OurGoal() {
  return (
    <section
      aria-labelledby="goal-heading"
      className="relative isolate overflow-hidden bg-navy px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <Image
        src={OUR_GOAL.backgroundSrc}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.12]"
      />

      <div className="mx-auto max-w-[1200px] text-center">
        <Eyebrow centered tone="dark">
          {OUR_GOAL.eyebrow}
        </Eyebrow>
        <SectionHeading id="goal-heading" tone="dark" className="mx-auto mt-4 max-w-[22em]">
          {OUR_GOAL.heading}
        </SectionHeading>

        <p id="goal-lead" className="mt-6 text-lg text-balance text-text-on-dark-muted">
          {OUR_GOAL.lead}
        </p>
        <ul
          aria-labelledby="goal-lead"
          className="mx-auto mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:max-[1099px]:max-w-[620px]"
        >
          {OUR_GOAL.goals.map((goal) => (
            <li
              key={goal.label}
              className={`w-full max-w-[260px] rounded-full border-2 px-5 py-2.5 text-[clamp(15px,1.4vw,18px)] font-semibold tracking-[0.08em] text-white uppercase sm:w-auto sm:max-w-none sm:px-6 ${BORDERS[goal.color]}`}
            >
              {goal.label}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-[44em] text-[17px] leading-[1.7] text-pretty text-text-on-dark-muted">
          {OUR_GOAL.body}
        </p>
      </div>
    </section>
  );
}
