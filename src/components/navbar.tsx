"use client";
import { Logo } from "./logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import TallyButton from "./TallyBtn";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#works" },
  { name: "Faqs", href: "#faqs" },
];

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1120px)");
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {isDesktop ? (
        <nav className="fixed top-0 z-50 py-3 w-full  bg-white px-[120px] text-[#1C1C1C]">
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
                  className={`transition duration-300 ease-in-out hover:text-[#FF6B35] ${
                    isActiveLink(item.href) ? "text-[#FF6B35]" : "text-[#1C1C1C]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <TallyButton
              formId="wgBvg1"
              label="Get Early Access"
              className="cursor-pointer bg-[#FF6B35] rounded-lg hover:border hover:border-[#FF6B35] hover:text-[#FF6B35] px-6.5 py-2.5 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-transparent md:rounded-lg md:px-8 md:py-2.5 md:text-base"
            />
          </div>
        </nav>
      ) : (
        // Mobile Navigation
        <MobileNav />
      )}
    </>
  );
}
