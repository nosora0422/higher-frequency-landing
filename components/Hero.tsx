import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-cream p-[10px] lg:p-[24px]">
      <div className="relative flex min-h-[520px] items-center overflow-hidden lg:min-h-0 lg:h-[calc(100svh-136px)]">
        <Image
          src="/assets/hero-visual.png"
          alt="Creator smiling at the camera outdoors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(58,34,16,0.07)]" />

        <div className="relative flex flex-col items-start gap-[24px] p-6 sm:p-10 lg:gap-[43px] lg:p-[40px]">
          <h1 className="max-w-[699px] font-display text-[36px] leading-[40px] tracking-[-0.6px] text-paper sm:text-[56px] sm:leading-[60px] lg:max-w-[48vw] lg:text-[75px] lg:leading-[80px] lg:tracking-[-1.125px]">
            <span>Get paid</span><br/>
            <span>for every sale</span><br/>
            <span>you drive</span>
          </h1>
          <div className="flex flex-col items-start gap-[24px] lg:gap-[43px]">
            <p className="max-w-[560px] text-[15px] leading-[22px] text-paper lg:max-w-[39vw] lg:text-[20px] lg:leading-[30px]">
              Server-side tracking that records every penny the instant it happens — no cookies,
              no gaps, no edits.
            </p>
            <Button href="/waitlist" variant="outline-light">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
