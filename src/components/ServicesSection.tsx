import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, HandCoins, KeyRound, Landmark, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "House & Property Development",
    summary: "Transforming land into vibrant communities",
    description: "High-spec architectural execution and turnkey luxury residences crafted to North American standards.",
    image: "/keyland-hero-residence.png",
    label: "Development",
    icon: Building2,
    cta: "Explore Developments",
  },
  {
    title: "Property Management",
    summary: "Maximizing value, minimizing hassle",
    description: "Reliable tenant, maintenance, and reporting support for local and overseas property owners.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    label: "Management",
    icon: Settings2,
    cta: "Explore Management",
  },
  {
    title: "Investment & Value Enhancement",
    summary: "Building greater value for tomorrow",
    description: "Thoughtful acquisition advice and portfolio strategies grounded in local market knowledge.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    label: "Investment",
    icon: HandCoins,
    cta: "Explore Investment",
  },
  {
    title: "Property Sales & Rentals",
    summary: "Connecting people with the right properties",
    description: "Personalized guidance through property search, viewings, negotiation, and handover.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    label: "Sales & Rentals",
    icon: KeyRound,
    cta: "Explore Sales",
  },
  {
    title: "Professional Property Services",
    summary: "Expert support at every step of your journey",
    description: "Coordinated local expertise to help make ownership and investment straightforward.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    label: "Advisory",
    icon: Landmark,
    cta: "Explore Services",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  function move(dir: number) {
    setDirection(dir);
    setActive((current) => (current + dir + services.length) % services.length);
  }

  function goTo(index: number) {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }

  const ActiveIcon = services[active].icon;

  return (
    <section id="services" className="overflow-hidden border-y border-[#dce5dc] bg-[#edf2ec] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-14">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-terracotta">
            <Landmark size={13} />
            Comprehensive real estate solutions
          </div>
          <SectionHeading
            eyebrow="Our expertise"
            title="A thoughtful approach to property"
            description="End-to-end stewardship from architectural development and portfolio management to bilateral diaspora conveyance."
          />
          <div className="mt-8 border-t border-[#dce5dc]">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-pressed={active === index}
                onClick={() => goTo(index)}
                className={`group flex w-full items-center justify-between gap-4 border-b border-[#dce5dc] py-4 text-left transition-colors ${
                  active === index ? "text-terracotta" : "text-navy hover:text-terracotta"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-display text-base text-[#68756c]">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-display text-[18px] leading-tight sm:text-[20px]">{item.title}</span>
                    <span className="mt-1 block text-[10px] leading-5 text-muted">{item.summary}</span>
                  </span>
                </span>
                <ArrowUpRight size={15} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ))}
          </div>
          <a href="/contact#consultation" className="group mt-7 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.17em] text-terracotta">
            Book a private consultation <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative min-h-[480px] overflow-hidden bg-[#e5ece5] sm:min-h-[560px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: "easeOut" as const }}
              className="absolute inset-0"
            >
              <img src={services[active].image} alt={services[active].title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052719]/85 via-[#052719]/15 to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-white/35 bg-[#052719]/35 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                <ActiveIcon size={13} />
                {services[active].label}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-11">
                <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#e2c36d]">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")} · {services[active].summary}
                </p>
                <h3 className="max-w-[580px] font-display text-3xl font-normal leading-tight sm:text-[42px]">{services[active].title}</h3>
                <p className="mt-3 max-w-[540px] text-xs leading-6 text-white/80 sm:text-sm">{services[active].description}</p>
                <a href="/contact#consultation" className="group mt-6 inline-flex items-center gap-2 border-b border-white/70 pb-2 text-[9px] font-medium uppercase tracking-[0.17em] text-white">
                  {services[active].cta} <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="absolute right-5 top-5 flex items-center gap-2 sm:right-7 sm:top-7">
            <button type="button" onClick={() => move(-1)} aria-label="Previous service" className="grid h-10 w-10 place-items-center border border-white/60 bg-[#052719]/30 text-white backdrop-blur-sm transition-colors hover:bg-[#052719]/70">
              <ArrowLeft size={15} />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next service" className="grid h-10 w-10 place-items-center border border-white/60 bg-[#052719]/30 text-white backdrop-blur-sm transition-colors hover:bg-[#052719]/70">
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
