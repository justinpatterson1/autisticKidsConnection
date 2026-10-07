import { ENQUIRY_FORM } from "@/lib/content/contact";
import { ENQUIRY_PACKAGES, type EnquiryPackage } from "@/lib/enquiry";

interface PackageChipsProps {
  value: EnquiryPackage | "";
  onChange: (value: EnquiryPackage | "") => void;
}

/** Single-select toggle buttons; pressing the selected chip clears it. */
export function PackageChips({ value, onChange }: PackageChipsProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-text-on-dark-muted">
        {ENQUIRY_FORM.labels.package}
        <span className="font-normal"> {ENQUIRY_FORM.optional}</span>
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {ENQUIRY_PACKAGES.map((pkg) => {
          const pressed = value === pkg;
          return (
            <button
              key={pkg}
              type="button"
              aria-pressed={pressed}
              onClick={() => onChange(pressed ? "" : pkg)}
              className={`min-h-11 rounded-full border px-4 text-[15px] font-medium transition-[background-color] duration-200 ${
                pressed
                  ? "border-sky bg-sky text-navy"
                  : "border-border-on-dark text-white hover:bg-input-on-dark"
              }`}
            >
              {pkg}
            </button>
          );
        })}
      </div>
      <input type="hidden" name="package" value={value} />
    </fieldset>
  );
}
