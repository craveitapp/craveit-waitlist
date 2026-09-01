"use client";

import { PhoneFrame } from "@/components/ui";

interface Panel {
  eyebrow: string;
  heading: string;
  headingAccent?: string;
  description: string;
  bg: string;
  eyebrowColor?: string;
  headingColor?: string;
  accentColor?: string;
  bodyColor?: string;
}

export type { Panel };

const BRAND = "#E96029";

export default function StickyScrollReveal({
  panels,
  videoSrc,
}: {
  panels: Panel[];
  videoSrc: string;
}) {
  // One constant phone mockup — same video everywhere, never recolors or swaps.
  const phoneMedia = (
    <video
      autoPlay
      muted
      loop
      playsInline
      src={videoSrc}
      className="h-full w-full object-cover"
    />
  );

  return (
    <section className="relative w-full bg-white">
      <div className="flex flex-col md:flex-row items-stretch w-full">
        {/* LEFT COLUMN: colored text panels — each panel carries its OWN background.
            On mobile this is the whole width; content is NOT reduced for the phone. */}
        <div className="w-full md:flex-1 flex flex-col min-w-0">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="md:min-h-screen flex items-center px-[24px] md:px-[clamp(40px,6vw,96px)] py-[44px] md:py-[clamp(48px,8vh,96px)]"
              style={{ backgroundColor: panel.bg }}
            >
              <div className="max-w-[520px] w-full text-left">
                <span
                  className="font-secondary font-semibold text-[12px] md:text-[14px] tracking-[.2em] uppercase block mb-[14px] md:mb-[18px]"
                  style={{ color: panel.eyebrowColor || BRAND }}
                >
                  {panel.eyebrow}
                </span>

                <h2
                  className="font-primary font-semibold text-[30px] md:text-[clamp(34px,4vw,56px)] leading-[1.08] tracking-[-.01em] m-0 mb-[16px] md:mb-[22px]"
                  style={{ color: panel.headingColor || "#131928" }}
                >
                  <span className="block">{panel.heading}</span>
                  {panel.headingAccent && (
                    <span
                      className="block"
                      style={{
                        color: panel.accentColor || panel.headingColor || "#131928",
                      }}
                    >
                      {panel.headingAccent}
                    </span>
                  )}
                </h2>

                <p
                  className="font-secondary text-[16px] md:text-[clamp(17px,1.4vw,20px)] leading-[1.7] m-0 max-w-[460px]"
                  style={{ color: panel.bodyColor || "#5C6169" }}
                >
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN (desktop only): the phone's own WHITE container.
            Sticky phone pins here while the colored panels scroll past it. */}
        <div className="hidden md:block md:w-[44%] lg:w-[42%] relative bg-white">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <PhoneFrame width={280}>{phoneMedia}</PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
