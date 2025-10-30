"use client";
import { Logo } from "./logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileNav from "./mobile-nav";
import TallyButton from "./TallyBtn";
import { useEffect, useState } from "react";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#works" },
  { name: "Faqs", href: "#faqs" },
];

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1120px)");
  const [activeSection, setActiveSection] = useState<string>("home");

  // Observe which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isDesktop ? (
        <nav className="fixed top-0 z-50 py-3 w-full bg-white px-[120px] text-[#1C1C1C] shadow-sm">
          <div className="mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="block">
              <Logo width={170} height={40} />
            </div>

            {/* Navigation Links */}
            <div className="md:text-lg hidden font-medium items-center space-x-8 text-[#1C1C1C] md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition duration-300 ease-in-out hover:text-[#E96029] ${
                    activeSection === item.href.substring(1)
                      ? "text-[#E96029]"
                      : "text-[#1C1C1C]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <TallyButton
              formId="wgBvg1"
              label="Get Early Access"
              className="cursor-pointer bg-[#E96029] rounded-lg hover:border hover:border-[#E96029] hover:text-[#E96029] px-6.5 py-2.5 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-transparent md:rounded-xl md:px-8 md:py-6 md:text-base"
            />
          </div>
        </nav>
      ) : (
        <MobileNav />
      )}
    </>
  );
}
