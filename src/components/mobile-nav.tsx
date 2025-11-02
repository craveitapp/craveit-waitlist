"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { navItems } from "./navbar";
import { LogoNav } from "./logo-nav";
import Image from "next/image";
import TallyButton from "./TallyBtn";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track which section is visible
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
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-5 lg:hidden">
      {/* Logo */}
      <LogoNav />

      {/* Mobile Menu Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="cursor-pointer py-3.5" variant="trans" size="icon">
            <Image
              src="/icons/menu.svg"
              alt="menu"
              width={25}
              height={25}
              className="object-fit  object-cover"
            />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        {/* Slide-out Menu */}
        <SheetContent side="top" className="h-screen bg-white">
          <div className="flex items-center justify-between bg-white px-6 py-5">
            <LogoNav />
            <Button
              className="cursor-pointer py-3.5"
              variant="trans"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/icons/close-menu.svg"
                alt="close menu"
                width={20}
                height={20}
                className="object-fit object-cover"
              />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center space-y-6 pt-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-md font-light transition duration-300 ease-in-out hover:text-[#E96029] ${
                  activeSection === item.href.substring(1) ? "text-[#E96029]" : "text-[#1C1C1C]"
                }`}
              >
                {item.name}
              </a>
            ))}

            <TallyButton
              formId="wgBvg1"
              label="Get Early Access"
              onBeforeOpen={() => setOpen(false)}
              className="cursor-pointer bg-[#E96029] rounded-xl hover:border hover:border-[#E96029] hover:text-[#E96029] px-8 py-6 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-transparent md:rounded-lg md:px-8 md:py-2.5 md:text-base"
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
