import { Handshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const partners = [
  { mark: "CBC", name: "Commercial Bank", color: "text-[#164c90]" },
  { mark: "HNB", name: "HNB Private Wealth", color: "text-[#9a701e]" },
  { mark: "KADI", name: "KADI Canada", color: "text-navy" },
  { mark: "CIOB", name: "CIOB Sri Lanka", color: "text-emerald-700" },
  { mark: "SLIA", name: "Sri Lanka Institute of Architects", color: "text-[#29354a]" },
  { mark: "RICS", name: "RICS Chartered", color: "text-[#29354a]" },
];

export default function PartnersSection() {
  return (
    <section id="alliance" className="overflow-hidden border-y border-[#dce5dc] bg-[#f7f8f5] py-20 text-navy sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 text-center sm:px-8 lg:px-14">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-terracotta">
          <Handshake size={14} />
          Strategic real estate & financial alliance
        </div>
        <SectionHeading
          eyebrow=""
          title="Institutional Partners & Banking Consortia"
          description="Collaborating with tier-one banks, premier architectural firms, escrow partners, and global real estate advisors across Sri Lanka and Canada."
          center
        />
      </div>
      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-[#f7f8f5] via-[#f7f8f5]/90 to-transparent sm:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-[#f7f8f5] via-[#f7f8f5]/90 to-transparent sm:w-40" />

        <div className="flex w-max gap-4 px-4 animate-partner-scroll hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.mark}-${index}`}
              aria-hidden={index >= partners.length}
              className="flex h-[76px] w-[176px] shrink-0 items-center justify-center border-y border-[#dce5dc] bg-[#f7f8f5] sm:h-[84px] sm:w-[200px]"
            >
              <span
                role="img"
                aria-label={partner.name}
                className={`font-display text-2xl font-normal tracking-[0.08em] ${partner.color}`}
              >
                {partner.mark}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 text-[9px] uppercase tracking-[0.11em] text-muted sm:px-8 lg:px-14">
        <span>FINTRAC & Central Bank of Sri Lanka (CBSL) compliant institutional protocols</span>
        <span className="flex gap-5"><a href="/contact#consultation" className="transition-colors hover:text-terracotta">Direct Custodian Banking</a><a href="/contact#consultation" className="transition-colors hover:text-terracotta">Bilateral Legal Assurance</a></span>
      </div>
    </section>
  );
}
