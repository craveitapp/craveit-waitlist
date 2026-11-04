"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUp,
  LegalSections,
} from "./legal-blocks";
import {
  riderPolicyBlocks,
  riderPolicyIntro,
  riderAcknowledgement,
} from "./rider-legal-content";

export default function RiderPolicySection() {
  return (
    <>
      <section className="w-full bg-brand-light pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <motion.div
          className="craveit-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-primary text-3xl font-semibold text-text-primary md:text-[72px] md:leading-[77px]"
          >
            Rider Policy
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-2 font-secondary text-xs md:text-lg text-text-secondary"
          >
            Last updated: November 2026
          </motion.p>
        </motion.div>
      </section>

      <section className="w-full bg-white py-12 md:px-8 md:py-16">
        <motion.div
          className="craveit-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-10 font-secondary text-sm md:text-lg leading-relaxed text-text-secondary space-y-4"
          >
            {riderPolicyIntro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <LegalSections blocks={riderPolicyBlocks} />

          <motion.div variants={fadeInUp} className="mt-12 mb-8 p-6 bg-[#F8EEE0] rounded-lg">
            <h3 className="font-primary text-base md:text-2xl font-semibold text-text-primary mb-4">
              {riderAcknowledgement.title}
            </h3>
            <p className="font-secondary text-sm md:text-lg text-text-secondary mb-3">
              {riderAcknowledgement.lead}
            </p>
            <ul className="list-disc pl-5 space-y-2 font-secondary text-sm md:text-lg text-text-secondary">
              {riderAcknowledgement.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 pt-8 border-t border-[#E5E5E5]">
            <p className="font-secondary text-xs md:text-lg text-text-muted">
              craveit Rider Policy — Last updated November 2026
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
