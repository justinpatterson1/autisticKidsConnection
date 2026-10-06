interface EyebrowProps {
  centered?: boolean;
  children: React.ReactNode;
}

export function Eyebrow({ centered = false, children }: EyebrowProps) {
  const rule = <span aria-hidden="true" className="h-0.5 w-7 bg-primary" />;
  return (
    <p className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-primary">
      {rule}
      {children}
      {centered && rule}
    </p>
  );
}
