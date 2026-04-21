"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";

export default function DiscoverFood() {
  return (
    <section className="bg-white px-6 md:px-[120px] py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
            }}
          >
            <span className="font-inter text-xs tracking-[0.2em] text-[#6A6A6A] uppercase">
              Coming Soon
            </span>
            <h2 className="font-poppins font-bold text-[32px] leading-[42px] md:text-[48px] md:leading-[58px] text-[#1C1C1C]">
              Discover food you
              <br />
              never knew existed
              <br />
              near you.
            </h2>
            <p className="font-inter text-sm md:text-base text-[#6A6A6A] leading-relaxed max-w-md">
              The best food near you has been hiding. CraveIt is launching soon and we are
              building the feed right now. Join the waitlist and be among the first to scroll,
              discover, and order.
            </p>
          </motion.div>

          {/* Right: iPhone Image */}
          <motion.div
            className="flex justify-center md:justify-end"
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
            <Image
              src="/images/iphone.png"
              alt="CraveIt app on iPhone"
              width={320}
              height={640}
              className="w-[260px] md:w-[300px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
