"use client";

import { easeOut, motion } from "framer-motion";

export default function FAQHeader() {
  return (
    <section className="bg-[#F8EEE0] py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h1 className="font-primary font-semibold text-[36px] leading-11 md:text-[72px] md:leading-[77px] text-text-primary">
              Got questions?
              <br className="hidden md:inline" />
              We've
              <br className="hidden md:inline" />
              got answers.
            </h1>

            <p className="font-secondary text-sm md:text-lg text-text-secondary mt-6  leading-relaxed">
              Everything you need to know about ordering, delivery, payments, and getting the
              most out of CraveIt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
