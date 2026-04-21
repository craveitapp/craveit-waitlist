import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Vendors", href: "/vendor" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "mailto:getcraveitapp@gmail.com" },
  ];

  const support = [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  const social = [
    { name: "X (Formerly Twitter)", href: "https://x.com/getcraveit" },
    { name: "TikTok", href: "http://tiktok.com/@getcraveit" },
    { name: "LinkedIn", href: "http://linkedin.com/company/getcraveit" },
    { name: "Facebook", href: "http://facebook.com/getcraveit" },
  ];

  return (
    <footer className="bg-[#1C1410] pt-16 pb-8">
      <div className="w-full px-6 md:px-[120px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr] gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/footer-logo.svg"
                alt="CraveIt"
                width={180}
                height={52}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[#9A9A9A] text-sm font-inter leading-[28px] ">
              Launching soon in Enugu. Discover food you never knew existed near you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-poppins font-semibold text-base">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#9A9A9A] hover:text-white transition duration-300 font-inter text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-poppins font-semibold text-base">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#9A9A9A] hover:text-white transition duration-300 font-inter text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-4">
            <h3 className="text-white font-poppins font-semibold text-base">Stay Connected</h3>
            <ul className="space-y-3">
              {social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9A9A9A] hover:text-white transition duration-300 font-inter text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Full Width */}
      <div className="mt-16 pt-6 border-t border-[#3A3028] px-6 md:px-[120px]">
        <p className="text-[#9A9A9A] text-center font-inter text-sm">
          © CraveIt Technologies Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
