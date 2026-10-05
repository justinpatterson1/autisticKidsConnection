interface SectionHeadingProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionHeading({ id, className = "", children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-[clamp(30px,3.4vw,46px)] leading-[1.15] font-bold tracking-[-0.02em] text-balance text-navy ${className}`}
    >
      {children}
    </h2>
  );
}
