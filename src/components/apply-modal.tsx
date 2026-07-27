"use client";

import { useState } from "react";

const inputClass = "w-full py-[14px] px-[16px] rounded-[12px] border-none outline-none bg-white shadow-[0_2px_10px_rgba(0,0,0,.03)] font-secondary text-[15px] text-text-primary";

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[14px] font-semibold text-text-primary">{label}</label>
      {children}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}

export function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} className={`${inputClass} py-[14px] px-[44px_16px_14px_16px] appearance-none cursor-pointer`}>{children}</select>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none"><polyline points="6 9 12 15 18 9" /></svg>
    </div>
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} resize-none`} />;
}

export default function ApplyModal({ open, onClose, eyebrow, title, successText, children }: { open: boolean; onClose: () => void; eyebrow: string; title: string; successText: string; children: React.ReactNode; }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1200);
  };

  const close = () => { onClose(); setSuccess(false); setSubmitting(false); };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-[20px]">
      <div onClick={close} className="absolute inset-0 bg-[rgba(19,10,6,.55)] backdrop-blur-[3px]" />
      <div className="relative w-full max-w-[560px] max-h-[92vh] overflow-y-auto bg-bg-secondary rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,.28)] animate-[modalIn_.3s_ease]">
        <div className="relative bg-brand py-[28px] px-[28px] pb-[26px] rounded-t-[24px] overflow-hidden">
          <span aria-hidden className="absolute right-[-10px] bottom-[-28px] font-primary font-semibold text-[120px] leading-none text-white/[.12] tracking-[-.03em]">crave<span className="italic">it</span></span>
          <button onClick={close} aria-label="Close" className="absolute top-[18px] right-[18px] w-[36px] h-[36px] rounded-full border-none bg-white/[.2] text-white cursor-pointer inline-flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
          <span className="relative font-secondary font-semibold text-[12px] tracking-[.16em] uppercase text-white/[.9]">{eyebrow}</span>
          <h2 className="relative font-primary font-semibold text-[clamp(24px,3.4vw,30px)] leading-[1.15] text-white mt-[8px] mb-0 max-w-[360px]">{title}</h2>
        </div>
        <div className="p-[28px]">
          {success ? (
            <div className="text-center py-[20px] px-[8px] pb-[12px] flex flex-col items-center gap-[16px]">
              <span className="w-[64px] h-[64px] rounded-full bg-[#ECFDF3] inline-flex items-center justify-center"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
              <h3 className="font-primary font-semibold text-[24px] text-text-primary m-0">Application received!</h3>
              <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0 max-w-[380px]">{successText}</p>
              <button onClick={close} className="mt-[6px] font-primary font-semibold text-[15px] text-white bg-brand border-none rounded-full py-[14px] px-[30px] cursor-pointer shadow-[0_8px_20px_rgba(233,96,41,.24)]">Done</button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-[20px] font-secondary">
              {children}
              <label className="flex items-start gap-[10px] text-[13.5px] leading-[1.5] text-text-secondary cursor-pointer">
                <input type="checkbox" required className="mt-[2px] w-[16px] h-[16px] accent-brand shrink-0" />
                <span>I agree to be contacted about my application to Craveit.</span>
              </label>
              <button type="submit" className="inline-flex items-center justify-center font-primary font-semibold text-[15px] text-white bg-brand border border-brand rounded-full py-[16px] px-[32px] cursor-pointer shadow-[0_8px_20px_rgba(233,96,41,.24)]">{submitting ? "Submitting…" : "Submit application"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
