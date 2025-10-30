"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function WhatsDiiferent() {
  const platforms = [
    {
      title: "See It Before You Order",
      description: "Short videos from real vendors, no surprises, just mouthwatering reality.",
      image: "/icons/video.svg",
      alt: "video icon",
    },
    {
      title: "Fast & Fresh Every Time",
      description: "Trusted vendors. Reliable riders. Hot food, always on time.",
      image: "/icons/ride.svg",
      alt: "bike ride icon",
    },
    {
      title: "Built for Local Flavors",
      description:
        "From abacha to jollof, we spotlight Nigerian meals and vendors you actually know.",
      image: "/icons/cart.svg",
      alt: "cart icon",
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
    <section className="bg-white px-0  md:px-[120px] py-16 ">
      {/* Section Header */}
      <motion.div
        className="container mx-auto mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="mb-4 font-inter text-xl text-[#1C1C1C] font-semibold lg:text-4xl mx-auto">
          What Makes CraveIt Different
        </h2>
        <p className="text-md mx-auto font-poppins  md:px-8 px-4 text-[#4B4B4B] lg:text-lg">
          We&apos;re not just another food delivery app, we&apos;re where your cravings start.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="px-8 md:px-0 mx-auto md:w-full md:max-w-6xl grid grid-cols-1 gap-5 md:grid-cols-3">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col py-8  px-4 md:px-6 gap-3 rounded-xl bg-white items-start shadow-sm md:text-start"
          >
            <Image
              src={platform.image}
              alt={platform.alt}
              width={50}
              height={50}
              className=" object-contain"
            />

            <h3 className="text-xl font-poppins font-semibold tracking-[0.02em] text-black">
              {platform.title}
            </h3>
            <p className=" text-sm md:text-base font-normal font-inter text-[#4B4B4B] ">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
