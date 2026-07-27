"use client";

import Link from "next/link";
import { useState } from "react";
import { StoreBadges } from "@/components/ui";

const posts = [
  { slug: "intro", cat: "Building Craveit", kind: "build", title: "Introducing Craveit: what we built and why", excerpt: "A deep dive into the thinking behind video first food delivery and how we are rethinking the experience from scratch.", date: "1st August, 2026" },
  { slug: "dishes", cat: "Food culture", kind: "food", title: "The dishes that define Enugu, one video at a time", excerpt: "From Ofe Onugbu to Abacha, a look at the local flavours our vendors bring to the feed every day.", date: "1st August, 2026" },
  { slug: "mama-nkechi", cat: "Vendor stories", kind: "vendor", title: "How Mama Nkechi grew her kitchen with Craveit", excerpt: "One vendor shares how showing real food on video turned first time viewers into loyal regulars.", date: "1st August, 2026" },
  { slug: "feed-design", cat: "Building Craveit", kind: "build", title: "Designing a feed that makes you hungry, responsibly", excerpt: "The product decisions behind an endless scroll that helps you decide faster instead of keeping you stuck.", date: "1st August, 2026" },
  { slug: "late-night", cat: "Food culture", kind: "food", title: "Street food after dark: Enugu's late night favourites", excerpt: "Suya, pepper soup and roasted plantain, the dishes that keep the city going long after sunset.", date: "1st August, 2026" },
  { slug: "weekend-cook", cat: "Vendor stories", kind: "vendor", title: "From weekend cook to full time vendor", excerpt: "How one home cook used short videos and steady reviews to turn a side hustle into a daily kitchen.", date: "1st August, 2026" },
];

const chips = ["All Post", "Building Craveit", "Food culture", "Vendor stories"];

function Thumb({ kind }: { kind: string }) {
  if (kind === "build")
    return (
      <div className="relative w-full h-full bg-[#F5ECDD] flex items-center justify-center overflow-hidden">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none"><rect x="42" y="22" width="46" height="82" rx="10" fill="#131927" /><rect x="47" y="28" width="36" height="64" rx="5" fill="#1E7A44" /><circle cx="65" cy="60" r="12" fill="#ffffff" /><path d="M61 54 L73 60 L61 66 Z" fill="#E96029" /><circle cx="32" cy="86" r="12" fill="#E96029" /><circle cx="32" cy="86" r="4.5" fill="#F5ECDD" /><rect x="18" y="34" width="14" height="14" rx="3" fill="#F2C230" /><rect x="90" y="46" width="14" height="14" rx="3" fill="#4E9E4F" /></svg>
      </div>
    );
  const src = kind === "food" ? "/images/cat-food.svg" : "/images/cat-vendor.svg";
  return <img src={src} alt="" className="w-full h-full object-cover block" />;
}

export default function BlogPage() {
  const [cat, setCat] = useState("All Post");
  const filtered = cat === "All Post" ? posts : posts.filter((p) => p.cat === cat);
  const featured = posts[1];

  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <section className="w-full bg-bg-cream py-[clamp(48px,7vw,80px)] pb-[clamp(32px,5vw,56px)]">
        <div data-reveal className="craveit-container">
          <h1 className="font-primary font-semibold text-[clamp(38px,6vw,68px)] leading-[1.05] tracking-[-.02em] text-text-primary m-0 max-w-[640px]">The Craveit Journal.</h1>
          <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary mt-[20px] mb-0 max-w-[520px]">Food stories, vendor spotlights, product updates, and thoughts on building something new.</p>
          <div className="flex flex-wrap gap-[10px] mt-[26px]">
            {chips.map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)} className={`font-secondary font-medium text-[14px] py-[10px] px-[20px] rounded-full border-none cursor-pointer transition-all duration-[.25s] ${cat === c ? "bg-brand text-white" : "bg-white text-text-secondary"}`}>{c}</button>
            ))}
          </div>
          <div data-reveal className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.05)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-[32px]">
            <div className="min-h-[300px]"><img src="/images/cat-food-featured.svg" alt="Bowl of Nigerian food" className="w-full h-full object-cover block" /></div>
            <div className="py-[clamp(28px,4vw,44px)] px-[clamp(28px,4vw,44px)] flex flex-col justify-center gap-[16px]">
              <span className="font-secondary font-semibold text-[11px] tracking-[.14em] uppercase text-brand">{featured.cat}</span>
              <h2 className="font-primary font-semibold text-[clamp(22px,2.6vw,30px)] leading-[1.2] text-text-primary m-0">{featured.title}</h2>
              <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">{featured.excerpt}</p>
              <div className="flex items-center justify-between gap-[16px] mt-[6px]">
                <span className="font-secondary text-[14px] text-[#9AA0AD]">{featured.date}</span>
                <Link href={`/blog/${featured.slug}`} className="text-brand font-primary font-semibold text-[15px] no-underline inline-flex items-center gap-[6px] whitespace-nowrap">Read more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] py-[clamp(48px,7vw,80px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[24px]">
          {filtered.map((post) => (
            <div key={post.slug} data-reveal className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.05)] flex flex-col">
              <div className="h-[160px]"><Thumb kind={post.kind} /></div>
              <div className="p-[22px] flex flex-col gap-[8px] flex-1">
                <span className="font-secondary font-semibold text-[11px] tracking-[.12em] uppercase text-brand">{post.cat}</span>
                <h3 className="font-primary font-semibold text-[18px] leading-[1.25] text-text-primary m-0">{post.title}</h3>
                <p className="font-secondary text-[14px] leading-[1.65] text-text-secondary m-0">{post.excerpt}</p>
                <div className="flex items-center justify-between gap-[12px] mt-auto pt-[12px]">
                  <span className="font-secondary text-[13px] text-[#9AA0AD]">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-brand font-primary font-semibold text-[14px] no-underline inline-flex items-center gap-[6px] whitespace-nowrap">Read more <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="download" className="w-full bg-bg-secondary py-[clamp(56px,8vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex flex-col gap-[22px]">
            <h2 className="font-primary font-semibold text-[clamp(32px,4.4vw,50px)] leading-[1.12] text-text-primary m-0">Your next meal is a tap away.</h2>
            <p className="font-secondary text-[clamp(15px,1.7vw,22px)] leading-[1.6] text-text-secondary m-0 max-w-[500px]">Craveit is live near you. Download the app and discover food you never knew existed near you.</p>
            <StoreBadges />
          </div>
          <div data-reveal className="flex justify-center"><div className="relative w-full max-w-[420px] animate-[vhFloat_5.5s_ease-in-out_infinite]"><img src="/images/cta-hand-customer.png" alt="Hand holding phone showing the Craveit app" className="w-full h-auto object-contain block" /></div></div>
        </div>
      </section>
    </div>
  );
}
