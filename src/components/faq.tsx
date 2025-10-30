"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b bg-white border-[#F3F3F333] px-4 rounded-2xl py-2 md:py-5">
      <button
        className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none"
        onClick={onToggle}
      >
        <span
          className={`pr-10 text-sm font-semibold font-poppins md:text-lg transition-colors duration-300 ${
            isOpen ? "text-[#E96029]" : "text-[#1C1C1C]"
          }`}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-[#E96029]" />
        ) : (
          <ChevronDown size={18} className="text-[#1C1C1C]" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden pr-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="mt-2 text-[#4B4B4B] md:pr-8 md:text-base font-inter font-normal text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "What is CraveIt?",
      answer:
        "CraveIt is a social food delivery app that lets you discover meals through short food videos, just like TikTok, but for food. You can scroll, crave, order, and get it delivered fresh from nearby vendors.",
    },
    {
      question: "How does CraveIt differ from other food apps?",
      answer:
        "CraveIt revolutionizes food discovery through short, engaging food videos from verified food vendors. Instead of browsing static photos and menus, you see exactly what you're ordering through high-quality video content, making the experience more engaging and reliable.",
    },
    {
      question: "How fast is the delivery?",
      answer:
        "Our optimized delivery network and smart routing technology typically delivers orders within 15-30 minutes. We work closely with vendors to ensure food is prepared fresh and delivered while it's still hot.",
    },
    {
      question: "How do I become a vendor on CraveIt?",
      answer:
        "If you're a restaurant or food vendor interested in joining CraveIt, visit our CraveIt Business section to learn more about our partnership program. We provide full support for creating engaging video content and growing your customer base.",
    },
    {
      question: "Is CraveIt available in my city?",
      answer:
        "CraveIt is currently launching in Enugu, but we’ll be expanding to more Nigerian cities soon. Join the waitlist to know when we launch in your area!",
    },
    {
      question: "What type of food will be available?",
      answer:
        "All your local favorites, from Abacha to Okpa, Jollof to Suya, and even meals from home chefs and restaurants around you. CraveIt celebrates real Nigerian food culture.",
    },
  ];

  // 👇 Default first FAQ open (index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="bg-[#FFF8F6] px-8 md:py-22 py-8 sm:px-6 md:px-[120px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-sm md:max-w-5xl lg:max-w-7xl">
        <h2 className="text-center mb-3 text-xl  md:text-2xl font-semibold font-poppins text-[#1C1C1C] lg:text-4xl">
          Frequently Asked Questions
        </h2>

        <p className="md:mb-22 mb-12 lg:mb-12 text-center font-poppins text-sm md:text-xl font-normal text-[#4B4B4B]">
          Got questions? Here are a few we get a lot.
        </p>

        <div className="space-y-4 space-x-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
