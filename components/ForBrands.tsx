import Image from "next/image";
import Button from "./Button";

export default function ForBrands() {
  return (
    <section
      id="for-brands"
      className="flex items-center justify-between border-b border-border-grey bg-white py-[96px]"
    >
      <div className="flex flex-1 min-w-0 flex-col justify-between self-stretch px-[64px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="max-w-[560px] text-[40px] leading-[44px] tracking-[-1.2px] font-medium text-text">
            Got your own Shopify store?
          </h2>
          <p className="max-w-[560px] text-[20px] leading-[30px] text-text-grey">
            Give your creators attribution they can actually trust. One-click Shopify install. Pay
            commissions only for sales your creators actually drove.
          </p>
        </div>
        <Button href="#" variant="primary">
          See How it works for brands
        </Button>
      </div>
      <div className="relative flex-1 min-w-0 self-stretch border-l border-border-grey">
        <div className="relative aspect-[715/685] w-full overflow-hidden">
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
