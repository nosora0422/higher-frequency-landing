import Button from "./Button";

export default function FinalCta() {
  return (
    <section className="flex flex-col items-center gap-[20px] px-5 py-16 text-center md:px-10 lg:gap-[24px] lg:px-[64px] lg:py-[96px]">
      <h2 className="text-[34px] leading-[36px] tracking-[-0.4px] font-normal text-text sm:text-[48px] sm:leading-[48px] lg:text-[75px] lg:leading-[72px] lg:tracking-[-1.125px]">
        Lock your share, right now.
      </h2>
      <p className="text-[16px] leading-[24px] text-text-grey lg:text-[20px] lg:leading-[30px]">
        Free to join. Your first link is ready in about 2 minutes.
      </p>
      <Button href="#" variant="primary">
        Join Now
      </Button>
    </section>
  );
}
