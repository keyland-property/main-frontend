import { useEffect } from "react";
import { BadgeCheck, Building2, Check, HandCoins, Landmark, ShieldCheck, Star, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import PageCta from "../components/PageCta";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import type { AboutContent } from "../api/contentApi";
import { useContentStore } from "../store/useContentStore";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const valueIcons = [ShieldCheck, UserCheck, Building2, BadgeCheck, HandCoins, Landmark];

const teamProfiles = [
  {
    name: "Team Member 01",
    designation: "Property Advisory",
    description: "Guides clients through property selection, due diligence, and the next steps toward a confident decision.",
  },
  {
    name: "Team Member 02",
    designation: "Investment & Development",
    description: "Supports investment planning and development opportunities with clear, considered market guidance.",
  },
  {
    name: "Team Member 03",
    designation: "Client Relations",
    description: "Coordinates responsive support for local and international clients throughout their property journey.",
  },
];

const defaultAbout: AboutContent = {
  hero: {
    eyebrow: "Institution & governance",
    title: "Our Heritage & Global Banking",
    description: "Founded on the historic legacy of Colombo’s premier commercial centres and strengthened by an international network, Keyland Properties guides buyers, developers, and investors with confidence and transparency.",
    imageUrl: "/keyland-hero-residence.png",
  },
  stats: [
    { value: "30+", label: "Years", note: "Combined expertise in property and investment advisory" },
    { value: "100%", label: "Verified", note: "Clear title and legal diligence across transactions" },
    { value: "250+", label: "Assets", note: "Guided across premium developments and portfolios" },
    { value: "CAD $", label: "Witnessed", note: "Cross-border financial support for diaspora clients" },
  ],
  intro: {
    eyebrow: "Institutional property partners",
    title: "Keyland Properties (Pvt) Ltd. — Colombo 09 Baseline Heritage",
    description: "Anchored in a legacy of trusted operational management, commercial counsel, and market intelligence, we assist clients across residential, investment, and development mandates with a strong emphasis on confidence, clarity and compliance.",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Executive property strategy and acquisition facilitation",
      "Bilateral escrow and legal transaction guidance",
      "Structured support for diaspora investors and family offices",
      "Regional advisory across Colombo, Toronto and international networks",
    ],
  },
  vision: {
    title: "Guiding Our Bilateral Enterprise",
    vision: "To serve as the premier, internationally trusted conduit for Sri Lankan property opportunities across residential, commercial, and development portfolios.",
    mission: "To empower domestic and diaspora clients through intelligent, transparent, and fully governed property strategies that build long-term financial resilience.",
    points: [
      "Intellectual investment leadership rooted in market clarity, governance and execution discipline.",
      "Supporting investor confidence through strategic advisory and legal coordination.",
      "Aligning acquisition decisions with trusted legal, financial and local market insight.",
      "Enabling sustainable value creation through coordinated, secure transactions.",
    ],
  },
  values: [
    { title: "Trust & Integrity", description: "We protect your capital with transparent counsel, disciplined review, and ethical representation." },
    { title: "Transparency", description: "Clear communication, holistic reporting, and informed decisions at every stage of the process." },
    { title: "Quality & Professionalism", description: "Every investment decision is shaped by local market intelligence and rigorous due diligence." },
    { title: "Accessibility", description: "Our advisory network is designed to keep clients informed, supported, and confident throughout." },
    { title: "Responsiveness", description: "We act quickly with structured execution, clear next steps, and proactive oversight." },
    { title: "Value Creation", description: "Growth, resilience and long-term return are central to the way we shape each opportunity." },
  ],
  valuesTitle: "Six Foundational Values",
  alliance: {
    title: "Keyland • KADI (Canada) Strategic Alliance",
    description: "Establishing a sovereign-grade bridge for North American and Sri Lankan property clients with a secure, compliant and globally connected advisory framework.",
    quote: "Our bilateral investment pathway creates a cleaner, safer route for diaspora families and international investors seeking certainty in Sri Lankan real estate.",
    features: [
      { title: "Dual-jurisdiction compliance", description: "Direct alignment with Canadian and Sri Lankan regulatory frameworks, legal controls, and transaction oversight." },
      { title: "Cross-border funds flow", description: "Secure remittance support and escrow-backed transfer design for diaspora property investors and families." },
      { title: "Canadian representation desk", description: "Practical, responsive client support in Canada with time-zone-aware coordination and local guidance." },
    ],
  },
};

export default function AboutPage() {
  const content = useContentStore((state) => state.about) || defaultAbout;
  const loadAbout = useContentStore((state) => state.loadAbout);

  useEffect(() => {
    loadAbout().catch((error: Error) => {
      console.warn("Could not load About page content from the Keyland API; showing the public-site defaults.", error.message);
    });
  }, [loadAbout]);

  const midpoint = Math.ceil(content.vision.points.length / 2);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <main>
        <PageHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          actionLabel="Meet our advisory team"
          actionHref="#our-team"
        />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="border-b border-[#dce5dc] bg-[#edf2ec] py-8 sm:py-10">
          <div className="mx-auto grid max-w-[1440px] gap-6 px-5 sm:grid-cols-2 sm:px-8 md:grid-cols-4 lg:px-14">
            {content.stats.map((stat) => (
              <div key={stat.label} className="border-l border-[#e2c36d] py-1 pl-4">
                <div className="font-display text-[34px] font-normal text-navy">{stat.value}</div>
                <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-terracotta">{stat.label}</div>
                <p className="mt-2 max-w-[240px] text-xs leading-5 text-muted">{stat.note}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">{content.intro.eyebrow}</div>
              <h2 className="mt-3 font-display text-[34px] font-normal text-navy sm:text-[42px]">{content.intro.title}</h2>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm leading-7 text-slate-600">{content.intro.description}</p>
              <div className="mt-6 space-y-3">
                {content.intro.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-[#dce5dc] py-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-terracotta">
                      <Check size={12} />
                    </span>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-[#dce5dc] bg-[#dce5dc]">
              <img
                src={content.intro.imageUrl}
                alt="Keyland regional office and property development"
                className="h-[400px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052719]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="inline-flex items-center gap-2 bg-[#052719]/80 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#e2c36d]">
                  <Building2 size={12} />
                  Colombo operations
                </div>
                <div className="mt-3 flex items-center justify-between gap-4 border-t border-white/20 pt-3">
                  <p className="text-sm font-semibold">Colombo office · Institutional advisory</p>
                  <span className="text-sm uppercase tracking-[0.12em] text-slate-200">Global reach</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="our-team"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-paper py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
            <div className="mb-10">
              <SectionHeading
                eyebrow="Our team"
                title="Meet the people behind Keyland"
                description="Our advisory team brings together local market knowledge and attentive support for every property journey."
                center
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamProfiles.map((member) => (
                <article key={member.name} className="overflow-hidden border border-[#dce5dc] bg-[#f7f8f5]">
                  <div
                    className="grid aspect-[4/3] place-items-center border-b border-[#dce5dc] bg-[#edf2ec]"
                    aria-label="Team member image placeholder"
                  >
                    <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/60 bg-paper text-[10px] font-medium uppercase tracking-[0.16em] text-navy">
                      Photo
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-[24px] font-normal text-navy">{member.name}</h3>
                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-gold">{member.designation}</p>
                    <p className="mt-4 text-sm leading-6 text-muted">{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-[#edf2ec] py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
            <div className="mb-10 text-center">
              <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">Our approach</div>
              <h2 className="mt-3 font-display text-[34px] font-normal text-navy sm:text-[42px]">{content.vision.title}</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-[#dce5dc] bg-[#f7f8f5] p-7 sm:p-9">
                <div className="mb-5 inline-flex items-center gap-2 border-b border-[#dce5dc] pb-3 text-[9px] font-medium uppercase tracking-[0.16em] text-terracotta">
                  <Star size={12} className="text-terracotta" />
                  Our vision
                </div>
                <p className="text-sm leading-7 text-slate-600">{content.vision.vision}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {content.vision.points.slice(0, midpoint).map((point) =>                   <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-terracotta" />{point}</li>)}
                </ul>
              </div>

              <div className="border border-[#dce5dc] bg-[#f7f8f5] p-7 sm:p-9">
                <div className="mb-5 inline-flex items-center gap-2 border-b border-[#dce5dc] pb-3 text-[9px] font-medium uppercase tracking-[0.16em] text-terracotta">
                  <Landmark size={12} className="text-terracotta" />
                  Our mission
                </div>
                <p className="text-sm leading-7 text-slate-600">{content.vision.mission}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {content.vision.points.slice(midpoint).map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-terracotta" />{point}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
            <div className="mb-10 text-center">
              <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">Core values</div>
              <h2 className="mt-3 font-display text-[34px] font-normal text-navy sm:text-[42px]">{content.valuesTitle}</h2>
            </div>

            <div className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
              {content.values.map(({ title, description }, index) => {
                const Icon = valueIcons[index % valueIcons.length];
                return (
                  <article key={title} className="border-t border-[#dce5dc] py-6">
                    <div className="flex items-center gap-3">
                      <Icon size={17} className="shrink-0 text-terracotta" />
                      <h3 className="font-display text-[21px] font-normal text-navy">{title}</h3>
                    </div>
                    <p className="mt-3 pl-7 text-sm leading-6 text-slate-600">{description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="border-y border-[#dce5dc] bg-[#edf2ec] py-16 text-navy sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
            <div className="max-w-3xl border-l-2 border-terracotta pl-6 sm:pl-8">
              <div className="mb-4 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">
                <BadgeCheck size={13} />
                {content.alliance.title}
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                {content.alliance.description}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
              {content.alliance.features.map((feature, index) => (
                <article key={feature.title} className="border-t border-[#dce5dc] pt-5">
                  <div className="mb-4 flex items-center gap-3 text-terracotta">
                    <span className="font-display text-xl">{String(index + 1).padStart(2, "0")}</span>
                    <ShieldCheck size={15} />
                  </div>
                  <h3 className="font-display text-[21px] font-normal text-navy">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-[#dce5dc] pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[820px] font-display text-[22px] leading-8 text-navy sm:text-[26px]">
                “{content.alliance.quote}”
              </p>
              <div className="shrink-0 text-[9px] font-medium uppercase tracking-[0.16em] text-terracotta">
                Toronto · Colombo · Global coordination
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <PageCta
        eyebrow="The right partners make all the difference"
        heading="Build your next chapter with Keyland."
        description="Meet the people behind our Sri Lanka–Canada advisory network and discover a more assured way to manage your property ambitions."
        buttonLabel="Speak with our team"
      />

      <Footer />
    </div>
  );
}
