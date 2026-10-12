import type { SVGProps } from "react";
export { ArrowRight, ArrowUpRight, Check, Factory } from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

export function Mark(props: IconProps) {
  return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}><path d="M5 28V12l15-8 15 8v16l-15 8L5 28Z" stroke="currentColor" strokeWidth="2"/><path d="m12 24 5-10h7l-5 10h-7Zm8 0 4-8h5l-4 8h-5Z" fill="currentColor"/></svg>;
}

