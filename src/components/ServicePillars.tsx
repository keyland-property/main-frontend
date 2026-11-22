import { ArrowRight, Building2, ChartNoAxesCombined, Handshake, KeyRound, Scale } from "lucide-react";

const pillars = [
  {
    number: "01",
    label: "Development",
    title: "House & Property Development",
    description: "Master planning, bespoke architectural execution and turnkey residences supported by full project coordination and local regulatory guidance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5W0k5-LN7mvRYVFqsrkKwUB_JyjBbMHMDZZ5fCeAKAdW1HNe6s28La_E3_8dI5f9E3OGDqEo_WENyqRCI2WWzy_md5gsbCQBz3egOG3aFSyOn8jeyMxDAHZcx0XzzH1TWkY5BIDnRPXswQaueGg3rVkqulMcgqcrVEBWVv4tIYnNt1KclmnvH4KUn3NV2SikeAkwU0N8w2Png4ByDsN80qHolSPA3iX8vWPNH281a72BktpFDl1cCIqp_8C5qUM2C6g",
    href: "/contact#consultation",
    action: "Explore developments",
    icon: Building2,
  },
  {
    number: "02",
    label: "Management",
    title: "Property Management",
    description: "Tailored support for property owners, including tenant leasing, grounds upkeep, transparent digital statements, and scheduled preventative audits.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmufp6ktY0Kv_29ZqiojTDQvuRJxV3P6wezdNfnpwlCu_dBHaPkbLFqYDtMq-xm75X8NR3GFD-fDBGgATQ2K5a2Y0q9E2W4yV46_SYjvoM4-DoG_mGs6fn_43UEQ1ZldxMfRUS7FvM41FGm-C4UblhL6_AguJ9EYY88B2RDUnrVaCiW3AgRGhJrZneBIvdmGLoaaz-wmYCEO7oD5ZRLyzydTrks4vsBjddYPszfPcUpHVLDHkwMrVv2RMHMLB01iOvBA",
    href: "/contact#consultation",
    action: "Management concierge",
    icon: KeyRound,
  },
  {
    number: "03",
    label: "Investment",
    title: "Investment & Value Enhancement",
    description: "Strategic acquisition guidance, portfolio planning, and clear evaluation of property opportunities across prime Colombo and Western Province locations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYk_Zu2tbLITcWE-L77eX9Y-QWef0RLy1oqOJQ4_G2QuSaC-zU0p3KIAlUVlO9mFX26jsK_Jb2VUYpTFTfHBhwV6jUKg1nkZYnR39h56HJNPQPV4ZqF2JMjjvUzzOqg-N3FUIDoGn8ngGYPbDualOJzc7pqvjc59XBfSVNN-URwtRwX1NTqNwA9nwjnFvB8obBzU-w22r6p6mIupqPDDKBMVbBev6_PXoPSDHrtpgzI6cGY8dbOnAx4tg8000u4-HHoA",
    href: "/contact#consultation",
    action: "Investment advisory",
    icon: ChartNoAxesCombined,
  },
  {
    number: "04",
    label: "Sales & rentals",
    title: "Property Sales & Rentals",
    description: "Access selected homes, prime residential plots and curated leasing opportunities, with clear support from property search through handover.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbpSMCSLXoWTDcJY1u8i8fQ5N2PuBWk0TGJogI8xkFwc-KVftqeO8QdL9VbDyKQpZ9BoCaRrsZeP2gBBc5tEq3OSv_Bgjmk0q_fxR_DAj6D0uK6YpQQfKLxpNqgIUG47328_VZYqydoLhZSXchQEnNTgAVkRITyGDdPBE7KniBgyQs5Bb6lRR85fx75N5FS5ZKeGk9NBsNFd3q2H_RblGgYgCLf2B3UFo9i2bqOcCCHJh7DiK17HVRyu3M3TMSiIlJfg",
    href: "#curated-portfolio",
    action: "Browse sales & leases",
    icon: Handshake,
  },
  {
    number: "05",
    label: "Legal & escrow",
    title: "Property Support & Professional Services",
    description: "Coordinated title review, cadastral registration guidance, consular power-of-attorney support and cross-border transaction coordination.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV8tkYbceW88dDAjmcUH_ZAFXqt7TrYH1rl-KPIsv5MVF8m9out_oC8Wm8y6Ev8-tkyF3v6yxL4NEhisau_RndaxptHebHZdscvN7pgrZi_jSlEeVgNZ78WLc30Z6gyk1t162mog4eyQbpO_csRDwPpjXblHCGnG7SmmLZNn423N9J-hEf09hX94olKNiHL0k0pA_zzRb_ZpttGgeS5tG0sQV-OduDpdC21qF9wsxK8Z8_maFFSda8-vw5J9edoTV41g",
    href: "/contact#consultation",
    action: "Legal & escrow advisory",
    icon: Scale,
  },
];

export default function ServicePillars() {
  return (
    <section className="bg-paper py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-terracotta">Institutional expertise</p>
          <h2 className="mt-3 font-display text-3xl font-normal leading-tight tracking-[-0.025em] text-navy sm:text-[42px]">
            Five Strategic Pillars of Keyland Governance
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Designed to bridge cross-border diaspora investors and local landholders with careful, transparent property stewardship.
          </p>
        </div>
        <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {pillars.map(({ number, label, title, description, image, href, action, icon: Icon }, index) => (
            <article
              key={number}
              className="group flex min-h-[410px] flex-col overflow-hidden border border-[#dce5dc] bg-[#f7f8f5] transition-shadow duration-300 hover:shadow-card"
            >
              <div className="relative h-48 shrink-0 overflow-hidden bg-[#dce5dc]">
                <img
                  src={image}
                  alt={title}
                  loading={index > 1 ? "lazy" : "eager"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052719]/60 via-transparent to-[#052719]/5" />
                <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center border border-white/45 bg-[#052719]/30 text-white backdrop-blur-sm">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span className="absolute bottom-4 right-5 text-[9px] font-medium tracking-[0.16em] text-white/85">
                  {number}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">
                  {label}
                </p>
                <h3 className="mt-3 font-display text-[23px] font-normal leading-snug text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-muted">
                  {description}
                </p>
                <a
                  href={href}
                  className="mt-auto inline-flex w-fit items-center gap-2 border-b border-transparent pt-6 text-[9px] font-medium uppercase tracking-[0.14em] text-terracotta transition-colors group-hover:border-terracotta"
                >
                  {action}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
