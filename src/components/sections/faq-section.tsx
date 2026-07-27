"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[#E8E8E8] rounded-xl bg-white overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left py-[18px] px-5 bg-transparent border-none cursor-pointer gap-4"
      >
        <span className="font-primary font-medium text-[clamp(15px,1.4vw,18px)] text-text-primary">
          {item.q}
        </span>
        <span className="text-[24px] font-light text-text-primary shrink-0 leading-none">
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <div style={{ animation: "faqOpen .3s ease" }}>
          <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0 px-5 pb-[18px]">
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FlatAccordion({
  items,
  gap = 12,
}: {
  items: FaqItem[];
  gap?: number;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col" style={{ gap }}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

export function GroupedAccordion({
  categories,
  showTabs = false,
}: {
  categories: FaqCategory[];
  showTabs?: boolean;
}) {
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState<string | null>(null);
  const tabs = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];
  const visible =
    tab === "all"
      ? categories
      : categories.filter((c) => c.id === tab);

  return (
    <>
      {showTabs && (
        <div className="flex flex-wrap gap-2.5 justify-center mb-[clamp(36px,5vw,48px)]">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`font-secondary font-medium text-[14px] px-5 py-2.5 rounded-full border-none cursor-pointer transition-[background,color] duration-[.25s] ease-in-out ${
                tab === t.id ? "bg-brand text-white" : "bg-[#F1F1F1] text-text-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-9">
        {visible.map((cat) => (
          <div key={cat.id} data-reveal>
            <h3 className="font-primary font-semibold text-[clamp(18px,2.2vw,24px)] text-text-primary m-0 mb-4">
              {cat.label}
            </h3>
            <div className="flex flex-col gap-3">
              {cat.items.map((item, i) => {
                const key = `${cat.id}-${i}`;
                return (
                  <AccordionItem
                    key={key}
                    item={item}
                    isOpen={open === key}
                    onToggle={() => setOpen(open === key ? null : key)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
