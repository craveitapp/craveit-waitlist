export type ChecklistItem = {
  title?: string;
  desc?: string;
  text?: string;
};

const CheckIcon = ({ size = 13 }: { size?: number }) => (
  <span className="w-[22px] h-[22px] rounded-full bg-brand inline-flex items-center justify-center shrink-0 mt-[1px]">
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

function DetailedItem({ item }: { item: ChecklistItem }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
      <CheckIcon size={14} />
      <p className="m-0 font-secondary text-[15px] leading-[1.6] text-text-secondary">
        <span className="font-semibold text-text-primary">{item.title}</span>{" "}
        {item.desc}
      </p>
    </div>
  );
}

function BasicItem({ item }: { item: ChecklistItem }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
      <CheckIcon />
      <p className="m-0 font-secondary text-[14.5px] leading-[1.5] text-text-primary font-medium">
        {item.text}
      </p>
    </div>
  );
}

export default function Checklist({
  items,
  variant = "basic",
  columns = 2,
}: {
  items: ChecklistItem[];
  variant?: "basic" | "detailed";
  columns?: number;
}) {
  const Item = variant === "detailed" ? DetailedItem : BasicItem;
  const minWidth = columns === 1 ? "100%" : 200;

  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(auto-fit,minmax(${minWidth}px,1fr))` }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
