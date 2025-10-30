"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function ScrollToBite() {
  const platforms = [
    {
      title: "Discover Through Short Videos",
      description:
        "Scroll a feed of real short food videos from vendors near you, see the suya smoke, the jollof steam, and the okpa unwrap.",
      image: "/icons/video.svg",
      alt: "video icon",
    },
    {
      title: "Order in Seconds",
      description:
        "Add your favorite meal to cart and checkout in a few taps. Ordering food has never felt this easy.",
      image: "/icons/cart.svg",
      alt: "cart icon",
    },
    {
      title: "Delivered Hot & Fresh",
      description:
        "Track your meal from kitchen to doorstep in real time. Always hot. Always on time.",
      image: "/icons/ride.svg",
      alt: "bike ride icon",
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
        <h2 className="mb-4 font-satoshi text-xl text-[#1C1C1C] font-bold lg:text-4xl max-w-lg mx-auto">
          From Scroll to Bite
        </h2>
        <p className="text-md mx-auto font-poppins max-w-xl md:px-8 px-4 text-[#4B4B4B] lg:text-lg">
          Three simple steps. Watch. Crave. Eat.
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
            <p className=" text-sm md:text-base font-inter font-normal text-[#4B4B4B] ">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
