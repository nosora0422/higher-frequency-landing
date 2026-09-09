import Image from "next/image";

function BrandRow() {
  return (
    <>
      <span className="font-space text-[19px] font-bold tracking-[-0.8px] text-ink lg:text-[24px] lg:tracking-[-1px]">
        NIKE
      </span>
      <span className="px-2 font-light text-[14px] tracking-[5px] text-ink lg:text-[18px] lg:tracking-[6px]">
        SEPHORA
      </span>
      <span className="flex items-center gap-1 font-bold text-[17px] tracking-[-0.4px] text-ink lg:text-[22px] lg:tracking-[-0.5px]">
        Walmart<em className="text-[15px] not-italic text-deep-blue lg:text-[20px]">*</em>
      </span>
      <span className="flex items-center gap-2 font-extrabold text-[16px] text-ink lg:text-[20px]">
        <Image src="/assets/icon-target.svg" alt="" width={20} height={20} className="h-4 w-4 lg:h-5 lg:w-5" />
        target
      </span>
      <span className="flex items-end gap-[6px] pb-[2px] font-bold text-[16px] tracking-[-0.8px] text-ink lg:text-[20px] lg:tracking-[-1px]">
        <span className="flex items-end gap-[3px]">
          <i className="mr-px h-[8px] w-[2px] rotate-[25deg] bg-ink lg:h-[10px] lg:w-[3px]" />
          <i className="mr-px h-[12px] w-[2px] rotate-[25deg] bg-ink lg:h-[15px] lg:w-[3px]" />
          <i className="mr-1 h-[16px] w-[2px] rotate-[25deg] bg-ink lg:h-[20px] lg:w-[3px]" />
        </span>
        adidas
      </span>
      <span className="font-black text-[19px] tracking-[0.4px] text-ink lg:text-[24px] lg:tracking-[0.5px]">
        Game<b className="text-[#ff1a1a]">Stop</b>
      </span>
    </>
  );
}

export default function BrandCarousel() {
  return (
    <section className="overflow-hidden border-t border-border-grey bg-cream py-12 lg:py-[96px]">
      <div className="relative flex h-[60px] items-center lg:h-[80px]">
        <div className="animate-carousel flex items-center gap-12 whitespace-nowrap px-5 lg:gap-[96px] lg:px-[64px]">
          <BrandRow />
          <BrandRow />
          <BrandRow />
        </div>
        <div className="absolute left-0 top-0 h-[60px] w-16 bg-gradient-to-r from-cream to-transparent lg:h-[80px] lg:w-[180px]" />
        <div className="absolute right-0 top-0 h-[60px] w-16 bg-gradient-to-l from-cream to-transparent lg:h-[80px] lg:w-[180px]" />
      </div>
    </section>
  );
}
