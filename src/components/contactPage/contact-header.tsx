"use client";

import { easeOut, motion } from "framer-motion";

export default function ContactHeader() {
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
              Let's <span className="italic text-brand">talk.</span>
            </h1>

            <p className="font-secondary text-sm md:text-lg text-text-secondary mt-6  leading-relaxed">
              Whether you have a question, want to partner, or just want to tell us about a dish we should feature — we're listening. Every message gets read by a real person on the team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
