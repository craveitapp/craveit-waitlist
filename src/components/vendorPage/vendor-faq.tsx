"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const VendorFAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      <button
        className="flex w-full cursor-pointer items-center justify-between text-left px-5 py-4 focus:outline-none"
        onClick={onToggle}
      >
        <span className="pr-4 text-sm font-medium font-primary text-text-primary">
          {question}
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
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function VendorFAQSection() {
  const faqs = [
    {
      question: "How and when do I get paid?",
      answer:
        "Your earnings are paid directly to your registered Nigerian bank account within 24 hours of each completed and confirmed order.",
    },
    {
      question: "Who handles delivery? Do I need to arrange riders?",
      answer:
        "You do not arrange or pay for delivery. CraveIt handles all delivery logistics entirely. When an order comes in you prepare the food and have it ready for rider pickup. You never leave your kitchen.",
    },
    {
      question: "I am a food vendor. How do I get my food on CraveIt?",
      answer:
        "Click the Join the Waitlist button on this page and fill in the form. Select that you are a vendor when asked. Our team will contact you directly to start your onboarding before the public launch. Early vendors get priority placement on the feed.",
    },
    {
      question: "I am on the waitlist. What happens next?",
      answer:
        "You will receive one email from us the moment CraveIt goes live in Enugu. That email will include a direct link to download the app, a welcome offer for waitlist members, and everything you need to place your first order. You do not need to do anything else right now — just watch your inbox.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 md:px-[120px] py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Title and Illustration */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-primary font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-text-primary">
              Questions
              <br />
              vendors ask us
              <br />
              most
            </h2>
            <p className="font-secondary text-sm md:text-base text-text-secondary max-w-xs">
              Everything you need to know about being a vendor on CraveIt
            </p>

            <div className="relative w-full max-w-[280px] aspect-[4/3]">
              <Image
                src="/images/faq-illust.png"
                alt="FAQ illustration with chat bubbles"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <VendorFAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
