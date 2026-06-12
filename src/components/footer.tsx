import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Vendors", href: "/vendor" },
    // { name: "Blog", href: "#" },
    { name: "Contact Us", href: "/contactus" },
  ];

  const support = [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  const social = [
    { name: "X (Formerly Twitter)", href: "https://x.com/getcraveit" },
    { name: "TikTok", href: "https://tiktok.com/@getcraveit" },
    { name: "LinkedIn", href: "https://linkedin.com/company/getcraveit" },
    { name: "Facebook", href: "https://facebook.com/getcraveit" },
  ];

  return (
    <footer className="bg-bg-dark pt-16 pb-8">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr] gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-2 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/footer-logo.svg"
                alt="CraveIt"
                width={200}
                height={52}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-text-muted text-sm md:text-base font-secondary leading-7">
              Launching soon in Enugu. Discover food you never knew existed near you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-primary font-medium md:text-xl text-base">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-white transition duration-300 font-secondary  md:text-base text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-primary font-medium md:text-xl text-base">
              Support
            </h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-white transition duration-300 font-secondary md:text-base text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-4">
            <h3 className="text-white font-primary font-medium md:text-xl text-base">
              Stay Connected
            </h3>
            <ul className="space-y-3">
              {social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition duration-300 font-secondary md:text-base text-sm"
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
      <div className="mt-16 pt-6 border-t border-white/10 px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <p className="text-text-muted text-center md:text-left font-secondary md:text-base text-sm">
          © CraveIt Technologies Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
