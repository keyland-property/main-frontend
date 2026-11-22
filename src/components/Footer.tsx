import { ArrowUpRight, MapPin } from "lucide-react";

const columns = [
  {
    title: "Holdings",
    links: [
      { label: "Prime Portfolios", href: "/portfolio" },
      { label: "Colombo City Estates", href: "/portfolio" },
      { label: "Kotte Lakefront", href: "/portfolio" },
      { label: "Development Lands", href: "/portfolio" },
    ],
  },
  {
    title: "Governance & alliance",
    links: [
      { label: "Governance & Trust", href: "/about" },
      { label: "KADI Canada Alliance", href: "/about" },
      { label: "Escrow Services", href: "/about" },
      { label: "Diaspora Advisory", href: "/about" },
    ],
  },
  {
    title: "Colombo office",
    links: [
      { label: "Level 4, Keyland House, Colombo 03", href: "/contact#consultation" },
      { label: "Direct Line: +94 11 234 5678", href: "tel:+94112345678" },
      { label: "Diaspora Desk: +1 647 555 0123", href: "tel:+16475550123" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#052719] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-14 lg:py-16">
        <div>
          <a href="#home" className="font-display text-[25px] font-normal tracking-wide">KEYLAND PROPERTIES</a>
          <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">
            A registered Sri Lankan real estate enterprise specializing in property development, sales, and diaspora asset management.
          </p>
          <p className="mt-5 text-[10px] leading-6 text-white/50">
            Keyland Properties (Pvt) Ltd.<br />
            Registered Real Estate Developer · KADI Canada bilateral partner
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#e2c36d]">{column.title}</h3>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label} className="text-xs leading-5 text-white/65">
                  <a href={link.href} className="transition-colors hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
            {column.title === "Colombo office" && (
              <a href="/contact#consultation" className="mt-5 inline-flex items-center gap-1.5 border border-white/25 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#e2c36d] hover:text-[#e2c36d]">
                <MapPin size={12} /> Toronto advisory desk <ArrowUpRight size={11} />
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 border-t border-white/10 px-5 py-5 text-[9px] uppercase tracking-[0.08em] text-white/45 sm:flex-row sm:px-8 lg:px-14">
        <span>© 2025 Keyland Properties (Pvt) Ltd. Bilateral real estate governance across Sri Lanka.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="/contact#consultation" className="hover:text-gold">Privacy policy</a>
          <a href="/contact#consultation" className="hover:text-gold">Terms of representation</a>
          <span>FINTRAC & bilateral compliance</span>
        </div>
      </div>
    </footer>
  );
}
