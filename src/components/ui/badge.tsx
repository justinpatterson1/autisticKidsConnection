/** "Now registering" pill: sky fill, navy text and dot (design system §6). */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-sky px-3.5 py-1.5 text-sm font-semibold text-navy">
      <span aria-hidden="true" className="size-2 rounded-full bg-navy" />
      {children}
    </p>
  );
}
