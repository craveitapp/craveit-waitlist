"use client";
import { easeOut, motion } from "framer-motion";
import TallyButton from "../TallyBtn";

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

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
      delay: 0.3,
    },
  },
};

const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-bg-cream px-6 pt-28 pb-12 md:px-[120px] md:pt-36 md:pb-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:py-20 md:justify-between md:min-h-[calc(100vh-5rem)]">
        {/* ── Left: Text Content ── */}
        <motion.div
          className="flex flex-col items-start text-left max-w-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-primary font-bold text-[36px] leading-[44px] tracking-tight text-text-primary md:text-[52px] md:leading-[62px] mb-5"
          >
            Food you <span className="text-brand italic">see</span>
            <br />
            before you
            <br />
            <span className="text-brand italic">order.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-secondary text-sm leading-relaxed text-text-secondary mb-8 md:text-base md:leading-7 max-w-sm"
          >
            Launching soon in Enugu. Be the first to discover food you never knew existed near
            you.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
              <TallyButton
                formId="wgBvg1"
                label="Join The Waitlist"
                className="cursor-pointer font-primary font-semibold rounded-full bg-brand px-6 py-6 text-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-transparent hover:text-brand hover:border hover:border-brand"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right: Phone Mockup with Video ── */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center"
        >
          {/* Card backing */}
          <div className="relative flex items-center justify-center rounded-[2.5rem] bg-[#EFDCC8] py-6 px-10 shadow-inner md:py-10 md:px-40">
            {/* Phone frame */}
            <div
              className="relative w-[200px] md:w-[240px] rounded-[2.8rem] overflow-hidden border-[6px] border-text-primary shadow-2xl bg-black"
              style={{ aspectRatio: "9/19.5" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-text-primary rounded-b-2xl z-10" />

              {/* Video — replace src with your actual video path */}
              <video
                src="/videos/app-demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
