"use client";

import Link from "next/link";
import PageHero from "@/components/sections/page-hero";
import SectionHeader from "@/components/sections/section-header";
import FeatureCards from "@/components/sections/feature-cards";
import CtaBand from "@/components/sections/cta-band";

const teamMembers = [
  { name: "Ernest Ikeh", role: "Co-founder & CEO", img: "/team/team-ernest.png" },
  { name: "Kelechi Igwesi", role: "Co-founder & CTO", img: "/team/team-kelechi.png" },
  { name: "Ebuka Anyadiegwe", role: "Full stack engineer", img: "/team/team-ebuka.png" },
  { name: "Raymond Dabgdat", role: "Mobile app developer", img: "/team/team-raymond.png" },
];

const teamValues = [
  { title: "Customer first, always", desc: "Every call ends with what is best for the person waiting on their food." },
  { title: "Rooted in real food culture", desc: "We build for the communities we serve and celebrate the food they love." },
  { title: "Better every day", desc: "Small, honest improvements, shipped often, beat grand plans that never launch." },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <PageHero
        eyebrow="About Craveit"
        title={<>We help you see food <span className="italic text-brand">before</span> you order.</>}
        desc="Craveit is a video-first way to discover and order food. We bring real vendors, real kitchens and real dishes to your screen, so you always know exactly what you are getting before you tap order."
      />

      {/* Story */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container flex flex-col gap-[22px]">
          <div data-reveal className="flex flex-col gap-[14px]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">Our story</span>
            <h2 className="font-primary font-semibold text-[clamp(28px,4.4vw,44px)] leading-[1.15] text-text-primary m-0">Great food was always here. It was just <span className="italic text-brand">hard to find.</span></h2>
          </div>
          <div data-reveal className="flex flex-col gap-[18px]">
            <p className="font-secondary text-[clamp(16px,1.4vw,18px)] leading-[1.8] text-[#55596A] m-0">Craveit started with a simple frustration: the best food near you is often invisible. Photos are stale, menus say nothing, and you order half-blind, hoping it looks like the picture. Meanwhile brilliant home cooks and small kitchens had no easy way to show what they actually make.</p>
            <p className="font-secondary text-[clamp(16px,1.4vw,18px)] leading-[1.8] text-[#55596A] m-0">So we built a feed of short food videos. Scroll, see the steam and the sizzle, discover a vendor you never knew existed, and order in a few taps, with delivery handled and every order tracked to your door. Video does the honest work a photo never could, and good food finally gets seen.</p>
            <p className="font-secondary text-[clamp(16px,1.4vw,18px)] leading-[1.8] text-[#55596A] m-0">We are still early, still building, and still hungry. Every week we make ordering a little more effortless for customers and a little more rewarding for the vendors and riders who make it all happen.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full bg-white pb-0 pb-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader
            eyebrow="Meet the team"
            title={<>Say hello to <span className="italic text-brand">Team Craveit.</span></>}
            desc="Different skills, one shared appetite for building something great."
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[24px]">
            {teamMembers.map((m) => (
              <div key={m.name} data-reveal className="bg-bg-secondary rounded-[20px] py-[28px] px-[24px] flex flex-col gap-[16px] items-center text-center shadow-[0_4px_20px_rgba(0,0,0,.04)]">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden shrink-0"><img src={m.img} alt={m.name} className="w-full h-full object-cover" /></div>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-primary font-semibold text-[20px] text-text-primary m-0">{m.name}</h3>
                  <span className="font-secondary font-semibold text-[13px] tracking-[.04em] uppercase text-brand">{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-[#F5F0E8] py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader title={<>What we <span className="italic text-brand">stand for.</span></>} />
          <FeatureCards items={teamValues} variant="text" bg="#fff" />
        </div>
      </section>

      <CtaBand title="Want to join the team?" desc="We are always looking for people who care about food and move fast. See where you fit.">
        <Link href="/careers" className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-brand bg-white border border-white rounded-full py-[16px] px-[32px] no-underline shadow-[0_8px_20px_rgba(0,0,0,.14)]">View open roles</Link>
      </CtaBand>
    </div>
  );
}
