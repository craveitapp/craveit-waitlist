"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Tally?: {
      openPopup: (
        formId: string,
        options?: {
          layout?: string;
          width?: string;
          emojiText?: string;
          emojiAnimation?: string;
        },
      ) => void;
    };
  }
}

interface TallyButtonProps {
  formId: string;
  label?: string;
  width?: string;
  onBeforeOpen?: () => void;
  className?: string;
}

const TallyButton: React.FC<TallyButtonProps> = ({
  formId,
  label = "Open Tally Form",
  width = "700px",
  onBeforeOpen,
  className = "",
}) => {
  useEffect(() => {
    //  Inject Tally script only once
    const existingScript = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]',
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      //   console.log("Tally script loaded");
    };
    document.body.appendChild(script);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onBeforeOpen?.();

    setTimeout(() => {
      if (window.Tally) {
        window.Tally.openPopup(formId, {
          layout: "modal",
          width,
          emojiText: "👋",
          emojiAnimation: "wave",
        });
      } else {
        console.error("Tally script not loaded yet");
      }
    }, 300);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex ">
      <Button
        onClick={handleClick}
        className={`rounded-xl bg-primary px-4 py-3 shadow-lg hover:bg-secondary transition ${className}`}
      >
        {label}
      </Button>
    </motion.div>
  );
};

export default TallyButton;
