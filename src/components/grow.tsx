"use client";

import Image from "next/image";
import { easeOut, motion, Variants } from "framer-motion";
import Link from "next/link";
import TallyButton from "./TallyBtn";

const fadeInUp: Variants = {
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

const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

// ✨ Animation variants for the main section (fixed typing)
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: easeOut, // ✅ FIXED: using easing function, not string
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Grow() {
  return (
    <section className="bg-[#FFFAF6] px-0 md:px-[120px] py-16">
      <motion.div
        className="container mx-auto mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="mb-4 font-poppins text-2xl text-[#1C1C1C] font-bold lg:text-4xl max-w-lg mx-auto">
          Grow With CraveIt
        </h2>
        <p className="text-base mx-auto font-inter max-w-md md:max-w-xl md:px-8 px-6 text-[#4B4B4B] lg:text-lg">
          Sell more, reach more, and make your meals go viral.
        </p>
      </motion.div>

      {/* 🌟 Animated section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-start md:justify-between max-w-7xl mx-auto gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div variants={item} className="md:w-1/2">
          <Image
            src="/images/grow-illustration.png"
            alt="Grow with CraveIt illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Text + Button */}
        <motion.div
          variants={item}
          className="md:w-1/2 md:mt-8 px-6 md:px-0 flex flex-col gap-3"
        >
          <p className="font-inter text-[#4B4B4B] leading-[30px] md:leading-[41px] text-sm md:text-base">
            CraveIt helps local vendors and home chefs sell beyond their street, reaching
            thousands of customers through short food videos. Manage your orders easily, track
            deliveries in real time, and enjoy instant payments.
          </p>

          {/* Features */}
          {[
            "Get discovered by more customers",
            "Manage and deliver orders easily",
            "Flexible instant or scheduled delivery",
            "Fast payments and clear records",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-row items-center gap-2"
            >
              <Image src="/icons/mark-icon.svg" alt="Check mark icon" width={20} height={20} />
              <p className="font-inter text-[#4B4B4B] text-base">{text}</p>
            </motion.div>
          ))}

          {/* Call to Action Button */}
          <motion.div variants={item}>
            <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
              <TallyButton
                formId="wdL4vy"
                label="Sell on CraveIt"
                className="cursor-pointer mt-8 font-poppins font-semibold rounded-lg bg-[#FF6B35] text-sm text-white shadow-lg transition duration-300 ease-in-out hover:bg-transparent hover:text-[#FF6B35] hover:border hover:border-[#FF6B35] md:rounded-lg px-8 py-2.5 md:text-[16px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* section ends here */}
    </section>
  );
}
