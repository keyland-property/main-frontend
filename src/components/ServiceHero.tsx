import { Building2, FileCheck2, Landmark, ShieldCheck } from "lucide-react";
import PageHero from "./PageHero";

const assurances = [
  { icon: FileCheck2, title: "100%", detail: "Clear deeds guarantee" },
  { icon: ShieldCheck, title: "Escrow", detail: "CAD / LKR / USD custody" },
  { icon: Building2, title: "Turnkey", detail: "Architectural mastery" },
  { icon: Landmark, title: "250+", detail: "Managed prime assets" },
];

export default function ServiceHero() {
  return (
    <>
      {/* <aside
        aria-label="Institutional standards"
        className="border-b border-[#dce5dc] bg-[#edf2ec] px-5 py-3 text-muted sm:px-8 lg:px-14"
      >
        <div className="mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-x-8 gap-y-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck size={14} className="text-gold" /> Cadastral title deed review
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
            <span className="inline-flex items-center gap-2">
              <Landmark size={14} className="text-gold" /> Toronto institutional escrow custody
            </span>
          </div>
          <span className="inline-flex items-center gap-2 font-medium text-terracotta">
            CBSL inward investment account compliant
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
        </div>
      </aside> */}

      <PageHero
        id="services"
        eyebrow="Comprehensive real estate solutions"
        title="Thoughtful property services, from first step to long-term stewardship."
        description="From architectural development and property management to investment guidance and cross-border support, our team brings clarity to every stage of your property journey."
        actionLabel="Discuss your requirements"
      />

      <section aria-label="Keyland service assurances" className="border-b border-[#dce5dc] bg-[#edf2ec] px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-[#dce5dc] md:grid-cols-4">
          {assurances.map(({ icon: Icon, title, detail }) => (
            <div key={detail} className="flex items-center gap-3 bg-[#f7f8f5] p-4 sm:p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#edf2ec] text-terracotta">
                <Icon size={18} />
              </span>
              <span>
                <span className="block font-display text-lg font-normal leading-tight text-navy">{title}</span>
                <span className="mt-1 block text-xs leading-4 text-muted sm:text-sm">{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
