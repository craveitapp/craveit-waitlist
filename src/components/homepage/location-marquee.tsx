"use client";

import { motion } from "framer-motion";

const locations = [
  "New Haven",
  "Independence Layout",
  "GRA",
  "Uwani",
  "Ogui Road",
  "Independence Layout",
  "GRA",
  "Uwani",
  "New Haven",
  "Ogui Road",
];

export default function LocationMarquee() {
  return (
    <section className="w-full bg-brand py-4 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex shrink-0 items-center gap-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...locations, ...locations].map((location, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="font-poppins font-medium text-white text-sm md:text-base whitespace-nowrap">
                {location}
              </span>
              <span className="text-white/60 text-xs">●</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
