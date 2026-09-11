import type { Metadata } from "next";
import Image from "next/image";
import SignInForm from "@/components/SignInForm";

export const metadata: Metadata = {
  title: "Sign In — Higher Frequency",
  description: "Sign in or create an account to continue.",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen bg-cream p-[10px] lg:p-[24px]">
      <div className="relative flex min-h-[calc(100vh-20px)] w-full items-center justify-start overflow-hidden p-6 lg:min-h-[calc(100vh-48px)] lg:p-[48px]">
        <Image
          src="/assets/signin-photo.png"
          alt="Two people in coats standing in a desert landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/[0.02] to-black/20" />

        <div className="relative">
          <SignInForm />
        </div>
      </div>
    </main>
  );
}
