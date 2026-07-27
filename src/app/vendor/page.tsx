"use client";

import Link from "next/link";
import { StoreBadges } from "@/components/ui";
import PageHero from "@/components/sections/page-hero";
import SectionHeader from "@/components/sections/section-header";
import FeatureCards from "@/components/sections/feature-cards";
import Checklist from "@/components/sections/checklist";
import { FlatAccordion } from "@/components/sections/faq-section";
import CtaBand from "@/components/sections/cta-band";

const vendorCookSteps = [
  { title: "Built for vendors who actually cook.", desc: "Craveit gives food vendors who cook real food the visibility they deserve.", img: "/images/vendor-cook-illust-1.png" },
  { title: "Video gets you seen", desc: "Your food isn't buried in a menu. It plays as a short video right on people's screens. Customers see exactly what they are buying before they order.", img: "/images/vendor-cook-illust-2.png" },
  { title: "Grow without the guesswork", desc: "Track your orders and watch your customer base grow, all from your vendor app.", img: "/images/vendor-cook-illust-3.png" },
];

const vendorReqs = [
  { title: "A real kitchen", desc: "in one of our active delivery zones" },
  { title: "Consistent food quality", desc: "and taste tested before you go live" },
  { title: "A smartphone", desc: "to record short food videos (we'll teach you)" },
  { title: "The Craveit app", desc: "downloaded on your phone, our team reviews every application and gets back to you within 24 hours." },
];

const vendorFaqData = [
  { q: "How and when do I get paid?", a: "Your earnings are paid directly to your registered Nigerian bank account within 24 hours of each completed and confirmed order." },
  { q: "Who handles delivery? Do I need to arrange riders?", a: "You do not arrange or pay for delivery. Craveit handles all delivery logistics entirely. When an order comes in you prepare the food and a Craveit rider picks it up and delivers it." },
  { q: "What does it cost to sell on Craveit?", a: "There is no setup fee. You only pay a small commission on completed orders, and Craveit covers delivery, so you keep more of what you earn." },
  { q: "How do I record good food videos?", a: "You just need your smartphone. Our team gives you simple guidance on lighting and angles, and most vendors are filming great clips within their first week." },
];

const appScreens = [
  { title: "Dashboard", caption: "See today's sales, orders and rating at a glance the moment you open the app.", img: "/images/vendor-dashboard.png" },
  { title: "Incoming orders", caption: "Accept orders in one tap and track every one from kitchen to doorstep.", img: "/images/vendor-orders.png", toast: true },
  { title: "Your menu", caption: "Add dishes, set prices and update availability whenever you like.", img: "/images/vendor-menu.png" },
  { title: "Earnings", caption: "Watch your weekly earnings grow and get paid the next working day.", img: "/images/vendor-earnings.png" },
  { title: "Payouts", caption: "Cash out to your bank account and see every payment clearly itemised.", img: "/images/vendor-payout.png" },
  { title: "Customer reviews", caption: "Read what customers say and build a rating that brings in repeat orders.", img: "/images/vendor-reviews.png" },
  { title: "Live chat support", caption: "Reach the Craveit team any time you need a hand, right inside the app.", img: "/images/vendor-chat.png", chat: true },
];
const appLoop = [...appScreens, ...appScreens, ...appScreens, ...appScreens];

export default function VendorPage() {
  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <PageHero
        variant="grid"
        eyebrow="Vendor"
        title={<>Your food. Your <span className="italic text-brand">story</span>. Your income.</>}
        desc="Join hundreds of kitchens, restaurants and food vendors reaching new customers across Enugu every day on Craveit."
        illustration={
          <div className="relative w-full max-w-[560px] aspect-[4/3]">
            <div className="absolute inset-0 animate-[vhFloat_5.5s_ease-in-out_infinite]"><img src="/images/hero-vendor-illust.png" alt="Vendor cooking food" className="w-full h-full object-contain" /></div>
            <div aria-hidden className="absolute left-[46%] top-[24%] flex gap-[9px] pointer-events-none">
              <span className="w-[7px] h-[26px] rounded-full" style={{ background: "linear-gradient(#fff,rgba(255,255,255,0))", animation: "vhSteam 2.6s ease-out infinite" }} />
              <span className="w-[7px] h-[26px] rounded-full" style={{ background: "linear-gradient(#fff,rgba(255,255,255,0))", animation: "vhSteam 2.6s ease-out .5s infinite" }} />
              <span className="w-[7px] h-[26px] rounded-full" style={{ background: "linear-gradient(#fff,rgba(255,255,255,0))", animation: "vhSteam 2.6s ease-out 1s infinite" }} />
            </div>
            <span aria-hidden className="absolute left-[40%] bottom-[26%] w-[14px] h-[14px] rounded-full bg-brand" style={{ animation: "vhSpark 1.6s ease-in-out infinite" }} />
            <span aria-hidden className="absolute right-[16%] bottom-[34%] w-[22px] h-[22px] rounded-full border-2 border-brand" style={{ animation: "vhRing 2.4s ease-out infinite" }} />
          </div>
        }
      >
        <StoreBadges />
      </PageHero>

      {/* Cook steps */}
      <section className="w-full bg-bg-secondary py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader title={<>Built for vendors who actually <span className="italic text-brand">cook.</span></>} />
          <FeatureCards items={vendorCookSteps} variant="image" />
        </div>
      </section>

      {/* Requirements */}
      <section className="w-full bg-[#F5F0E8] py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex flex-col gap-[18px]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">Requirements</span>
            <h2 className="font-primary font-semibold text-[clamp(30px,4.2vw,48px)] leading-[1.15] text-text-primary m-0">What you need to get started.</h2>
            <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">We keep it simple. If you cook real food, you&apos;re already 90% there.</p>
            <Checklist items={vendorReqs} variant="detailed" columns={1} />
          </div>
          <div data-reveal className="flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square"><img src="/images/vendor-req-illust.png" alt="Vendor requirements checklist" className="w-full h-full object-contain" /></div>
          </div>
        </div>
      </section>

      {/* Vendor FAQ */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)]">
          <div data-reveal className="flex flex-col gap-[22px]">
            <h2 className="font-primary font-normal text-[clamp(32px,4.4vw,50px)] leading-[1.08] text-text-primary m-0">Questions vendors ask us most</h2>
            <p className="font-secondary text-[clamp(15px,1.7vw,22px)] leading-[1.5] text-text-secondary m-0 max-w-[320px]">Everything you need to know about being a vendor on Craveit</p>
            <div className="relative w-full max-w-[420px] aspect-[4/3]"><img src="/images/faq-illust.png" alt="FAQ illustration" className="w-full h-full object-contain" /></div>
          </div>
          <div data-reveal className="flex flex-col gap-[12px]">
            <FlatAccordion items={vendorFaqData} />
            <Link href="/faq" className="self-start mt-[10px] inline-flex items-center gap-[8px] font-primary font-semibold text-[16px] text-brand no-underline">Read more <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
          </div>
        </div>
      </section>

      {/* Auto-scrolling app preview */}
      <section className="w-full bg-bg-cream py-[clamp(56px,8vw,88px)] overflow-hidden">
        <div className="craveit-container text-center mb-[clamp(36px,5vw,52px)]">
          <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">The vendor app</span>
          <h2 className="font-primary font-semibold text-[clamp(28px,4.4vw,48px)] leading-[1.15] text-text-primary mt-[12px] mb-0">Run your kitchen from your <span className="italic text-brand">pocket.</span></h2>
        </div>
        <div className="w-full overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
          <div className="vendor-track flex w-max animate-[marquee_72s_linear_infinite]">
            {appLoop.map((s, i) => (
              <div key={i} className="vendor-card w-[230px] shrink-0 mr-[28px]">
                <div className="vendor-phone relative w-[230px] aspect-[9/19.5] rounded-[40px] overflow-hidden border-[6px] border-text-primary bg-white shadow-[0_20px_44px_rgba(0,0,0,.18)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[74px] h-[18px] bg-text-primary rounded-b-[14px] z-[10]" />
                  <div className="h-[64px] bg-brand flex items-end py-0 px-[16px] pb-[12px]"><span className="font-primary font-semibold text-[16px] text-white">{s.title}</span></div>
                  <div className="p-[16px] flex flex-col gap-[12px] relative" style={{ height: "calc(100% - 64px)" }}>
                    <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover object-top z-[5]" style={{ animation: "vendorScreenScroll 7s ease-in-out infinite alternate" }} />
                    {s.toast && (
                      <div aria-hidden className="absolute top-[52px] left-[12px] right-[12px] z-[6] flex items-center gap-[10px] py-[10px] px-[12px] rounded-[14px] bg-white shadow-[0_10px_24px_rgba(19,25,39,.18)]" style={{ animation: "vaToast 6s ease-in-out infinite" }}>
                        <span className="w-[30px] h-[30px] rounded-full bg-brand inline-flex items-center justify-center shrink-0" style={{ animation: "vaBadge 1.4s ease-in-out infinite" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg></span>
                        <div className="flex-1 flex flex-col gap-[2px] min-w-0"><span className="font-secondary font-bold text-[12px] text-text-primary">New order · ₦7,600</span><span className="font-secondary text-[11px] text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">Party jollof &amp; chicken</span></div>
                      </div>
                    )}
                    {s.chat && (
                      <div aria-hidden className="absolute left-[12px] right-[12px] bottom-[64px] z-[6] flex flex-col gap-[8px] items-start">
                        <span className="inline-flex gap-[4px] items-center py-[9px] px-[12px] rounded-[14px_14px_14px_4px] bg-[#EFEAE3] shadow-[0_4px_12px_rgba(0,0,0,.08)]" style={{ animation: "vaType 5s ease-in-out infinite" }}>
                          <span className="w-[6px] h-[6px] rounded-full bg-[#9AA0AD]" style={{ animation: "vaDot 1s ease-in-out infinite" }} />
                          <span className="w-[6px] h-[6px] rounded-full bg-[#9AA0AD]" style={{ animation: "vaDot 1s ease-in-out .16s infinite" }} />
                          <span className="w-[6px] h-[6px] rounded-full bg-[#9AA0AD]" style={{ animation: "vaDot 1s ease-in-out .32s infinite" }} />
                        </span>
                        <span className="self-end max-w-[78%] py-[9px] px-[12px] rounded-[14px_14px_4px_14px] bg-brand font-secondary text-[11.5px] leading-[1.4] text-white shadow-[0_6px_16px_rgba(233,96,41,.3)]" style={{ animation: "vaReply 5s ease-in-out infinite" }}>When will today&apos;s payout hit my account?</span>
                      </div>
                    )}
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

      {/* CTA */}
      <CtaBand
        id="cta"
        title="Start selling on Craveit today."
        desc="Download the app, sign up your kitchen, and turn your cooking into orders. No setup cost, we handle delivery."
        illustration={
          <div className="relative w-full max-w-[420px] animate-[vhFloat_5.5s_ease-in-out_infinite]"><img src="/images/cta-hand-phone.png" alt="Hand holding phone showing Craveit vendor app" className="w-full h-auto object-contain block" /></div>
        }
      >
        <StoreBadges />
      </CtaBand>
    </div>
  );
}
