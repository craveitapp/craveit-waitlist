export default function TwoColumn({
  children,
  illustration,
  reversed = false,
  bg = "#fff",
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  illustration: React.ReactNode;
  reversed?: boolean;
  bg?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      className="w-full py-[clamp(64px,9vw,96px)]"
      style={{ background: bg }}
    >
      <div
        className={`craveit-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,64px)] items-center ${className}`}
        style={style}
      >
        {reversed ? (
          <>
            <div data-reveal className="flex justify-center order-2">
              {illustration}
            </div>
            <div data-reveal className="flex flex-col gap-[22px] order-1">
              {children}
            </div>
          </>
        ) : (
          <>
            <div data-reveal className="flex flex-col gap-[22px]">
              {children}
            </div>
            <div data-reveal className="flex justify-center">
              {illustration}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
