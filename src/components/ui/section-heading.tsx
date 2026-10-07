interface SectionHeadingProps {
  id: string;
  tone?: "light" | "dark";
  /** "large" is the closing-statement H2 (Vision, CTA) from the type scale. */
  size?: "default" | "large";
  className?: string;
  children: React.ReactNode;
}

const SIZES = {
  default: "text-[clamp(30px,3.4vw,46px)] leading-[1.15]",
  large: "text-[clamp(30px,4vw,50px)] leading-[1.12]",
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
