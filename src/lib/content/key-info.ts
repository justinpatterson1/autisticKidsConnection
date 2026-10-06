import { ADDRESS } from "@/lib/content/navigation";

export type KeyInfoIcon = "clock" | "sunrise" | "pin";

export interface KeyInfoItem {
  icon: KeyInfoIcon;
  label: string;
  value: string;
  /** Makes the whole item a link (e.g. the address opens Maps). */
  href?: string;
}

export const KEY_INFO: readonly KeyInfoItem[] = [
  { icon: "clock", label: "School hours", value: "8:30 AM – 2:30 PM" },
  { icon: "sunrise", label: "Early drop-off", value: "From 7:30 AM" },
  {
    icon: "pin",
    label: "Find us",
    value: `${ADDRESS.street}, ${ADDRESS.area}`,
    href: ADDRESS.mapHref,
  },
];
