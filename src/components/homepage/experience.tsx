"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import TallyButton from "../TallyBtn";

export default function Experience() {
  return (
    <section className="bg-bg-secondary py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <h2 className="font-primary font-semibold text-[32px] leading-10 md:text-[50px] md:leading-[73px] text-text-primary">
                Your next meal is
                <br className="hidden md:inline" /> almost here.
              </h2>

              <p className="font-secondary text-sm md:text-2xl md:leading-[39px] text-text-secondary md:max-w-lg max-w-md leading-relaxed">
                CraveIt is launching in Enugu soon. Join the waitlist and be first to discover
                food you never knew existed near you.
              </p>

              <TallyButton
                formId="wgBvg1"
                label="Join The Waitlist"
                className="cursor-pointer font-primary font-semibold rounded-full bg-brand px-4 py-6 md:px-5 md:py-7 md:text-base text-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-brand hover:border hover:border-brand"
              />
            </motion.div>

            {/* Right: Hand holding phone illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            >
              <div className="relative w-full aspect-3/4 max-w-[400px] mx-auto">
                <Image
                  src="/images/hand-phone-illust.png"
                  alt="Hand holding phone showing CraveIt app"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
