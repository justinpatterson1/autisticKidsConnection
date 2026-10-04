export type KeyInfoIcon = "clock" | "sunrise" | "pin";

export interface KeyInfoItem {
  icon: KeyInfoIcon;
  label: string;
  value: string;
}

export const KEY_INFO: readonly KeyInfoItem[] = [
  { icon: "clock", label: "School hours", value: "8:30 AM – 2:30 PM" },
  { icon: "sunrise", label: "Early drop-off", value: "From 7:30 AM" },
  { icon: "pin", label: "Find us", value: "Curepe, Trinidad & Tobago" },
];
