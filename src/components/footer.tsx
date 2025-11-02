import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#works" },
    { name: "Contact Us", href: "mailto:getcraveitapp@gmail.com" },
    { name: "Faqs", href: "#faqs" },
  ];

  return (
    <footer className="bg-[#1C1C1C]  py-16">
      <div className="container px-0 md:px-[120px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* Logo and social icons */}
          <Link href="/" className="inline-block">
            <Image
              src="/footer-logo.svg"
              alt="Craveit Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </Link>

          <p className="text-[#FFF8F6] text-base font-poppins font-medium -mt-6 mb-6">
            Nigeria&apos;s first social food delivery app
          </p>

          <ul className="flex items-center text-center mb-6 gap-6 md:gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[#F3F3F3] hover:text-[#E96029] transition duration-300 font-poppins md:text-base text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6 md:space-x-8 lg:space-x-10">
            {[
              {
                href: "http://linkedin.com/company/getcraveit",
                src: "/icons/linkedin.svg",
                alt: "LinkedIn",
              },
              { href: "https://x.com/getcraveit", src: "/icons/x.svg", alt: "X (Twitter)" },
              {
                href: "http://tiktok.com/@getcraveit",
                src: "/icons/tiktok.svg",
                alt: "TikTok",
              },
              {
                href: "https://www.instagram.com/getcraveit_",
                src: "/icons/instagram.svg",
                alt: "Instagram",
              },
              {
                href: "http://facebook.com/getcraveit",
                src: "/icons/facebook.svg",
                alt: "Facebook",
              },
            ].map(({ href, src, alt }) => (
              <Link key={alt} href={href} className="transition duration-300 hover:opacity-80">
                <div className="relative w-auto h-auto md:w-auto md:h-auto">
                  <Image
                    src={src}
                    alt={alt}
                    width={60}
                    height={60}
                    className="h-auto w-auto max-h-8 max-w-8 md:w-[60px] md:h-14 lg:max-h-none lg:max-w-none object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 w-full pt-8 border-t border-[#F3F3F3]/20">
        <p className="text-center px-12 font-medium text-[#F3F3F3] font-poppins md:text-sm lg:text-base text-xs">
          © {new Date().getFullYear()} Craveit Technologies Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
