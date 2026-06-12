"use client";

import Image from "next/image";

export default function ContactFollow() {
  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "@craveit",
      icon: "/icons/linkedin.svg",
      url: "https://linkedin.com/company/getcraveit",
    },
    {
      name: "TikTok",
      handle: "@craveit",
      icon: "/icons/tiktok.svg",
      url: "https://tiktok.com/@getcraveit",
    },
    {
      name: "X/Twitter",
      handle: "@craveit",
      icon: "/icons/x.svg",
      url: "https://x.com/getcraveit",
    },
  ];

  return (
    <section className="bg-[#0E0A06] py-20 md:py-32 text-center flex flex-col items-center justify-center">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl mx-auto w-full">
        <h3 className="text-brand font-semibold tracking-widest text-sm mb-4 font-secondary uppercase">
          Follow Along
        </h3>
        <h2 className="font-primary text-white text-[32px] leading-tight md:text-[56px] font-medium mb-6">
          Find us where the content lives.
        </h2>
        <p className="font-secondary text-[#A3A3A3] text-sm md:text-lg max-w-2xl mx-auto mb-12 md:mb-16">
          Food videos, vendor stories, and behind-the-scenes of building CraveIt.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#262626] hover:bg-[#333333] transition-colors rounded-2xl p-4 md:px-6 md:py-5 w-full sm:w-auto min-w-[240px] text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold font-secondary text-base">
                  {social.name}
                </span>
                <span className="text-[#A3A3A3] font-secondary text-sm">{social.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
