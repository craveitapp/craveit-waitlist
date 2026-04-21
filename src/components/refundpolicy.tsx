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
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeInUp} className="mb-10">
      <h2 className="mb-4 font-poppins text-lg font-semibold text-[#1C1C1C]">
        {title}
      </h2>
      <div className="font-inter text-sm leading-relaxed text-[#444] space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

/* ================= Main Component ================= */
export default function RefundPolicySection() {
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
            Refund Policy
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
          <motion.div variants={fadeInUp} className="mb-10 font-inter text-sm leading-relaxed text-[#444]">
            <p>
              We want every CraveIt order to be exactly what you expected. When something goes wrong we will fix it fairly and quickly.
            </p>
          </motion.div>

          <Section title="The Service Fee">
            <p>
              Every order includes a service fee shown clearly at checkout before you confirm. This fee covers the cost of processing your order — payment processing, vendor notification, delivery coordination, and order tracking. These actions happen the moment you place your order and cannot be reversed.
            </p>
            <p>
              The service fee is non-refundable in all circumstances — including cancellations, wrong orders, missing items, and failed deliveries. This is not a penalty. The platform work has been done the moment you tap Order.
            </p>
          </Section>

          <Section title="Order Cancellation">
            <p>You may cancel your order before the vendor begins preparation. Contact support immediately through the app.</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>If you cancel before preparation begins your food cost and delivery fee are refunded in full. The service fee is not refunded.</li>
              <li>If the vendor cancels your order for any reason your food cost and delivery fee are refunded in full. The service fee is not refunded.</li>
              <li>Once preparation has begun cancellation is not possible and no refund will be issued.</li>
            </ul>
          </Section>

          <Section title="Missing Items">
            <p>
              If an item is missing from your order contact support within 3 hours of delivery with a photo of what you received. We will refund the food cost of the missing item. The delivery fee and service fee are not refunded.
            </p>
          </Section>

          <Section title="Wrong Order">
            <p>
              If you received the wrong food contact support within 1 hour of delivery with a photo. We will refund the food cost. The delivery fee and service fee are not refunded.
            </p>
          </Section>

          <Section title="Food Unfit for Consumption">
            <p>
              If your food was spoiled, contaminated, or clearly unsafe contact support within 1 hour of delivery with a photo. We will investigate and where confirmed refund the food cost. The delivery fee and service fee are not refunded. Refunds based on personal taste or preference are not issued.
            </p>
          </Section>

          <Section title="Damaged Order">
            <p>
              If your food arrived spilled or damaged contact support immediately with a photo. We will investigate and where confirmed issue a partial or full refund of the food cost. The delivery fee and service fee are not refunded.
            </p>
          </Section>

          <Section title="Failed Delivery">
            <ul className="list-disc pl-5 space-y-2">
              <li>If a delivery fails because of an error on CraveIt's side your food cost and delivery fee are refunded. The service fee is not refunded.</li>
              <li>If a delivery fails because you were unreachable, provided the wrong address, or refused delivery without valid reason no refund is issued on any component of the order.</li>
            </ul>
          </Section>

          <Section title="Payment Error">
            <p>
              If you were charged for an order that was never placed contact support immediately. Where confirmed as an error the full amount including the service fee is refunded. This is the only scenario where the service fee is refunded.
            </p>
          </Section>

          <Section title="How Refunds Are Processed">
            <p>
              Approved refunds go back to your original payment method within 3 to 5 business days.
            </p>
          </Section>

          <Section title="When No Refund Is Issued">
            <p>Refunds will not be issued where:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>The request is made outside the stated timeframe</li>
              <li>The delivery failed because of your error</li>
              <li>You refused delivery without valid reason</li>
              <li>The issue is based on personal taste or preference</li>
              <li>The claim appears dishonest or fraudulent</li>
            </ul>
          </Section>

          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-[#E5E5E5]">
            <p className="font-inter text-xs text-[#9A9A9A]">
              CraveIt Technologies Limited · getcraveit.com · Last updated: March 30, 2026
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
