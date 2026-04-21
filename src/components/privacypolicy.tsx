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
export default function PrivacyPolicySection() {
  return (
    <>
      {/* ================= HEADER SECTION ================= */}
      <section className="w-full bg-brand-light px-6 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <motion.div
          className=" md:px-[120px] "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-primary text-3xl font-semibold text-text-primary md:text-4xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-2 font-secondary text-xs text-text-muted">
            Last updated: March 30, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-white px-6 py-12 md:px-8 md:py-16">
        <motion.div
          className="md:px-[120px] "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Intro */}
          <motion.div
            variants={fadeInUp}
            className="mb-10 font-secondary text-sm leading-relaxed text-text-secondary space-y-4"
          >
            <p>
              At CraveIt we believe in being straightforward. This policy explains what personal
              information we collect when you use CraveIt, why we collect it, how we use it, and
              what rights you have over it.
            </p>
            <p>
              We comply with the Nigeria Data Protection Act 2023 and its General Application
              and Implementation Directive 2025. If you have any questions about this policy or
              how we handle your data contact us at{" "}
              <a href="mailto:privacy@getcraveit.com" className="text-brand">
                privacy@getcraveit.com
              </a>
              .
            </p>
            <p>
              By using CraveIt you agree to the collection and use of your information as
              described here.
            </p>
          </motion.div>

          <Section number="1" title="Who We Are">
            <p>
              CraveIt Technologies Limited operates the CraveIt app and website at
              getcraveit.com.
            </p>
            <p>
              When this policy says "CraveIt", "we", "us", or "our" it means CraveIt
              Technologies Limited.
            </p>
            <p>
              When it says "you" or "your" it means you — the person using our platform whether
              as a customer or vendor.
            </p>
          </Section>

          <Section number="2" title="Information We Collect">
            <h3 className="font-semibold text-text-primary mt-4">
              Information you give us directly
            </h3>
            <p>When you create an account or use CraveIt you provide us with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your full name</li>
              <li>Your phone number</li>
              <li>Your email address</li>
              <li>Your delivery address</li>
              <li>Your bank account details if you are a vendor receiving payouts</li>
            </ul>

            <h3 className="font-semibold text-text-primary mt-4">
              Information we collect automatically
            </h3>
            <p>When you use the CraveIt app we automatically collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your device type, operating system, and app version</li>
              <li>Your IP address</li>
              <li>
                Your location when you grant the app permission — used to show vendors near you
                and calculate delivery fees
              </li>
              <li>
                How you use the app — which videos you watch, how long you watch them, what you
                order, and how often you use the platform
              </li>
              <li>Technical logs including errors and crash reports</li>
            </ul>

            <h3 className="font-semibold text-text-primary mt-4">
              Information from third parties
            </h3>
            <p>
              When you make a payment through our payment partners we receive confirmation that
              your payment was successful. We do not receive your full card details from our
              payment partners.
            </p>
          </Section>

          <Section number="3" title="Why We Collect Your Information">
            <p>We use your information to:</p>

            <h3 className="font-semibold text-text-primary mt-4">Provide the service</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process your orders and facilitate delivery to your address</li>
              <li>Send you order confirmations and delivery updates</li>
              <li>Pay vendors their earnings within the agreed timeline</li>
              <li>Show you food vendors in your delivery location</li>
            </ul>

            <h3 className="font-semibold text-text-primary mt-4">Improve the platform</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Understand which videos perform well and which do not</li>
              <li>Fix technical problems and crashes</li>
              <li>Improve feed personalisation so you see food relevant to you</li>
            </ul>

            <h3 className="font-semibold text-text-primary mt-4">Communicate with you</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Send order updates, receipts, and delivery notifications</li>
              <li>Respond to your support requests</li>
              <li>Notify you of changes to our terms or this policy</li>
            </ul>

            <h3 className="font-semibold text-text-primary mt-4">Keep the platform safe</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Detect and prevent fraudulent orders or refund abuse</li>
              <li>Investigate complaints from customers or vendors</li>
              <li>Protect CraveIt, our vendors, and our customers from harm</li>
            </ul>

            <h3 className="font-semibold text-text-primary mt-4">Meet our legal obligations</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Comply with the Nigeria Data Protection Act 2023 and other applicable Nigerian
                law
              </li>
              <li>Respond to lawful requests from regulatory or law enforcement authorities</li>
            </ul>
          </Section>

          <Section number="4" title="Lawful Basis for Processing">
            <p>
              Under the NDPA 2023 we process your personal data on the following lawful bases:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <span className="font-semibold">Contract</span> — to fulfil our obligations to
                you when you place an order or use our services
              </li>
              <li>
                <span className="font-semibold">Legitimate interest</span> — to improve the
                platform, prevent fraud, and keep the service running safely
              </li>
              <li>
                <span className="font-semibold">Consent</span> — where you have specifically
                agreed such as for location access or marketing communications
              </li>
              <li>
                <span className="font-semibold">Legal obligation</span> — where Nigerian law
                requires us to process or retain certain data
              </li>
            </ul>
          </Section>

          <Section number="5" title="Location Data">
            <p>
              CraveIt uses your location to show you vendors in your delivery location and to
              assign the nearest available rider to your order.
            </p>
            <p>
              Location access is requested when you first open the app. You can deny this
              permission and manually enter your delivery address instead. If you deny location
              access some features such as automatic location detection may not work.
            </p>
            <p>
              We do not track your location continuously in the background. Location is only
              accessed when the app is open and in active use.
            </p>
          </Section>

          <Section number="6" title="Who We Share Your Information With">
            <p>
              We do not sell your personal information. We do not share it with advertisers.
            </p>
            <p className="mt-3">
              We share your information only in the following circumstances:
            </p>

            <h3 className="font-semibold text-text-primary mt-4">Logistics partners</h3>
            <p>
              We share your name, phone number, and delivery address with our delivery partners
              solely to complete your order. They are not permitted to use your information for
              any other purpose.
            </p>

            <h3 className="font-semibold text-text-primary mt-4">Vendors</h3>
            <p>
              Vendors see your first name and the details of your order. They do not see your
              full address, payment information, or phone number.
            </p>

            <h3 className="font-semibold text-text-primary mt-4">Payment partners</h3>
            <p>
              Our payment partners process your payments. Their handling of your payment data is
              governed by their own privacy policies.
            </p>

            <h3 className="font-semibold text-text-primary mt-4">Service providers</h3>
            <p>
              We use third-party services to help operate CraveIt including cloud hosting and
              customer support tools. These providers only access your data to perform specific
              tasks on our behalf and are bound by confidentiality obligations.
            </p>

            <h3 className="font-semibold text-text-primary mt-4">Legal requirements</h3>
            <p>
              We may disclose your information where required to do so by Nigerian law, court
              order, or a lawful request from a regulatory or law enforcement authority.
            </p>

            <h3 className="font-semibold text-text-primary mt-4">Business transfers</h3>
            <p>
              If CraveIt merges with or is acquired by another company your information may be
              transferred as part of that process. We will notify you before that happens.
            </p>
          </Section>

          <Section number="7" title="Cookies and Tracking">
            <p>
              CraveIt uses cookies and similar technologies to remember your preferences,
              understand how you use the app and website, and improve your experience.
            </p>
            <p>
              Cookies are small text files stored on your device. They do not damage your device
              and do not identify you personally on their own.
            </p>
            <p>
              You can control cookie settings through your browser or device settings. Disabling
              cookies may affect some features of the CraveIt website.
            </p>
          </Section>

          <Section number="8" title="How Long We Keep Your Information">
            <p>
              We keep your information for as long as your account is active and for a
              reasonable period after in case you return or in case it is needed to resolve a
              dispute.
            </p>
          </Section>

          <Section number="9" title="How We Protect Your Information">
            <p>
              We take reasonable technical and organizational measures to protect your personal
              information from unauthorised access, loss, or misuse. These include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Encrypted data transmission</li>
              <li>
                Secure payment processing through our payment partners — we do not store card
                details
              </li>
              <li>Access controls so only authorised CraveIt staff can access personal data</li>
              <li>Regular review of our security practices</li>
            </ul>
            <p className="mt-3">
              No system is completely secure. If a data breach occurs that affects your personal
              information we will notify you and the Nigeria Data Protection Commission as
              required by law.
            </p>
          </Section>

          <Section number="10" title="Children's Privacy">
            <p>
              CraveIt is not intended for anyone under the age of 18. We do not knowingly
              collect personal information from children. If you believe a child has provided us
              with personal information contact us at{" "}
              <a href="mailto:privacy@getcraveit.com" className="text-brand">
                privacy@getcraveit.com
              </a>{" "}
              and we will delete it promptly.
            </p>
          </Section>

          <Section number="11" title="Third-Party Links">
            <p>
              The CraveIt app and website may contain links to third-party websites or services.
              This privacy policy does not apply to those websites. We encourage you to read the
              privacy policies of any third-party services you use.
            </p>
          </Section>

          <Section number="12" title="Changes to This Policy">
            <p>
              We will review this policy at least once a year and whenever our data practices
              change significantly. When we update it we will notify you through the app and
              update the effective date at the top of this document.
            </p>
            <p>
              Continued use of CraveIt after changes take effect means you accept the updated
              policy.
            </p>
          </Section>

          <Section number="13" title="Contact Us">
            <p>
              For any questions about this privacy policy or how we handle your personal
              information contact us at{" "}
              <a href="mailto:privacy@getcraveit.com" className="text-brand">
                privacy@getcraveit.com
              </a>
              .
            </p>
            <p className="mt-4 text-text-secondary">
              This Privacy Policy was last updated on March 30, 2026. By using CraveIt you
              confirm that you have read and understood how we collect and use your personal
              information.
            </p>
          </Section>
        </motion.div>
      </section>
    </>
  );
}
