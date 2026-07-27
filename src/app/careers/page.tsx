"use client";

import Link from "next/link";
import CtaBand from "@/components/sections/cta-band";

const careerValues = [
  { title: "Move fast, ship food", desc: "We are small and we like it that way. Ideas go from a chat to live in the app in days, not quarters." },
  { title: "Local to the core", desc: "We build for the communities we serve, with people who know their streets, vendors and cravings." },
  { title: "Own real work", desc: "No busywork and no waiting for permission. You get real ownership and the room to run with it." },
  { title: "Grow with us", desc: "Join early and grow as Craveit grows. Learn fast, stretch often, and build a career, not just a role." },
];

const careerRoles = [
  { title: "Rider operations lead", team: "Operations", type: "Full time", loc: "Enugu, on-site" },
  { title: "Vendor success associate", team: "Growth", type: "Full time", loc: "Enugu, on-site" },
  { title: "Mobile engineer", team: "Engineering", type: "Full time", loc: "Hybrid, Enugu" },
  { title: "Content & social lead", team: "Marketing", type: "Full time", loc: "Hybrid, Enugu" },
  { title: "Customer support agent", team: "Support", type: "Full time", loc: "Enugu, on-site" },
];

const careerPerks = [
  "Competitive pay and early equity",
  "Health cover for you and your family",
  "Free Craveit credit every month",
  "Real ownership and fast growth",
  "A warm, ambitious team",
  "The best jollof in the office",
];

const Check = () => (
  <span className="w-[22px] h-[22px] rounded-full bg-brand inline-flex items-center justify-center shrink-0 mt-[1px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg></span>
);

export default function CareersPage() {
  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden w-full bg-bg-cream py-[clamp(56px,8vw,96px)]">
        <span aria-hidden className="absolute bottom-[-3vw] left-1/2 -translate-x-1/2 font-primary font-semibold text-[clamp(110px,18vw,280px)] leading-none text-brand opacity-[.07] tracking-[-.03em] whitespace-nowrap pointer-events-none">careers</span>
        <div className="craveit-container relative z-[1] flex flex-col gap-[22px]">
          <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">Careers at Craveit</span>
          <h1 className="font-primary font-semibold text-[clamp(40px,6vw,72px)] leading-[1.06] tracking-[-.02em] text-text-primary m-0">Help us feed a city, one <span className="italic text-brand">video</span> at a time.</h1>
          <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0 max-w-[560px]">We are a small team building the fastest, most fun way to order food. If you move quickly, care deeply and love good food, we would love to meet you.</p>
          <div><a href="#open-roles" className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-white bg-brand border border-brand rounded-full py-[16px] px-[28px] no-underline shadow-[0_8px_20px_rgba(233,96,41,.24)]">See open roles</a></div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <div data-reveal className="text-center mb-[clamp(40px,6vw,56px)] max-w-[640px] mx-auto">
            <h2 className="font-primary font-semibold text-[clamp(28px,4.4vw,48px)] leading-[1.15] text-text-primary m-0 mb-[14px]">What it is like to <span className="italic text-brand">work</span> here.</h2>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0">Small team, big appetite. Here is what we care about.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[24px]">
            {careerValues.map((v) => (
              <div key={v.title} data-reveal className="bg-bg-secondary rounded-[20px] p-[28px] flex flex-col gap-[12px]">
                <h3 className="font-primary font-semibold text-[20px] text-text-primary m-0">{v.title}</h3>
                <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="w-full bg-[#F5F0E8] py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <div data-reveal className="flex flex-col gap-[18px]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">Perks &amp; benefits</span>
            <h2 className="font-primary font-semibold text-[clamp(30px,4.2vw,48px)] leading-[1.15] text-text-primary m-0">We look after our team.</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[12px] mt-[8px]">
              {careerPerks.map((p) => (
                <div key={p} className="flex items-start gap-[12px] bg-white rounded-[12px] p-[16px] shadow-[0_1px_3px_rgba(0,0,0,.04)]">
                  <Check /><p className="m-0 font-secondary text-[14.5px] leading-[1.5] text-text-primary font-medium">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="w-full bg-bg-secondary py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <div data-reveal className="text-center mb-[clamp(36px,5vw,48px)]">
            <h2 className="font-primary font-semibold text-[clamp(28px,4.4vw,48px)] leading-[1.15] text-text-primary m-0 mb-[12px]">Open <span className="italic text-brand">roles.</span></h2>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0">Find your seat at the table. Do not see your role? Reach out anyway.</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            {careerRoles.map((r) => (
              <div key={r.title} data-reveal className="flex flex-wrap items-center justify-between gap-[16px] bg-white rounded-[16px] py-[22px] px-[24px] shadow-[0_4px_20px_rgba(0,0,0,.05)]">
                <div className="flex flex-col gap-[8px] min-w-[200px]">
                  <h3 className="font-primary font-semibold text-[clamp(18px,2vw,22px)] text-text-primary m-0">{r.title}</h3>
                  <div className="flex flex-wrap gap-[8px]">
                    <span className="font-secondary text-[12.5px] font-semibold text-brand bg-[#FBE2CE] rounded-full py-[4px] px-[12px]">{r.team}</span>
                    <span className="font-secondary text-[12.5px] font-medium text-text-secondary bg-[#F2ECE3] rounded-full py-[4px] px-[12px]">{r.type}</span>
                    <span className="font-secondary text-[12.5px] font-medium text-text-secondary bg-[#F2ECE3] rounded-full py-[4px] px-[12px]">{r.loc}</span>
                  </div>
                </div>
                <Link href="/contactus" className="inline-flex items-center gap-[8px] font-primary font-semibold text-[15px] text-text-primary no-underline shrink-0">Apply <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Do not see the right role?" desc="We are always glad to meet great people. Tell us what you do and how you would help Craveit grow.">
        <Link href="/contactus" className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-brand bg-white border border-white rounded-full py-[16px] px-[32px] no-underline shadow-[0_8px_20px_rgba(0,0,0,.14)]">Send an open application</Link>
      </CtaBand>
    </div>
  );
}
