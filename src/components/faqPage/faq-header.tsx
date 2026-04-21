"use client";

import { easeOut, motion } from "framer-motion";

export default function FAQHeader() {
  return (
    <section className="bg-[#F8EEE0] px-6 md:px-[120px] py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <h1 className="font-poppins font-normal text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] text-[#1C1C1C]">
            Got questions?
            <br />
            We've
            <br />
            got answers.
          </h1>

          <p className="font-inter text-sm md:text-base text-[#6A6A6A] mt-6 max-w-md leading-relaxed">
            Everything you need to know about ordering, delivery, payments, and getting the most
            out of CraveIt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
