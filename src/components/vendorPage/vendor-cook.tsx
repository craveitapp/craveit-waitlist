"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function VendorCook() {
  const steps = [
    {
      title: "Built for vendors who actually cook.",
      description: "CraveIt gives food vendors who cook real food the visibility they deserve.",
      image: "/images/vendor-cook-illust-1.png",
      alt: "Vendor cooking food",
      bgColor: "bg-bg-secondary",
    },
    {
      title: "Video gets you seen",
      description:
        "Your food isn't buried in a menu. It plays as a short video right on people's screens. Customers see exactly what they are buying before they order.",
      image: "/images/vendor-cook-illust-2.png",
      alt: "Vendor cooking food",
      bgColor: "bg-bg-secondary",
    },
    {
      title: "Grow without the guesswork",
      description:
        "Track your orders and watch your customer base grow, all from your vendor app.",
      image: "/images/vendor-cook-illust-3.png",
      alt: "illustration",
      bgColor: "bg-bg-secondary",
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
    <section className="bg-bg-secondary px-6 md:px-[120px] py-16 md:py-24">
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
        <h2 className="font-primary font-semibold text-[28px] leading-[36px] md:text-[40px] md:leading-[52px] text-text-primary">
          Built for vendors who
          <br />
          actually <span className="text-brand italic">cook.</span>
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
              <h3 className="font-primary font-semibold text-base md:text-lg text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="font-secondary text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
