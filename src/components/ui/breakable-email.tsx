/**
 * Lets a long address wrap after the "@" ("autistickidstutoring@ / gmail.com") instead of
 * mid-domain. Pair with overflow-wrap:anywhere as the last-resort fallback on tiny screens.
 */
export function BreakableEmail({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at === -1) return email;
  return (
    <>
      {email.slice(0, at + 1)}
      <wbr />
      {email.slice(at + 1)}
    </>
  );
}
