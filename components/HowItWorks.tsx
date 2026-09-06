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
    <section
      id="how-it-works"
      className="flex flex-col gap-[24px] border-b border-border-grey px-5 py-16 md:px-10 lg:min-h-screen lg:justify-center lg:px-[64px] lg:py-[96px]"
    >
      <div>
        <h2 className="text-[28px] leading-[32px] tracking-[-0.6px] font-medium text-text sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.2px]">
          Post your link, we handle the rest.
        </h2>
        <p className="mt-[12px] text-[16px] text-text-grey lg:text-[17px]">
          Three steps, about 2 minutes, and you&rsquo;re earning.
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-[24px] lg:w-full lg:flex-row lg:gap-0">
        {steps.map((step, i) => (
          <div
            key={step.n}
            className={`flex flex-col gap-[20px] rounded-[12px] border border-border-grey bg-white px-6 py-6 lg:h-[514px] lg:flex-1 lg:gap-[24px] lg:rounded-none lg:border-y lg:border-l lg:px-[24px] lg:pb-0 lg:pt-[24px] ${
              i === steps.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="font-display font-bold text-[12px] tracking-[1px] text-text-grey">
                {step.n}
              </p>
              <p className="text-[17px] font-semibold text-text">{step.title}</p>
              <p className="text-[14px] text-text-grey">{step.desc}</p>
            </div>
            <div className="relative h-[220px] min-h-0 overflow-hidden opacity-[0.36] lg:h-auto lg:flex-1">
              <Image src={step.image} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
