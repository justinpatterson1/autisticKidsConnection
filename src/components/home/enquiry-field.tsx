import { ENQUIRY_FORM } from "@/lib/content/contact";

const CONTROL =
  "block w-full rounded-xl border border-border-on-dark bg-input-on-dark px-4 text-base text-white aria-invalid:border-error-on-dark";

interface EnquiryFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  optional?: boolean;
  multiline?: boolean;
  type?: "text" | "tel" | "email";
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
  error?: string;
  /** Ids of errors shared with other fields (the "phone or email" rule). */
  sharedErrorId?: string;
  className?: string;
}

export function EnquiryField({
  id,
  name,
  label,
  value,
  onChange,
  maxLength,
  optional = false,
  multiline = false,
  type = "text",
  inputMode,
  autoComplete,
  error,
  sharedErrorId,
  className = "",
}: EnquiryFieldProps) {
  const errorId = `${id}-error`;
  const describedBy =
    [error && errorId, sharedErrorId].filter(Boolean).join(" ") || undefined;
  const common = {
    id,
    name,
    value,
    maxLength,
    autoComplete,
    "aria-invalid": error || sharedErrorId ? true : undefined,
    "aria-describedby": describedBy,
    "aria-required": optional ? undefined : true,
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
          className={`${CONTROL} mt-2 min-h-32 resize-y py-3`}
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
    </div>
  );
}
