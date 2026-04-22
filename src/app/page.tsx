import BuiltForTrust from "@/components/homepage/built-for-trust";
import DiscoverFood from "@/components/homepage/discover-food";
import DiscoverMeals from "@/components/homepage/discover-meals";
import Experience from "@/components/homepage/experience";
import FAQSection from "@/components/homepage/faq";
import Grow from "@/components/homepage/grow";
import HeroSection from "@/components/homepage/hero";
import LocationMarquee from "@/components/homepage/location-marquee";
import ScrollToBite from "@/components/homepage/scroll-bite";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <section id="home">
        <HeroSection />
      </section>
      <LocationMarquee />
      <DiscoverMeals />
      <section id="works">
        <ScrollToBite />
        <DiscoverFood />
        <BuiltForTrust />
        <Grow />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <Experience />
    </main>
  );
}
