import Image from "next/image";
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

export default function Tiers() {
  return (
    <section id="tiers" className="flex flex-col gap-[37px] border-b border-border-grey px-[64px] py-[96px]">
      <div>
        <h2 className="text-[40px] leading-[44px] tracking-[-1.2px] font-medium text-text">
          It scales with what you earn.
        </h2>
        <p className="mt-[12px] text-[20px] leading-[26px] tracking-[-0.3px] text-text-grey">
          Coming soon: tiers based on what you&rsquo;ve sold, not follower count.
        </p>
      </div>
      <div className="flex gap-[20px] pt-[36px]">
        {tiers.map((tier) => (
          <div
            key={tier.title}
            className="flex h-[456px] flex-1 min-w-0 flex-col justify-between bg-white p-[36px]"
          >
            <div className="flex flex-col gap-[24px]">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22px] text-text-grey">
                {tier.eyebrow}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[20px] leading-[26px] tracking-[-0.3px] font-medium text-text">
                  {tier.title}
                </p>
                <p className="text-[13px] text-[#0577ff]">{tier.tag}</p>
              </div>
              <p className="text-[13px] leading-[19px] text-text-grey">{tier.desc}</p>
              <ul className="flex flex-col gap-[10px]">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-[10px] text-[14px] leading-[21px] text-text">
                    <Image src={tier.icon} alt="" width={16} height={16} className="flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Button href="#" variant="blue-disabled" full>
                Join Now
              </Button>
              <p className="text-[11px] font-semibold tracking-[0.22px] text-[#0577ff]">
                Coming Soon
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
