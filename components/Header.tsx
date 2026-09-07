"use client";

import Link from "next/link";
import { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { href: "#problem", label: "The problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#tiers", label: "Creator tiers" },
  { href: "#for-brands", label: "For brands" },
  { href: "#proof", label: "Proof" },
];

// Native `scroll-behavior: smooth` fights GSAP ScrollTrigger's own
// scrub/pin scroll updates (a documented conflict), so anchor-link smoothing
// is done by hand here with ScrollToPlugin instead of that CSS property.
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  gsap.to(window, { duration: 0.8, scrollTo: { y: target, offsetY: 0 }, ease: "power2.inOut" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border-grey bg-paper">
      <div className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-[64px] lg:py-[24px]">
        <p className="font-body font-bold text-[17px] tracking-[0.2px] text-text lg:text-[20px]">
          HIGHER FREQUENCY
        </p>

        <nav className="hidden items-center gap-[32px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[14px] font-medium text-text"
            >
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

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span className={`h-[1.5px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`flex-col gap-1 border-t border-border-grey px-5 pb-5 pt-2 lg:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-2 text-[15px] font-medium text-text"
            onClick={(e) => {
              setOpen(false);
              handleNavClick(e, link.href);
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          className="py-2 text-[15px] font-medium text-text-grey-light"
          onClick={() => setOpen(false)}
        >
          Sign in
        </Link>
        <Link
          href="#"
          className="mt-2 rounded-[8px] bg-ink px-[20px] py-[12px] text-center text-[15px] font-semibold text-paper"
          onClick={() => setOpen(false)}
        >
          Join now — free
        </Link>
      </nav>
    </header>
  );
}
