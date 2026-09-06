import Link from "next/link";

const navLinks = [
  { href: "#problem", label: "The problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#tiers", label: "Creator tiers" },
  { href: "#for-brands", label: "For brands" },
  { href: "#proof", label: "Proof" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[64px] py-[24px] border-b border-border-grey bg-paper">
      <p className="font-display font-bold text-[20px] tracking-[0.2px] text-text">
        HIGHER FREQUENCY
      </p>
      <nav className="flex items-center gap-[32px]">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-[14px] font-medium text-text">
            {link.label}
          </Link>
        ))}
        <Link href="#" className="text-[14px] font-medium text-text-grey-light">
          Sign in
        </Link>
        <Link
          href="#"
          className="rounded-[8px] bg-ink px-[20px] py-[10px] text-[14px] font-semibold text-paper"
        >
          Join now — free
        </Link>
      </nav>
    </header>
  );
}
