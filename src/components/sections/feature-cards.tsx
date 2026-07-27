export type FeatureCardItem = {
  title: string;
  desc: string;
  img?: string;
  imgBg?: string;
  icon?: React.ReactNode;
  number?: string;
};

function ImageIconCard({ item }: { item: FeatureCardItem }) {
  return (
    <div data-reveal className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.05)]">
      {item.img && (
        <div className="h-[220px] w-full" style={{ background: item.imgBg }}>
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-primary font-semibold text-[clamp(18px,2vw,22px)] text-text-primary m-0 mb-2">
          {item.title}
        </h3>
        <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function IconCard({ item }: { item: FeatureCardItem }) {
  return (
    <div data-reveal className="bg-bg-secondary rounded-[20px] p-7 flex flex-col gap-4">
      <span className="w-14 h-14 rounded-2xl bg-[#FBE2CE] inline-flex items-center justify-center shrink-0">
        {item.icon}
      </span>
      <h3 className="font-primary font-semibold text-[20px] text-text-primary m-0">
        {item.title}
      </h3>
      <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">
        {item.desc}
      </p>
    </div>
  );
}

function TextCard({ item, bg }: { item: FeatureCardItem; bg?: string }) {
  return (
    <div
      data-reveal
      className="rounded-[20px] py-8 px-7 flex flex-col gap-3 shadow-[0_4px_20px_rgba(0,0,0,.05)]"
      style={{ background: bg || "#FAF7F2" }}
    >
      <h3 className="font-primary font-semibold text-[20px] text-text-primary m-0">
        {item.title}
      </h3>
      <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">
        {item.desc}
      </p>
    </div>
  );
}

function NumberedCard({ item }: { item: FeatureCardItem }) {
  return (
    <div data-reveal className="bg-white rounded-[20px] py-8 px-7 flex flex-col gap-3.5 shadow-[0_4px_20px_rgba(0,0,0,.05)]">
      <span className="w-12 h-12 rounded-full bg-brand text-white font-primary font-semibold text-[22px] inline-flex items-center justify-center">
        {item.number}
      </span>
      <h3 className="font-primary font-semibold text-[22px] text-text-primary m-0">
        {item.title}
      </h3>
      <p className="font-secondary text-[15px] leading-[1.7] text-text-secondary m-0">
        {item.desc}
      </p>
    </div>
  );
}

const cardMap = {
  image: ImageIconCard,
  icon: IconCard,
  text: TextCard,
  numbered: NumberedCard,
};

export default function FeatureCards({
  items,
  variant = "image",
  columns = 3,
  bg,
}: {
  items: FeatureCardItem[];
  variant?: "image" | "icon" | "text" | "numbered";
  columns?: number;
  bg?: string;
}) {
  const Card = cardMap[variant];
  const minWidth = variant === "icon" ? 240 : variant === "text" ? 240 : 260;

  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: `repeat(auto-fit,minmax(${minWidth}px,1fr))` }}
    >
      {items.map((item) => (
        <Card key={item.title} item={item} bg={bg} />
      ))}
    </div>
  );
}
