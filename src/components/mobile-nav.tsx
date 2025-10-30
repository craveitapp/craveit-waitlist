"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { navItems } from "./navbar";
import Link from "next/link";
import { LogoNav } from "./logo-nav";
import Image from "next/image";
import TallyButton from "./TallyBtn";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3  lg:hidden">
      {/* Logo */}
      <LogoNav />
      {/* Mobile Menu Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="cursor-pointer py-3.5" variant="trans" size="icon">
            <Image
              src="/icons/menu.svg"
              alt=""
              width={25}
              height={25}
              className="object-fit mb-6 object-cover"
            />

            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-screen bg-white">
          <div className="flex items-center justify-between bg-white px-4 py-3">
            <LogoNav />
            <Button
              className="cursor-pointer py-3.5"
              variant="trans"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/icons/close-menu.svg"
                alt=""
                width={20}
                height={20}
                className="object-fit mb-6 object-cover"
              />

              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-6 pt-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-light transition duration-300 ease-in-out hover:text-[#FF6B35] ${
                  isActiveLink(item.href) ? "text-[#FF6B35]" : "text-[#1C1C1C]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <TallyButton
              formId="wgBvg1"
              label="Get Early Access"
              onBeforeOpen={() => setOpen(false)}
              className="cursor-pointer bg-[#FF6B35] rounded-lg hover:border hover:border-[#FF6B35] hover:text-[#FF6B35] px-6.5 py-2.5 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-transparent md:rounded-lg md:px-8 md:py-2.5 md:text-base"
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
