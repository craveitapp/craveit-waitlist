"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function BuiltForTrust() {
  const trustCards = [
    {
      title: "Verified vendors",
      description:
        "Every vendor on CraveIt is personally onboarded by our team. We verify who they are and what they cook.",
      image: "/images/trust-illust-1.png",
      alt: "Verified vendors illustration",
      bgColor: "bg-[#1B4D3E]",
    },
    {
      title: "Confirmed delivery",
      description:
        "Your order is confirmed only when your food is at your door. You stay in control at every step.",
      image: "/images/trust-illust-2.png",
      alt: "Confirmed delivery illustration",
      bgColor: "bg-[#F5E6D3]",
    },
    {
      title: "Reliable delivery",
      description:
        "Our riders pick up and deliver every order with care. Fast, consistent, and handled from kitchen to door.",
      image: "/images/trust-illust-3.png",
      alt: "Reliable delivery illustration",
      bgColor: "bg-brand",
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
    <section className="bg-bg-secondary py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
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
          <h2 className="font-primary font-bold text-[28px] leading-[36px] md:text-[40px] md:leading-[52px] text-text-primary">
            Built for trust from kitchen
            <br />
            to your door.
          </h2>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {trustCards.map((card, index) => (
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
              <div className={`relative h-48 md:h-56 w-full ${card.bgColor}`}>
                <Image src={card.image} alt={card.alt} fill className="object-cover" />
              </div>
              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="font-primary font-semibold text-base md:text-lg text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="font-secondary text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
