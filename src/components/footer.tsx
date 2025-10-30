import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#works" },
    { name: "Contact Us", href: "mailto:getcraveitapp@gmail.com" },
    // {
    //   name: "Contact Us",
    //   href: "mailto:getcraveitapp@gmail.com?subject=Craveit%20Inquiry&body=Hello%20Craveit%20Team,",
    // },
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

          {/* Navigation Links */}

          <ul className="flex items-center text-center mb-6 gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[#F3F3F3] hover:text-[#FF6B35] transition duration-300 font-poppins md:text-base text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <Link href="#" className="transition duration-300 hover:opacity-80">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={60}
                height={56}
                className="w-[30px] h-7 md:w-[60px] md:h-14"
              />
            </Link>
            <Link href="#" className="transition duration-300 hover:opacity-80">
              <Image
                src="/icons/x.svg"
                alt="X (Twitter)"
                width={60}
                height={56}
                className="w-[30px] h-7 md:w-[60px] md:h-14"
              />
            </Link>
            <Link href="#" className="transition duration-300 hover:opacity-80">
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={60}
                height={56}
                className="w-[30px] h-7 md:w-[60px] md:h-14"
              />
            </Link>
            <Link href="#" className="transition duration-300 hover:opacity-80">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={60}
                height={56}
                className="w-[30px] h-7 md:w-[60px] md:h-14"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-16 w-full pt-8 border-t border-[#F3F3F3]/20">
        <p className="text-center px-12 text-[#F3F3F3] font-poppins text-sm">
          © {new Date().getFullYear()} Craveit Technologies Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
