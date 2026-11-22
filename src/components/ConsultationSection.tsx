import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    initials: "RW",
    name: "Dr. Ranjan & Shanthi Weerakkody",
    sub: "Acquired Villa Nedimala · Resident in Ontario, Canada",
    verified: "Escrow & Conveyancing Verified 2024",
    quote:
      " 'Living in Ontario, managing property in Nedimala used to be fraught with uncertainty. Keyland took over our deeds, structured the tenant leases, and remittances arrive like clockwork. Unrivaled peace of mind.' ",
  },
  {
    initials: "SP",
    name: "Suresh & Priya Perera",
    sub: "Investment Plot · Gampaha District · Toronto, Canada",
    verified: "Title Audit & Bim Saviya Verified 2023",
    quote:
      " 'We purchased land from overseas without visiting once. Keyland managed every step — from title checks to registration — with total transparency. We'd trust them again without hesitation.' ",
  },
  {
    initials: "AN",
    name: "Amila Nihal",
    sub: "Commercial Lease · Colombo 09 · London, UK",
    verified: "Legal Compliance Verified 2024",
    quote:
      " 'I had tried two agents before Keyland. The difference was night and day. They structured a proper commercial lease, handled the regulatory filings, and kept me informed every week. Genuinely professional.' ",
  },
  {
    initials: "KF",
    name: "Kavitha & Feroze Fernando",
    sub: "Apartment Portfolio · Kotte · Melbourne, Australia",
    verified: "Rental Yield & Management Verified 2023",
    quote:
      " 'Our three apartments now yield consistently month after month. The management team reports on time, the maintenance is proactive, and the net returns exceeded our projections. Exceptional service.' ",
  },
];

export default function ConsultationSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  function move(dir: number) {
    setDirection(dir);
    setActive((c) => (c + dir + reviews.length) % reviews.length);
  }

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => move(1), 6000);
    return () => clearInterval(t);
  }, [paused, active]);

  const review = reviews[active];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#e2c36d 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b3d2c]/60 via-transparent to-[#052719]/60" />

      <div id="consultation" className="relative mx-auto max-w-[860px] px-2 sm:px-8">
        {/* Section label */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#e2c36d]">
            <span className="h-px w-8 bg-[#e2c36d]" />
            Client Testimonials
            <span className="h-px w-8 bg-[#e2c36d]" />
          </span>
        </div>

        {/* Carousel */}
        <div className="relative" style={{ minHeight: "250px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="flex flex-col items-center text-center"
            >


              {/* Quote text */}
              <blockquote className="mt-4 max-w-[680px] font-display text-xl leading-relaxed text-white/90 sm:text-2xl">
                {review.quote}
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center gap-2">
                <p className="text-base font-bold text-white">{review.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-[#e2c36d]/75">
                  <span className="text-[#e2c36d]">◈</span> {review.verified}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous review"
            className="grid h-10 w-10 place-items-center border border-white/20 text-white/60 transition-all hover:border-[#e2c36d] hover:text-[#e2c36d]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                aria-label={`Go to review ${i + 1}`}
                aria-pressed={active === i}
                className={`rounded-full transition-all ${active === i
                    ? "h-2.5 w-8 bg-[#e2c36d]"
                    : "h-2 w-2 bg-white/25 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next review"
            className="grid h-10 w-10 place-items-center border border-white/20 text-white/60 transition-all hover:border-[#e2c36d] hover:text-[#e2c36d]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Review count */}
        <p className="mt-6 text-center text-xs text-slate-500">
          {active + 1} of {reviews.length} verified client stories
        </p>
      </div>
    </section>
  );
}
