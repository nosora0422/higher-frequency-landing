"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignInForm() {
  const [view, setView] = useState<"default" | "shopify">("default");

  return (
    <div className="flex w-full max-w-[539px] flex-col items-center gap-[55px] bg-cream-secondary p-[40px]">
      <div className="w-full overflow-hidden">
        <div
          className={`flex w-[200%] items-start transition-transform duration-500 ease-in-out ${
            view === "shopify" ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          {/* Shopify owner login panel */}
          <div className="w-1/2 shrink-0">
            <div className="flex w-full items-start gap-[40px]">
              <div className="flex flex-1 flex-col gap-[12px]">
                <h1 className="font-display text-[32px] leading-[38px] tracking-[-0.9px] text-ink sm:text-[40px] sm:leading-[46px] sm:tracking-[-1.2px]">
                  Start Your Trip
                </h1>
                <p className="text-[14px] leading-[21px] text-ash">
                  Sign in or create an account to continue
                </p>
              </div>
              <button
                type="button"
                aria-label="Back"
                onClick={() => setView("default")}
                className="-m-[16px] flex shrink-0 items-center justify-center rounded-full p-[16px] transition-colors duration-200 hover:bg-ink/5"
              >
                <Image src="/assets/icon-arrow-back.svg" alt="" width={24} height={24} />
              </button>
            </div>

            <form
              className="mt-[56px] flex flex-col items-center bg-cream-secondary px-0 py-[40px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex w-full flex-col gap-[24px]">
                <div className="flex h-[56px] w-full items-stretch overflow-hidden rounded-t-[4px] border border-border-grey bg-paper transition-colors duration-200 focus-within:border-ink">
                  <input
                    type="text"
                    name="shopify-store"
                    placeholder="yourstorename"
                    autoComplete="off"
                    className="min-w-0 flex-1 bg-transparent px-[16px] text-[16px] tracking-[0.5px] text-ash placeholder:text-ash focus:outline-none"
                  />
                  <div className="flex shrink-0 items-center bg-ash px-[16px]">
                    <span className="whitespace-nowrap text-[16px] tracking-[0.5px] text-cream-secondary">
                      .myshopify.com
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-1 rounded-pill border border-ink px-[20px] py-[12px] text-[16px] text-ink transition-colors duration-200 ease-out hover:bg-ink hover:text-paper"
                >
                  Continue With Shopify
                  <Image
                    src="/assets/icon-arrow-outward-dark.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="transition-[filter] duration-200 ease-out group-hover:invert"
                  />
                </button>
              </div>
            </form>
          </div>

          {/* Default sign-in panel */}
          <div className="w-1/2 shrink-0">
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-display text-[32px] leading-[38px] tracking-[-0.9px] text-ink sm:text-[40px] sm:leading-[46px] sm:tracking-[-1.2px]">
                Start Your Trip
              </h1>
              <p className="text-[14px] leading-[21px] text-ash">
                Sign in or create an account to continue
              </p>
            </div>

            <div className="mt-[55px] flex flex-col items-start gap-[16px]">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-1 rounded-pill bg-ink px-[20px] py-[12px] text-[16px] text-paper transition-colors duration-200 ease-out hover:bg-ash"
              >
                Sign In / Sign Up
                <Image src="/assets/icon-arrow-outward-light.svg" alt="" width={24} height={24} />
              </button>
              <button
                type="button"
                onClick={() => setView("shopify")}
                className="group flex w-full flex-col items-center gap-[7px] py-[4px]"
              >
                <span className="text-center text-[16px] font-medium text-ash underline decoration-solid underline-offset-2 transition-colors duration-200 group-hover:text-ink">
                  Have a Shopify store?
                </span>
                <span className="text-center text-[14px] text-ash">Get started in one step.</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[4px]">
        <p className="text-[14px] leading-[21px] text-ink">Your account is secured with Auth0</p>
        <p className="text-[12px] leading-[16px] text-ash">
          Your account will be securely set up after registration. If you already have an
          account, your existing data will be retrieved automatically.
        </p>
      </div>
    </div>
  );
}
