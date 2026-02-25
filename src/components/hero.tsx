"use client";

import { easeOut, motion } from "framer-motion";
import TallyButton from "./TallyBtn";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const buttonHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF8F6] px-4 pt-36 text-white md:px-8 md:py-24">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="animate-blob animation-delay-2000 absolute right-[2%] -bottom-30 h-100 w-full rounded-full bg-[#00B4D8] opacity-50 mix-blend-screen blur-3xl filter"
      />
      <motion.div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#0B0A0A] opacity-0 mix-blend-screen blur-3xl filter" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Star Rating */}
        <motion.div
          variants={fadeInUp}
          className="mb-4 flex items-center justify-center md:mt-20 md:mb-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="ml-2 font-medium font-poppins text-xs text-[#E96029] md:text-base"
          >
            See it. Crave it. Tap to order.
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-poppins font-semibold px-2 pb-6 text-center text-[26px] leading-[35px]  -tracking-wide text-[#1C1C1C] md:pb-8 md:text-[64px] md:leading-[72px]"
        >
          Your Cravings, One Tap
          <br className="hidden md:block" /> Away.
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          variants={fadeInUp}
          className="text-base mb-2 font-inter md:max-w-4xl md:px-8 text-center -tracking-wide text-[#6A6A6A] md:mb-4 md:text-2xl md:leading-[34px] lg:text-xl"
        >
          Scroll short videos from real vendors near you. Tap what you crave and enjoy{" "}
          <br className="hidden md:block" /> every bite.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={fadeInUp}>
          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
            <TallyButton
              formId="wgBvg1"
              label="Get Early Access"
              className="cursor-pointer m-6 md:m-0 font-poppins font-semibold rounded-lg bg-[#E96029]  text-sm text-white shadow-lg transition duration-300 ease-in-out hover:bg-transparent hover:text-[#E96029] hover:border hover:border-[#E96029] md:rounded-xl px-8 py-6 md:text-[16px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
