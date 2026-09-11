"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { n: "01", label: "Clicked" },
  { n: "02", label: "Server logged" },
  { n: "03", label: "Sale" },
  { n: "04", label: "Attribution confirmed" },
];

const timelineRows: {
  icon: string;
  title: string;
  subtext: string;
  time: string;
  tone?: "warning" | "info";
}[] = [
  {
    icon: "/assets/icon-link.svg",
    title: "Link clicked for the first time!",
    subtext: "Referral captured via In-App Browser.",
    time: "42m ago",
  },
  {
    icon: "/assets/icon-monitor.svg",
    title: "They came back to the site on their computer to look around.",
    subtext: "Multi-session return on Desktop",
    time: "34m ago",
  },
  {
    icon: "/assets/icon-monitor.svg",
    title: "They came back to the site on their computer to look around.",
    subtext: "Multi-session return on Desktop",
    time: "34m ago",
  },
  {
    icon: "/assets/icon-link.svg",
    title: "We've linked their phone click to their computer visit.",
    subtext: "Cross-device/probabilistic match.",
    time: "33m ago",
  },
  {
    icon: "/assets/icon-search.svg",
    title: "They are checking out specific products you recommended.",
    subtext: "High-intent product page views.",
    time: "29m ago",
  },
  {
    icon: "/assets/icon-shopping-cart.svg",
    title: "They added your pick to their cart!",
    subtext: "Product Added to Cart (Intent Signal).",
    time: "21m ago",
  },
  {
    icon: "/assets/icon-shopping-bag.svg",
    title: "They've started the checkout process.",
    subtext: "Checkout Started (80% funnel progress).",
    time: "14m ago",
  },
  {
    icon: "/assets/icon-alert-triangle.svg",
    title: "A coupon app tried to take credit for this sale.",
    subtext: "Via Instagram story in mobile Safari sandbox",
    time: "11m ago",
    tone: "warning",
  },
  {
    icon: "/assets/icon-check.svg",
    title: "The sale is complete. You get the credit!",
    subtext: "Order finalized and verified.",
    time: "8m ago",
    tone: "info",
  },
  {
    icon: "/assets/icon-shield.svg",
    title: "Your commission is being verified",
    subtext: "Commission locked/Pending status",
    time: "6m ago",
  },
  {
    icon: "/assets/icon-rotate-ccw.svg",
    title: "The customer changed their mind and returned the items",
    subtext: "A “Reversal” event was fired from the brand's e-commerce backend",
    time: "Just now",
    tone: "warning",
  },
];

const toneIconBorder: Record<string, string> = {
  warning: "border-status-warning",
  info: "border-status-info",
};

const toneSubtext: Record<string, string> = {
  warning: "text-status-warning font-medium",
  info: "text-status-info font-medium",
};

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (!isDesktop || reduceMotion) return;
          const viewport = viewportRef.current;
          const card = cardRef.current;
          const section = sectionRef.current;
          if (!viewport || !card || !section) return;

          const viewportHeight = viewport.clientHeight;
          const cardDistance = Math.max(0, card.scrollHeight - viewportHeight);
          if (!cardDistance) return;

          gsap.set(viewport, { overflow: "hidden" });

          const trigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${cardDistance}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(card, { y: -cardDistance * self.progress });
            },
          });

          return () => {
            trigger.kill();
            gsap.set(viewport, { clearProps: "overflow" });
            gsap.set(card, { clearProps: "transform" });
          };
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="flex flex-col gap-[28px] bg-primary px-5 py-16 md:px-10 lg:px-[40px] lg:py-[80px]"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[48px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-display text-[28px] leading-[32px] tracking-[-0.6px] text-cream sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.2px]">
            <span>Proof,</span><br />
            <span>not promises.</span> 
          </h2>
          <p className="text-[16px] text-paper">
            We don&rsquo;t claim it. We show it, down to the second.
          </p>
        </div>
        <p className="text-[16px] leading-[24px] text-paper lg:max-w-[42vw] lg:text-[17px]">
          The instant a click happens, Higher Frequency&rsquo;s servers timestamp it. That record
          doesn&rsquo;t depend on a browser or a cookie, so there&rsquo;s no moment for an
          extension to step in.
        </p>
      </div>

      <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0">
        <div className="flex gap-8 lg:gap-[40px]">
          {stats.map((stat) => (
            <div key={stat.n} className="flex min-w-[140px] flex-1 flex-col gap-[6px]">
              <p className="text-[12px] font-medium text-primary-light">{stat.n}</p>
              <p className="whitespace-nowrap text-[13px] text-cream">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:h-[calc(100vh-220px)] lg:min-h-[560px] lg:flex-row lg:items-stretch">
        <div className="relative flex min-h-[520px] p-4 flex-col justify-end overflow-hidden lg:min-h-0 lg:flex-1">
          <Image
            src="/assets/receipt-backdrop.png"
            alt="Creator wearing sunglasses"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/5" />
          <div className="relative bg-receipt-paper px-[26px] pb-[30px] pt-[26px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.07)]">
            <div className="flex items-center justify-between">
              <Image src="/assets/logo-mark-primary.svg" alt="" width={64} height={35} className="h-[22px] w-auto" />
              <div className="flex gap-[16px] font-mono text-[9.5px] tracking-[0.95px] text-ink/55">
                <p className="whitespace-nowrap">TXN 8F3A&ndash;2201</p>
                <p className="whitespace-nowrap">14:22 EDT &middot; SEP 03 2026</p>
              </div>
            </div>

            <div className="mt-[22px] flex items-center gap-[12px]">
              <Image src="/assets/avatar-photo.png" alt="" width={34} height={34} />
              <div className="font-mono text-ink">
                <p className="text-[12px]">@marissa.k</p>
                <p className="mt-[3px] text-[9px] tracking-[0.72px] opacity-50">CREATOR OF RECORD</p>
              </div>
            </div>

            <div className="mt-[22px] h-px bg-ink" />

            <p className="mt-[22px] font-mono text-[9px] tracking-[0.9px] text-ink/50">YOUR PAYOUT</p>
            <div className="mt-[8px] flex items-end justify-between">
              <p className="font-space text-[42px] tracking-[-1.9px] text-ink lg:text-[56px] lg:tracking-[-2.52px]">
                $1,284.00
              </p>
              <div className="flex items-center border-[1.5px] border-primary px-[9px] py-[6px] -rotate-[5deg]">
                <span className="font-mono text-[8.5px] font-semibold tracking-[1.36px] text-primary">
                  LOCKED
                </span>
              </div>
            </div>

            <div className="mt-[26px] flex items-center gap-[6px]">
              <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-ash/40" />
              <span className="h-px flex-1 bg-ash/40" />
              <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-ash/40" />
              <span className="h-px flex-1 bg-ash/40" />
              <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-ash/40" />
              <span className="h-px flex-1 bg-ash/40" />
              <span className="h-[12px] w-[12px] flex-shrink-0 rounded-full bg-primary" />
            </div>
            <div className="mt-[10px] flex justify-between font-mono text-[8px] font-semibold tracking-[0.64px] text-ink">
              <p className="opacity-60">CLICKED</p>
              <p className="opacity-60">CONFIRMED</p>
              <p className="opacity-60">HELD</p>
              <p className="text-primary">PAID</p>
            </div>
          </div>
        </div>

        <div ref={viewportRef} className="lg:flex-1 lg:overflow-hidden">
          <div ref={cardRef} className="bg-paper p-6 lg:p-[28px]">
            <div className="flex items-start justify-between pb-[20px] lg:pb-[24px]">
              <p className="font-mono text-[11px] font-semibold tracking-[1px] text-text-grey-light lg:text-[12px]">
                CUSTOMER STATUS &middot; IN REVIEW
              </p>
              <p className="text-right text-[10px] font-semibold tracking-[0.22px] text-primary lg:text-[11px]">
                This Commission is contested
              </p>
            </div>
            <div className="flex flex-col">
              {timelineRows.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-[16px] py-[14px] ${
                    i < timelineRows.length - 1 ? "border-b border-border-charcoal" : ""
                  }`}
                >
                  <div
                    className={`flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] lg:h-[44px] lg:w-[44px] ${
                      row.tone ? toneIconBorder[row.tone] : "border-ink"
                    }`}
                  >
                    <Image src={row.icon} alt="" width={20} height={20} className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <p className="text-[13px] font-semibold text-ink lg:text-[14px]">{row.title}</p>
                    <p className={`text-[11px] lg:text-[12px] ${row.tone ? toneSubtext[row.tone] : "text-text-grey-light"}`}>
                      {row.subtext}
                    </p>
                  </div>
                  <p className="hidden whitespace-nowrap font-mono text-[12px] text-text-grey-light sm:block">
                    {row.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
