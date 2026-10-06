import { ADDRESS } from "@/lib/content/navigation";
import { TIMES } from "@/lib/content/school-hours";

export type KeyInfoIcon = "clock" | "sunrise" | "pin";

export interface KeyInfoItem {
  icon: KeyInfoIcon;
  label: string;
  value: string;
  /** Makes the whole item a link (e.g. the address opens Maps). */
  href?: string;
}

export const KEY_INFO: readonly KeyInfoItem[] = [
  { icon: "clock", label: "School hours", value: TIMES.schoolDay },
  { icon: "sunrise", label: "Early drop-off", value: `From ${TIMES.earlyDropOff}` },
  {
    icon: "pin",
    label: "Find us",
    value: `${ADDRESS.street}, ${ADDRESS.area}`,
    href: ADDRESS.mapHref,
  },
];
