"use client";

import { motion, easeOut } from "framer-motion";

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const EMAIL = "support@getcraveit.com";

/** Renders text, turning any support email address into a mailto link. */
function withLinks(text: string) {
  const parts = text.split(EMAIL);
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a key={i} href={`mailto:${EMAIL}`} className="text-brand">
            {EMAIL}
          </a>,
        ]
      : [part]
  );
}

export type LegalItem = string | { label: string; text: string };

export type LegalBlock = {
  title: string;
  /** Paragraphs shown before the list. */
  intro?: string[];
  /** Short sentence introducing the list. */
  lead?: string;
  items?: LegalItem[];
  /** Optional second lead + list, shown after the first list. */
  lead2?: string;
  items2?: LegalItem[];
  /** Paragraphs shown after the list. */
  outro?: string[];
};

function ItemList({ items }: { items: LegalItem[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, i) => (
        <li key={i}>
          {typeof item === "string" ? (
            withLinks(item)
          ) : (
            <>
              <span className="font-semibold text-text-primary">{item.label}</span>{" "}
              {withLinks(item.text)}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export function LegalSection({
  number,
  block,
}: {
  number: number;
  block: LegalBlock;
}) {
  return (
    <motion.div variants={fadeInUp} className="mb-10">
      <h2 className="mb-4 font-primary text-lg md:text-2xl font-semibold text-text-primary">
        {number}. {block.title}
      </h2>
      <div className="font-secondary text-sm md:text-lg leading-relaxed text-text-secondary space-y-3">
        {block.intro?.map((p, i) => (
          <p key={`i${i}`}>{withLinks(p)}</p>
        ))}
        {block.lead && <p className="font-semibold text-text-primary">{block.lead}</p>}
        {block.items && <ItemList items={block.items} />}
        {block.lead2 && <p className="font-semibold text-text-primary">{block.lead2}</p>}
        {block.items2 && <ItemList items={block.items2} />}
        {block.outro?.map((p, i) => (
          <p key={`o${i}`}>{withLinks(p)}</p>
        ))}
      </div>
    </motion.div>
  );
}

export function LegalSections({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <LegalSection key={block.title} number={i + 1} block={block} />
      ))}
    </>
  );
}

/** Divider heading used when a page carries a second audience-specific part. */
export function PartHeading({ title, id }: { title: string; id?: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      id={id}
      className="mt-16 mb-10 border-t border-[#E5E5E5] pt-10 scroll-mt-28"
    >
      <h2 className="font-primary text-2xl md:text-4xl font-semibold text-text-primary">
        {title}
      </h2>
    </motion.div>
  );
}
