import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState, type FocusEvent } from "react";

const slides = [
  {
    image: "/keyland-hero-residence.png",
    alt: "Contemporary residence with a curved drive at dusk",
    location: "Colombo · Kotte · Sri Lanka",
    heading: "Property, with a",
    accent: "sense of place.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
    alt: "Contemporary residence surrounded by landscaped gardens",
    location: "Curated residences · Sri Lanka",
    heading: "A considered portfolio",
    accent: "of exceptional homes.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
    alt: "Warm modern home interior with views of the garden",
    location: "Sales · Rentals · Management",
    heading: "Property, thoughtfully",
    accent: "managed for you.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
    alt: "Elegant contemporary home with a private outdoor space",
    location: "Property · Investment · Development",
    heading: "A place for your",
    accent: "next chapter.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const autoPaused = isPaused || isHovered || hasFocus;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (autoPaused || prefersReducedMotion) return;
    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearTimeout(timer);
  }, [activeSlide, autoPaused, prefersReducedMotion]);

  function moveSlide(step: number) {
    setDirection(step);
    setActiveSlide((current) => (current + step + slides.length) % slides.length);
  }

  function selectSlide(index: number) {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
      setHasFocus(false);
    }
  }

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Featured Keyland properties"
      className="relative isolate h-[660px] min-h-[620px] overflow-hidden bg-[#052719] text-white sm:h-[700px] sm:min-h-[660px] lg:h-[min(760px,88svh)] lg:min-h-[620px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={handleBlur}
    >
      <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={slides[activeSlide].image}
            custom={direction}
            src={slides[activeSlide].image}
            alt={slides[activeSlide].alt}
            fetchPriority={activeSlide === 0 ? "high" : "auto"}
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 24, scale: 1.04 }}
            animate={{ opacity: 1, x: 0, scale: prefersReducedMotion ? 1 : 1.1 }}
            exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -24, scale: 1.04 }}
            transition={{
              opacity: { duration: prefersReducedMotion ? 0 : 1.1, ease: "easeInOut" },
              x: { duration: prefersReducedMotion ? 0 : 1.2, ease: "easeOut" },
              scale: { duration: prefersReducedMotion ? 0 : 7, ease: "linear" },
            }}
            className="absolute inset-0 h-full w-full object-cover object-[center_56%]"
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#052719]/75 via-[#052719]/35 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#052719]/60 via-transparent to-[#052719]/20" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-60" viewBox="0 0 1600 800" preserveAspectRatio="none" aria-hidden="true">
          <path className="fill-none stroke-[#f7f8f5] [stroke-dasharray:28_210] [stroke-linecap:round] opacity-0 motion-reduce:animate-none animate-wind-sweep" d="M-100 250C220 170 470 320 790 250S1320 170 1700 260" />
          <path className="fill-none stroke-[#f7f8f5] [stroke-dasharray:18_250] [stroke-linecap:round] opacity-0 [animation-delay:-8s] [animation-duration:23s] motion-reduce:animate-none animate-wind-sweep" d="M-120 420C200 350 470 500 840 420s570-70 880 10" />
          <path className="fill-none stroke-[#f7f8f5] [stroke-dasharray:22_230] [stroke-linecap:round] opacity-0 [animation-delay:-14s] [animation-duration:27s] motion-reduce:animate-none animate-wind-sweep" d="M-80 610c300-100 520 45 840-15s600-90 920 0" />
        </svg>

        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-24 sm:px-8 sm:pb-9 lg:px-14">
          <div className="max-w-[800px] pb-16 sm:pb-20">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/85 sm:text-[11px]">
              <span className="h-px w-9 bg-[#e2c36d]" />
              Registered in Sri Lanka · KADI Canada bilateral partner
              <BadgeCheck size={13} className="text-[#e2c36d]" />
            </p>

            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={activeSlide}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" }}
                className="max-w-[900px] font-display text-[clamp(1.7rem,4.3vw,4.6rem)] font-normal leading-[1.04] tracking-[-0.035em] text-white"
              >
                {slides[activeSlide].heading}
                <span className="block text-[#e2c36d]">{slides[activeSlide].accent}</span>
              </motion.h1>
            </AnimatePresence>
            <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/80 sm:text-base">
              End-to-end luxury developments, sales, rentals and diaspora asset
              management — with bilateral governance, escrow custody, and clear deed
              guarantees.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:bg-[#c5a04b]"
              >
                Explore our portfolio <ArrowRight size={14} />
              </a>
              <a
                href="/contact#consultation"
                className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
              >
                Speak with an advisor <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 border-t border-white/25 pt-4 sm:pt-5">
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 sm:block">
              {slides[activeSlide].location}
            </span>
            <div className="flex items-center gap-2" role="group" aria-label="Choose a featured property image">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.location}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => selectSlide(index)}
                  className={`h-0.5 transition-[width,background-color] duration-300 hover:bg-white/80 ${
                    index === activeSlide
                      ? "w-[38px] bg-[#e2c36d]"
                      : "w-[17px] bg-white/45"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => moveSlide(-1)}
                aria-label="Previous featured property"
                className="grid h-9 w-9 place-items-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <ChevronLeft size={16} />
              </button>
              {!prefersReducedMotion && (
                <button
                  type="button"
                  onClick={() => setIsPaused((paused) => !paused)}
                  aria-label={isPaused ? "Play image slideshow" : "Pause image slideshow"}
                  className="grid h-9 w-9 place-items-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {isPaused ? <Play size={13} /> : <Pause size={13} />}
                </button>
              )}
              <button
                type="button"
                onClick={() => moveSlide(1)}
                aria-label="Next featured property"
                className="grid h-9 w-9 place-items-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <ChevronRight size={16} />
              </button>
              <span className="hidden min-w-[54px] text-right text-[9px] font-medium tracking-[0.18em] text-white/75 sm:block">
                {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
    </section>
  );
}
