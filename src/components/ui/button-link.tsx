type ButtonVariant = "primary" | "secondary";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-primary-hover",
  secondary: "bg-navy hover:bg-primary",
};

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-[26px] text-base font-semibold text-white transition-[background-color] duration-200 ${VARIANTS[variant]}`}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </a>
  );
}
