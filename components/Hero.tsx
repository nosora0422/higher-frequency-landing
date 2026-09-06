"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

const SLIDE_COUNT = 4;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDE_COUNT);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex items-center border-b border-border-grey">
      <div className="flex flex-1 min-w-0 flex-col items-start gap-[24px] px-[64px] pb-[48px]">
        <div className="rounded-[4px] bg-deep-blue p-[8px]">
          <span className="text-[12px] font-semibold tracking-[2px] text-paper">
            SERVER-SIDE ATTRIBUTION
          </span>
        </div>
        <h1 className="max-w-[537px] text-[75px] leading-[72px] tracking-[-1.125px] font-normal text-ink">
          Get paid for every sale you drive
        </h1>
        <p className="max-w-[560px] text-[16px] leading-[25px] text-ink">
          Server-side tracking that records every penny the instant it happens — no cookies, no
          gaps, no edits.
        </p>
        <div className="flex items-center gap-[16px]">
          <Button href="#" variant="primary">
            Get Started <b className="font-bold ml-1">— free</b>
          </Button>
          <Button href="#" variant="secondary">
            See a receipt
          </Button>
        </div>
        <p className="text-[11px] font-semibold tracking-[0.22px] text-text-grey-light">
          About 2 minutes from signup to your first link.
        </p>
      </div>

      <div className="flex flex-1 min-w-0 self-stretch border-l border-border-grey">
        <div className="relative w-full aspect-[715/685] overflow-hidden">
          <Image
            src="/assets/hero-slider-main.png"
            alt="Creator smiling at the camera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-black/45 to-transparent backdrop-blur-[2px]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-[24px]">
            <div>
              <p className="text-[13.4px] font-bold text-white">Kharis, Graphic Designer</p>
              <p className="mt-1 text-[15.1px] text-white">Possible member since 2023</p>
            </div>
            <div className="flex items-center gap-[6px] rounded-[100px] border border-white/10 bg-white/20 px-[16px] py-[13.5px] backdrop-blur-[8px]">
              {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
                <span
                  key={i}
                  className={`h-[6px] rounded-[40px] bg-white/40 ${
                    i === active ? "w-[37px]" : "w-[6px]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
