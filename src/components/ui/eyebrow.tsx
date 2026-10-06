type EyebrowTone = "light" | "dark" | "primary";

const TONES: Record<EyebrowTone, { text: string; rule: string }> = {
  light: { text: "text-primary", rule: "bg-primary" },
  dark: { text: "text-sky-light", rule: "bg-sky-light" },
  // On the primary band: sky-pale text is only 4.18:1, so the text is white (5.62:1) and sky-pale stays on the rules.
  primary: { text: "text-white", rule: "bg-sky-pale" },
};

interface EyebrowProps {
  centered?: boolean;
  tone?: EyebrowTone;
  children: React.ReactNode;
}

function Rule({ className }: { className: string }) {
  return <span aria-hidden="true" className={`h-0.5 w-7 ${className}`} />;
}

export function Eyebrow({ centered = false, tone = "light", children }: EyebrowProps) {
  const { text, rule } = TONES[tone];
  return (
    <p className={`inline-flex items-center gap-2.5 text-[15px] font-semibold ${text}`}>
      <Rule className={rule} />
      {children}
      {centered && <Rule className={rule} />}
    </p>
  );
}
