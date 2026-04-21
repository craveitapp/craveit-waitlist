"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/* ================= Section Component ================= */
function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeInUp} className="mb-10">
      <h2 className="mb-4 font-poppins text-lg font-semibold text-[#1C1C1C]">
        {number}. {title}
      </h2>
      <div className="font-inter text-sm leading-relaxed text-[#444] space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

/* ================= Main Component ================= */
export default function TermsOfServiceSection() {
  return (
    <>
      {/* ================= HEADER SECTION ================= */}
      <section className="w-full bg-[#F8EEE0] px-6 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <motion.div
          className="md:px-[120px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Image
              src="/images/logo.svg"
              alt="CraveIt"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-poppins text-3xl font-semibold text-[#1C1C1C] md:text-4xl"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-2 font-inter text-xs text-[#9A9A9A]"
          >
            Last updated: March 30, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-white px-6 py-12 md:px-8 md:py-16">
        <motion.div
          className="md:px-[120px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Intro */}
          <motion.div variants={fadeInUp} className="mb-10 font-inter text-sm leading-relaxed text-[#444] space-y-4">
            <p>
              Welcome to CraveIt. By downloading the app, creating an account, or placing an order you agree to these terms. If anything is unclear contact{" "}
              <a href="mailto:hello@getcraveit.com" className="text-[#E96029]">
                hello@getcraveit.com
              </a>
              .
            </p>
          </motion.div>

          <Section number="1" title="Who We Are">
            <p>
              CraveIt Technologies Limited operates the CraveIt platform — a video-first food discovery and delivery app registered in Nigeria.
            </p>
          </Section>

          <Section number="2" title="Who Can Use CraveIt">
            <p>
              You must be at least 18 years old to use CraveIt. By creating an account you confirm your information is accurate, you have legal capacity to agree to these terms, and you will keep your login details secure. You are responsible for everything that happens under your account.
            </p>
          </Section>

          <Section number="3" title="What CraveIt Does">
            <p>
              CraveIt connects customers with local food vendors through short food videos and facilitates delivery through our logistics partners.
            </p>
            <p>
              When you order food through CraveIt you are purchasing from the vendor — not from CraveIt. The vendor is responsible for the food. CraveIt is responsible for the platform and the delivery.
            </p>
          </Section>

          <Section number="4" title="Placing Orders">
            <p>
              When you tap Order you review the full price breakdown — food cost, delivery fee, and service fee — before confirming. Your order is sent to the vendor immediately after confirmation. Payment is taken at the time you place your order. What you see at checkout is what you pay. There are no hidden charges.
            </p>
          </Section>

          <Section number="5" title="Delivery">
            <p>
              Delivery is handled by CraveIt's logistics partners or internal riders. Delivery time estimates are estimates only. CraveIt is not liable for delays caused by traffic, weather, network outages, or circumstances outside our control.
            </p>
            <p>
              If a delivery fails because you provided the wrong address, were unreachable, or refused delivery without valid reason a refund may not be issued.
            </p>
          </Section>

          <Section number="6" title="Refunds and Cancellations">
            <p>
              Refunds are handled in accordance with CraveIt's Refund Policy available at{" "}
              <a href="/refund-policy" className="text-[#E96029]">
                getcraveit.com/refunds
              </a>
              . The service fee is non-refundable in all circumstances including cancellations. It covers platform costs incurred at the moment of order placement.
            </p>
          </Section>

          <Section number="7" title="Vendor Terms">
            <p>There is no fee to join CraveIt as a vendor. By completing onboarding you agree to these terms.</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Commission is charged only on completed and confirmed orders</li>
              <li>No commission is charged on cancelled orders</li>
              <li>By listing food on CraveIt you confirm your food is safe, your listing accurately represents what customers receive, and you comply with all applicable Nigerian food safety regulations</li>
            </ul>
          </Section>

          <Section number="8" title="Prohibited Conduct">
            <p>You must not:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Place fraudulent orders</li>
              <li>Make dishonest refund claims</li>
              <li>Harass or abuse any party on the platform</li>
              <li>Arrange payments outside the platform</li>
              <li>Use CraveIt for any unlawful purpose</li>
            </ul>
            <p className="mt-3">Violations may result in immediate account suspension and legal action.</p>
          </Section>

          <Section number="9" title="Intellectual Property">
            <p>
              All CraveIt content — the app, website, videos, name, and logo — is owned by CraveIt Technologies Limited and protected under Nigerian law. You may not copy or reproduce any of it without our written permission.
            </p>
          </Section>

          <Section number="10" title="Privacy">
            <p>
              CraveIt processes your data in accordance with the Nigeria Data Protection Act 2023. We do not sell your personal data. See our full Privacy Policy at{" "}
              <a href="/privacy-policy" className="text-[#E96029]">
                getcraveit.com/privacy
              </a>
              .
            </p>
          </Section>

          <Section number="11" title="Liability">
            <p>
              CraveIt's liability is limited to the value of the relevant order. We are not liable for food quality, indirect losses, or delays outside our control. Nothing in these terms limits liability for fraud, death, or personal injury caused by our negligence.
            </p>
          </Section>

          <Section number="12" title="Governing Law">
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria. Disputes that cannot be resolved directly will be referred to the appropriate Nigerian courts. Contact{" "}
              <a href="mailto:support@getcraveit.com" className="text-[#E96029]">
                support@getcraveit.com
              </a>{" "}
              first. Most issues are resolved quickly.
            </p>
          </Section>

          <Section number="13" title="Contact">
            <p>
              General: <a href="mailto:support@getcraveit.com" className="text-[#E96029]">support@getcraveit.com</a>
            </p>
          </Section>

          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-[#E5E5E5]">
            <p className="font-inter text-xs text-[#9A9A9A]">
              Last updated: March 30, 2026
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
