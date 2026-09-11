"use client";

import Image from "next/image";
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
    <header className="bg-cream">
      <div className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-[40px] lg:py-[24px] border-b border-b-border-grey">
        <Link href="/" className="flex items-center gap-[10px]">
          <Image src="/assets/logo-mark.svg" alt="" width={40} height={22} className="h-[18px] w-auto lg:h-[22px]" />
          <p className="font-body text-[19px] font-semibold text-ink lg:text-[26px]">
            Higher Frequency
          </p>
        </Link>

        <nav className="hidden items-center gap-[32px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[16px] text-ink transition-colors duration-200 hover:text-ash"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/sign-in" className="text-[16px] text-ash transition-colors duration-200 hover:text-ink">
            Sign in
          </Link>
          <Link
            href="/waitlist"
            className="group inline-flex items-center gap-1 rounded-pill bg-ink px-[18px] py-[12px] text-[14px] font-medium text-paper transition-colors duration-200 ease-out hover:bg-ash"
          >
            Join Waitlist
            <Image src="/assets/icon-arrow-outward-light.svg" alt="" width={20} height={20} />
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] transition-opacity duration-200 hover:opacity-60 lg:hidden"
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
            className="py-2 text-[15px] text-ink transition-colors duration-200 hover:text-ash"
            onClick={(e) => {
              setOpen(false);
              handleNavClick(e, link.href);
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/sign-in"
          className="py-2 text-[15px] text-ash transition-colors duration-200 hover:text-ink"
          onClick={() => setOpen(false)}
        >
          Sign in
        </Link>
        <Link
          href="/waitlist"
          className="mt-2 inline-flex items-center justify-center gap-1 rounded-pill bg-ink px-[18px] py-[12px] text-center text-[15px] font-medium text-paper transition-colors duration-200 ease-out hover:bg-ash"
          onClick={() => setOpen(false)}
        >
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
}
