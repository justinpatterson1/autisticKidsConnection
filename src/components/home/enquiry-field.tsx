import { ENQUIRY_FORM } from "@/lib/content/contact";

const CONTROL =
  "block w-full rounded-xl border border-border-on-dark bg-input-on-dark px-4 text-base text-white aria-invalid:border-error-on-dark placeholder:text-text-on-dark-muted/75";

interface EnquiryFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  optional?: boolean;
  /** Only fields that are required on their own (name). Phone and email are "one of". */
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
  type?: "text" | "tel" | "email";
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
  error?: string;
  /** Ids of errors shared with other fields (the "phone or email" rule). */
  sharedErrorId?: string;
  /** Show how many characters are left once the field nears its limit. */
  showCount?: boolean;
  className?: string;
}

/** The count appears once this share of the limit is left, not on every keystroke. */
const COUNT_FROM = 0.2;

export function EnquiryField({
  id,
  name,
  label,
  value,
  onChange,
  maxLength,
  optional = false,
  required = false,
  placeholder,
  multiline = false,
  type = "text",
  inputMode,
  autoComplete,
  error,
  sharedErrorId,
  showCount = false,
  className = "",
}: EnquiryFieldProps) {
  const errorId = `${id}-error`;
  const countId = `${id}-count`;
  // UTF-16 length, matching how the browser's maxLength counts.
  const left = Math.max(0, maxLength - value.length);
  const counting = showCount && left <= maxLength * COUNT_FROM;
  const describedBy =
    [error && errorId, sharedErrorId, counting && countId].filter(Boolean).join(" ") ||
    undefined;
  const common = {
    id,
    name,
    value,
    maxLength,
    autoComplete,
    "aria-invalid": error || sharedErrorId ? true : undefined,
    "aria-describedby": describedBy,
    "aria-required": required || undefined,
    placeholder,
  } as const;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-text-on-dark-muted">
        {label}
        {optional && <span className="font-normal"> {ENQUIRY_FORM.optional}</span>}
      </label>
      {multiline ? (
        <textarea
          {...common}
          rows={4}
          onChange={(event) => onChange(event.target.value)}
          className={`${CONTROL} mt-2 min-h-32 resize-y py-3 [scrollbar-color:var(--color-text-on-dark-muted)_transparent]`}
        />
      ) : (
        <input
          {...common}
          type={type}
          inputMode={inputMode}
          onChange={(event) => onChange(event.target.value)}
          className={`${CONTROL} mt-2 min-h-[52px]`}
        />
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-error-on-dark">
          {error}
        </p>
      )}
      {counting && (
        <p
          id={countId}
          className={`mt-2 text-sm tabular-nums ${left === 0 ? "font-medium text-white" : "text-text-on-dark-muted"}`}
        >
          {left === 0 ? ENQUIRY_FORM.limitReached(maxLength) : ENQUIRY_FORM.charactersLeft(left)}
        </p>
      )}
      {/* Announce only reaching the limit; a live count on every keystroke is noise. */}
      {showCount && (
        <p role="status" className="sr-only">
          {left === 0 ? ENQUIRY_FORM.limitReached(maxLength) : ""}
        </p>
      )}
    </div>
  );
}
