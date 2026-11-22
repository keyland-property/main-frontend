import { useState } from "react";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";
import type { PortfolioListing } from "../api/contentApi";
import SectionHeading from "./SectionHeading";

// Restore when the portfolio API is ready:
// import { useEffect } from "react";
// import { getPortfolioContent } from "../api/contentApi";

const filters = ["All properties", "For Sale", "Under Management", "For Development"] as const;
const currencyFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

const sampleItems: PortfolioListing[] = [
  {
    id: "sample-colombo-villa",
    name: "Colombo Garden Residence",
    location: "Colombo 07 · Colombo South",
    status: "For Sale",
    badge: "Sample listing",
    description: "A spacious city residence close to Colombo's leading schools, parks, and business districts.",
    image: "/keyland-hero-residence.png",
    prices: { LKR: 125_000_000, USD: 405_000, CAD: 550_000 },
    priceCaption: "Illustrative guide price",
    compliance: "Sample data",
    specs: { beds: "4 Bed", baths: "3 Bath", perches: "18 Perches", sqft: "3,600 SqFt", last: "Residence", lastIcon: "roof" },
    cta: "Enquire",
    ctaIcon: "calendar",
    priority: 1,
    region: "Colombo South",
    type: "Villa",
  },
  {
    id: "sample-kotte-residence",
    name: "Kotte Lakefront Residence",
    location: "Ethul Kotte · Kotte",
    status: "Under Management",
    badge: "Sample listing",
    description: "A contemporary managed home with green views and convenient access to Colombo.",
    image: "/keyland-hero-residence.png",
    prices: { LKR: 92_000_000, USD: 298_000, CAD: 405_000 },
    priceCaption: "Illustrative guide price",
    compliance: "Sample data",
    specs: { beds: "3 Bed", baths: "3 Bath", perches: "8 Perches", sqft: "2,400 SqFt", last: "Managed", lastIcon: "waves" },
    cta: "Enquire",
    ctaIcon: "calendar",
    priority: 2,
    region: "Kotte",
    type: "Apartment",
  },
  {
    id: "sample-gothatuwa-land",
    name: "Gothatuwa Development Land",
    location: "Gothatuwa · Colombo South",
    status: "For Development",
    badge: "Sample listing",
    description: "A development opportunity near established residential and commercial amenities.",
    image: "/keyland-hero-residence.png",
    prices: { LKR: 61_600_000, USD: 204_000, CAD: 275_000 },
    priceCaption: "Illustrative guide price",
    compliance: "Sample data",
    specs: { perches: "22 Perches", sqft: "9,600 SqFt", last: "Development land", lastIcon: "building" },
    cta: "Enquire",
    ctaIcon: "building",
    priority: 3,
    region: "Gothatuwa",
    type: "Commercial Land",
  },
];

export default function RepresentativePortfolio() {
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);

  // Restore backend integration when portfolio data is ready:
  // const [items, setItems] = useState<PortfolioListing[]>([]);
  // useEffect(() => {
  //   getPortfolioContent().then(setItems).catch((error: Error) => {
  //     console.error("Could not load portfolio listings.", error);
  //   });
  // }, []);

  const visibleItems = sampleItems.filter((item) => activeFilter === filters[0] || item.status === activeFilter);

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

        {visibleItems.length ? (
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
