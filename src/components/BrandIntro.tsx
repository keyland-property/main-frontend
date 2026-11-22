const particles = [
  "left-[17%] top-[24%] h-[5px] w-[5px] [animation-delay:0ms]",
  "left-[36%] top-[15%] h-[3px] w-[3px] [animation-delay:800ms]",
  "left-[72%] top-[22%] h-[4px] w-[4px] [animation-delay:1300ms]",
  "left-[82%] top-[61%] h-[6px] w-[6px] [animation-delay:400ms]",
  "left-[28%] top-[73%] h-[4px] w-[4px] [animation-delay:1500ms]",
  "left-[61%] top-[80%] h-[3px] w-[3px] [animation-delay:900ms]",
  "left-[9%] top-[56%] h-[5px] w-[5px] [animation-delay:1800ms]",
];

export default function BrandIntro() {
  return (
    <div
      className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-gradient-to-b from-white via-[#fffdfa] to-paper motion-reduce:animate-none animate-brand-intro-exit"
      role="status"
      aria-label="Loading Keyland Properties"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={`absolute block rounded-full bg-[#c5a04b] opacity-0 blur-[1px] motion-reduce:animate-none animate-brand-particle-float ${particle}`}
          />
        ))}
      </div>

      <div className="relative flex w-[min(90vw,360px)] flex-col items-center text-center motion-reduce:animate-none animate-brand-lockup-arrive">
        <svg
          className="h-[136px] w-[112px] overflow-visible"
          viewBox="0 0 120 144"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="animate-brand-mark-draw [stroke:#b4491f] [stroke-dasharray:390] [stroke-dashoffset:390] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.2]"
            d="M12 140V57C12 25.5 33.5 4 60 4s48 21.5 48 53v83H12Z"
          />
          <path
            className="opacity-0 motion-reduce:animate-none animate-brand-mark-fill"
            fill="#b4491f"
            d="m22 103 25-23 13 8 20-30 27 25v48H22v-28Z"
          />
          <path className="animate-brand-mark-line [stroke:#fffdfa] [stroke-dasharray:90] [stroke-dashoffset:90] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" d="m22 109 23-19 9-12" />
          <path className="animate-brand-mark-line [stroke:#fffdfa] [stroke-dasharray:90] [stroke-dashoffset:90] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" d="m59 129 16-18 17-9 15 6" />
          <path className="animate-brand-mark-line [stroke:#fffdfa] [stroke-dasharray:90] [stroke-dashoffset:90] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" d="m73 90 8-24 8 15" />
          <path className="opacity-0 motion-reduce:animate-none animate-brand-window-fill [fill:#fffdfa] [stroke:#fffdfa] [stroke-width:2.2]" d="M38 116h10v15H38z" />
          <path className="opacity-0 motion-reduce:animate-none animate-brand-window-fill [fill:#fffdfa] [stroke:#fffdfa] [stroke-width:2.2]" d="M56 116h10v15H56z" />
          <path className="opacity-0 motion-reduce:animate-none animate-brand-window-fill [fill:#fffdfa] [stroke:#fffdfa] [stroke-width:2.2]" d="M75 116h10v15H75z" />
        </svg>

        <p className="mt-6 font-display text-[clamp(42px,8vw,58px)] font-normal leading-none tracking-[0.11em] text-[#211d19] opacity-0 motion-reduce:animate-none animate-brand-name-reveal">KEYLAND</p>
        <p className="mt-2 font-sans text-[9px] font-normal tracking-[0.36em] text-[#8b8178] opacity-0 motion-reduce:animate-none animate-brand-caption-reveal">PROPERTIES · SRI LANKA</p>
        <div className="mt-[26px] flex w-[190px] items-center gap-[18px] text-[#b4491f] opacity-0 motion-reduce:animate-none animate-brand-rule-reveal" aria-hidden="true">
          <span className="h-px flex-1 origin-left scale-x-0 bg-[#b4491f] motion-reduce:animate-none animate-brand-rule-draw" />
          <svg className="h-[17px] w-[13px]" viewBox="0 0 16 20" fill="none">
            <path className="[stroke:#b4491f] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.6]" d="M8 2v16M8 5 4 8m4-1 4 3M8 10l-5 3m5-1 5 3M8 15l-3 3m3-2 3 2" />
          </svg>
          <span className="h-px flex-1 origin-right scale-x-0 bg-terracotta motion-reduce:animate-none animate-brand-rule-draw" />
        </div>
        <p className="mt-[23px] font-sans text-[9px] font-normal tracking-[0.3em] text-[#8b8178] opacity-0 motion-reduce:animate-none animate-brand-caption-reveal [animation-delay:1250ms]">COLOMBO · TORONTO · BEYOND</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#87651f]/10" aria-hidden="true">
        <span className="block h-full w-full origin-left scale-x-0 bg-[#b4491f] motion-reduce:animate-none animate-brand-progress" />
      </div>
    </div>
  );
}
