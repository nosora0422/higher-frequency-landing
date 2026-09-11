"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const cards = [
  {
    number: "01",
    title: "Checkout Theft",
    icon: "/assets/icon-checkout-theft.svg",
    desc: "Honey and similar tools swap your link right before purchase. That sale goes to them.",
    stat: "17%",
    statDesc: "of affiliate budgets vanish to fraud every month.",
  },
  {
    number: "02",
    title: "Ad Blockers",
    icon: "/assets/icon-ad-blockers.svg",
    desc: "Blockers silently strip out the scripts that record affiliate clicks.",
    stat: "42%",
    statDesc: "of your followers block the scripts that record affiliate clicks.",
  },
  {
    number: "03",
    title: "The 7-Day Wall",
    icon: "/assets/icon-seven-day-wall.svg",
    desc: "Apple deletes your cookie after 7 days. Any sale after that? You're invisible.",
    stat: "7d",
    statDesc: "is all the attribution window you actually get.",
  },
  {
    number: "04",
    title: "Device Switch",
    icon: "/assets/icon-device-switch.svg",
    desc: "Discovered on phone, bought on laptop. Cookies can't cross devices. Commission lost.",
    stat: "2×",
    statDesc: "devices per purchase, one broken attribution chain.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const heading = headingRef.current;
      const sub = subRef.current;
      if (!heading || !sub || reduceMotion) return;

      const splits = [heading, sub].map((el) =>
        SplitText.create(el, { type: "words, chars" }),
      );
      const chars = splits.flatMap((split) => split.chars);

      gsap.set(chars, { opacity: 0.15 });

      gsap.to(chars, {
        opacity: 1,
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      return () => splits.forEach((split) => split.revert());
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="problem"
        className="flex flex-col items-center justify-center gap-[12px] bg-cream px-5 py-16 text-center font-display md:px-10 lg:px-[64px] lg:py-[180px]"
      >
        <h2
          ref={headingRef}
          className="max-w-[1158px] text-[28px] leading-[32px] tracking-[-0.6px] text-ink sm:text-[38px] sm:leading-[40px] lg:max-w-[80vw] lg:text-[60px] lg:leading-[68px] lg:tracking-[-1.5px] overflow-visible"
        >
          Don&rsquo;t let broken systems steal your money.
        </h2>
        <p
          ref={subRef}
          className="max-w-[1204px] text-[28px] leading-[32px] tracking-[-0.6px] text-text-secondary sm:text-[38px] sm:leading-[40px] lg:max-w-[84vw] lg:text-[60px] lg:leading-[68px] lg:tracking-[-1.5px]"
        >
          Every time you post a link, commissions slip through gaps you can&rsquo;t see.
        </p>
      </section>

      <section className="flex flex-col items-center gap-10 border border-t-border-grey bg-cream px-5 py-16 md:px-10 lg:gap-[59px] lg:px-[24px] lg:py-[80px]">
        <p className="font-display text-center text-[28px] leading-[34px] tracking-[-0.6px] text-ink lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.2px]">
          With our tech, none of these failures exist.
        </p>
        <div className="h-[2px] w-[84px] bg-ink" />
        <div className="flex w-full flex-col gap-3 lg:h-[480px] lg:flex-row lg:overflow-hidden">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start bg-cream-secondary p-6 lg:h-full lg:flex-1 lg:min-w-0"
            >
              <div className="flex w-full flex-col items-start gap-[18px]">
                <p className="font-mono text-[12px] tracking-[1px] text-text-grey">{card.number}</p>
                <p className="font-display text-[24px] leading-[26px] tracking-[-0.36px] text-ink">
                  {card.title}
                </p>
                <div className="flex w-full items-center justify-center p-[10px]">
                  <Image src={card.icon} alt="" width={140} height={140} />
                </div>
                <div className="flex w-full flex-col items-start gap-2 border-t border-text-grey py-2">
                  <p className="font-body text-[16px] font-bold text-primary">{card.stat}</p>
                  <p className="font-body text-[12px] text-text-grey">{card.statDesc}</p>
                </div>
                <p className="font-body max-w-full text-[16px] leading-[21px] text-ink">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
