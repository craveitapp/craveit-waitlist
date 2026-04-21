"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import TallyButton from "../TallyBtn";

export default function Grow() {
  const features = [
    "No setup cost — you only pay when you earn",
    "Delivery is handled — you just keep cooking",
    "Real-time order notifications and payouts",
  ];

  return (
    <section className="bg-[#F5F0E8] px-6 md:px-[120px] py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
            }}
          >
            <Image
              src="/images/grow-illust.png"
              alt="Mama Kachi's restaurant with new order notification"
              width={480}
              height={400}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: easeOut, delay: 0.2 },
              },
            }}
          >
            <span className="font-inter text-xs tracking-[0.15em] text-[#6A6A6A] uppercase">
              For Vendors
            </span>

            <h2 className="font-poppins font-normal text-[28px] leading-[38px] md:text-[40px] md:leading-[80px] text-[#1C1C1C]">
              Grow your business where
              <br />
              customers are
              <br />
              already searching.
            </h2>

            <p className="font-inter text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              CraveIt brings your food directly to hungry customers through video. We help you
              get set up and go live fast.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {features.map((text, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E96029] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-inter text-sm text-[#6A6A6A]">{text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <TallyButton
              formId="wdL4vy"
              label="Join The Waitlist"
              className="cursor-pointer mt-4 font-poppins font-semibold rounded-full bg-[#E96029] px-6 py-4 text-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-[#E96029] hover:border hover:border-[#E96029]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
