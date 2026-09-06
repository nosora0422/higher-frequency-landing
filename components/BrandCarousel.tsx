import Image from "next/image";

function BrandRow() {
  return (
    <>
      <span className="font-display font-bold text-[24px] tracking-[-1px] text-ink">NIKE</span>
      <span className="px-2 font-light text-[18px] tracking-[6px] text-ink">SEPHORA</span>
      <span className="flex items-center gap-1 font-bold text-[22px] tracking-[-0.5px] text-ink">
        Walmart<em className="text-[20px] not-italic text-deep-blue">*</em>
      </span>
      <span className="flex items-center gap-2 font-extrabold text-[20px] text-ink">
        <Image src="/assets/icon-target.svg" alt="" width={20} height={20} />
        target
      </span>
      <span className="flex items-end gap-[6px] pb-[2px] font-bold text-[20px] tracking-[-1px] text-ink">
        <span className="flex items-end gap-[3px]">
          <i className="mr-px h-[10px] w-[3px] rotate-[25deg] bg-ink" />
          <i className="mr-px h-[15px] w-[3px] rotate-[25deg] bg-ink" />
          <i className="mr-1 h-[20px] w-[3px] rotate-[25deg] bg-ink" />
        </span>
        adidas
      </span>
      <span className="font-black text-[24px] tracking-[0.5px] text-ink">
        Game<b className="text-[#ff1a1a]">Stop</b>
      </span>
    </>
  );
}

export default function BrandCarousel() {
  return (
    <section className="overflow-hidden border-b border-border-grey bg-white py-[96px]">
      <div className="relative flex h-[80px] items-center">
        <div className="animate-carousel flex items-center gap-[96px] whitespace-nowrap px-[64px]">
          <BrandRow />
          <BrandRow />
          <BrandRow />
        </div>
        <div className="absolute left-0 top-0 h-[80px] w-[180px] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 h-[80px] w-[180px] bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
