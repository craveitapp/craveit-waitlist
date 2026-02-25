"use client";

import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/* ================= Reusable Section Block ================= */

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="mb-14">
      <h2 className="mb-4 font-poppins text-xl font-semibold text-[#1C1C1C] md:text-2xl">
        {title}
      </h2>
      <div className="font-inter text-sm leading-relaxed text-[#444] md:text-base space-y-4">
        {children}
      </div>
    </motion.div>
  );
}

/* ================= Main Component ================= */

export default function PrivacyPolicySection() {
  return (
    <>
      {/* ================= HEADER SECTION ================= */}
      <section className="w-full bg-[#FDF7F5] px-6 pt-36 pb-24 md:px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-poppins text-3xl font-semibold text-[#1C1C1C] md:text-5xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 font-inter text-sm text-[#6A6A6A] md:text-base"
          >
            Your privacy and trust matter to us.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-2 font-inter text-xs text-[#9A9A9A] md:text-sm"
          >
            Last Updated: January 24, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-white px-6 py-20 md:px-8">
        <motion.div
          className="mx-auto max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Intro */}
          <motion.p
            variants={fadeInUp}
            className="mb-14 font-inter text-sm leading-relaxed text-[#444] md:text-base"
          >
            CraveIt Technologies Limited ("CraveIt", "we", "our", or "us") operates the CraveIt
            mobile application and website. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our services.
          </motion.p>

          <SectionBlock title="1. Information We Collect">
            <div>
              <h3 className="mb-2 font-semibold text-[#1C1C1C]">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name, email address, and phone number</li>
                <li>Delivery address and location data</li>
                <li>Payment information (processed securely via third-party providers)</li>
                <li>Profile details and preferences</li>
              </ul>
            </div>

            <div className="pt-6">
              <h3 className="mb-2 font-semibold text-[#1C1C1C]">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device, app version, and browser information</li>
                <li>IP address and approximate location</li>
                <li>App usage data, interaction logs, and watch history</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </SectionBlock>

          <SectionBlock title="2. How We Use Your Data">
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and deliver your food orders</li>
              <li>Personalize your feed and content recommendations</li>
              <li>Send order updates, promotions, and service notifications</li>
              <li>Improve app performance and user experience</li>
              <li>Enhance security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </SectionBlock>

          <SectionBlock title="3. Data Sharing">
            <p>We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Restaurant partners to fulfill your orders</li>
              <li>Delivery riders for order delivery coordination</li>
              <li>Payment processors to handle transactions securely</li>
              <li>Analytics providers (aggregated or anonymized data)</li>
              <li>Law enforcement when required by applicable law</li>
            </ul>
          </SectionBlock>

          <SectionBlock title="4. Account Deletion">
            <div>
              <h3 className="mb-2 font-semibold text-[#1C1C1C]">How to Request Deletion</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open the Cravelt app → Settings → Account → Delete Account</li>
                <li>
                  Email us at <span className="text-[#E96029]">support@cravelt.com</span> with
                  the subject “Account Deletion Request”
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <h3 className="mb-2 font-semibold text-[#1C1C1C]">What Happens After Deletion</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your profile, order history, and personal data will be permanently removed
                </li>
                <li>Deletion is processed within 30 days of verification</li>
                <li>
                  Some data may be retained as required by law (e.g., transaction records)
                </li>
                <li>This action is irreversible</li>
              </ul>
            </div>
          </SectionBlock>

          <SectionBlock title="5. Security">
            <p>
              We implement industry-standard security measures including encryption, secure
              servers, and access controls to protect your personal information. However, no
              method of electronic transmission or storage is 100% secure.
            </p>
          </SectionBlock>

          <SectionBlock title="6. Contact Us">
            <p>
              If you have questions about this Privacy Policy or your personal data, please
              contact us at <span className="text-[#E96029]">support@cravelt.com</span>.
            </p>
          </SectionBlock>
        </motion.div>
      </section>
    </>
  );
}
