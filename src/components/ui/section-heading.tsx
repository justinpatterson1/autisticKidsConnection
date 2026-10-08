interface SectionHeadingProps {
  id: string;
  tone?: "light" | "dark";
  /** "cta" is the type scale's large closing H2 (Contact, 34–54px). */
  size?: "default" | "cta";
  className?: string;
  children: React.ReactNode;
}

const SIZES = {
  default: "text-[clamp(30px,3.4vw,46px)] leading-[1.15]",
  cta: "text-[clamp(34px,4vw,54px)] leading-[1.1]",
} as const;

export function SectionHeading({
  id,
  tone = "light",
  size = "default",
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`${SIZES[size]} font-bold tracking-[-0.02em] text-balance ${tone === "dark" ? "text-white" : "text-navy"}${className ? ` ${className}` : ""}`}
    >
      {children}
    </h2>
  );
}
