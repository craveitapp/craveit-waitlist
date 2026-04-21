"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function DiscoverMeals() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <motion.div
          className="max-w-5xl mx-auto flex flex-col gap-4 md:gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-primary font-bold text-[28px] leading-[40px] md:text-[52px] md:leading-[62px] text-text-primary">
            <span>Discover</span>
            <span className="text-[#E96029] italic">meals</span>
            <span>through short</span>
            <Image
              src="/images/discover-illust-1.png"
              alt="Meal illustration"
              width={80}
              height={80}
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-primary font-bold text-[28px] leading-[40px] md:text-[52px] md:leading-[62px] text-text-primary">
            <span>videos</span>
            <Image
              src="/images/discover-illust-2.png"
              alt="Video illustration"
              width={80}
              height={80}
              className="w-14 h-14 hidden md:block md:w-20 md:h-20 object-contain"
            />
            <span>that help you</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-primary font-bold text-[28px] leading-[40px] md:text-[52px] md:leading-[62px] text-text-primary">
            <span>decide faster.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
