"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import TallyButton from "../TallyBtn";

export default function VendorHero() {
  return (
    <section className="bg-brand-light px-6 md:px-[120px] py-16 md:py-24 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h1 className="font-primary font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] text-text-primary">
              Your food.
              <br />
              Your <span className="text-brand italic">story</span>.
              <br />
              Your income.
            </h1>

            <p className="font-secondary text-sm md:text-base text-text-secondary max-w-md leading-relaxed">
              CraveIt gives vendors near you a video-first storefront that turns hungry
              scrollers into paying customers.
            </p>

            <TallyButton
              formId="wdL4vy"
              label="Join The Waitlist"
              className="cursor-pointer font-primary font-semibold rounded-full bg-brand px-6 py-4 text-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-brand hover:border hover:border-brand"
            />
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto">
              <Image
                src="/images/hero-vendor-illust.png"
                alt="Vendor cooking food illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
