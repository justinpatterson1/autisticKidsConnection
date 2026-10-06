interface SectionHeadingProps {
  id: string;
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}

export function SectionHeading({
  id,
  tone = "light",
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-[clamp(30px,3.4vw,46px)] leading-[1.15] font-bold tracking-[-0.02em] text-balance ${tone === "dark" ? "text-white" : "text-navy"}${className ? ` ${className}` : ""}`}
    >
      {children}
    </h2>
  );
}
