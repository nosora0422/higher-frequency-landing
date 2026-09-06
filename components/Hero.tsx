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
    <section className="flex flex-col border-b border-border-grey lg:flex-row lg:items-center">
      <div className="order-2 flex flex-1 min-w-0 flex-col items-start gap-[18px] px-5 py-8 md:px-10 lg:order-1 lg:gap-[24px] lg:px-[64px] lg:pb-[48px] lg:pt-0">
        <div className="rounded-[4px] bg-deep-blue p-[8px]">
          <span className="text-[11px] font-semibold tracking-[2px] text-paper lg:text-[12px]">
            SERVER-SIDE ATTRIBUTION
          </span>
        </div>
        <h1 className="max-w-[537px] text-[34px] leading-[36px] tracking-[-0.4px] font-normal text-ink sm:text-[48px] sm:leading-[48px] lg:text-[75px] lg:leading-[72px] lg:tracking-[-1.125px]">
          Get paid for every sale you drive
        </h1>
        <p className="max-w-[560px] text-[15px] leading-[23px] text-ink lg:text-[16px] lg:leading-[25px]">
          Server-side tracking that records every penny the instant it happens — no cookies, no
          gaps, no edits.
        </p>
        <div className="flex w-full flex-col gap-[12px] sm:w-auto sm:flex-row sm:items-center lg:gap-[16px]">
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

      <div className="order-1 flex flex-1 min-w-0 self-stretch border-b border-border-grey lg:order-2 lg:border-b-0 lg:border-l">
        <div className="relative w-full aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[715/685]">
          <Image
            src="/assets/hero-slider-main.png"
            alt="Creator smiling at the camera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-black/45 to-transparent backdrop-blur-[2px]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 lg:p-[24px]">
            <div>
              <p className="text-[12px] font-bold text-white sm:text-[13.4px]">
                Kharis, Graphic Designer
              </p>
              <p className="mt-1 text-[13px] text-white sm:text-[15.1px]">
                Possible member since 2023
              </p>
            </div>
            <div className="flex items-center gap-[6px] rounded-[100px] border border-white/10 bg-white/20 px-3 py-2 backdrop-blur-[8px] lg:px-[16px] lg:py-[13.5px]">
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
