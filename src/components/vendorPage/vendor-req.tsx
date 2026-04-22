"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

const requirements = [
  {
    title: "A real kitchen",
    description:
      "in one of our 5 Enugu zones (Ogui Road, Independence Layout, Uwani, New Haven, GRA)",
  },
  {
    title: "Consistent food quality",
    description: "— we taste-test before you go live",
  },
  {
    title: "A smartphone",
    description: "to record short food videos (we'll teach you)",
  },
  {
    title: "The CraveIt app",
    description:
      "downloaded on your phone — our team reviews every application and gets back to you within 24 hours.",
  },
];

export default function VendorReq() {
  return (
    <section className="bg-[#F5F0E8] py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <span className="font-secondary text-xs md:text-xl tracking-[0.15em] text-text-secondary uppercase">
                Requirements
              </span>

              <h2 className="font-primary font-semibold text-[32px] leading-10 md:text-[48px] md:leading-[73px] text-text-primary">
                What you need to get started.
              </h2>

              <p className="font-secondary text-sm md:text-base text-text-secondary">
                We keep it simple. If you cook real food, you're already 90% there.
              </p>

              {/* Requirements Cards */}
              <div className="space-y-3 pt-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: easeOut,
                      delay: index * 0.1,
                    }}
                    className="flex items-start gap-3 md:bg-white md:rounded-xl py-2 md:p-4 md:shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-secondary text-sm md:text-base text-text-primary">
                      <span className="font-semibold">{req.title}</span>{" "}
                      <span className="text-text-secondary">{req.description}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Illustration */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[400px] aspect-square">
                <Image
                  src="/images/vendor-req-illust.png"
                  alt="Vendor requirements checklist illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
