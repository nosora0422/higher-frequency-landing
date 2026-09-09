"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

const tiers = [
  {
    eyebrow: "For Starters",
    title: "Verified Creator",
    tag: "Free",
    desc: "Your first on-chain commission and full platform access to get started.",
    icon: "/assets/icon-check-circle.svg",
    features: ["Your first on-chain commission", "Full platform access", "Verified badge"],
  },
  {
    eyebrow: "For Enthusiasts",
    title: "Verified Pro",
    tag: "Invite Only",
    desc: "Meaningful verified GMV across multiple brands unlocks priority access.",
    icon: "/assets/icon-check-circle.svg",
    features: [
      "Meaningful verified GMV across multiple brands",
      "Priority placement",
      "Brand gifting",
      "Shareable badge",
    ],
  },
  {
    eyebrow: "For Teams",
    title: "Verified Top Performer",
    tag: "Elite",
    desc: "Significant verified GMV and a track record brands trust for top-tier access.",
    icon: "/assets/icon-check-circle2.svg",
    features: [
      "Significant verified GMV",
      "A track record brands trust",
      "Featured in brand discovery",
      "Advanced payout features",
    ],
  },
];

// Classic GSAP hover treatment: the card lifts and scales up slightly with
// a soft shadow growing in underneath it, then settles back on mouse leave.
function liftOnEnter(card: HTMLDivElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.to(card, {
    y: -10,
    scale: 1.02,
    boxShadow: "0 24px 48px -16px rgba(18, 18, 18, 0.22)",
    duration: 0.4,
    ease: "power3.out",
  });
}

function liftOnLeave(card: HTMLDivElement) {
  gsap.to(card, {
    y: 0,
    scale: 1,
    boxShadow: "0 0px 0px 0px rgba(18, 18, 18, 0)",
    duration: 0.4,
    ease: "power3.out",
  });
}

export default function Tiers() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section
      id="tiers"
      className="flex flex-col gap-[28px] border-t border-border-grey bg-cream px-5 py-16 md:px-10 lg:gap-[37px] lg:px-[24px] lg:py-[96px]"
    >
      <div>
        <h2 className="font-display text-[28px] leading-[32px] tracking-[-0.6px] text-ink sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.2px]">
          It scales with what you earn.
        </h2>
        <p className="mt-[12px] text-[16px] text-ink">
          Tiers based on what you&rsquo;ve sold, not follower count.
        </p>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-[40px]">
        {tiers.map((tier, i) => (
          <div
            key={tier.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onMouseEnter={() => {
              const card = cardRefs.current[i];
              if (card) liftOnEnter(card);
            }}
            onMouseLeave={() => {
              const card = cardRefs.current[i];
              if (card) liftOnLeave(card);
            }}
            className="flex flex-col justify-between gap-8 bg-paper p-6  lg:flex-1 lg:min-w-0 lg:gap-0 lg:p-[36px]"
          >
            <div className="flex flex-col gap-[24px]">
              <p className="font-mono text-[9px] font-medium uppercase tracking-[0.72px] text-ink">
                {tier.eyebrow}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-display text-[24px] leading-[26px] tracking-[-0.36px] text-ink">
                  {tier.title}
                </p>
                <p className="text-[13px] font-medium text-primary">{tier.tag}</p>
              </div>
              <p className="text-[13px] leading-[19px] text-ash">{tier.desc}</p>
              <div className="h-px w-full bg-ink" />
              <ul className="flex flex-col gap-[10px]">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-[10px] text-[14px] leading-[21px] text-ink">
                    <Image src={tier.icon} alt="" width={16} height={16} className="flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <Button href="#" variant="outline" full>
                Join Now
              </Button>
              <p className="text-[11px] font-semibold tracking-[0.22px] text-primary">Coming Soon</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
