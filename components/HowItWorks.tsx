import Image from "next/image";
import Button from "./Button";

const steps = [
  {
    n: "01",
    title: "Create link",
    desc: "Search any brand and generate your Higher Frequency link in seconds.",
    image: "/assets/kit-step-1.png",
  },
  {
    n: "02",
    title: "Post anywhere",
    desc: "Works alongside Mavely, LTK, and ShopMy — no exclusivity required.",
    image: "/assets/kit-step-2.png",
  },
  {
    n: "03",
    title: "Get paid",
    desc: "Commission confirms automatically — no chasing, no spreadsheets.",
    image: "/assets/kit-step-3.png",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col gap-8 bg-cream px-5 py-16 md:px-10 lg:flex-row lg:items-center lg:gap-[12px] lg:px-[40px] lg:py-[80px]"
    >
      <div className="flex flex-col items-start gap-[24px] lg:w-[51%] lg:gap-[36px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-display text-[28px] leading-[32px] tracking-[-0.6px] text-ink sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.2px]">
            <span>Post your link,</span><br />
            <span>we handle the rest.</span> 
          </h2>
          <p className="text-[16px] text-ash">
            Three steps, about 2 minutes, and you&rsquo;re earning.
          </p>
        </div>
        <Button href="#" variant="outline">
          Start Now
        </Button>
        <div className="grid w-full grid-cols-3 gap-[14px]">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col items-start gap-[12px]">
              <div className="relative aspect-[225/208] w-full overflow-hidden">
                <Image src={step.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col items-start gap-[6px]">
                <p className="font-space text-[12px] tracking-[1px] text-ash/50">{step.n}</p>
                <p className="font-fraunces text-[16px] text-ink">{step.title}</p>
                <p className="text-[12px] text-ash">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[280px] w-full flex-1 self-stretch bg-[#ccb3a0] lg:min-h-0" />
    </section>
  );
}
