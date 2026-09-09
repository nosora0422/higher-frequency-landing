"use client";

import Image from "next/image";
import { useState } from "react";
import TextField from "./TextField";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex w-full max-w-[440px] flex-col items-start gap-[40px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-col gap-[12px]">
        <h1 className="font-display text-[32px] leading-[38px] tracking-[-0.9px] text-ink sm:text-[40px] sm:leading-[46px] sm:tracking-[-1.2px]">
          Join the Waitlist
        </h1>
        <p className="text-[14px] leading-[21px] text-ash">
          Sign up below to secure your spot and be the first to know when we launch our next
          adventure.
        </p>
      </div>

      <div className="flex w-full flex-col gap-[24px]">
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="your@youremail.com"
          autoComplete="email"
          required
        />
        <TextField
          label="Instagram Handle"
          name="instagram"
          type="text"
          placeholder="@yourinstagram"
        />
        <TextField label="TikTok Handle" name="tiktok" type="text" placeholder="@yourtiktok" />
      </div>

      <button
        type="submit"
        disabled={submitted}
        className="inline-flex w-full items-center justify-center gap-1 rounded-pill bg-ink px-[20px] py-[12px] text-[16px] text-paper transition-colors duration-200 ease-out hover:bg-ash disabled:hover:bg-ink"
      >
        {submitted ? "You're on the list" : "Join Waitlist"}
        <Image src="/assets/icon-arrow-outward-light.svg" alt="" width={24} height={24} />
      </button>
    </form>
  );
}
