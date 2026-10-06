import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { OUR_GOAL, type GoalColor } from "@/lib/content/our-goal";

const DOTS: Record<GoalColor, string> = {
  red: "bg-logo-red",
  orange: "bg-logo-orange",
  yellow: "bg-logo-yellow",
  green: "bg-logo-green",
  blue: "bg-logo-blue",
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
        <SectionHeading
          id="goal-heading"
          tone="dark"
          className="mx-auto max-w-[22em]"
        >
          {OUR_GOAL.heading}
        </SectionHeading>

        {/* The emotional peak: concrete progress, set as the band's main statement. */}
        <p className="mx-auto mt-8 max-w-[30em] text-[clamp(21px,2.3vw,30px)] leading-[1.45] font-medium text-balance text-white">
          {OUR_GOAL.body}
        </p>

        <p
          id="goal-lead"
          className="mt-14 text-[17px] leading-[1.7] text-balance text-text-on-dark-muted"
        >
          {OUR_GOAL.lead}
        </p>
        <ul
          aria-labelledby="goal-lead"
          className="mx-auto mt-4 flex max-w-[560px] flex-wrap justify-center gap-x-7 gap-y-3 min-[1100px]:max-w-none"
        >
          {OUR_GOAL.goals.map((goal) => (
            <li
              key={goal.label}
              className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[0.08em] text-white uppercase"
            >
              <span
                aria-hidden="true"
                className={`size-2.5 shrink-0 rounded-full ${DOTS[goal.color]}`}
              />
              {goal.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
