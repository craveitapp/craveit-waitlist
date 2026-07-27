"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { isPageVisible } from "@/config/page-visibility";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Vendors", href: "/vendor" },
  { name: "Faqs", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contactus" },
];

const LogoMark = () => (
  <svg
    viewBox="0 13.5 38 38"
    className="h-[38px] w-[38px] block shrink-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="13.5" width="38" height="38" rx="19" fill="#E96029" />
    <path
      d="M26.4226 26.5623C25.2201 25.2179 23.6378 24.2703 21.8849 23.8448C20.1321 23.4194 18.2914 23.5362 16.6064 24.1798C14.9214 24.8235 13.4715 25.9635 12.4486 27.4492C11.4257 28.9349 10.8781 30.6961 10.8781 32.4998C10.8781 34.3036 11.4257 36.0648 12.4486 37.5504C13.4715 39.0361 14.9214 40.1762 16.6064 40.8198C18.2914 41.4634 20.1321 41.5802 21.8849 41.1548C23.6378 40.7294 25.2201 39.7817 26.4226 38.4373"
      stroke="#FFF0E9"
      strokeWidth="4.4058"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16.625 34.2811L19 36.6561L23.1562 32.4998"
      stroke="white"
      strokeWidth="2.2029"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y < 60) setHidden(false);
      else if (y > last + 2 && y > 130) setHidden(true);
      else if (y < last - 2) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const visibleNavLinks = useMemo(
    () => navLinks.filter((l) => isPageVisible(l.href)),
    []
  );

  const downloadHref = useMemo(() => {
    if (pathname === "/") return "/#cta";
    if (pathname === "/vendor") return "/vendor#cta";
    if (pathname === "/blog") return "/blog#download";
    if (pathname.startsWith("/blog/")) return "#download";
    return "/#cta";
  }, [pathname]);

  return (
    <nav
      className="w-full py-[16px] sticky top-[0] z-[100] will-change-transform"
      style={{
        transform: hidden ? "translateY(-90px)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        background: scrolled ? "rgba(248,238,224,0.82)" : "rgba(248,238,224,0.55)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
        boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.05)" : "transparent"}`,
        transition: "transform .28s ease-in-out,opacity .28s ease-in-out,background .28s ease-in-out,box-shadow .28s ease-in-out,border-color .28s ease-in-out,backdrop-filter .28s ease-in-out",
      }}
    >
      <div className="craveit-container nav-inner grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-[16px]">
        <Link href="/" className="inline-flex items-center gap-[9px] no-underline justify-self-start">
          <LogoMark />
          <span className="font-primary font-semibold text-[26px] text-text-primary tracking-[-.01em]">
            Craveit
          </span>
        </Link>

        <div className="nav-desktop justify-self-center flex items-center gap-[2px] bg-white rounded-full py-[7px] px-[10px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
          {visibleNavLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-secondary font-medium text-[15px] py-[8px] px-[16px] rounded-full no-underline whitespace-nowrap transition-colors duration-[.25s] ${
                isActive(l.href) ? "text-brand" : "text-text-primary"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="justify-self-end flex items-center gap-[10px]">
          <Link
            href={downloadHref}
            className="nav-cta-desktop font-primary font-semibold text-[15px] text-white bg-brand rounded-full py-[14px] px-[26px] whitespace-nowrap no-underline shadow-[0_8px_20px_rgba(233,96,41,.24)] transition-all duration-[.25s]"
          >
            Download the App
          </Link>
          <button
            className="nav-burger items-center justify-center w-[46px] h-[46px] rounded-[14px] border-none bg-white shadow-[0_4px_16px_rgba(0,0,0,.08)] cursor-pointer text-text-primary"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile-panel craveit-container mt-[14px]">
          <div className="bg-white rounded-[20px] shadow-[0_12px_34px_rgba(0,0,0,.12)] p-[12px] flex flex-col gap-[2px] animate-[faqOpen_.25s_ease]">
            {visibleNavLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`font-secondary font-medium text-[16px] py-[14px] px-[16px] rounded-[12px] no-underline ${
                  isActive(l.href) ? "text-brand" : "text-text-primary"
                }`}
              >
                {l.name}
              </Link>
            ))}
            <Link
              href={downloadHref}
              onClick={() => setMenuOpen(false)}
              className="mt-[8px] font-primary font-semibold text-[16px] text-white bg-brand rounded-[12px] py-[15px] px-[20px] text-center no-underline"
            >
              Download the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
