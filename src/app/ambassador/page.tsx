"use client";

import { useState } from "react";
import CtaBand from "@/components/sections/cta-band";
import ApplyModal, { Field, TextInput, Select, Textarea } from "@/components/apply-modal";

const ambPerks = [
  { title: "Earn on every order", desc: "Get a commission each time someone orders with your referral code. The more your campus craves, the more you make.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M6 12h.01M18 12h.01" /></svg>) },
  { title: "Free Craveit swag", desc: "Tees, stickers, caps and more to rep the brand and stand out at every event and tasting you run.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l4-3 4 2 4-2 4 3-3 3v10H7V10z" /></svg>) },
  { title: "Real CV experience", desc: "Sharpen marketing, sales and community skills that employers actually look for, with a brand behind you.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>) },
  { title: "Insider access", desc: "Be first to try new features, meet the team, and get invites to vendor drops and ambassador-only events.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E96029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.4 3.3L6.8 14 2 9.4l7-.9z" /></svg>) },
];

const ambTraits = [
  { t: "A student or NYSC corps member", d: "active on a campus, NYSC camp or tight community." },
  { t: "Well connected", d: "people listen to you, online and in person." },
  { t: "A genuine foodie", d: "you already know the best spots and love sharing them." },
  { t: "A self starter", d: "you make things happen without waiting to be asked." },
];

const ambSteps = [
  { n: "1", title: "Apply", desc: "Fill a short form and tell us about your campus, your community and why you crave it." },
  { n: "2", title: "Get your kit", desc: "Once you are in, we send your referral code, links and a box of Craveit swag to get going." },
  { n: "3", title: "Spread & earn", desc: "Share your code, host tastings and grow your community. Earn on every order that comes through." },
];

const ambFaqData = [
  { q: "Who can become a Craveit ambassador?", a: "Students, recent grads and NYSC corps members active on a campus, NYSC camp or community who love food and enjoy bringing people together. No marketing experience needed, just energy and a real network." },
  { q: "Can I join as an NYSC corps member?", a: "Yes. NYSC corps members make great ambassadors, whether you are serving on a campus, in an office or around town. Your posting is your community, and you can earn on every order it drives during your service year and beyond." },
  { q: "How much can I earn?", a: "You earn a commission on every order placed with your referral code, plus bonuses for hitting milestones. The more your community orders, the more you make, so your earnings grow with your effort." },
  { q: "How much time does it take?", a: "It is flexible and built to run around your classes or service schedule. Most ambassadors spend a few hours a week sharing their code, posting online and hosting the occasional tasting or activation." },
  { q: "Do I get paid or is it just swag?", a: "Both. You earn real commission paid to your bank account, and you also get free Craveit swag, marketing support and access to ambassador-only events." },
  { q: "How do I apply?", a: "Tap any Apply button on this page and fill the short form. Our team reviews every application and reaches out to get you set up with your kit and referral code." },
];

const schools = ["University of Nigeria, Nsukka (UNN)", "Enugu State University of Science & Technology (ESUT)", "Institute of Management and Technology (IMT)", "Caritas University, Enugu", "Godfrey Okoye University", "Coal City University", "Renaissance University", "Other campus"];

export default function AmbassadorPage() {
  const [modal, setModal] = useState(false);
  const [ambType, setAmbType] = useState("");

  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden w-full bg-bg-cream py-[clamp(56px,8vw,96px)]">
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute bottom-[-3vw] left-1/2 -translate-x-1/2 font-primary font-semibold text-[clamp(110px,18vw,280px)] leading-none text-brand opacity-[.06] tracking-[-.03em] whitespace-nowrap">ambassadors</span>
        </div>
        <div className="craveit-container relative z-[1] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex flex-col gap-[22px]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">Campus ambassadors</span>
            <h1 className="font-primary font-semibold text-[clamp(40px,6vw,72px)] leading-[1.06] tracking-[-.02em] text-text-primary m-0">Rep Craveit on campus and get <span className="italic text-brand">paid</span> for it.</h1>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0 max-w-[460px]">Love good food and know everyone worth knowing? Become a Craveit campus ambassador, spread the word across your school, and earn every time your community orders.</p>
            <div><button onClick={() => setModal(true)} className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-white bg-brand border border-brand rounded-full py-[16px] px-[28px] cursor-pointer shadow-[0_8px_20px_rgba(233,96,41,.24)]">Apply to become an ambassador</button></div>
          </div>
          <div data-reveal className="flex justify-center">
            <svg viewBox="0 0 400 340" className="w-full max-w-[440px] h-auto">
              <circle cx="200" cy="170" r="150" fill="#FBE2CE" />
              <circle cx="200" cy="170" r="150" fill="none" stroke="#E96029" strokeWidth="2" strokeDasharray="4 10" opacity=".4" style={{ animation: "ambDash 3s linear infinite" }} />
              <g transform="translate(250,44)" style={{ animation: "ambBubble 3.4s ease-in-out infinite", transformOrigin: "309px 81px" }}>
                <rect x="0" y="0" width="118" height="74" rx="16" fill="#fff" />
                <path d="M24 74 L24 98 L48 74 Z" fill="#fff" />
                <text x="59" y="47" textAnchor="middle" fontFamily="Fraunces,serif" fontWeight="600" fontSize="26" fill="#E96029">craveit</text>
              </g>
              <path d="M132 330c0-46 30-80 68-80s68 34 68 80Z" fill="#1E7A44" />
              <path d="M200 250c38 0 68 34 68 80h-24c0-40-20-70-44-76Z" fill="#17633699" />
              <circle cx="200" cy="196" r="40" fill="#B9763F" />
              <path d="M162 190c0-24 18-40 38-40s38 16 38 34c0-4-14-14-38-14s-38 14-38 20Z" fill="#3A2A1E" />
              <rect x="196" y="250" width="20" height="60" rx="10" fill="#B9763F" transform="rotate(-38 206 280)" style={{ animation: "ambWave 2.4s ease-in-out infinite", transformOrigin: "206px 280px" }} />
              <g transform="translate(96,150) rotate(-16)" style={{ animation: "ambShout 2.4s ease-in-out infinite", transformOrigin: "30px 34px" }}>
                <path d="M0 24 L46 8 L46 60 L0 44 Z" fill="#E96029" />
                <rect x="46" y="4" width="16" height="60" rx="4" fill="#C74718" />
                <path d="M-22 20 L0 24 L0 44 L-22 48 Z" fill="#F2853F" />
                <path d="M70 20c8 4 8 20 0 24M78 12c14 8 14 32 0 40" fill="none" stroke="#F2C230" strokeWidth="4" strokeLinecap="round" style={{ animation: "ambSound 1.6s ease-out infinite", transformOrigin: "74px 34px" }} />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex flex-col gap-[20px]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">The programme</span>
            <h2 className="font-primary font-semibold text-[clamp(28px,4.2vw,46px)] leading-[1.15] text-text-primary m-0">What is the Craveit Ambassador Program?</h2>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.75] text-text-secondary m-0">The Craveit Ambassador Program is how we grow, campus by campus, through the people who already know it best, you. As an ambassador you are the face of Craveit in your community: introducing students to the app, connecting local vendors to new customers, and hosting the tastings and campaigns that get everyone ordering.</p>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.75] text-text-secondary m-0">In return, we back you with a referral code, marketing support, free swag and real earnings on every order you drive. It is a flexible, paid role you can run around your classes, built to turn your influence into income while you help your campus discover food it will love.</p>
          </div>
          <div data-reveal className="flex justify-center">
            <svg viewBox="0 0 360 320" className="w-full max-w-[400px] h-auto">
              <circle cx="180" cy="160" r="150" fill="#FBE2CE" />
              <rect x="110" y="60" width="140" height="200" rx="22" fill="#131927" />
              <rect x="120" y="72" width="120" height="176" rx="14" fill="#fff" />
              <rect x="120" y="72" width="120" height="52" rx="14" fill="#E96029" />
              <rect x="120" y="100" width="120" height="24" fill="#E96029" />
              <text x="180" y="106" textAnchor="middle" fontFamily="Fraunces,serif" fontWeight="600" fontSize="20" fill="#fff">craveit</text>
              <rect x="136" y="140" width="88" height="16" rx="8" fill="#F1D9C4" />
              <rect x="136" y="166" width="66" height="12" rx="6" fill="#EDE7DF" />
              <rect x="136" y="186" width="88" height="34" rx="10" fill="#1E7A44" />
              <text x="180" y="208" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontWeight="600" fontSize="13" fill="#fff">Order now</text>
              <g transform="translate(228,196)"><circle cx="34" cy="34" r="34" fill="#F2C230" /><circle cx="24" cy="24" r="6" fill="#131927" /><circle cx="46" cy="18" r="6" fill="#131927" /><circle cx="46" cy="46" r="6" fill="#131927" /><path d="M29 26 L41 20 M29 30 L41 42" stroke="#131927" strokeWidth="3" strokeLinecap="round" /></g>
              <g transform="translate(70,180)"><circle cx="30" cy="30" r="30" fill="#E96029" /><text x="30" y="40" textAnchor="middle" fontFamily="Fraunces,serif" fontWeight="600" fontSize="26" fill="#fff">₦</text></g>
            </svg>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="w-full bg-white pb-0 pb-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <div data-reveal className="text-center mb-[clamp(40px,6vw,56px)] max-w-[640px] mx-auto">
            <h2 className="font-primary font-semibold text-[clamp(28px,4.4vw,48px)] leading-[1.15] text-text-primary m-0 mb-[14px]">Why it pays to <span className="italic text-brand">rep</span> Craveit.</h2>
            <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0">More than a side hustle. Real earnings, real skills, and a brand that has your back.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[24px]">
            {ambPerks.map((p) => (
              <div key={p.title} data-reveal className="bg-bg-secondary rounded-[20px] p-[28px] flex flex-col gap-[16px]">
                <span className="w-[56px] h-[56px] rounded-[16px] bg-[#FBE2CE] inline-flex items-center justify-center shrink-0">{p.icon}</span>
                <h3 className="font-primary font-semibold text-[20px] text-text-primary m-0">{p.title}</h3>
                <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we want */}
      <section className="w-full bg-[#F5F0E8] py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex justify-center order-[2]">
            <svg viewBox="0 0 400 340" className="w-full max-w-[420px] h-auto">
              <circle cx="200" cy="176" r="150" fill="#FBE2CE" />
              <g transform="translate(70,54)"><circle cx="22" cy="22" r="22" fill="#fff" /><path d="M22 32c-6-4-10-8-10-13a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 5-4 9-10 13Z" fill="#E96029" /></g>
              <g transform="translate(300,70)"><circle cx="20" cy="20" r="20" fill="#fff" /><path d="M20 9l2.6 5.4 5.9.8-4.3 4.1 1 5.8L20 28l-5.2 2.9 1-5.8-4.3-4.1 5.9-.8z" fill="#F2C230" /></g>
              <g transform="translate(322,190)"><circle cx="18" cy="18" r="18" fill="#fff" /><path d="M9 12h13a3 3 0 0 1 0 6h-1M9 12c0 6 2 9 5 9s5-3 5-6" fill="none" stroke="#1E7A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></g>
              <g transform="translate(150,120)">
                <path d="M18 190c0-40 15-70 42-70s42 30 42 70Z" fill="#E96029" />
                <circle cx="60" cy="86" r="34" fill="#B9763F" />
                <path d="M26 82c0-20 15-34 34-34s34 12 34 30c-3-6-15-12-34-12s-31 8-34 16Z" fill="#3A2A1E" />
                <rect x="52" y="126" width="18" height="52" rx="9" fill="#B9763F" transform="rotate(-42 61 152)" />
                <g transform="translate(-42,74) rotate(-18)"><path d="M0 20 L40 6 L40 52 L0 38 Z" fill="#F2853F" /><rect x="40" y="2" width="14" height="54" rx="4" fill="#C74718" /><path d="M-18 17 L0 20 L0 38 L-18 41 Z" fill="#E96029" /></g>
              </g>
              <g transform="translate(56,214)"><path d="M0 66c0-20 11-34 24-34s24 14 24 34Z" fill="#1E7A44" /><circle cx="24" cy="20" r="18" fill="#F1D2B0" /></g>
              <g transform="translate(300,214)"><path d="M0 66c0-20 11-34 24-34s24 14 24 34Z" fill="#F2C230" /><circle cx="24" cy="20" r="18" fill="#B9763F" /></g>
            </svg>
          </div>
          <div data-reveal className="flex flex-col gap-[18px] order-[1]">
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">Who we want</span>
            <h2 className="font-primary font-semibold text-[clamp(30px,4.2vw,48px)] leading-[1.15] text-text-primary m-0">Made for people who bring the crowd.</h2>
            <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">You do not need a marketing degree. You need energy, a community, and a real love for food. Sound like you?</p>
            <div className="flex flex-col gap-[12px] mt-[8px]">
              {ambTraits.map((tr) => (
                <div key={tr.t} className="flex items-start gap-[12px] bg-white rounded-[12px] p-[16px] shadow-[0_1px_3px_rgba(0,0,0,.04)]">
                  <span className="w-[24px] h-[24px] rounded-full bg-brand inline-flex items-center justify-center shrink-0 mt-[2px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg></span>
                  <p className="m-0 font-secondary text-[15px] leading-[1.6] text-text-secondary"><span className="font-semibold text-text-primary">{tr.t}</span>, {tr.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-bg-secondary py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <div data-reveal className="text-center mb-[clamp(40px,6vw,56px)]">
            <h2 className="font-primary font-semibold text-[clamp(28px,4.4vw,48px)] leading-[1.15] text-text-primary m-0">How it <span className="italic text-brand">works.</span></h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[24px]">
            {ambSteps.map((s) => (
              <div key={s.n} data-reveal className="bg-white rounded-[20px] py-[32px] px-[28px] flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.05)]">
                <span className="w-[48px] h-[48px] rounded-full bg-brand text-white font-primary font-semibold text-[22px] inline-flex items-center justify-center">{s.n}</span>
                <h3 className="font-primary font-semibold text-[22px] text-text-primary m-0">{s.title}</h3>
                <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-[clamp(64px,9vw,96px)]">
        <div className="craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)]">
          <div data-reveal className="flex flex-col gap-[22px]">
            <h2 className="font-primary font-normal text-[clamp(32px,4.4vw,50px)] leading-[1.08] text-text-primary m-0">Ambassador questions</h2>
            <p className="font-secondary text-[clamp(15px,1.7vw,22px)] leading-[1.5] text-text-secondary m-0 max-w-[340px]">Everything you need to know before you apply.</p>
          </div>
          <AmbFaq />
        </div>
      </section>

      <CtaBand title="Ready to put your campus on Craveit?" desc="Applications take two minutes. Tell us about you and your community, and we will be in touch.">
        <button onClick={() => setModal(true)} className="inline-flex items-center justify-center font-primary font-semibold text-[16px] text-brand bg-white border border-white rounded-full py-[16px] px-[32px] cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,.14)]">Apply now</button>
      </CtaBand>

      <ApplyModal open={modal} onClose={() => { setModal(false); setAmbType(""); }} eyebrow="Campus ambassador" title="Apply to become an ambassador" successText="Thanks for applying to the Craveit Ambassador Program. Our team reviews every application and will reach out to you by email within a few days.">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
          <Field label="Full name"><TextInput placeholder="Chidi Okeke" required /></Field>
          <Field label="Phone number"><TextInput type="tel" placeholder="080 0000 0000" required /></Field>
        </div>
        <Field label="Email address"><TextInput type="email" placeholder="chidi@example.com" required /></Field>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
          <Field label="Gender"><Select required defaultValue=""><option value="">Select</option><option>Female</option><option>Male</option><option>Prefer not to say</option></Select></Field>
          <Field label="I am a"><Select required value={ambType} onChange={(e) => setAmbType(e.target.value)}><option value="">Select</option><option value="student">Student</option><option value="nysc">NYSC corps member</option><option value="other">Other</option></Select></Field>
        </div>
        {ambType === "student" && (
          <Field label="Select your school"><Select defaultValue=""><option value="">Choose your campus</option>{schools.map((s) => <option key={s}>{s}</option>)}</Select></Field>
        )}
        <Field label="Social media presence (link)"><TextInput placeholder="Instagram, TikTok or X profile link" /></Field>
        <Field label="Why do you want to be a Craveit ambassador?"><Textarea rows={4} placeholder="Tell us about your community and how you would spread the word..." required /></Field>
      </ApplyModal>
    </div>
  );
}

function AmbFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div data-reveal className="flex flex-col gap-[12px]">
      {ambFaqData.map((item, i) => (
        <div key={i} className="border border-[#E8E8E8] rounded-[12px] bg-white overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between text-left py-[18px] px-[20px] bg-transparent border-none cursor-pointer gap-[16px]">
            <span className="font-primary font-medium text-[clamp(15px,1.4vw,18px)] text-text-primary">{item.q}</span>
            <span className="text-[24px] font-light text-text-primary shrink-0 leading-none">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="animate-[faqOpen_.3s_ease]"><p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0 py-0 px-[20px] pb-[18px]">{item.a}</p></div>}
        </div>
      ))}
    </div>
  );
}
