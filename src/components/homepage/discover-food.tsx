"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";

export default function DiscoverFood() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
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
              <span className="font-secondary font-semibold md:text-xl text-xs tracking-[0.2em] text-text-secondary uppercase">
                Coming Soon
              </span>
              <h2 className="font-primary font-semibold text-[32px] leading-[42px] md:text-[50px] md:leading-[73px] text-text-primary">
                Discover food you
                <br className="hidden md:inline" /> never knew existed
                <br className="hidden md:inline" /> near you.
              </h2>
              <p className="font-secondary text-sm md:text-lg md:leading-[35px] text-text-secondary leading-relaxed md:max-w-xl max-w-md">
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
              <div
                className="relative w-[200px] md:w-[250px] rounded-[2.8rem] overflow-hidden border-[6px] border-text-primary shadow-2xl bg-black"
                style={{ aspectRatio: "9/19.5" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-text-primary rounded-b-2xl z-10" />

                {/* Video — replace src with your actual video path */}
                <video
                  src="/videos/hero-video.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
