"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: "ordering",
    label: "Ordering",
    items: [
      {
        question: "How do I place an order on CraveIt?",
        answer:
          "Browse food videos, tap what you like, add to cart, and checkout. You'll see exactly what you're getting before you pay.",
      },
      {
        question: "Can I customize my order?",
        answer:
          "Yes! Many vendors allow customizations. Look for the 'Add note' option when adding items to your cart.",
      },
      {
        question: "How do I know when CraveIt is available?",
        answer:
          "Join the waitlist now and you will be the first to know the exact date. We will send one email with everything you need — the launch date, how to download the app, and how to place your first order.",
      },
      {
        question: "Can I schedule an order for later?",
        answer:
          "Yes, you can schedule orders up to 3 days in advance. Select your preferred delivery time at checkout.",
      },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    items: [
      {
        question: "Which areas will CraveIt deliver to at launch?",
        answer:
          "We are launching in Enugu - New Haven, Independence Layout, Uwani, Ogui Road, and GRA. If you are in one of these areas you are already in our launch zone.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Most orders are delivered within 25-40 minutes depending on your location and the vendor's preparation time.",
      },
      {
        question: "Can I track my delivery?",
        answer:
          "Yes! Once your order is on the way, you can track your rider in real-time on the app map.",
      },
      {
        question: "What if my food arrives cold?",
        answer:
          "We work with insulated delivery bags to keep food hot. If there's an issue, report it in the app for a quick resolution.",
      },
    ],
  },
  {
    id: "payment",
    label: "Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept card payments, bank transfers, and mobile money. All transactions are secure and encrypted.",
      },
      {
        question: "Is there a delivery fee?",
        answer:
          "Delivery fees vary based on distance, typically between ₦300-₦500. Some vendors offer free delivery on orders above certain amounts.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes, if your order is incorrect or significantly delayed, you can request a refund through the app within 24 hours.",
      },
      {
        question: "Do you offer discounts or promo codes?",
        answer:
          "Yes! Watch out for promo codes in our emails and social media. First-time users also get a welcome discount.",
      },
    ],
  },
  {
    id: "account",
    label: "Account",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "Download the app, enter your phone number, verify with OTP, and you're ready to order. Takes less than 2 minutes.",
      },
      {
        question: "Can I save my favorite vendors?",
        answer:
          "Yes! Tap the heart icon on any vendor's profile to add them to your favorites for quick access.",
      },
      {
        question: "How do I update my delivery address?",
        answer:
          "Go to Profile > Addresses. You can save multiple addresses like home, work, or friend's place.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use bank-level encryption and never share your data with third parties without consent.",
      },
    ],
  },
  {
    id: "vendor",
    label: "Vendor",
    items: [
      {
        question: "I am a food vendor. How do I get my food on CraveIt?",
        answer:
          "Click the Join the Waitlist button on this page and fill in the form. Select that you are a vendor when asked. Our team will contact you directly to start your onboarding before the public launch. Early vendors get priority placement on the feed.",
      },
      {
        question: "What are the requirements to become a vendor?",
        answer:
          "You need a real kitchen in our launch zones, consistent food quality, a smartphone for videos, and the CraveIt app. We handle the rest.",
      },
      {
        question: "How much does it cost to sell on CraveIt?",
        answer:
          "No setup cost — you only pay a small commission when you make a sale. Delivery is handled by us.",
      },
      {
        question: "How do I get paid as a vendor?",
        answer:
          "Payments are deposited directly to your bank account weekly. You can track all earnings in real-time on the vendor dashboard.",
      },
    ],
  },
];

const FAQItemComponent = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      <button
        className="flex w-full cursor-pointer items-center justify-between text-left px-5 py-4 focus:outline-none"
        onClick={onToggle}
      >
        <span className="pr-4 text-sm font-medium font-primary text-text-primary">
          {item.question}
        </span>
        <span className="text-text-primary text-lg font-light shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="px-5 pb-4 text-sm font-secondary text-text-secondary leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQContent() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, string | null>>({});

  const tabs = [
    { id: "all", label: "All" },
    ...faqData.map((cat) => ({ id: cat.id, label: cat.label })),
  ];

  const getFilteredCategories = () => {
    if (activeTab === "all") return faqData;
    return faqData.filter((cat) => cat.id === activeTab);
  };

  const handleToggle = (categoryId: string, question: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === question ? null : question,
    }));
  };

  return (
    <section className="bg-white px-6 md:px-[120px] py-8 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-brand text-white"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {getFilteredCategories().map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-primary font-semibold text-lg text-text-primary mb-4">
                  {category.label}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <FAQItemComponent
                        item={item}
                        isOpen={openItems[category.id] === item.question}
                        onToggle={() => handleToggle(category.id, item.question)}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
