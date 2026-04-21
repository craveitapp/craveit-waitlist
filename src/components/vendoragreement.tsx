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
      <h2 className="mb-4 font-primary text-lg font-semibold text-text-primary">
        {number}. {title}
      </h2>
      <div className="font-secondary text-sm leading-relaxed text-text-secondary space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

/* ================= Main Component ================= */
export default function VendorAgreementSection() {
  return (
    <>
      {/* ================= HEADER SECTION ================= */}
      <section className="w-full bg-brand-light px-6 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <motion.div
          className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-primary text-3xl font-semibold text-text-primary md:text-4xl"
          >
            Vendor Agreement
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-2 font-secondary text-xs text-text-muted">
            Last updated: March 30, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-white px-6 py-12 md:px-8 md:py-16">
        <motion.div
          className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Intro */}
          <motion.div
            variants={fadeInUp}
            className="mb-10 font-secondary text-sm leading-relaxed text-text-secondary"
          >
            <p>
              This agreement is between you — the food vendor — and CraveIt Technologies
              Limited. By completing onboarding you agree to everything in this document.
            </p>
          </motion.div>

          <Section number="1" title="What CraveIt Provides">
            <ul className="list-disc pl-5 space-y-1">
              <li>A video storefront on the CraveIt feed</li>
              <li>Access to the vendor app to receive and manage orders</li>
              <li>
                Delivery handled entirely by CraveIt — you do not arrange or pay for delivery
              </li>
              <li>
                Earnings paid to your bank account within 24 hours of every confirmed order
              </li>
              <li>
                Vendor support at{" "}
                <a href="mailto:support@getcraveit.com" className="text-brand">
                  support@getcraveit.com
                </a>
              </li>
            </ul>
            <p className="mt-3">
              CraveIt does not guarantee a specific number of orders. Order volume depends on
              demand, video performance, and food quality.
            </p>
          </Section>

          <Section number="2" title="Your Responsibilities">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-text-primary">Food quality</span> — what you
                prepare must match what your listing shows. Consistent misrepresentation damages
                customer trust and your account standing.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Food safety</span> — you are
                solely responsible for the safety and hygiene of the food you prepare. CraveIt
                will investigate any food safety complaint and act on it.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Availability</span> — only
                mark yourself as open when you are genuinely ready to fulfil orders. Accepting
                orders you cannot fulfil is a breach of this agreement.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Prompt fulfilment</span> —
                once you accept an order have it ready for the rider within a reasonable time.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Honest pricing</span> — your
                CraveIt prices must reflect what you actually charge. Do not list lower prices
                on CraveIt and charge more at delivery or elsewhere.
              </li>
              <li>
                <span className="font-semibold text-text-primary">Menu accuracy</span> — keep
                your menu current. Mark items as unavailable when out of stock.
              </li>
            </ul>
          </Section>

          <Section number="3" title="Commission">
            <p>
              CraveIt charges 10% commission on the food value of every completed and confirmed
              order. Commission is calculated on food cost only — not on the delivery fee or
              service fee.
            </p>
            <p className="mt-3">
              Commission is charged only when an order is completed and confirmed by the
              customer. No commission is charged at the point of order placement.
            </p>
            <p className="mt-3 font-semibold text-text-primary">
              Commission is not charged on:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Orders cancelled by the customer before preparation begins</li>
              <li>Orders cancelled by the vendor before preparation begins</li>
              <li>Orders refunded due to delivery failure on CraveIt's side</li>
            </ul>
            <p className="mt-3">
              <span className="font-semibold">Example:</span> Customer orders ₦3,000 of food.
              Order confirmed. CraveIt deducts ₦300 and pays you ₦2,700 within 24 hours.
            </p>
            <p className="mt-3">
              CraveIt may revise the commission rate with 30 days written notice. You may exit
              this agreement if you do not accept the revised rate.
            </p>
          </Section>

          <Section number="4" title="Cancellations and Refunds">
            <p className="font-semibold text-text-primary">
              Customer cancels before preparation
            </p>
            <p>
              No commission charged. Customer receives a full refund of food cost and delivery
              fee. You receive no payment.
            </p>

            <p className="font-semibold text-text-primary mt-3">
              You cancel before preparation
            </p>
            <p>
              No commission charged. Customer receives a full refund of food cost and delivery
              fee. You receive no payment. Repeated cancellations without valid reason may
              result in account suspension.
            </p>

            <p className="font-semibold text-text-primary mt-3">
              Cancellation after preparation has begun
            </p>
            <p>
              If you cancel after preparation has started CraveIt will investigate. If the
              cancellation is vendor-caused the cost of any customer refund may be recovered
              from a future payout.
            </p>

            <p className="font-semibold text-text-primary mt-3">Company protection</p>
            <p>
              CraveIt may recover from you any refund issued to a customer where the refund was
              directly caused by your failure. CraveIt may withhold your payout while a refund
              investigation is ongoing. CraveIt is not liable to you for refunds issued in good
              faith under our published Refund Policy. Disputes must be raised at{" "}
              <a href="mailto:support@getcraveit.com" className="text-[#E96029]">
                support@getcraveit.com
              </a>{" "}
              within 7 days of notification.
            </p>
          </Section>

          <Section number="5" title="Payouts">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Earnings are settled to your registered bank account within 24 hours of each
                confirmed order after commission deduction.
              </li>
              <li>
                You are responsible for providing accurate bank details. CraveIt is not liable
                for failed payouts caused by incorrect account information.
              </li>
              <li>
                If you believe a payout is incorrect contact{" "}
                <a href="mailto:support@getcraveit.com" className="text-brand">
                  support@getcraveit.com
                </a>{" "}
                within 7 days. We will respond within 5 business days.
              </li>
              <li>
                CraveIt may withhold payouts where there is reasonable suspicion of fraud, an
                unresolved refund investigation, or a material breach of this agreement.
              </li>
            </ul>
          </Section>

          <Section number="6" title="Your Video Listing">
            <p>
              Your food is shown on the CraveIt feed through a short video. You are responsible
              for ensuring the food you prepare matches what the video shows.
            </p>
            <p className="mt-3">
              Notify us at{" "}
              <a href="mailto:vendors@getcraveit.com" className="text-brand">
                vendors@getcraveit.com
              </a>{" "}
              if your menu or food changes significantly so we can update your listing.
            </p>
            <p className="mt-3">
              CraveIt owns the listing content on the platform. Your business name, recipes, and
              cooking methods remain entirely yours.
            </p>
          </Section>

          <Section number="7" title="Conduct">
            <p>As a CraveIt vendor you agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Treat riders with respect at all times</li>
              <li>Not solicit direct orders from CraveIt customers outside the platform</li>
              <li>Not share customer information with any third party</li>
              <li>Comply with all applicable Nigerian food safety and business regulations</li>
            </ul>
          </Section>

          <Section number="8" title="Termination">
            <p className="font-semibold text-text-primary">By you</p>
            <p>
              Notify{" "}
              <a href="mailto:support@getcraveit.com" className="text-brand">
                support@getcraveit.com
              </a>{" "}
              at any time. No exit fee. Outstanding earned payouts are settled within 24 hours
              subject to any open investigations.
            </p>

            <p className="font-semibold text-text-primary mt-3">By CraveIt</p>
            <p>
              Your account may be suspended or terminated for food safety failures, consistent
              order failures, fraudulent activity, dishonest pricing, or material breach of this
              agreement. You will be notified before action is taken except where immediate
              suspension is necessary to protect customers.
            </p>
          </Section>

          <Section number="9" title="Liability">
            <p>
              You are solely responsible for the food you prepare and sell. CraveIt is not
              liable for illness, injury, or harm caused by your food.
            </p>
            <p className="mt-3">
              CraveIt's liability to you is limited to the value of orders processed in the 30
              days before any claim. CraveIt is not liable for indirect losses or loss of
              earnings.
            </p>
          </Section>

          <Section number="10" title="Governing Law">
            <p>
              This agreement is governed by the laws of the Federal Republic of Nigeria. Contact{" "}
              <a href="mailto:support@getcraveit.com" className="text-brand">
                support@getcraveit.com
              </a>{" "}
              first — most disputes are resolved quickly and directly.
            </p>
          </Section>

          <Section number="11" title="Contact">
            <p>
              <a href="mailto:support@getcraveit.com" className="text-brand">
                support@getcraveit.com
              </a>
            </p>
          </Section>

          <motion.div variants={fadeInUp} className="mt-12 mb-8 p-6 bg-[#F8EEE0] rounded-lg">
            <h3 className="font-primary text-base font-semibold text-text-primary mb-4">
              Vendor Acknowledgement
            </h3>
            <p className="font-secondary text-sm text-text-secondary mb-3">
              By completing onboarding you confirm that:
            </p>
            <ul className="list-disc pl-5 space-y-2 font-secondary text-sm text-text-secondary">
              <li>You have read and agreed to this agreement in full</li>
              <li>Your onboarding information is accurate and truthful</li>
              <li>
                You understand that 10% commission is charged only on completed and confirmed
                orders
              </li>
              <li>
                You understand that vendor-caused refunds may be recovered from future payouts
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 pt-8 border-t border-[#E5E5E5]">
            <p className="font-secondary text-xs text-text-muted">
              CraveIt Vendor Agreement — Last updated March 30, 2026
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
