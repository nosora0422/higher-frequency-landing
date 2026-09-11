import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist — Higher Frequency",
  description:
    "Sign up below to secure your spot and be the first to know when we launch our next adventure.",
};

export default function WaitlistPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream lg:flex-row">
      <div className="p-[10px] lg:flex lg:w-1/2 lg:p-[24px]">
        <div className="relative flex min-h-[520px] w-full flex-col justify-between overflow-hidden p-6 lg:min-h-0 lg:p-[48px]">
          <Image
            src="/assets/waitlist-photo.png"
            alt="Couple walking hand in hand"
            fill
            className="object-cover"
            style={{ objectPosition: "28% 8%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/[0.02] to-black/20" />

          <div className="relative flex flex-col gap-[8px] text-cream-secondary">
            <p className="font-display text-[28px] leading-[34px] tracking-[-0.6px] sm:text-[40px] sm:leading-[46px] sm:tracking-[-1.2px]">
              &ldquo;Life is about the journey, not the destination.&rdquo;
            </p>
            <p className="text-[11px] font-semibold tracking-[0.22px]">
              - RALPH WALDO EMERSON
            </p>
          </div>

          <Link
            href="/"
            className="relative font-body text-[22px] font-semibold leading-tight text-paper sm:text-[26px]"
          >
            Higher
            <br />
            Frequency
          </Link>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-16 lg:px-[80px] lg:py-[80px]">
        <WaitlistForm />
      </div>
    </main>
  );
}
