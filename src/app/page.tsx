import Experience from "@/components/experience";
import FAQSection from "@/components/faq";
import Grow from "@/components/grow";
import HeroSection from "@/components/hero";
import ScrollToBite from "@/components/scroll-bite";
import WhatsDifferent from "@/components/whatsDifferent";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <section id="home">
        <HeroSection />
      </section>
      <section id="works">
        <ScrollToBite />
        <Grow />
        <WhatsDifferent />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <Experience />
    </main>
  );
}
