export function GooglePlayBadge() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.getcraveit.craveit"
      className="inline-flex items-center gap-[8px] sm:gap-[11px] bg-text-primary rounded-full py-[9px] sm:py-[11px] px-[14px] sm:px-[20px] no-underline shadow-[0_6px_16px_rgba(19,25,39,.18)]"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.06.06 9.86-9.86v-.23L3.66 2.24l-.06.06z"
          fill="#fff"
        />
        <path
          d="M16.9 15.2l-3.28-3.28v-.23l3.29-3.29.07.04 3.9 2.22c1.11.63 1.11 1.67 0 2.31l-3.9 2.21-.08.05z"
          fill="#fff"
        />
        <path
          d="M16.98 15.15L13.62 11.8 3.6 21.82c.37.39.97.44 1.65.05l11.73-6.72z"
          fill="#fff"
        />
        <path
          d="M16.98 8.45L5.25 1.73C4.57 1.34 3.97 1.39 3.6 1.78L13.62 11.8l3.36-3.35z"
          fill="#fff"
        />
      </svg>
      <span className="flex flex-col leading-[1.15]">
        <span className="font-secondary text-[9px] sm:text-[10px] tracking-[.06em] uppercase text-white opacity-82">
          Get it on
        </span>
        <span className="font-secondary font-semibold text-[14px] sm:text-[17px] text-white">
          Google Play
        </span>
      </span>
    </a>
  );
}

export function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com/ng/app/craveit-i-food-delivery/id6769011202"
      className="inline-flex items-center gap-[8px] sm:gap-[11px] bg-text-primary rounded-full py-[9px] sm:py-[11px] px-[14px] sm:px-[20px] no-underline shadow-[0_6px_16px_rgba(19,25,39,.18)]"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] shrink-0"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.05 12.53c-.02-2.02 1.65-2.99 1.73-3.04-.94-1.38-2.41-1.57-2.93-1.59-1.25-.13-2.44.73-3.07.73-.63 0-1.61-.71-2.65-.69-1.36.02-2.62.79-3.32 2.01-1.42 2.46-.36 6.1 1.02 8.1.67.98 1.47 2.08 2.51 2.04 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.78-1 2.45-1.98.77-1.13 1.09-2.23 1.11-2.29-.02-.01-2.13-.82-2.15-3.25zM15.03 6.6c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.21-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.4-1.13z" />
      </svg>
      <span className="flex flex-col leading-[1.15]">
        <span className="font-secondary text-[9px] sm:text-[10px] tracking-[.06em] uppercase text-white opacity-82">
          Download on the
        </span>
        <span className="font-secondary font-semibold text-[14px] sm:text-[17px] text-white">
          App Store
        </span>
      </span>
    </a>
  );
}

export function StoreBadges() {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-[10px] sm:gap-[14px]">
      <GooglePlayBadge />
      <AppStoreBadge />
    </div>
  );
}

export function PhoneFrame({
  children,
  width = 280,
}: {
  children: React.ReactNode;
  width?: number;
}) {
  return (
    <div
      className="relative rounded-[52px] border-[6px] border-[#2a2a2c] bg-gradient-to-b from-[#3a3a3c] to-[#1a1a1c] shadow-[0_0_0_1px_rgba(255,255,255,.08),0_25px_60px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.12)]"
      style={{ width, aspectRatio: "9/18.5" }}
    >
      {/* Titanium frame highlight */}
      <div
        className="absolute inset-0 rounded-[46px] pointer-events-none"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      />
      {/* Side buttons */}
      <div className="absolute top-[100px] left-[-8px] w-[2px] h-[28px] bg-[#4a4a4c] rounded-l-sm" />
      <div className="absolute top-[140px] left-[-8px] w-[2px] h-[48px] bg-[#4a4a4c] rounded-l-sm" />
      <div className="absolute top-[185px] left-[-8px] w-[2px] h-[48px] bg-[#4a4a4c] rounded-l-sm" />
      <div className="absolute top-[135px] right-[-8px] w-[2px] h-[65px] bg-[#4a4a4c] rounded-r-sm" />
      {/* Screen */}
      <div className="relative w-full h-full rounded-[46px] overflow-hidden bg-black">
        {children}

        {/* Dynamic Island */}
        <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[37%] min-w-[80px] h-[30px] bg-black rounded-full z-20 shadow-[0_0_4px_rgba(0,0,0,0.5)]" />
      </div>
    </div>
  );
}
