import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import CtaBand from "@/components/home/CtaBand";
import ServicesSection from "@/components/home/ServicesSection";
import WhatYouNeedToKnow from "@/components/home/WhatYouNeedToKnow";
import RightChoice from "@/components/home/RightChoice";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import StatsCounter from "@/components/home/StatsCounter";
import Accreditations from "@/components/home/Accreditations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Welcome to Top Removals London</h1>
      <HeroSlider />

      <CtaBand
        heading="Are You Looking For A House Removal Quote?"
        subtext="Estimate your house moving cost online now"
        buttonLabel="Removal Calculator"
        buttonHref="/removal-calculator"
      />

      <ServicesSection />

      <CtaBand heading="Save Money On End Of Tenancy Cleaning And Carpet / Upholstery Cleaning Services" />

      <WhatYouNeedToKnow />

      <RightChoice />

      <Testimonials />

      <NewsSection />

      <StatsCounter />

      <Accreditations />
    </>
  );
}
