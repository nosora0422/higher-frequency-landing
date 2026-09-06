import Image from "next/image";

const steps = [
  {
    n: "STEP 01",
    title: "Create link",
    desc: "Search any brand and generate your Higher Frequency link in seconds.",
    image: "/assets/step-image-1.png",
  },
  {
    n: "STEP 02",
    title: "Post anywhere",
    desc: "Works alongside Mavely, LTK, and ShopMy — no exclusivity required.",
    image: "/assets/step-image-2.png",
  },
  {
    n: "STEP 03",
    title: "Get paid",
    desc: "Commission confirms automatically — no chasing, no spreadsheets.",
    image: "/assets/step-image-3.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="flex flex-col gap-[24px] border-b border-border-grey px-[64px] py-[96px]">
      <div>
        <h2 className="text-[40px] leading-[44px] tracking-[-1.2px] font-medium text-text">
          Post your link, we handle the rest.
        </h2>
        <p className="mt-[12px] text-[17px] text-text-grey">
          Three steps, about 2 minutes, and you&rsquo;re earning.
        </p>
      </div>
      <div className="flex w-full pt-[24px]">
        {steps.map((step, i) => (
          <div
            key={step.n}
            className={`flex h-[514px] flex-1 flex-col gap-[24px] border-y border-l border-border-grey bg-white px-[24px] pt-[24px] ${
              i === steps.length - 1 ? "border-r" : ""
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="font-display font-bold text-[12px] tracking-[1px] text-text-grey">
                {step.n}
              </p>
              <p className="text-[17px] font-semibold text-text">{step.title}</p>
              <p className="text-[14px] text-text-grey">{step.desc}</p>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden opacity-[0.36]">
              <Image src={step.image} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
