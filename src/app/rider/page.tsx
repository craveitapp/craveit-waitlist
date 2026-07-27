"use client";

import { useState } from "react";
import PageHero from "@/components/sections/page-hero";
import SectionHeader from "@/components/sections/section-header";
import FeatureCards from "@/components/sections/feature-cards";
import Checklist from "@/components/sections/checklist";
import CtaBand from "@/components/sections/cta-band";
import ApplyModal, { Field, TextInput, Select } from "@/components/apply-modal";

const riderBenefits = [
  { title: "Earn on your schedule", desc: "Go online whenever it suits you. Ride full time, part time or just during peak hours and get paid for every delivery.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /></svg>) },
  { title: "Weekly payouts", desc: "Your earnings land in your bank account every week, with clear breakdowns of every trip and bonus.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>) },
  { title: "Peak-hour bonuses", desc: "Ride during lunch and evening rush and earn extra on top of your base delivery fee.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>) },
  { title: "Support that has your back", desc: "A real team on standby for anything you need on the road, plus insurance cover while you ride.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>) },
];

const riderSteps = [
  { n: "1", title: "Apply online", desc: "Fill a short form with your details and the area you want to ride in. It takes a few minutes." },
  { n: "2", title: "Get verified", desc: "Bring your ID, a valid rider licence and your bike. We verify you and set up your account." },
  { n: "3", title: "Start earning", desc: "Go online in the rider app, accept nearby orders and get paid for every delivery you complete." },
];

const riderReqs = ["A working smartphone (Android or iOS)", "A motorcycle or bicycle in good condition", "A valid rider licence and ID", "Knowledge of local roads and shortcuts", "A helmet and safe riding habits", "18 years or older"];

const riderScreens = [
  { title: "Go online", caption: "Flip one switch to start receiving delivery requests from vendors near you.", kind: "online", delay: "0s" },
  { title: "Navigate the trip", caption: "Turn by turn directions to the kitchen and then to the customer's door.", kind: "nav", delay: ".6s" },
  { title: "Track your earnings", caption: "See every trip, tip and bonus add up, and cash out to your bank.", kind: "earn", delay: "1.2s" },
];

export default function RiderPage() {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <PageHero
        variant="grid"
        eyebrow="Ride with Craveit"
        title={<>Turn your bike into a <span className="italic text-brand">pay</span> cheque.</>}
        desc="Deliver food across your city on your own schedule and get paid for every trip. Full time, part time or just peak hours, you decide when to ride."
        illustration={
          <svg viewBox="0 0 400 340" className="w-full max-w-[440px] h-auto">
            <circle cx="200" cy="176" r="150" fill="#FBE2CE" />
            <path d="M40 288 h320" stroke="#C9A97E" strokeWidth="10" strokeLinecap="round" strokeDasharray="2 22" style={{ animation: "rhRoad .6s linear infinite" }} />
            <circle cx="96" cy="266" r="6" fill="#fff" opacity=".6" style={{ animation: "rhPuff 1.2s ease-out infinite" }} />
            <circle cx="96" cy="266" r="5" fill="#fff" opacity=".5" style={{ animation: "rhPuff 1.2s ease-out .6s infinite" }} />
            <g style={{ animation: "rhBike 2.8s ease-in-out infinite", transformOrigin: "center" }}>
              <circle cx="130" cy="262" r="34" fill="#2A2018" /><circle cx="130" cy="262" r="14" fill="#F1D9C4" />
              <circle cx="272" cy="262" r="34" fill="#2A2018" /><circle cx="272" cy="262" r="14" fill="#F1D9C4" />
              <g style={{ animation: "rhWheel .5s linear infinite", transformOrigin: "130px 262px" }}><path d="M130 240 V284 M108 262 H152 M114 246 L146 278 M146 246 L114 278" stroke="#5A4632" strokeWidth="3" strokeLinecap="round" /></g>
              <g style={{ animation: "rhWheel .5s linear infinite", transformOrigin: "272px 262px" }}><path d="M272 240 V284 M250 262 H294 M256 246 L288 278 M288 246 L256 278" stroke="#5A4632" strokeWidth="3" strokeLinecap="round" /></g>
              <path d="M130 262 L188 262 L232 210 M188 262 L214 210 L272 262" fill="none" stroke="#1E7A44" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M214 210 h30" stroke="#1E7A44" strokeWidth="10" strokeLinecap="round" />
              <rect x="94" y="196" width="56" height="52" rx="8" fill="#E96029" />
              <text x="122" y="228" textAnchor="middle" fontFamily="Fraunces,serif" fontWeight="600" fontSize="15" fill="#fff">craveit</text>
              <g style={{ animation: "rhBike 2.8s ease-in-out infinite", transformOrigin: "214px 150px" }}>
                <path d="M196 214 L204 168 Q214 158 224 168 L236 206 Q238 214 230 214 Z" fill="#E96029" />
                <path d="M204 174 L236 200" stroke="#C74718" strokeWidth="3" strokeLinecap="round" />
                <path d="M224 180 L250 206" stroke="#E96029" strokeWidth="12" strokeLinecap="round" />
                <circle cx="252" cy="208" r="7" fill="#F1D2B0" />
                <path d="M212 210 L206 250 L188 262" fill="none" stroke="#2B3A67" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M182 262 h16" stroke="#131927" strokeWidth="8" strokeLinecap="round" />
                <path d="M210 150 h12 v14 h-12 Z" fill="#B9763F" />
                <circle cx="216" cy="138" r="21" fill="#F1D2B0" />
                <path d="M195 138 a21 21 0 0 1 42 0 Z" fill="#C0341F" />
                <path d="M195 138 a21 21 0 0 1 42 0" fill="none" stroke="#8A2414" strokeWidth="3" />
                <rect x="193" y="134" width="46" height="9" rx="4.5" fill="#8A2414" />
                <path d="M237 132 q9 4 4 14" fill="none" stroke="#F2C230" strokeWidth="4" strokeLinecap="round" />
                <path d="M214 130 a15 15 0 0 1 15 12 L214 146 Z" fill="#7FB8E6" opacity=".85" />
                <path d="M204 126 q8 -8 20 -5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".6" />
              </g>
            </g>
          </svg>
        }
      >
        <div><button onClick={() => setModal(true)} className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-white bg-brand border border-brand rounded-full py-[16px] px-[28px] cursor-pointer shadow-[0_8px_20px_rgba(233,96,41,.24)]">Apply to ride</button></div>
      </PageHero>

      {/* Benefits */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader
            title={<>Why ride with <span className="italic text-brand">Craveit.</span></>}
            desc="Good money, real flexibility, and a team that treats you right."
          />
          <FeatureCards items={riderBenefits} variant="icon" />
        </div>
      </section>

      {/* Requirements */}
      <section className="w-full bg-[#F5F0E8] py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex flex-col gap-[18px]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">What you need</span>
            <h2 className="font-primary font-semibold text-[clamp(30px,4.2vw,48px)] leading-[1.15] text-text-primary m-0">Getting started is simple.</h2>
            <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">If you have got these covered, you are ready to ride with Craveit.</p>
            <Checklist items={riderReqs.map((r) => ({ text: r }))} variant="basic" columns={1} />
          </div>
          <div data-reveal className="flex justify-center">
            <svg viewBox="0 0 360 320" className="w-full max-w-[400px] h-auto">
              <circle cx="180" cy="160" r="150" fill="#FBE2CE" />
              <rect x="108" y="56" width="144" height="208" rx="22" fill="#131927" />
              <rect x="118" y="68" width="124" height="184" rx="14" fill="#EAF3EC" />
              <path d="M118 120 q40 -20 70 6 t54 -2" fill="none" stroke="#C9A97E" strokeWidth="6" />
              <path d="M118 170 q50 20 80 -4 t44 8" fill="none" stroke="#C9A97E" strokeWidth="6" />
              <circle cx="150" cy="132" r="10" fill="#1E7A44" />
              <circle cx="214" cy="196" r="12" fill="#E96029" /><path d="M214 190 v10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <rect x="132" y="222" width="96" height="20" rx="10" fill="#E96029" />
              <g transform="translate(236,180)"><path d="M0 40a40 40 0 0 1 80 0Z" fill="#C0341F" /><rect x="6" y="36" width="68" height="12" rx="6" fill="#8A2414" /><rect x="20" y="20" width="40" height="14" rx="7" fill="#F1D9C4" /></g>
            </svg>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-bg-secondary py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader title={<>How it <span className="italic text-brand">works.</span></>} />
          <FeatureCards items={riderSteps} variant="numbered" />
        </div>
      </section>

      {/* Rider app preview */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader
            eyebrow="The rider app"
            title={<>Everything you need to <span className="italic text-brand">ride.</span></>}
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(24px,4vw,40px)] justify-items-center max-w-[860px] mx-auto">
            {riderScreens.map((s) => (
              <div key={s.kind} data-reveal className="w-[240px]">
                <div className="relative w-[240px] aspect-[9/19.5] rounded-[40px] overflow-hidden border-[6px] border-text-primary bg-white shadow-[0_20px_44px_rgba(0,0,0,.16)] mx-auto" style={{ animation: `rdFloat 5s ease-in-out infinite`, animationDelay: s.delay }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[74px] h-[18px] bg-text-primary rounded-b-[14px] z-[10]" />
                  <div className="h-[64px] bg-brand flex items-end py-0 px-[16px] pb-[12px]"><span className="font-primary font-semibold text-[16px] text-white">{s.title}</span></div>
                  <div className="p-[16px] flex flex-col gap-[12px]">
                    {s.kind === "online" && (<>
                      <div className="rounded-[16px] bg-[#EAF6EE] p-[18px] flex flex-col gap-[10px] items-center"><span className="font-secondary text-[12px] text-[#1E7A44] font-semibold">You&apos;re online</span><span className="w-[64px] h-[32px] rounded-full relative" style={{ animation: "rdTrack 3.6s ease-in-out infinite" }}><span className="absolute top-[3px] left-[3px] w-[26px] h-[26px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.2)]" style={{ animation: "rdKnob 3.6s ease-in-out infinite" }} /></span></div>
                      <div className="rounded-[14px] bg-[#F2ECE3] p-[14px] flex flex-col gap-[8px]" style={{ animation: "rdCardIn 3.6s ease-in-out infinite" }}><span className="font-secondary text-[12px] font-semibold text-text-primary">New request · 1.2km</span><span className="h-[9px] w-[80%] rounded-[5px] bg-[#D8CFC2]" /><div className="flex gap-[8px] mt-[2px]"><span className="flex-1 h-[30px] rounded-full bg-brand" /><span className="w-[44px] h-[30px] rounded-full bg-[#E4DCD0]" /></div></div>
                    </>)}
                    {s.kind === "nav" && (<>
                      <div className="h-[150px] rounded-[16px] bg-[#EAF3EC] relative overflow-hidden"><svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full"><path d="M20 130 q40 -30 70 -10 t80 -60" fill="none" stroke="#E96029" strokeWidth="6" strokeLinecap="round" strokeDasharray="300" style={{ animation: "rdDraw 3.4s ease-in-out infinite" }} /><circle cx="20" cy="130" r="8" fill="#1E7A44" /><circle cx="170" cy="60" r="9" fill="#E96029" /></svg><span className="absolute top-[53px] left-[163px] w-[18px] h-[18px] rounded-full bg-brand opacity-[.6]" style={{ animation: "rdPing 3.4s ease-out infinite" }} /></div>
                      <div className="rounded-[14px] bg-[#F2ECE3] p-[14px] flex items-center gap-[10px]"><span className="w-[34px] h-[34px] rounded-full bg-brand inline-flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span><div className="flex-1 flex flex-col gap-[5px]"><span className="h-[9px] w-[70%] rounded-[5px] bg-[#D8CFC2]" /><span className="h-[8px] w-[45%] rounded-[5px] bg-[#E4DCD0]" /></div></div>
                    </>)}
                    {s.kind === "earn" && (<>
                      <div className="rounded-[16px] bg-[#FBE2CE] p-[18px] flex flex-col gap-[6px]"><span className="font-secondary text-[12px] text-[#B45309] font-semibold">Today</span><span className="font-primary font-semibold text-[28px] text-text-primary" style={{ animation: "rdCount 2.4s ease-in-out infinite" }}>₦18,600</span></div>
                      <div className="flex items-end gap-[6px] h-[52px] py-0 px-[2px]">{[45, 70, 55, 92, 75].map((h, i) => (<span key={i} className="flex-1 rounded-t-[5px]" style={{ background: i === 3 ? "#E96029" : i % 2 ? "#EFA45E" : "#F3C99B", height: `${h}%`, transformOrigin: "bottom", animation: `rdBar 1.8s ease-in-out ${i * 0.15}s infinite alternate` }} />))}</div>
                      <div className="rounded-[14px] bg-[#F2ECE3] p-[12px] flex items-center justify-between" style={{ animation: "rdChip 3s ease-in-out infinite" }}><span className="h-[9px] w-[55%] rounded-[5px] bg-[#D8CFC2]" /><span className="font-secondary text-[12px] text-[#1E7A44] font-semibold">+₦1,200</span></div>
                      <div className="h-[34px] rounded-full bg-[#1E7A44] flex items-center justify-center font-secondary text-[12px] font-semibold text-white">Cash out</div>
                    </>)}
                  </div>
                </div>
                <div className="py-[18px] px-[6px] text-center flex flex-col gap-[6px]">
                  <h3 className="font-primary font-semibold text-[18px] text-text-primary m-0">{s.title}</h3>
                  <p className="font-secondary text-[13.5px] leading-[1.6] text-text-secondary m-0">{s.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to hit the road?" desc="Apply in minutes and start earning on your own schedule across your city.">
        <button onClick={() => setModal(true)} className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-brand bg-white border border-white rounded-full py-[16px] px-[32px] cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,.14)]">Apply to ride</button>
      </CtaBand>

      <ApplyModal open={modal} onClose={() => setModal(false)} eyebrow="Delivery rider" title="Apply to become a rider" successText="Thanks for applying to ride with Craveit. Our team will review your details and reach out about verification and getting you on the road.">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
          <Field label="Full name"><TextInput placeholder="Emeka Obi" required /></Field>
          <Field label="Phone number"><TextInput type="tel" placeholder="080 0000 0000" required /></Field>
        </div>
        <Field label="Email address"><TextInput type="email" placeholder="emeka@example.com" required /></Field>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
          <Field label="City you'll ride in"><TextInput placeholder="e.g. Enugu" required /></Field>
          <Field label="Vehicle type"><Select required defaultValue=""><option value="">Select</option><option>Motorcycle</option><option>Bicycle</option><option>Car</option></Select></Field>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
          <Field label="Availability"><Select defaultValue=""><option value="">Select</option><option>Full time</option><option>Part time</option><option>Weekends only</option><option>Peak hours only</option></Select></Field>
          <Field label="Rider's licence?"><Select required defaultValue=""><option value="">Select</option><option>Yes, I have a valid licence</option><option>No, not yet</option></Select></Field>
        </div>
      </ApplyModal>
    </div>
  );
}
