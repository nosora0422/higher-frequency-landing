"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const logicSteps = [
  { dot: "/assets/dot-filled-blue.svg", label: "Clicked", time: "12:04:03", muted: false },
  { dot: "/assets/dot-filled-blue2.svg", label: "Server logged", time: "12:04:03", muted: false },
  { dot: "/assets/dot-empty-grey.svg", label: "Sale", time: "pending", muted: true },
  { dot: "/assets/dot-empty-grey.svg", label: "Attribution confirmed", time: "pending", muted: true },
];

const timelineRows: {
  icon: string;
  title: string;
  subtext: string;
  time: string;
  iconBg?: string;
  subtextColor?: string;
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
    iconBg: "bg-[#e61c7c]",
    subtextColor: "text-[#e61c7c] font-medium",
  },
  {
    icon: "/assets/icon-check.svg",
    title: "The sale is complete. You get the credit!",
    subtext: "Order finalized and verified.",
    time: "8m ago",
    iconBg: "bg-[#3b82f6]",
    subtextColor: "text-[#2563eb] font-medium",
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
    iconBg: "bg-[#e61c7c]",
    subtextColor: "text-[#e61c7c] font-medium",
  },
];

// Fraction of the status card's own scroll distance after which the payout
// card starts sliding in (0.9 = starts once the card is 90% scrolled, so its
// entrance overlaps the card's final 10% as the user keeps scrolling).
const PAYOUT_ENTRANCE_START = 0.9;
// Dedicated scroll distance (px) over which the payout card's entrance plays
// out — kept generous so it reads as a smooth, continuous scroll-in rather
// than a snap.
const PAYOUT_ENTRANCE_TRAVEL = 400;

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);
  const statusViewportRef = useRef<HTMLDivElement>(null);
  const statusCardRef = useRef<HTMLDivElement>(null);
  const payoutCardRef = useRef<HTMLDivElement>(null);

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
          const viewport = statusViewportRef.current;
          const card = statusCardRef.current;
          const payout = payoutCardRef.current;
          const section = sectionRef.current;
          if (!viewport || !card || !payout || !section) return;

          // The viewport now stretches to fill the available column height via
          // CSS (flex stretch) rather than a fixed pixel height, so measure
          // however tall that ends up being — whatever of the card doesn't
          // fit in it is the "overflowing part" that scrolls.
          const viewportHeight = viewport.clientHeight;

          // Measured once at setup — the card's own scroll-through distance
          // and the point (in px) along it where the payout entrance begins.
          const cardDistance = Math.max(0, card.scrollHeight - viewportHeight);
          const payoutStart = cardDistance * PAYOUT_ENTRANCE_START;
          const totalDistance = Math.max(cardDistance, payoutStart + PAYOUT_ENTRANCE_TRAVEL) || 1;

          gsap.set(viewport, { overflow: "hidden" });
          gsap.set(payout, { yPercent: 100, autoAlpha: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${totalDistance}`,
              scrub: true,
              pin: true,
              invalidateOnRefresh: true,
            },
          });

          // 1 timeline "second" == 1px of scroll, so each tween's duration is
          // just the scroll distance (px) it should play out over.
          // Scroll the whole status card — header and rows together — up
          // through its clipped window.
          tl.to(card, { y: -cardDistance, ease: "none", duration: cardDistance || 1 }, 0);
          // Once the card is 90% scrolled, the payout card slides up into
          // place from below over the next 400px of scroll, overlapping the
          // card's final stretch as the user keeps scrolling.
          tl.fromTo(
            payout,
            { yPercent: 100, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, ease: "none", duration: PAYOUT_ENTRANCE_TRAVEL },
            payoutStart,
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            gsap.set(viewport, { clearProps: "overflow" });
            gsap.set(card, { clearProps: "transform" });
            gsap.set(payout, { clearProps: "transform,opacity,visibility" });
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
      className="relative flex flex-col gap-10 border-b border-border-grey bg-ink px-5 py-12 md:px-10 lg:min-h-screen lg:flex-row lg:gap-[48px] lg:px-[64px] lg:py-0"
    >
      <div className="flex flex-col gap-10 lg:max-w-[640px] lg:gap-[48px] lg:py-[96px]">
        <div>
          <h2 className="text-[28px] leading-[32px] tracking-[-0.6px] font-medium text-paper sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.2px]">
            Proof, not promises.
          </h2>
          <p className="mt-[12px] text-[17px] leading-[24px] tracking-[-0.2px] text-text-grey-light lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px]">
            We don&rsquo;t claim it. We show it, down to the second.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <p className="text-[16px] leading-[23px] text-paper lg:text-[17px] lg:leading-[24px]">
            The instant a click happens, Higher Frequency&rsquo;s servers timestamp it. That
            record doesn&rsquo;t depend on a browser or a cookie, so there&rsquo;s no moment for an
            extension to step in.
          </p>
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div className="flex items-center gap-[10px] pt-[24px]">
              {logicSteps.map((step, i) => (
                <div key={step.label} className="contents">
                  <div className="flex flex-col items-center gap-2">
                    <Image src={step.dot} alt="" width={24} height={24} />
                    <p
                      className={`whitespace-nowrap text-center text-[13px] font-semibold ${
                        step.muted ? "text-text-grey" : "text-paper"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="whitespace-nowrap text-[11px] text-text-grey">{step.time}</p>
                  </div>
                  {i < logicSteps.length - 1 && (
                    <span
                      className={`h-[2px] w-[40px] flex-shrink-0 sm:w-[60px] lg:w-[80px] ${
                        i === 0 ? "bg-paper" : "bg-border-grey"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button href="#" variant="blue">
          Join Now
        </Button>
      </div>

      <div className="relative w-full lg:flex lg:flex-1 lg:justify-end">
        <div
          ref={statusViewportRef}
          className="w-full lg:mt-[96px] lg:h-[calc(100vh-96px)] lg:w-[611px] lg:max-w-full lg:overflow-hidden"
        >
          <div
            ref={statusCardRef}
            className="w-full rounded-[24px] border border-[#2e2e2e] bg-[#1a1a1a] p-5 lg:p-[40px]"
          >
            <div className="flex items-start justify-between pb-[20px] lg:pb-[32px]">
              <p className="font-mono text-[11px] font-semibold tracking-[1px] text-text-grey-light lg:text-[16px]">
                CUSTOMER STATUS &middot; IN REVIEW
              </p>
              <p className="text-right text-[10px] font-semibold tracking-[0.22px] text-signal-blue lg:text-[15px]">
                This Commission is contested
              </p>
            </div>
            <div className="flex flex-col">
              {timelineRows.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-[12px] py-[14px] lg:gap-[22px] lg:py-[24px] ${
                    i < timelineRows.length - 1 ? "border-b border-[#2e2e2e]" : ""
                  }`}
                >
                  <div
                    className={`flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-[18px] border-[1.5px] lg:h-[64px] lg:w-[64px] lg:rounded-[32px] ${
                      row.iconBg ? `${row.iconBg} border-transparent` : "border-[#2e2e2e] bg-[#1a1a1a]"
                    }`}
                  >
                    <Image
                      src={row.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-4 w-4 lg:h-8 lg:w-8"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1 lg:gap-[6px]">
                    <p className="text-[13px] font-semibold text-paper lg:text-[20px]">{row.title}</p>
                    <p className={`text-[11px] lg:text-[16px] ${row.subtextColor ?? "text-text-grey-light"}`}>
                      {row.subtext}
                    </p>
                  </div>
                  <p className="hidden whitespace-nowrap font-mono text-[12px] text-text-grey-light sm:block lg:text-[16px]">
                    {row.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*
        Static centering wrapper — kept free of any GSAP-driven transform so
        it can center the card with a plain CSS translate(-50%,-50%) without
        fighting the entrance animation below. Only its child (the actual
        card) is animated.
      */}
      <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[569px] lg:max-w-[90vw] lg:[transform:translate(-50%,-50%)]">
        <div
          ref={payoutCardRef}
          className="mt-6 w-full rounded-[24px] bg-ink px-5 py-6 shadow-[0_16px_32px_-8px_rgba(12,12,13,0.4)] lg:mt-0 lg:px-[26px] lg:pb-[30px] lg:pt-[26px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-[12px] items-end gap-[2px]">
              <span className="h-[5px] w-[3px] bg-paper" />
              <span className="h-[8px] w-[3px] bg-paper" />
              <span className="h-[12px] w-[3px] bg-signal-blue" />
            </div>
            <div className="flex gap-[16px] font-mono text-[9.5px] tracking-[0.95px] text-paper">
              <p className="whitespace-nowrap opacity-55">TXN 8F3A&ndash;2201</p>
              <p className="whitespace-nowrap opacity-55">14:22 EDT &middot; SEP 03 2026</p>
            </div>
          </div>

          <div className="mt-[22px] flex items-center gap-[12px]">
            <Image src="/assets/avatar.svg" alt="" width={34} height={34} />
            <div className="font-mono text-paper">
              <p className="text-[12px]">@marissa.k</p>
              <p className="mt-[3px] text-[9px] tracking-[0.72px] opacity-50">CREATOR OF RECORD</p>
            </div>
            <div className="h-px flex-1" />
            <div className="flex h-[52px] w-[52px] items-center justify-center border border-white/20 bg-white/[0.14] text-center font-mono text-[6.5px] tracking-[0.39px] text-paper opacity-55">
              PRODUCT SHOT
            </div>
          </div>

          <div className="mt-[22px] h-px bg-white/[0.18]" />

          <p className="mt-[22px] font-mono text-[9px] tracking-[0.9px] text-paper opacity-50">
            YOUR PAYOUT
          </p>
          <div className="mt-[8px] flex items-end justify-between">
            <p className="font-display font-bold text-[42px] tracking-[-1.9px] text-paper lg:text-[56px] lg:tracking-[-2.52px]">
              $1,284.00
            </p>
            <div className="flex items-center border-[1.5px] border-signal-blue px-[9px] py-[6px] -rotate-[5deg]">
              <span className="font-mono text-[8.5px] font-semibold tracking-[1.36px] text-signal-blue">
                LOCKED
              </span>
            </div>
          </div>

          <div className="mt-[26px] flex items-center gap-[6px]">
            <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-paper" />
            <span className="h-px flex-1 bg-white/30" />
            <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-paper" />
            <span className="h-px flex-1 bg-white/30" />
            <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-paper" />
            <span className="h-px flex-1 bg-white/30" />
            <span className="h-[12px] w-[12px] flex-shrink-0 rounded-full bg-signal-blue" />
          </div>
          <div className="mt-[10px] flex justify-between font-mono text-[8px] font-semibold tracking-[0.64px] text-paper">
            <p className="opacity-60">CLICKED</p>
            <p className="opacity-60">CONFIRMED</p>
            <p className="opacity-60">HELD</p>
            <p className="text-signal-blue">PAID</p>
          </div>
        </div>
      </div>
    </section>
  );
}
