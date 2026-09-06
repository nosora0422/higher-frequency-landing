import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import BrandCarousel from "@/components/BrandCarousel";
import Tiers from "@/components/Tiers";
import ForBrands from "@/components/ForBrands";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StatStrip />
      <Problem />
      <HowItWorks />
      <Proof />
      <BrandCarousel />
      <Tiers />
      <ForBrands />
      <FinalCta />
      <Footer />
    </>
  );
}
