import Image from "next/image";

const cards = [
  {
    title: "Checkout Theft",
    titleSize: "text-[16px]",
    descSize: "text-[14px]",
    descColor: "text-text",
    gap: "gap-3",
    desc: "Honey and similar tools swap your link right before purchase. That sale goes to them.",
    stat: "17%",
    statDesc: "of affiliate budgets vanish to fraud every month.",
    shaded: true,
  },
  {
    title: "Ad Blockers",
    titleSize: "text-[16px]",
    descSize: "text-[14px]",
    descColor: "text-text-grey",
    gap: "gap-3",
    desc: "Blockers silently strip out the scripts that record affiliate clicks.",
    stat: "42%",
    statDesc: "of your followers block the scripts that record affiliate clicks.",
    shaded: false,
  },
  {
    title: "The 7-Day Wall",
    titleSize: "text-[16px]",
    descSize: "text-[14px]",
    descColor: "text-text-grey",
    gap: "gap-3",
    desc: "Apple deletes your cookie after 7 days. Any sale after that? You're invisible.",
    shaded: true,
  },
  {
    title: "Device Switch",
    titleSize: "text-[17px]",
    descSize: "text-[15px]",
    descColor: "text-text-grey",
    gap: "gap-2",
    desc: "Discovered on phone, bought on laptop. Cookies can't cross devices. Commission lost.",
    shaded: false,
    fullBorder: true,
  },
];

export default function Problem() {
  return (
    <>
      <section
        id="problem"
        className="flex flex-col items-center justify-center gap-[12px] px-5 py-16 text-center md:px-10 lg:px-[64px] lg:py-[96px]"
      >
        <Image
          src="/assets/icon-monetization.svg"
          alt=""
          width={62}
          height={62}
          className="mb-[10px] h-10 w-10 lg:h-[62px] lg:w-[62px]"
        />
        <h2 className="max-w-[1158px] text-[28px] leading-[32px] tracking-[-0.6px] font-normal text-text sm:text-[38px] sm:leading-[40px] lg:text-[60px] lg:leading-[60.4px] lg:tracking-[-1.5px]">
          Don&rsquo;t let broken systems steal your money.
        </h2>
        <p className="max-w-[1204px] text-[28px] leading-[32px] tracking-[-0.6px] font-normal text-text-grey sm:text-[38px] sm:leading-[40px] lg:text-[60px] lg:leading-[60.4px] lg:tracking-[-1.5px]">
          Every time you post a link, commissions slip through gaps you can&rsquo;t see.
        </p>
      </section>

      <section className="flex flex-col items-center gap-8 border-b border-border-grey px-5 py-16 md:px-10 lg:gap-[48px] lg:px-[64px] lg:py-[96px]">
        <div className="flex w-full flex-col gap-4 lg:h-[340px] lg:flex-row lg:gap-0">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col ${
                card.stat ? "justify-between" : ""
              } gap-6 rounded-[12px] border border-border-grey px-6 py-6 lg:flex-1 lg:min-w-0 lg:gap-0 lg:rounded-none lg:px-[24px] lg:py-[28px] ${
                card.shaded ? "bg-[#f5f5f5]" : "bg-paper"
              } ${
                card.fullBorder
                  ? "lg:border lg:border-border-grey"
                  : "lg:border-y lg:border-l lg:border-r-0 lg:border-border-grey"
              }`}
            >
              <div className={`flex flex-col ${card.gap}`}>
                <Image src="/assets/icon-problem-card.png" alt="" width={36} height={36} />
                <p className={`font-semibold text-text ${card.titleSize}`}>{card.title}</p>
                <p className={`max-w-[260px] leading-[21px] ${card.descSize} ${card.descColor}`}>
                  {card.desc}
                </p>
              </div>
              {card.stat && (
                <div className="flex flex-col gap-3">
                  <p className="font-display font-bold text-[22px] text-deep-blue">{card.stat}</p>
                  <p className="max-w-[240px] text-[13px] text-text-grey">{card.statDesc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-text lg:text-[28px] lg:leading-[34px] lg:tracking-[-0.56px]">
          With our tech, none of these failures exist.
        </p>
      </section>
    </>
  );
}
