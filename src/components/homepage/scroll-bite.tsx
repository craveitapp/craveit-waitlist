"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function ScrollToBite() {
  const steps = [
    {
      title: "Scroll meal videos",
      description:
        "Real food from real vendors near you. Scroll until something makes you hungry.",
      image: "/images/scroll-illust-1.png",
      alt: "Person scrolling meal videos",
      bgColor: "bg-[#F5F0E6]",
    },
    {
      title: "Tap when you crave it",
      description: "Tap the meal you want and confirm your order in seconds.",
      image: "/images/scroll-illust-2.png",
      alt: "Person tapping to order",
      bgColor: "bg-[#FFE8D6]",
    },
    {
      title: "Track it to your door",
      description:
        "Your rider picks up and heads to you. Track your order in real time from the moment it leaves the kitchen.",
      image: "/images/scroll-illust-3.png",
      alt: "Delivery tracking",
      bgColor: "bg-[#F5F0E6]",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section className="bg-[#F5F0E8] px-6 md:px-[120px] py-16 md:py-24">
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="font-poppins font-bold text-[28px] leading-[36px] md:text-[40px] md:leading-[52px] text-[#1C1C1C]">
          From <span className="text-[#E96029] italic">scroll</span> to doorstep
          <br />
          in three steps.
        </h2>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            {/* Illustration Area */}
            <div className={`relative h-48 md:h-56 w-full ${step.bgColor}`}>
              <Image src={step.image} alt={step.alt} fill className="object-cover" />
            </div>
            {/* Content */}
            <div className="p-5 md:p-6">
              <h3 className="font-poppins font-semibold text-base md:text-lg text-[#1C1C1C] mb-2">
                {step.title}
              </h3>
              <p className="font-inter text-sm text-[#6A6A6A] leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
