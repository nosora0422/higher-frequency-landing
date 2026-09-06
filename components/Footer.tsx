import Link from "next/link";

const columns = [
  {
    heading: "FOR CREATORS",
    links: [
      { label: "Get started", href: "#" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Creator tiers", href: "#tiers" },
      { label: "Sign in", href: "#" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "For brands", href: "#for-brands" },
    ],
  },
  {
    heading: "SOCIAL",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Meta", href: "#" },
      { label: "X", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-grey px-[64px] pb-[32px] pt-[48px]">
      <div className="flex gap-[48px] border-b border-border-grey pb-[32px]">
        <div className="flex flex-1 min-w-0 flex-col gap-[10px]">
          <p className="text-[12px] font-semibold tracking-[1px] text-text">HIGHER FREQUENCY</p>
          <p className="max-w-[240px] text-[13px] text-text-grey">
            Every sale locked at click. Works alongside Mavely, LTK, and ShopMy.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.heading} className="flex flex-1 min-w-0 flex-col gap-[10px] whitespace-nowrap">
            <p className="text-[11px] font-semibold tracking-[1px] text-text-grey">{col.heading}</p>
            {col.links.map((link) => (
              <Link key={link.label} href={link.href} className="text-[14px] text-text">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-[20px] text-text-grey">
        <p className="text-[12px]">&copy; 2026 Higher Frequency. All sales locked at click.</p>
        <div className="flex gap-[20px] text-[13px]">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
