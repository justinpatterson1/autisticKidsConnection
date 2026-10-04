export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-2xl bg-tint px-7 py-6 text-[clamp(18px,1.6vw,21px)] leading-[1.5] font-semibold text-pretty text-navy">
      {children}
    </p>
  );
}
