export default function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
  maxWidth,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
  maxWidth?: number;
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <div
      data-reveal
      className={`${isCenter ? "text-center max-w-[640px] mx-auto" : "text-left"} mb-[clamp(40px,6vw,56px)] ${maxWidth ? `max-w-[${maxWidth}px]` : ""} ${className}`}
    >
      {eyebrow && (
        <span
          className={`font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary ${!isCenter ? "block mb-3" : ""}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-primary font-semibold text-[clamp(28px,4.4vw,48px)] leading-[1.15] text-text-primary ${
          isCenter ? (eyebrow ? "mt-3 mb-3.5" : "mt-0 mb-3.5") : "m-0"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0">
          {desc}
        </p>
      )}
    </div>
  );
}
