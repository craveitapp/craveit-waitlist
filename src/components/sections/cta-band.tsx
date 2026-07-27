export default function CtaBand({
  title,
  desc,
  children,
  illustration,
  id,
}: {
  title: string;
  desc: string;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
  id?: string;
}) {
  const hasGrid = !!illustration;

  return (
    <section
      id={id}
      className="relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(135deg,#EE6A31 0%,#E15C24 52%,#C74718 100%)",
        padding: hasGrid ? "clamp(56px,8vw,88px) 0" : "clamp(72px,10vw,110px) 0",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <span className="absolute left-[-1.5%] bottom-[-9%] font-primary font-semibold text-[clamp(150px,27vw,384px)] leading-[0.8] text-white/10 whitespace-nowrap tracking-[-.035em] select-none">
          crave<span className="italic">it</span>
        </span>
      </div>
      <div
        className={`craveit-container relative z-10 ${
          hasGrid
            ? "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(40px,6vw,64px)] items-center"
            : "text-center flex flex-col items-center gap-[22px]"
        }`}
      >
        <div
          data-reveal
          className={`flex flex-col gap-[22px] ${hasGrid ? "" : "items-center"}`}
        >
          <h2
            className={`font-primary font-semibold text-white m-0 ${
              hasGrid
                ? "text-[clamp(32px,4.6vw,52px)] leading-[1.1]"
                : "text-[clamp(32px,4.4vw,50px)] leading-[1.12]"
            }`}
          >
            {title}
          </h2>
          <p
            className="font-secondary text-[clamp(15px,1.6vw,20px)] leading-[1.6] text-white/92 m-0"
            style={{ maxWidth: hasGrid ? 440 : 520 }}
          >
            {desc}
          </p>
          {children}
        </div>
        {hasGrid && (
          <div data-reveal className="flex justify-center">
            {illustration}
          </div>
        )}
      </div>
    </section>
  );
}
