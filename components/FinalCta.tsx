import Button from "./Button";

export default function FinalCta() {
  return (
    <section className="flex flex-col items-center gap-[24px] px-[64px] py-[96px] text-center">
      <h2 className="text-[75px] leading-[72px] tracking-[-1.125px] font-normal text-text">
        Lock your share, right now.
      </h2>
      <p className="text-[20px] leading-[30px] text-text-grey">
        Free to join. Your first link is ready in about 2 minutes.
      </p>
      <Button href="#" variant="primary">
        Join Now
      </Button>
    </section>
  );
}
