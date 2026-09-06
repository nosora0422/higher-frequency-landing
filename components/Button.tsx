import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "blue" | "blue-disabled";

const arrowLight = "/assets/icon-arrow-outward-light.svg";
const arrowDark = "/assets/icon-arrow-outward-dark.svg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper text-[16px]",
  secondary: "bg-transparent text-ink border border-ink text-[14px]",
  blue: "bg-deep-blue text-paper text-[16px]",
  "blue-disabled": "bg-deep-blue text-paper text-[14px] opacity-30 pointer-events-none",
};

export default function Button({
  href = "#",
  variant = "primary",
  full = false,
  children,
}: {
  href?: string;
  variant?: ButtonVariant;
  full?: boolean;
  children: ReactNode;
}) {
  const isLight = variant === "primary" || variant === "blue" || variant === "blue-disabled";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-1 rounded-[8px] px-[18px] py-[12px] whitespace-nowrap font-normal ${
        full ? "w-full" : ""
      } ${variantClasses[variant]}`}
    >
      {children}
      <Image src={isLight ? arrowLight : arrowDark} alt="" width={24} height={24} />
    </Link>
  );
}
