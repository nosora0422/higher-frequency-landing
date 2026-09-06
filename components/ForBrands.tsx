import Image from "next/image";
import Button from "./Button";

export default function ForBrands() {
  return (
    <section
      id="for-brands"
      className="flex flex-col border-b border-border-grey bg-white py-12 lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:py-[0px]"
    >
      <div className="flex flex-1 min-w-0 flex-col gap-8 px-5 md:px-10 lg:gap-0 lg:justify-between lg:self-stretch lg:px-[64px] lg:py-[96px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="max-w-[560px] text-[28px] leading-[32px] tracking-[-0.6px] font-medium text-text sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.2px]">
            Got your own Shopify store?
          </h2>
          <p className="max-w-[560px] text-[16px] leading-[24px] text-text-grey lg:text-[20px] lg:leading-[30px]">
            Give your creators attribution they can actually trust. One-click Shopify install. Pay
            commissions only for sales your creators actually drove.
          </p>
        </div>
        <Button href="#" variant="primary">
          See How it works for brands
        </Button>
      </div>
      <div className="relative mt-8 min-w-0 border-t border-border-grey lg:mt-0 lg:flex lg:flex-1 lg:items-center lg:self-stretch lg:border-l lg:border-t-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[715/685]">
          <Image
            src="/assets/hero-slider-main.png"
            alt="Creator smiling at the camera"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
