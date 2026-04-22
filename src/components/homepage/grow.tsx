"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { easeOut, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TallyButton from "../TallyBtn";

export default function Grow() {
  const router = useRouter();
  const features = [
    "No setup cost — you only pay when you earn",
    "Delivery is handled — you just keep cooking",
    "Real-time order notifications and payouts",
  ];

  return (
    <section className="bg-bg-secondary py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 items-center">
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
              <span className="font-secondary text-xs md:text-xl tracking-[0.15em] text-text-secondary uppercase">
                For Vendors
              </span>

              <h2 className="font-primary font-semibold text-[28px] leading-[38px] md:text-[40px] md:leading-[64px] text-text-primary">
                Grow your business where
                <br className="hidden md:inline" /> customers are
                <br className="hidden md:inline" /> already searching.
              </h2>

              <p className="font-secondary text-sm md:text-xl text-text-secondary leading-relaxed">
                CraveIt brings your food directly to hungry customers through video. We help you
                get set up and go live fast.
              </p>

              {/* Features */}
              <div className="space-y-3">
                {features.map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center shrink-0">
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
                    <p className="font-secondary text-sm md:text-base text-text-secondary">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <TallyButton
                  formId="wdL4vy"
                  label="Join The Waitlist"
                  className="cursor-pointer font-primary font-semibold rounded-full bg-brand p-6 md:px-5 md:py-7 md:text-base text-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-brand hover:border hover:border-brand"
                />
                <Button
                  onClick={() => router.push("/vendor")}
                  className="h-12 md:h-14 cursor-pointer px-6 md:px-8 font-primary font-semibold rounded-full bg-transparent text-sm md:text-base text-brand border border-brand shadow-md transition duration-300 ease-in-out hover:bg-brand hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
