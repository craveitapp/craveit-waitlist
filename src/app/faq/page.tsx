"use client";

import PageHero from "@/components/sections/page-hero";
import { GroupedAccordion, type FaqCategory } from "@/components/sections/faq-section";

const faqData: FaqCategory[] = [
  { id: "ordering", label: "Ordering", items: [
    { q: "How do I place an order on Craveit?", a: "Browse food videos, tap what you like, add to cart, and checkout. You'll see exactly what you're getting before you pay." },
    { q: "Can I customize my order?", a: "Yes! Many vendors allow customizations. Look for the 'Add note' option when adding items to your cart." },
    { q: "How do I get started on Craveit?", a: "Download the app from Google Play or the App Store, create your account, set your delivery address, and start ordering. It takes less than two minutes." },
  ] },
  { id: "delivery", label: "Delivery", items: [
    { q: "Which areas does Craveit deliver to?", a: "We deliver across Enugu, New Haven, Independence Layout, Uwani, Ogui Road, and GRA. If you are in one of these areas you are already in our delivery zone." },
    { q: "How long does delivery take?", a: "Most orders are delivered within 25 to 40 minutes depending on your location and the vendor's preparation time." },
    { q: "Can I track my delivery?", a: "Yes! Once your order is on the way, you can track your rider in real time on the app map." },
  ] },
  { id: "payment", label: "Payment", items: [
    { q: "What payment methods do you accept?", a: "We accept card payments, bank transfers, and mobile money. All transactions are secure and encrypted." },
    { q: "Is there a delivery fee?", a: "Delivery fees vary based on distance, typically between ₦300 to ₦500. Some vendors offer free delivery on orders above certain amounts." },
    { q: "Can I get a refund?", a: "Yes, if your order is incorrect or significantly delayed, you can request a refund through the app within 24 hours." },
    { q: "Do you offer discounts or promo codes?", a: "Yes! Watch out for promo codes in our emails and social media. First time users also get a welcome discount." },
    { q: "What is a service fee?", a: "The service fee is a small charge shown clearly at checkout before you confirm. It covers processing your order, notifying the vendor, and coordinating delivery. The amount is always displayed up front, with no hidden charges." },
    { q: "What is Craveit Wallet?", a: "Craveit Wallet is your in app balance for faster checkout. Top it up once, pay for orders in a single tap, and any refunds are returned to your wallet instantly so you can reorder right away." },
  ] },
  { id: "account", label: "Account", items: [
    { q: "How do I create an account?", a: "Download the app, enter your phone number, verify with OTP, and you're ready to order. Takes less than 2 minutes." },
    { q: "Can I save my favorite vendors?", a: "Yes! Tap the heart icon on any vendor's profile to add them to your favorites for quick access." },
    { q: "How do I update my delivery address?", a: "Go to Profile > Addresses. You can save multiple addresses like home, work, or friend's place." },
  ] },
  { id: "vendor", label: "Vendor", items: [
    { q: "I am a food vendor. How do I get my food on Craveit?", a: "Download the Craveit app and sign up as a vendor. Our team reviews every application and gets back to you to complete onboarding, then your food goes live on the feed for customers near you." },
    { q: "What are the requirements to become a vendor?", a: "You need a real kitchen in one of our delivery zones, consistent food quality, a smartphone for videos, and the Craveit app. We handle the rest." },
    { q: "How much does it cost to sell on Craveit?", a: "No setup cost, you only pay a small commission when you make a sale. Delivery is handled by us." },
    { q: "How do I get paid as a vendor?", a: "Payments are deposited directly to your bank account the next working day. You can track all earnings in real time on the vendor dashboard." },
  ] },
];

export default function FaqPage() {
  return (
    <div className="bg-white text-text-primary font-secondary overflow-x-hidden">
      <PageHero
        variant="center"
        eyebrow="Help center"
        title={<>Got questions? We&apos;ve got answers.</>}
      />

      <section className="w-full bg-white py-[clamp(40px,6vw,64px)] pb-[clamp(64px,9vw,96px)]">
        <div className="craveit-container">
          <GroupedAccordion categories={faqData} showTabs />
        </div>
      </section>
    </div>
  );
}
