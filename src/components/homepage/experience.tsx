"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import TallyButton from "../TallyBtn";

export default function Experience() {
  return (
    <section className="bg-[#F5F0E8] px-6 md:px-[120px] py-16 md:py-24">
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
            <h2 className="font-poppins font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-[#1C1C1C]">
              Your next meal is
              <br />
              almost here.
            </h2>

            <p className="font-inter text-sm md:text-base text-[#6A6A6A] max-w-md leading-relaxed">
              CraveIt is launching in Enugu soon. Join the waitlist and be first to discover
              food you never knew existed near you.
            </p>

            <TallyButton
              formId="wgBvg1"
              label="Join The Waitlist"
              className="cursor-pointer font-poppins font-semibold rounded-full bg-[#E96029] px-6 py-4 text-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-[#E96029] hover:border hover:border-[#E96029]"
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
            <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto">
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
    </section>
  );
}
