import Image from "next/image";
import Button from "./Button";

export default function ForBrands() {
  return (
    <section
      id="for-brands"
      className="flex flex-col border-b border-border-grey bg-ink lg:flex-row lg:items-center lg:gap-[48px] "
    >
      <div className="flex flex-1 min-w-0 flex-col gap-8 px-5 md:px-10 py-12 lg:gap-0 lg:justify-between lg:self-stretch lg:px-[40px] lg:py-[96px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="max-w-[560px] lg:max-w-[85%] font-display text-[28px] leading-[32px] tracking-[-0.6px] text-paper sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.2px]">
            Got your own Shopify store?
          </h2>
          <p className="max-w-[560px] text-[16px] leading-[24px] text-paper lg:max-w-[85%] lg:text-[20px] lg:leading-[30px]">
            Give your creators attribution they can actually trust. One-click Shopify install. Pay
            commissions only for sales your creators actually drove.
          </p>
        </div>
        <Button href="#" variant="outline-light">
          See How It Works For Brands
        </Button>
      </div>
      <div className="relative mt-8 min-w-0 border-t border-border-grey lg:mt-0 lg:flex lg:flex-1 lg:items-center lg:self-stretch lg:border-l-0 lg:border-t-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[699/691]">
          <Image
            src="/assets/for-brands-photo.png"
            alt="Creator smiling at the camera"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(47,36,27,0.16)]" />
        </div>
      </div>
    </section>
  );
}
