import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

// Two shapes (solid / outline) each available on a light or dark backdrop —
// matches the "Buttons" component used throughout the Figma file.
type ButtonVariant = "solid" | "outline" | "outline-light";

const arrowLight = "/assets/icon-arrow-outward-light.svg";
const arrowDark = "/assets/icon-arrow-outward-dark.svg";

const variantClasses: Record<ButtonVariant, string> = {
  solid: "bg-ink text-paper hover:bg-ash",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  "outline-light": "border border-paper text-paper hover:bg-paper hover:text-ink",
};

export default function Button({
  href = "#",
  variant = "solid",
  full = false,
  children,
}: {
  href?: string;
  variant?: ButtonVariant;
  full?: boolean;
  children: ReactNode;
}) {
  const isLight = variant === "solid" || variant === "outline-light";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-1 rounded-pill px-[18px] py-[12px] text-[14px] font-medium whitespace-nowrap transition-colors duration-200 ease-out max-w-[500px] ${
        full ? "w-full" : ""
      } ${variantClasses[variant]}`}
    >
      {children}
      <Image
        src={isLight ? arrowLight : arrowDark}
        alt=""
        width={24}
        height={24}
        className={
          variant !== "solid" ? "transition-[filter] duration-200 ease-out group-hover:invert" : ""
        }
      />
    </Link>
  );
}
