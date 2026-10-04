export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-primary">
      <span aria-hidden="true" className="h-0.5 w-7 bg-primary" />
      {children}
    </p>
  );
}
