import Link from "next/link";

const links = [
  { label: "Get started", href: "#" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Creator tiers", href: "#tiers" },
  { label: "Sign in", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-grey bg-cream px-5 pb-8 pt-10 md:px-10 lg:px-[64px] lg:pb-[32px] lg:pt-[48px]">
      <div className="flex flex-col gap-8 border-b border-border-grey pb-8 lg:flex-row lg:gap-[48px] lg:pb-[32px]">
        <div className="flex flex-1 min-w-0 flex-col gap-[10px]">
          <p className="text-[12px] font-semibold tracking-[1px] text-ink">HIGHER FREQUENCY</p>
          <p className="max-w-[240px] text-[13px] text-ash">
            Every sale locked at click. Works alongside Mavely, LTK, and ShopMy.
          </p>
        </div>
        <div className="flex flex-1 min-w-0 flex-col items-start gap-[10px] lg:items-end">
          <p className="text-[11px] font-semibold tracking-[1px] text-ash">FOR CREATORS</p>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-[14px] text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-5 text-ash sm:flex-row sm:items-center sm:justify-between lg:pt-[20px]">
        <p className="text-[12px]">&copy; 2026 Higher Frequency. All sales locked at click.</p>
        <div className="flex gap-[20px] text-[13px]">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
