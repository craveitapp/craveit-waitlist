export default function PageHero({
  variant = "left",
  eyebrow,
  title,
  desc,
  illustration,
  children,
  bg = "#F8EEE0",
}: {
  variant?: "left" | "center" | "grid";
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  illustration?: React.ReactNode;
  children?: React.ReactNode;
  bg?: string;
}) {
  const watermark = (eyebrow || "").toLowerCase();

  if (variant === "grid") {
    return (
      <section
        className="relative overflow-hidden w-full py-[clamp(56px,8vw,96px)]"
        style={{ background: bg }}
      >
        {watermark && (
          <span
            aria-hidden
            className="absolute bottom-[-3vw] left-1/2 -translate-x-1/2 font-primary font-semibold text-[clamp(110px,18vw,280px)] leading-none text-brand opacity-[0.07] tracking-[-.03em] whitespace-nowrap pointer-events-none"
          >
            {watermark}
          </span>
        )}
        <div className="craveit-container relative z-10 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center">
          <div data-reveal className="flex flex-col gap-[22px]">
            {eyebrow && (
              <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">
                {eyebrow}
              </span>
            )}
            <h1 className="font-primary font-semibold text-[clamp(40px,6vw,72px)] leading-[1.06] tracking-[-.02em] text-text-primary m-0">
              {title}
            </h1>
            {desc && (
              <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0 max-w-[460px]">
                {desc}
              </p>
            )}
            {children}
          </div>
          {illustration && (
            <div data-reveal className="flex justify-center">
              {illustration}
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "center") {
    return (
      <section
        className="relative overflow-hidden w-full py-[clamp(56px,8vw,88px)]"
        style={{ background: bg }}
      >
        {watermark && (
          <span
            aria-hidden
            className="absolute bottom-[-3vw] left-1/2 -translate-x-1/2 font-primary font-semibold text-[clamp(110px,18vw,280px)] leading-none text-brand opacity-[0.07] tracking-[-.03em] whitespace-nowrap pointer-events-none"
          >
            {watermark}
          </span>
        )}
        <div data-reveal className="craveit-container relative z-10 text-center">
          {eyebrow && (
            <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">
              {eyebrow}
            </span>
          )}
          <h1 className="font-primary font-semibold text-[clamp(36px,5vw,60px)] leading-[1.1] text-text-primary" style={{ margin: eyebrow ? "14px 0 0" : 0 }}>
            {title}
          </h1>
        </div>
      </section>
    );
  }

  // variant === "left" (default)
  return (
    <section
      className="relative overflow-hidden w-full py-[clamp(56px,8vw,96px)]"
      style={{ background: bg }}
    >
      {watermark && (
        <span
          aria-hidden
          className="absolute bottom-[-3vw] left-1/2 -translate-x-1/2 font-primary font-semibold text-[clamp(110px,18vw,280px)] leading-none text-brand opacity-[0.07] tracking-[-.03em] whitespace-nowrap pointer-events-none"
        >
          {watermark}
        </span>
      )}
      <div className="craveit-container relative z-10 flex flex-col gap-[22px]">
        {eyebrow && (
          <span className="font-secondary font-semibold text-[13px] tracking-[.16em] uppercase text-text-secondary">
            {eyebrow}
          </span>
        )}
        <h1 className="font-primary font-semibold text-[clamp(40px,6vw,72px)] leading-[1.06] tracking-[-.02em] text-text-primary m-0">
          {title}
        </h1>
        {desc && (
          <p className="font-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-text-secondary m-0 max-w-[560px]">
            {desc}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
