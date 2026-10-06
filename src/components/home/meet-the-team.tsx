import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { showPlaceholderSections } from "@/lib/content/site-flags";
import {
  TEAM,
  TEAM_HEADER,
  TEAM_PLACEHOLDER_COUNT,
  type TeamMember,
} from "@/lib/content/team";

const CARD = "overflow-hidden rounded-[20px] bg-white shadow-card";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <li className={CARD}>
      <div className="relative aspect-square">
        <Image
          src={member.photo.src}
          alt={member.photo.alt}
          fill
          sizes="280px"
          className="object-cover"
        />
      </div>
      <div className="px-6 pt-6 pb-7">
        <h3 className="text-[19px] leading-[1.3] font-semibold text-navy">
          {member.name}
        </h3>
        <p className="mt-1 text-[15px] font-medium text-primary">{member.role}</p>
        <p className="mt-2.5 text-[15px] leading-[1.6] text-pretty text-text-muted">
          {member.description}
        </p>
        {member.qualification && (
          <p className="mt-3 border-t border-border pt-3 text-sm leading-[1.5] text-text-muted">
            {member.qualification}
          </p>
        )}
      </div>
    </li>
  );
}

/** Layout preview only: no names, faces or credentials, labelled so it can't pass as real. */
function PlaceholderCard() {
  return (
    <li className={`${CARD} font-mono text-sm text-text-muted`}>
      <div className="flex aspect-square items-center justify-center bg-tint p-6 text-center">
        [Placeholder] Staff photo
      </div>
      <div className="space-y-2 px-6 pt-6 pb-7">
        <p>[Placeholder] Name</p>
        <p>[Placeholder] Role</p>
        <p>[Placeholder] 1–2 sentence description supplied by AKC</p>
        <p>[Placeholder] Qualification (optional)</p>
      </div>
    </li>
  );
}

export function MeetTheTeam() {
  const preview = TEAM.length === 0;
  if (preview && !showPlaceholderSections) return null;

  return (
    <section
      aria-labelledby="team-heading"
      className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Eyebrow centered>{TEAM_HEADER.eyebrow}</Eyebrow>
          <SectionHeading id="team-heading" className="mt-4">
            {TEAM_HEADER.heading}
          </SectionHeading>
        </div>

        {/* Tracks cap at 280px and centre, so one or two real staff never stretch into giant portraits. */}
        <ul className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),280px))] justify-center gap-6">
          {preview
            ? Array.from({ length: TEAM_PLACEHOLDER_COUNT }, (_, i) => (
                <PlaceholderCard key={i} />
              ))
            : TEAM.map((member) => <MemberCard key={member.name} member={member} />)}
        </ul>
      </div>
    </section>
  );
}
