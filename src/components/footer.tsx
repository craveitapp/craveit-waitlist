import Link from "next/link";
import { isPageVisible } from "@/config/page-visibility";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

const quickLinks = [
  { name: "Vendors", href: "/vendor" },
  { name: "Become a rider", href: "/rider" },
  { name: "Ambassadors", href: "/ambassador" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact us", href: "/contactus" },
];

const legalLinks = [
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Terms of service", href: "/terms-of-service" },
  { name: "Refund policy", href: "/refund-policy" },
];

const socials = [
  {
    name: "X",
    href: "https://x.com/getcraveit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@getcraveit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" /></svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/getcraveit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/getcraveit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    ),
  },
];

function Column({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  const visible = links.filter((l) => isPageVisible(l.href));
  if (visible.length === 0) return null;
  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="font-primary font-medium text-[18px] text-white m-0">{title}</h3>
      <div className="flex flex-col gap-[12px]">
        {visible.map((l) => (
          <Link key={l.href} href={l.href} className="font-secondary text-[15px] text-text-muted transition-colors duration-[.3s] no-underline">
            {l.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full bg-bg-dark py-[64px]">
      <div className="craveit-container relative z-[1]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(40px,6vw,72px)] items-start">
          <div className="flex flex-col gap-[20px] max-w-[360px]">
            <Link href="/" className="inline-flex items-center gap-[10px] no-underline">
              <svg viewBox="0 14 51 51" className="h-[52px] w-[52px] block shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.8438 14.1831H11.1562C4.99482 14.1831 0 19.1779 0 25.3394V54.0269C0 60.1883 4.99482 65.1831 11.1562 65.1831H39.8438C46.0052 65.1831 51 60.1883 51 54.0269V25.3394C51 19.1779 46.0052 14.1831 39.8438 14.1831Z" fill="#E96029" />
                <path d="M35.4611 31.7144C33.8472 29.91 31.7235 28.6382 29.371 28.0672C27.0185 27.4962 24.5481 27.653 22.2866 28.5168C20.0252 29.3806 18.0793 30.9107 16.7065 32.9046C15.3337 34.8985 14.5986 37.2623 14.5986 39.6831C14.5986 42.1039 15.3337 44.4677 16.7065 46.4616C18.0793 48.4555 20.0252 49.9856 22.2866 50.8494C24.5481 51.7132 27.0185 51.87 29.371 51.299C31.7235 50.728 33.8472 49.4562 35.4611 47.6519" stroke="white" strokeWidth="4.00938" strokeLinecap="round" fill="none" />
                <path d="M22.3125 42.0737L25.5 45.2612L31.0781 39.6831" stroke="white" strokeWidth="3.97015" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="font-primary font-semibold text-[30px] text-white tracking-[-.01em]">Craveit</span>
            </Link>
            <p className="font-secondary text-[15px] leading-[1.75] text-text-muted m-0">
              Craveit, discover food you never knew existed near you.
            </p>
            <div className="flex gap-[12px] items-center">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-[42px] h-[42px] rounded-full bg-white/[.08] inline-flex items-center justify-center text-text-muted no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[clamp(32px,5vw,56px)]">
            <Column title="Company" links={companyLinks} />
            <Column title="Quick links" links={quickLinks} />
            <Column title="Legal" links={legalLinks} />
          </div>
        </div>

        <div className="mt-[clamp(40px,6vw,56px)] pt-[24px] border-t border-white/[.1] flex flex-wrap gap-[12px_24px] items-center justify-between">
          <p className="font-secondary text-[15px] text-text-muted m-0">
            © 2026 Craveit Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
