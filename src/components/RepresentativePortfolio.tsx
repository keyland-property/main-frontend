import { useEffect, useState } from "react";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";
import { getPortfolioContent, type PortfolioListing } from "../api/contentApi";
import SectionHeading from "./SectionHeading";

const filters = ["All properties", "For Sale", "Under Management", "For Development"] as const;
const currencyFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export default function RepresentativePortfolio() {
  const [items, setItems] = useState<PortfolioListing[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPortfolioContent()
      .then(setItems)
      .catch(() => setError("Portfolio listings are temporarily unavailable."));
  }, []);

  const visibleItems = items.filter((item) => activeFilter === filters[0] || item.status === activeFilter);

  return (
    <section id="curated-portfolio" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Representative portfolio"
            title="Curated Prime Acquisitions"
            description="A sample of prime holdings managed and delivered through our services across Colombo and the Western Province."
          />
          <div className="flex flex-wrap gap-1.5 border border-[#dce5dc] bg-[#edf2ec] p-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-2.5 py-2 text-xs font-semibold transition-colors sm:px-3 ${
                  activeFilter === filter ? "bg-navy text-white" : "text-slate-600 hover:text-navy"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {error ? (
          <p role="alert" className="mt-7 border border-red-200 bg-white p-5 text-sm text-red-700">{error}</p>
        ) : visibleItems.length ? (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visibleItems.map((item) => (
              <article key={item.id} className="group flex flex-col border border-slate-200 bg-white transition-shadow hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-2.5 top-2.5 flex flex-col gap-1">
                    <span className="w-fit bg-white/95 px-2 py-1 text-xs font-bold uppercase tracking-wide text-navy">{item.status}</span>
                    <span className="inline-flex items-center gap-1 bg-emerald-950/85 px-2 py-1 text-xs font-semibold text-emerald-100">
                      <BadgeCheck size={10} /> {item.badge}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <p className="inline-flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.12em] text-terracotta">
                    <MapPin size={10} /> {item.location}
                  </p>
                  <h3 className="mt-2 font-display text-[20px] font-normal leading-tight text-navy">{item.name}</h3>
                  <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                    <div>
                      <p className="text-xs text-slate-500">{item.priceCaption}</p>
                      <p className="mt-0.5 text-base font-bold text-navy">LKR {currencyFormatter.format(item.prices.LKR)}</p>
                    </div>
                    <a href="/contact#consultation" aria-label={`Enquire about ${item.name}`} className="grid h-8 w-8 shrink-0 place-items-center bg-[#f7f8f5] text-navy transition-colors hover:bg-[#edf2ec]">
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-7 border border-[#dce5dc] bg-[#f7f8f5] p-6 text-center text-sm text-slate-600">
            No properties are listed for this category at the moment.
          </p>
        )}
        <div className="mt-6 text-center">
          <a href="/portfolio" className="inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.16em] text-navy transition-colors hover:bg-[#edf2ec]">
            Explore all properties <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
