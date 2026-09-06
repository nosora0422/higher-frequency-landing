import Image from "next/image";
import Button from "./Button";

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

export default function Proof() {
  return (
    <section
      id="proof"
      className="relative flex flex-col gap-10 border-b border-border-grey bg-ink px-5 py-12 md:px-10 lg:flex-row lg:gap-[48px] lg:px-[64px] lg:py-[96px]"
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
        <div className="w-full rounded-[24px] border border-[#2e2e2e] bg-[#1a1a1a] p-5 lg:mt-[96px] lg:w-[611px] lg:max-w-full lg:p-[28px]">
          <div className="flex items-start justify-between pb-[20px]">
            <p className="font-mono text-[11px] font-semibold tracking-[1px] text-text-grey-light lg:text-[12px]">
              CUSTOMER STATUS &middot; IN REVIEW
            </p>
            <p className="text-right text-[10px] font-semibold tracking-[0.22px] text-signal-blue lg:text-[11px]">
              This Commission is contested
            </p>
          </div>
          <div className="flex flex-col">
            {timelineRows.map((row, i) => (
              <div
                key={i}
                className={`flex items-center gap-[12px] py-[14px] lg:gap-[16px] ${
                  i < timelineRows.length - 1 ? "border-b border-[#2e2e2e]" : ""
                }`}
              >
                <div
                  className={`flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-[18px] border-[1.5px] lg:h-[44px] lg:w-[44px] lg:rounded-[22px] ${
                    row.iconBg ? `${row.iconBg} border-transparent` : "border-[#2e2e2e] bg-[#1a1a1a]"
                  }`}
                >
                  <Image src={row.icon} alt="" width={20} height={20} className="h-4 w-4 lg:h-5 lg:w-5" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-[13px] font-semibold text-paper lg:text-[14px]">{row.title}</p>
                  <p className={`text-[11px] lg:text-[12px] ${row.subtextColor ?? "text-text-grey-light"}`}>
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

        <div className="mt-6 w-full rounded-[24px] bg-ink px-5 py-6 shadow-[0_16px_32px_-8px_rgba(12,12,13,0.4)] lg:absolute lg:left-1/2 lg:top-[426px] lg:mt-0 lg:w-[569px] lg:max-w-[90vw] lg:px-[26px] lg:pb-[30px] lg:pt-[26px] lg:[transform:translateX(calc(-50%_-_35.5px))]">
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
