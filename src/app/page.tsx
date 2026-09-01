"use client";

import Link from "next/link";
import { GooglePlayBadge, AppStoreBadge, PhoneFrame } from "@/components/ui";
import SectionHeader from "@/components/sections/section-header";
import FeatureCards from "@/components/sections/feature-cards";
import TwoColumn from "@/components/sections/two-column";
import { FlatAccordion } from "@/components/sections/faq-section";
import CtaBand from "@/components/sections/cta-band";
import StickyScrollReveal from "@/components/sticky-scroll-reveal";

const marqueeItems = [
  "New Haven",
  "Independence Layout",
  "GRA",
  "Uwani",
  "Ogui Road",
  "Independence Layout",
  "GRA",
  "Uwani",
  "New Haven",
  "Ogui Road",
  "Trans-Ekulu",
  "Agbani Road",
];

const scrollSteps = [
  {
    title: "Scroll meal videos",
    desc: "Real food from real vendors near you. Scroll until something makes you crave it.",
    img: "/images/scroll-illust-1.png",
    imgBg: "#F5F0E6",
  },
  {
    title: "Tap when you crave it",
    desc: "Tap the meal you want and confirm your order in seconds.",
    img: "/images/scroll-illust-2.png",
    imgBg: "#FFE8D6",
  },
  {
    title: "Track it to your door",
    desc: "Follow your rider live on the map and know exactly when they will arrive.",
    img: "/images/scroll-illust-3.png",
    imgBg: "#F5F0E6",
  },
];

const trustCards = [
  {
    title: "Verified vendors",
    desc: "Every vendor on Craveit is personally onboarded by our team. We verify who they are and what they cook.",
    img: "/images/trust-illust-1.png",
    imgBg: "#1B4D3E",
  },
  {
    title: "Confirmed delivery",
    desc: "Your order is confirmed only when your food is at your door. You stay in control at every step.",
    img: "/images/trust-illust-2.png",
    imgBg: "#F5E6D3",
  },
  {
    title: "Reliable delivery",
    desc: "Our riders pick up and deliver every order with care. Fast, consistent, and handled from kitchen to door.",
    img: "/images/trust-illust-3.png",
    imgBg: "#E96029",
  },
];

const growFeatures = [
  "No setup cost, you only pay when you earn",
  "Delivery is handled, you just keep cooking",
  "Real time order notifications and payouts",
];

const homeFaqData = [
  {
    q: "How do I get started on Craveit?",
    a: "Download the Craveit app from Google Play or the App Store, create your account in under two minutes, set your delivery address, and start scrolling food videos from vendors near you.",
  },
  {
    q: "Which areas does Craveit deliver to?",
    a: "We deliver across Enugu, New Haven, Independence Layout, Uwani, Ogui Road, GRA, Trans-Ekulu, and Agbani Road. If you are in one of these areas you are already in our delivery zone.",
  },
  {
    q: "I am a food vendor. How do I get my food on Craveit?",
    a: "Download the Craveit app and sign up as a vendor. Our team reviews every application and reaches out to complete your onboarding, so you can start reaching customers near you.",
  },
  {
    q: "How do I track my order?",
    a: "Once a vendor accepts your order you can follow it in real time in the app, from the kitchen to your door, and see exactly when your rider will arrive.",
  },
  {
    q: "How much does delivery cost?",
    a: "Delivery fees depend on how far you are from the vendor, and the full breakdown is always shown before you confirm your order. No hidden charges.",
  },
];

const stickyPanels = [
  {
    eyebrow: "See",
    heading: "Before you taste it,",
    headingAccent: "your eyes eat first.",
    description:
      "Every meal on craveit is a short video from a vendor near you, shot as the food actually looks. Keep scrolling. When something makes you stop, it's already one tap from your cart.",
    bg: "#FBF3E6",
    eyebrowColor: "#E96029",
    accentColor: "#E96029",
  },
  {
    eyebrow: "Order",
    heading: "From craving",
    headingAccent: "to cart in seconds.",
    description:
      "You saw it, you want it, so take it. Choose how you want your meal, confirm, and the vendor is already cooking before you've put your phone down.",
    bg: "#FAF7F2",
    eyebrowColor: "#1B4D3E",
    accentColor: "#1B4D3E",
    bodyColor: "#4A5A52",
  },
  {
    eyebrow: "Track",
    heading: "Know exactly",
    headingAccent: "where your food is.",
    description:
      "From the moment the kitchen starts cooking to the knock on your door, you can see where your order is. Live updates at every step, so you're never left wondering.",
    bg: "#FCE9DB",
    eyebrowColor: "#E96029",
    accentColor: "#E96029",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-text-primary font-secondary">
      {/* Hero */}
      <section
        className="relative overflow-hidden w-full py-[clamp(48px,7vw,72px)]"
        style={{
          background:
            "radial-gradient(120% 120% at 85% 0%,#FBF3E6 0%,#F8EEE0 45%,#F2E4CF 100%)",
        }}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute bottom-[-3.4vw] left-1/2 -translate-x-1/2 font-primary font-semibold text-[clamp(120px,20vw,300px)] leading-none text-brand opacity-[.08] tracking-[-.03em] whitespace-nowrap">
            craveit
          </span>
          <div className="absolute top-[-60px] left-[-70px] w-[240px] h-[240px] rounded-full bg-[#F3D9BC] opacity-[.55]" />
        </div>
        <div className="craveit-container relative z-[1] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,72px)] items-center">
          <div data-reveal className="max-w-[560px]">
            <h1 className="font-primary font-semibold text-[clamp(40px,6.2vw,72px)] leading-[1.06] tracking-[-.02em] text-text-primary m-0 mb-[20px]">
              Food you <span className="italic text-brand">see</span> before you{" "}
              <span className="italic text-brand">order.</span>
            </h1>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0 mb-[32px] max-w-[460px]">
              Scroll short food videos from vendors near you. See the real food before you
              order.
            </p>
            <div className="flex flex-row flex-wrap items-center gap-[10px] sm:gap-[14px]">
              <GooglePlayBadge />
              <AppStoreBadge />
            </div>
          </div>
          <div data-reveal className="flex items-center justify-center md:justify-end">
            <div className="relative flex items-center justify-center rounded-[40px] bg-[#EFDCC8] py-[clamp(28px,4vw,44px)] px-[clamp(28px,8vw,120px)] shadow-[inset_0_2px_12px_rgba(0,0,0,.06)]">
              <PhoneFrame>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/hero-video.MP4"
                  className="h-full w-full object-cover"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Location marquee */}
      <section className="w-full bg-brand py-[16px] overflow-hidden">
        <div className="flex">
          <div className="flex shrink-0 items-center gap-[32px] whitespace-nowrap animate-[marquee_22s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems].map((loc, i) => (
              <div key={i} className="flex items-center gap-[14px] shrink-0">
                <span className="font-secondary font-medium text-white text-[16px]">{loc}</span>
                <span className="inline-flex items-center gap-[6px]">
                  <span className="relative inline-flex w-[8px] h-[8px]">
                    <span className="absolute inset-0 rounded-full bg-[#7EE0A0] animate-[livePulse_1.8s_ease-out_infinite]" />
                    <span className="relative w-[8px] h-[8px] rounded-full bg-[#B6F5C9]" />
                  </span>
                  <span className="font-secondary font-semibold text-[11px] tracking-[.1em] uppercase text-white">
                    Live
                  </span>
                </span>
                <span className="text-white/[.6] text-[10px] ml-[14px]">&#9679;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover meals headline */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <div
            data-reveal
            className="flex flex-wrap items-center justify-center gap-[8px_14px] font-primary font-bold text-[clamp(28px,5vw,54px)] leading-[1.15] text-text-primary text-center"
          >
            <span>Discover</span>
            <span className="italic text-brand">meals</span>
            <span>through short</span>
            <img
              src="/images/discover-illust-1.png"
              alt=""
              className="w-[clamp(48px,7vw,76px)] h-[clamp(48px,7vw,76px)] object-contain"
            />
            <span>videos</span>
            <img
              src="/images/discover-illust-2.png"
              alt=""
              className="w-[clamp(48px,7vw,76px)] h-[clamp(48px,7vw,76px)] object-contain"
            />
            <span>that help you decide faster.</span>
          </div>
        </div>
      </section>

      {/* Scroll to doorstep */}
      <section className="w-full bg-bg-secondary py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader
            title={
              <>
                From <span className="italic text-brand">scroll</span> to doorstep in three
                steps.
              </>
            }
          />
          <FeatureCards items={scrollSteps} variant="image" />
        </div>
      </section>

      {/* Discover food + phone — sticky scroll */}
      <StickyScrollReveal panels={stickyPanels} videoSrc="/videos/hero-video.MP4" />

      {/* Built for trust */}
      <section className="w-full bg-bg-secondary py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <SectionHeader title={<>Built for trust from kitchen to your door.</>} />
          <FeatureCards items={trustCards} variant="image" />
        </div>
      </section>

      {/* Grow (vendors) */}
      <TwoColumn
        bg="#FAF7F2"
        illustration={
          <img
            src="/images/grow-illust.png"
            alt="Vendor with new order notification"
            className="w-full h-auto object-contain rounded-[20px]"
          />
        }
      >
        <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">
          For vendors
        </span>
        <h2 className="font-primary font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.25] text-text-primary m-0">
          Grow your business where customers are already searching.
        </h2>
        <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0 max-w-[520px]">
          Craveit brings your food directly to customers through video. We help you get set up
          and go live fast.
        </p>
        <div className="flex flex-col gap-[12px]">
          {growFeatures.map((f) => (
            <div key={f} className="flex items-center gap-[12px]">
              <span className="w-[22px] h-[22px] rounded-full bg-brand inline-flex items-center justify-center shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="m-0 font-secondary text-[15px] text-text-secondary">{f}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap items-center gap-[10px] sm:gap-[16px] mt-[8px]">
          <Link
            href="/vendor"
            className="inline-flex items-center justify-center font-primary font-semibold text-[13px] sm:text-[16px] text-white bg-brand border border-brand rounded-full py-[12px] sm:py-[16px] px-[20px] sm:px-[28px] no-underline shadow-[0_8px_20px_rgba(233,96,41,.24)]"
          >
            Download the App
          </Link>
          <Link
            href="/vendor"
            className="inline-flex items-center justify-center font-primary font-semibold text-[13px] sm:text-[16px] text-brand bg-transparent border border-brand rounded-full py-[12px] sm:py-[16px] px-[20px] sm:px-[28px] no-underline"
          >
            Learn more
          </Link>
        </div>
      </TwoColumn>

      {/* FAQ */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)]">
          <div data-reveal className="flex flex-col gap-[22px]">
            <h2 className="font-primary font-normal text-[clamp(32px,4.4vw,50px)] leading-[1.08] text-text-primary m-0">
              We&apos;ve got answers.
            </h2>
            <p className="font-secondary text-[clamp(15px,1.7vw,22px)] leading-[1.5] text-text-secondary m-0 max-w-[380px]">
              Everything you need to know about ordering on Craveit.
            </p>
            <div className="relative w-full max-w-[420px] aspect-[4/3]">
              <img
                src="/images/faq-illust.png"
                alt="FAQ illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div data-reveal className="flex flex-col gap-[12px]">
            <FlatAccordion items={homeFaqData} />
            <Link
              href="/faq"
              className="self-start mt-[10px] inline-flex items-center gap-[8px] font-primary font-semibold text-[16px] text-brand no-underline"
            >
              Read more{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <CtaBand
        id="cta"
        title="Your next meal is a tap away."
        desc="Craveit is live near you. Download the app and discover food you never knew existed near you."
        illustration={
          <div className="relative w-full max-w-[420px] animate-[vhFloat_5.5s_ease-in-out_infinite]">
            <img
              src="/images/cta-hand-customer.png"
              alt="Hand holding phone showing the Craveit app"
              className="w-full h-auto object-contain block"
            />
          </div>
        }
      >
        <div className="flex flex-row flex-wrap items-center gap-[10px] sm:gap-[14px]">
          <GooglePlayBadge />
          <AppStoreBadge />
        </div>
      </CtaBand>
    </div>
  );
}
