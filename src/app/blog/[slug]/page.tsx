"use client";

import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { StoreBadges } from "@/components/ui";
import { articles, buildThumbSvg } from "../articles";

const more = [
  { slug: "intro", cat: "Building Craveit", title: "Introducing Craveit: what we built and why", excerpt: "A deep dive into the thinking behind video first food delivery.", kind: "build" },
  { slug: "dishes", cat: "Food culture", title: "The dishes that define Enugu, one video at a time", excerpt: "From Ofe Onugbu to Abacha, the local flavours our vendors bring to the feed.", kind: "food" },
  { slug: "weekend-cook", cat: "Vendor stories", title: "From weekend cook to full time vendor", excerpt: "How one home cook turned a side hustle into a daily kitchen.", kind: "vendor" },
];

function MoreThumb({ kind }: { kind: string }) {
  if (kind === "build") return <div className="w-full h-full bg-[#F5ECDD] flex items-center justify-center"><div className="scale-[.6]">{buildThumbSvg}</div></div>;
  return <img src={kind === "food" ? "/images/cat-food.svg" : "/images/cat-vendor.svg"} alt="" className="w-full h-full object-cover block" />;
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = articles[slug] ?? articles.intro;
  if (!article && !articles.intro) notFound();

  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <section className="w-full bg-white py-[clamp(40px,6vw,72px)] pb-[clamp(24px,3vw,32px)]">
        <div data-reveal className="craveit-container">
          <div className="flex items-center justify-center gap-[16px] mb-[22px] flex-wrap">
            <Link href="/blog" className="text-text-secondary font-secondary text-[14px] no-underline inline-flex items-center gap-[6px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> Back to journal</Link>
            <span className="text-brand font-secondary font-semibold text-[12px] tracking-[.12em] uppercase">{article.cat}</span>
          </div>
          <h1 className="font-primary font-semibold text-[clamp(30px,4.6vw,52px)] leading-[1.1] text-center text-text-primary m-0 mx-auto max-w-[760px]">{article.title}</h1>
          <p className="text-center text-[#9AA0AD] font-secondary text-[14px] mt-[16px] mb-0">{article.date}</p>
          <div className="h-[clamp(220px,32vw,360px)] rounded-[16px] overflow-hidden mt-[32px] mb-0">
            {article.hero.kind === "build" ? (
              <div className="relative w-full h-full bg-[#F5ECDD] flex items-center justify-center overflow-hidden">{buildThumbSvg}</div>
            ) : (
              <img src={article.hero.src} alt={article.hero.alt} className="w-full h-full object-cover block" />
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[clamp(24px,4vw,40px)] pb-[clamp(56px,8vw,88px)]">
        <div data-reveal className="craveit-container">
          {article.blocks.map((b, i) => {
            if (b.t === "h2") return <h2 key={i} className="font-primary font-semibold text-[clamp(22px,2.6vw,28px)] text-text-primary m-0 mb-[18px]">{b.v}</h2>;
            if (b.t === "img") return <div key={i} className="h-[clamp(200px,28vw,320px)] rounded-[16px] mt-[8px] mb-[32px]" style={{ background: b.bg }} />;
            const last = i === article.blocks.length - 1;
            return <p key={i} className="font-secondary text-[clamp(16px,1.4vw,18px)] leading-[1.85] text-[#55596A] m-0" style={{ marginBottom: last ? 0 : "22px" }}>{b.v}</p>;
          })}
        </div>
      </section>

      <section className="w-full bg-bg-secondary py-[clamp(56px,8vw,88px)]">
        <div className="craveit-container">
          <h2 data-reveal className="font-primary font-semibold text-[clamp(26px,3.4vw,40px)] leading-[1.15] text-text-primary m-0 mb-[clamp(32px,5vw,48px)] text-center">More from the Journal</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[24px]">
            {more.filter((m) => m.slug !== slug).map((post) => (
              <div key={post.slug} data-reveal className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.05)] flex flex-col">
                <div className="h-[160px]"><MoreThumb kind={post.kind} /></div>
                <div className="p-[22px] flex flex-col gap-[8px] flex-1">
                  <span className="font-secondary font-semibold text-[11px] tracking-[.12em] uppercase text-brand">{post.cat}</span>
                  <h3 className="font-primary font-semibold text-[18px] leading-[1.25] text-text-primary m-0">{post.title}</h3>
                  <p className="font-secondary text-[14px] leading-[1.65] text-text-secondary m-0">{post.excerpt}</p>
                  <div className="mt-auto pt-[12px]">
                    <Link href={`/blog/${post.slug}`} className="text-brand font-primary font-semibold text-[14px] no-underline inline-flex items-center gap-[6px]">Read more <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="w-full bg-white py-[clamp(56px,8vw,96px)]">
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
