"use client";

import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/sections/page-hero";
import { Field, TextInput, Select, Textarea } from "@/components/apply-modal";

const socialLinks = [
  { name: "LinkedIn", handle: "@craveit", url: "https://linkedin.com/company/getcraveit" },
  { name: "TikTok", handle: "@craveit", url: "https://tiktok.com/@getcraveit" },
  { name: "X/Twitter", handle: "@craveit", url: "https://x.com/getcraveit" },
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1200);
  };

  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <PageHero
        eyebrow=""
        title={<>Let&apos;s <span className="italic text-brand">talk.</span></>}
        desc="Whether you have a question, want to partner, or just want to tell us about a dish we should feature, we&apos;re listening. Every message gets read by a real person on the team."
      />

      {/* Form + cards */}
      <section className="w-full bg-[#F5F5F5] py-[clamp(56px,8vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,5vw,72px)]">
          <div data-reveal>
            <h2 className="font-primary font-semibold text-[clamp(26px,3vw,36px)] text-text-primary m-0 mb-[8px]">Send us a message</h2>
            <p className="font-secondary text-[15px] text-text-secondary m-0 mb-[28px]">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
            {success ? (
              <div className="bg-[#ECFDF3] text-[#15803D] p-[24px] rounded-[16px] border border-[#BBF7D0] shadow-[0_1px_3px_rgba(0,0,0,.03)]">
                <h3 className="font-secondary font-semibold text-[18px] m-0 mb-[8px]">Message sent!</h3>
                <p className="font-secondary text-[15px] leading-[1.6] m-0">Thank you for reaching out. We have received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-[22px] font-secondary">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-[22px]">
                  <Field label="First name"><TextInput placeholder="Jane" required /></Field>
                  <Field label="Last name"><TextInput placeholder="Smith" required /></Field>
                </div>
                <Field label="Email address"><TextInput type="email" placeholder="chidi@example.com" required /></Field>
                <Field label="What's this about?"><Select required defaultValue=""><option value="">Select a topic</option><option value="general">General inquiry</option><option value="support">Support</option><option value="partnership">Partnership</option><option value="feedback">Feedback</option></Select></Field>
                <Field label="Message"><Textarea rows={5} placeholder="Tell us what's on your mind..." required /></Field>
                <div><button type="submit" className="inline-flex items-center justify-center font-primary font-semibold text-[15px] text-white bg-brand border border-brand rounded-full py-[16px] px-[32px] cursor-pointer shadow-[0_8px_20px_rgba(233,96,41,.24)]">{submitting ? "Sending…" : "Send message"}</button></div>
              </form>
            )}
          </div>

          <div data-reveal className="flex flex-col gap-[28px]">
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.04)] flex flex-col">
              <div className="h-[200px] w-full"><img src="/images/contact-illust-1.png" alt="Email us" className="w-full h-full object-cover" /></div>
              <div className="p-[32px]">
                <h3 className="font-primary font-semibold text-[22px] text-text-primary m-0 mb-[12px]">Email us</h3>
                <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0 mb-[20px]">For general questions, partnerships, or anything at all. We respond within 24 hours.</p>
                <a href="mailto:support@getcraveit.com" className="text-brand font-medium text-[15px]">support@getcraveit.com</a>
              </div>
            </div>
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.04)] flex flex-col">
              <div className="h-[200px] w-full bg-[#FBEEE1] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-[170px] h-[170px]" fill="none"><rect x="42" y="70" width="116" height="70" rx="10" fill="#E96029" /><path d="M42 74 q10 -14 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#C74718" strokeWidth="0" fill="#E9A23B" /><rect x="52" y="96" width="96" height="30" rx="5" fill="#B9762F" /><rect x="60" y="60" width="80" height="14" rx="7" fill="#F2C230" /><circle cx="100" cy="52" r="16" fill="#C68642" /><path d="M86 50 a14 14 0 0 1 28 0Z" fill="#fff" /></svg>
              </div>
              <div className="p-[32px]">
                <h3 className="font-primary font-semibold text-[22px] text-text-primary m-0 mb-[12px]">Become a vendor</h3>
                <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0 mb-[20px]">Cook real food? Download the app and sign up as a vendor to start reaching customers.</p>
                <Link href="/vendor" className="text-brand font-medium text-[15px] inline-flex items-center gap-[8px] no-underline">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow along */}
      <section className="w-full bg-[#0E0A06] py-[clamp(72px,10vw,128px)] text-center">
        <div className="craveit-container">
          <div data-reveal>
            <h3 className="font-secondary font-semibold tracking-[.16em] uppercase text-[14px] text-brand m-0 mb-[16px]">Follow along</h3>
            <h2 className="font-primary font-medium text-[clamp(32px,5vw,56px)] leading-[1.1] text-white m-0 mb-[20px]">Find us where the content lives.</h2>
            <p className="font-secondary text-[clamp(15px,1.5vw,18px)] text-[#A3A3A3] max-w-[640px] mx-auto mb-[56px]">Food videos, vendor stories, and behind-the-scenes of building Craveit.</p>
            <div className="flex flex-wrap items-center justify-center gap-[20px]">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[16px] bg-[#262626] rounded-[16px] py-[18px] px-[24px] min-w-[240px] text-left no-underline">
                  <span className="w-[48px] h-[48px] shrink-0 rounded-[12px] bg-brand inline-flex items-center justify-center text-white font-primary font-semibold text-[20px]">{s.name[0]}</span>
                  <span className="flex flex-col">
                    <span className="font-secondary font-semibold text-[16px] text-white">{s.name}</span>
                    <span className="font-secondary text-[14px] text-[#A3A3A3]">{s.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
