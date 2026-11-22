import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownUp,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  Check,
  Download,
  Filter,
  Heart,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Trees,
  Waves,
} from "lucide-react";
import Footer from "../components/Footer";
import PageCta from "../components/PageCta";
import PageHero from "../components/PageHero";
import type { PortfolioListing } from "../api/contentApi";
import { useContentStore } from "../store/useContentStore";

type ListingStatus = "For Sale" | "Under Management" | "For Development";
type Currency = "LKR" | "USD" | "CAD";
type AreaUnit = "Perches" | "SqFt";
type SortOption = "Institutional Priority" | "Price: Low to High" | "Price: High to Low";

type Listing = PortfolioListing;

const fallbackListings: Listing[] = [
  {
    id: "KP-COL-489",
    name: "The Nedimala Colonial Villa",
    location: "Nedimala, Dehiwala · Colombo South",
    status: "For Sale",
    badge: "Bim Saviya 1st Class",
    description: "Carefully restored architectural heirloom offering lush private garden, minutes from Galle Road and Colombo municipal bounds.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfoL84MsgOn0zObW7nZ_2yTdiCOuUap0G5GaO0Y56FfRfLwA5U3Cl0IJzwKYt993Zm89YF4tkl8e-8mnWw7HG9Ec-y_WnGju5IkYgX_uFA5ny5Mec9GO_9XPmz4i9aK3QL4YTBee93A3i_ViKYpxVuSTihDhAX8AHUcl70OyVrAYYCc1lXLMWcgj8Cj-hdJ_dQMCVvSpzo4hlXqDBHsJAqSW0pJH2cThWbeySlVnXkW_grvytRTzjL",
    prices: { LKR: 92_000_000, USD: 305_000, CAD: 410_000 },
    priceCaption: "Acquisition consideration",
    compliance: "Deeds clear & audited",
    specs: { beds: "4 Bed", baths: "4 Bath", perches: "14 Perches", sqft: "3,800 SqFt", last: "Built-up", lastIcon: "roof" },
    cta: "Schedule Private Tour",
    ctaIcon: "calendar",
    priority: 1,
    region: "Colombo South",
    type: "Villa",
  },
  {
    id: "KP-KOT-218",
    name: "Lakeview Residencies",
    location: "Ethul Kotte · Diyawanna Sanctuary Frontage",
    status: "Under Management",
    badge: "8.4% Net Yield",
    description: "Turnkey diplomatic rental asset, fully tenanted by foreign multilateral personnel with quarterly audited yield escrow.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyFfYiGQsrIxq0l0pmG_QqXH6-8kH75fxthz-6P9Kp2AiuwTTAhiLXA0b_TY-4sRnxLUn2nKA-Y4QVoSTL4O7zw5gAF8PtYIZJ1kNxWuD9Hz6gq2eXZbL7ITOH_he7gWwzReFGGSNR60zqxasclK_xhqShqOcYkPRmSjmusg9Lx415L9Q4wQFRmoiLQKQoKN_tHWKJ0wzwsBTJpO7ZuDYMS6UjcEfjGnhjdAhoyUZhlGk2dUJIX9CR",
    prices: { LKR: 76_000_000, USD: 252_000, CAD: 340_000 },
    priceCaption: "Turnkey investment consideration",
    compliance: "Passive cash flow",
    specs: { beds: "3 Bed", baths: "3 Bath", perches: "6 Perches", sqft: "2,400 SqFt", last: "In situ", lastIcon: "waves" },
    cta: "Investment Deck",
    ctaIcon: "download",
    priority: 2,
    region: "Kotte",
    type: "Apartment",
  },
  {
    id: "KP-GOT-702",
    name: "Horizon Commercial Enclave",
    location: "Gothatuwa New Town · Main Artery Frontage",
    status: "For Development",
    badge: "Approved COC · Commercial",
    description: "Prime bareland frontage ideal for multi-storey logistics hub, medical diagnostic centre, or private institutional campus.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjKFhDc-hDaGEGeuYR3_-2960lx59WfkUx_xlVj8xo1t5Xgm4UNop5wYjy7mG6wTK1KPr4h3zjDhzp9TXCuowN8Xj4L_haHGz5gzmxabpcd0x4mVqWXmvudaxKxoo3D1kIQ9VAyLs2EWhRlJVld_I5N7fyPNZhPzIXS6LFf3Jp4Iio9QYVLmP7dbwzDLlUWVbxx1NDruDziF7XIikHTyIMRhnKkNzrFlKYc19bPw4JSqw3hOZ015RV",
    prices: { LKR: 61_600_000, USD: 204_000, CAD: 275_000 },
    priceCaption: "Perch rate: LKR 2,800,000",
    compliance: "Certified survey plan",
    specs: { perches: "22 Perches", sqft: "9,600 SqFt", last: "Mixed commercial", lastIcon: "building" },
    cta: "Developer Desk",
    ctaIcon: "building",
    priority: 3,
    region: "Gothatuwa",
    type: "Commercial Land",
  },
  {
    id: "KP-GMP-104",
    name: "Naiwala Agro-Eco Estate Plots",
    location: "Naiwala, Gampaha District · Near Highway",
    status: "For Sale",
    badge: "Gated community",
    description: "Gated agrarian and luxury retreat subdivision with deep artesian wells, fertile soil, and ready-to-build country homes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcUznROsO5qIqVhjWy1t8YTzCMTfsgPWdC4BH0H9hJXCsoZnW3opA23kKYlswl2pkfmkqTaFUxwC9Pm8LPoOJ3-ReJAnNYxivO9OFCZlkYQ9JP0qoQikN13vvG3WLzW2kJhbllHJ4Kp-32l8DnHZ6f7-KYFAA2SLVHU7GkZx6jhRsNBTUSQJLVFg7AAfUt5GALIC2sGGicPQowJsszkTrnKbQpxawEPWlroTO8KcxAthy3a77dh1sZ",
    prices: { LKR: 34_000_000, USD: 113_000, CAD: 152_000 },
    priceCaption: "Perch rate: LKR 850,000",
    compliance: "Freehold partition title",
    specs: { perches: "40 Perches", sqft: "10,890 SqFt", last: "8 mins to E04", lastIcon: "trees" },
    cta: "Reserve Plot",
    ctaIcon: "shield",
    priority: 4,
    region: "Gampaha",
    type: "Residential Land",
  },
];

const categories: { label: string; status?: ListingStatus }[] = [
  { label: "All Properties" },
  { label: "For Sale", status: "For Sale" },
  { label: "Under Management", status: "Under Management" },
  { label: "For Development", status: "For Development" },
];

const currencyFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function listingPrice(listing: Listing, currency: Currency) {
  const symbol = currency === "LKR" ? "LKR " : currency === "USD" ? "USD " : "CAD ";
  return `${symbol}${currencyFormatter.format(listing.prices[currency])}`;
}

function SpecIcon({ icon }: { icon: Listing["specs"]["lastIcon"] }) {
  if (icon === "waves") return <Waves size={12} />;
  if (icon === "building") return <Building2 size={12} />;
  if (icon === "trees") return <Trees size={12} />;
  return <Ruler size={12} />;
}

function CtaIcon({ icon }: { icon: Listing["ctaIcon"] }) {
  if (icon === "download") return <Download size={12} />;
  if (icon === "building") return <Building2 size={12} />;
  if (icon === "shield") return <ShieldCheck size={12} />;
  return <CalendarDays size={12} />;
}

export default function PortfolioPage() {
  const portfolio = useContentStore((state) => state.portfolio);
  const portfolioLoaded = useContentStore((state) => state.portfolioLoaded);
  const loadPortfolio = useContentStore((state) => state.loadPortfolio);
  const listings = portfolioLoaded ? portfolio : fallbackListings;
  const [activeStatus, setActiveStatus] = useState<ListingStatus | "All Properties">("All Properties");
  const [location, setLocation] = useState("All Enclaves");
  const [currency, setCurrency] = useState<Currency>("LKR");
  const [areaUnit, setAreaUnit] = useState<AreaUnit>("Perches");
  const [sortBy, setSortBy] = useState<SortOption>("Institutional Priority");
  const [propertyType, setPropertyType] = useState("All types");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    loadPortfolio().catch((error: Error) => {
      console.warn("Could not load portfolio content from the Keyland API; showing the public-site defaults.", error.message);
    });
  }, [loadPortfolio]);

  const visibleListings = useMemo(() => {
    const filtered = listings.filter((listing) => {
      const statusMatch = activeStatus === "All Properties" || listing.status === activeStatus;
      const locationMatch = location === "All Enclaves" || listing.region === location;
      const typeMatch = propertyType === "All types" || listing.type === propertyType;
      return statusMatch && locationMatch && typeMatch;
    });
    return [...filtered].sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.prices[currency] - b.prices[currency];
      if (sortBy === "Price: High to Low") return b.prices[currency] - a.prices[currency];
      return a.priority - b.priority;
    });
  }, [activeStatus, currency, listings, location, propertyType, sortBy]);

  function toggleFavorite(id: string) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <>
      <main id="home" className="bg-paper">
        <PageHero
          id="portfolio"
          eyebrow="Institutional asset desk · Sri Lanka"
          title="A considered portfolio of exceptional properties."
          description="Explore selected residences, development opportunities, and investment properties, supported by careful review and trusted cross-border guidance."
          actionLabel="Explore available properties"
          actionHref="#portfolio-filters"
        />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } }} id="portfolio-filters" aria-label="Portfolio filters" className="sticky top-[var(--portfolio-filter-offset,88px)] z-30 border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur-md">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-3">
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {categories.map(({ label, status }) => {
                  const count = status ? listings.filter((listing) => listing.status === status).length : listings.length;
                  const active = activeStatus === label;
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setActiveStatus(label as ListingStatus | "All Properties")}
                      className={`flex shrink-0 items-center gap-2 border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.1em] transition-colors sm:px-4 ${active ? "border-navy bg-navy text-white" : "border-[#dce5dc] bg-[#f7f8f5] text-slate-600 hover:border-gold"
                        }`}
                    >
                      {label}<span className={`px-1.5 py-0.5 text-xs ${active ? "bg-white/15 text-white" : "bg-slate-200 text-slate-600"}`}>{count}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <label className="flex items-center gap-1.5 border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-500">
                  <MapPin size={12} className="text-terracotta" />
                  <span>Location:</span>
                  <select value={location} onChange={(event) => setLocation(event.target.value)} className="max-w-[190px] border-0 bg-transparent p-0 pr-5 text-sm font-semibold text-navy focus:ring-0">
                    <option value="All Enclaves">All Enclaves (Colombo & Beyond)</option>
                    <option value="Colombo South">Colombo South</option>
                    <option value="Kotte">Ethul Kotte</option>
                    <option value="Gothatuwa">Gothatuwa</option>
                    <option value="Gampaha">Gampaha / Express Corridor</option>
                  </select>
                </label>
                <div className="inline-flex items-center gap-0.5 border border-slate-200 bg-[#f7f8fa] p-1">
                  <span className="px-1 text-xs font-bold uppercase tracking-wide text-slate-500">Currency</span>
                  {(["LKR", "USD", "CAD"] as Currency[]).map((item) => (
                    <button key={item} type="button" aria-pressed={currency === item} onClick={() => setCurrency(item)} className={`px-2.5 py-1 text-xs font-bold ${currency === item ? "bg-gold text-navy shadow-sm" : "text-slate-500 hover:text-navy"}`}>{item}</button>
                  ))}
                </div>
                <div className="inline-flex items-center gap-0.5 border border-slate-200 bg-[#f7f8fa] p-1">
                  {(["Perches", "SqFt"] as AreaUnit[]).map((item) => (
                    <button key={item} type="button" aria-pressed={areaUnit === item} onClick={() => setAreaUnit(item)} className={`px-2 py-1 text-xs font-bold ${areaUnit === item ? "bg-navy text-white" : "text-slate-500 hover:text-navy"}`}>{item}</button>
                  ))}
                </div>
                <button type="button" aria-expanded={showFilters} onClick={() => setShowFilters((value) => !value)} className={`grid h-8 w-8 place-items-center border ${showFilters ? "border-navy bg-navy text-white" : "border-[#dce5dc] text-slate-600 hover:border-gold hover:text-navy"}`} aria-label="Toggle advanced filters">
                  <SlidersHorizontal size={14} />
                </button>
                <label className="ml-auto inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <ArrowDownUp size={12} />
                  Sort by:
                  <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortOption)} className="border-0 bg-transparent p-0 pr-5 text-sm font-semibold text-navy focus:ring-0">
                    <option>Institutional Priority</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </label>
              </div>
              {showFilters && (
                <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-slate-500"><Filter size={12} /> Property type</span>
                  <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} className="border-[#dce5dc] bg-[#f7f8f5] px-3 py-2 text-sm text-navy focus:border-terracotta focus:ring-terracotta">
                    <option>All types</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Commercial Land</option>
                    <option>Residential Land</option>
                  </select>
                  <button type="button" onClick={() => { setActiveStatus("All Properties"); setLocation("All Enclaves"); setPropertyType("All types"); setSortBy("Institutional Priority"); }} className="text-xs font-medium uppercase tracking-[0.12em] text-terracotta underline underline-offset-4">Reset filters</button>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } }} className="bg-paper py-16 sm:py-20">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="mb-8 flex flex-col justify-between gap-3 border-b border-[#dce5dc] pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">The collection</p>
                <h2 className="font-display text-[30px] font-normal text-navy sm:text-[36px]">Available properties</h2>
              </div>
              <p className="text-xs text-muted">
                {visibleListings.length} selected {visibleListings.length === 1 ? "property" : "properties"}
                {favorites.length > 0 ? ` · ${favorites.length} saved` : ""}
              </p>
            </div>

            {visibleListings.length > 0 ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="grid gap-x-8 gap-y-10 xl:grid-cols-2"
              >
                {visibleListings.map((listing) => {
                  const favorited = favorites.includes(listing.id);
                  const area = areaUnit === "Perches" ? listing.specs.perches : listing.specs.sqft;
                  return (
                    <motion.article
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                      }}
                      key={listing.id} className="group grid overflow-hidden border-b border-[#dce5dc] pb-8 md:grid-cols-[0.9fr_1.1fr] md:gap-6">
                      <div className="relative min-h-[250px] overflow-hidden bg-[#dce5dc] md:min-h-[320px]">
                        <img src={listing.image} alt={listing.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                        <span className="absolute left-4 top-4 bg-[#052719]/80 px-3 py-2 text-[8px] font-medium uppercase tracking-[0.15em] text-white">{listing.status}</span>
                        <button type="button" onClick={() => toggleFavorite(listing.id)} aria-label={favorited ? `Remove ${listing.name} from saved properties` : `Save ${listing.name}`} aria-pressed={favorited} className={`absolute right-4 top-4 grid h-9 w-9 place-items-center border border-white/60 bg-[#f7f8f5]/90 transition-colors ${favorited ? "text-rose-600" : "text-slate-600 hover:text-rose-600"}`}>
                          <Heart size={15} fill={favorited ? "currentColor" : "none"} />
                        </button>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#052719]/70 to-transparent px-4 pb-4 pt-12 text-[9px] font-medium uppercase tracking-[0.1em] text-white">
                          <span className="inline-flex items-center gap-1.5"><MapPin size={11} />{listing.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col pt-5 md:pt-1">
                        <p className="inline-flex items-center gap-1.5 text-[8px] font-medium uppercase tracking-[0.15em] text-terracotta"><BadgeCheck size={11} />{listing.badge}</p>
                        <h3 className="mt-3 font-display text-[26px] font-normal leading-tight text-navy">{listing.name}</h3>
                        <p className="mt-3 text-xs leading-6 text-muted">{listing.description}</p>
                        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 border-y border-[#dce5dc] py-4">
                          {listing.specs.beds && <span className="inline-flex items-center gap-2 text-[10px] text-slate-600"><BedDouble size={12} className="text-terracotta" />{listing.specs.beds}</span>}
                          {listing.specs.baths && <span className="inline-flex items-center gap-2 text-[10px] text-slate-600"><Bath size={12} className="text-terracotta" />{listing.specs.baths}</span>}
                          <span className="inline-flex items-center gap-2 text-[10px] text-slate-600"><Ruler size={12} className="text-terracotta" />{area}</span>
                          <span className="inline-flex items-center gap-2 text-[10px] text-slate-600"><SpecIcon icon={listing.specs.lastIcon} />{listing.specs.last}</span>
                        </div>
                        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                          <div>
                            <p className="text-[8px] uppercase tracking-[0.14em] text-muted">{listing.priceCaption}</p>
                            <p className="mt-1 font-display text-xl font-normal text-navy">{listingPrice(listing, currency)}</p>
                          </div>
                          <p className="inline-flex items-center gap-1.5 text-right text-[9px] text-emerald-800"><Check size={11} />{listing.compliance}</p>
                        </div>
                        <div className="mt-auto grid grid-cols-[1fr_auto] gap-3 pt-5">
                          <a href="/contact#consultation" className="group/cta inline-flex min-h-11 items-center justify-between gap-2 bg-gold px-4 py-3 text-[8px] font-medium uppercase tracking-[0.12em] text-navy transition-colors hover:bg-[#c5a04b]">
                            <span className="inline-flex items-center gap-2"><CtaIcon icon={listing.ctaIcon} />{listing.cta}</span>
                            <ArrowRight size={13} className="transition-transform group-hover/cta:translate-x-1" />
                          </a>
                          <a href="tel:+94112688900" aria-label="Call Keyland Properties" className="grid h-11 w-11 place-items-center border border-[#dce5dc] text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy">
                            <Phone size={13} />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              <div className="border border-slate-200 bg-white px-6 py-14 text-center">
                <h3 className="font-display text-2xl text-navy">No matching properties</h3>
                <p className="mt-2 text-base text-slate-500">Adjust your location or property type filters to see more listings.</p>
                <button type="button" onClick={() => { setActiveStatus("All Properties"); setLocation("All Enclaves"); setPropertyType("All types"); }} className="mt-4 border border-gold px-4 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-navy hover:bg-[#edf2ec]">Clear filters</button>
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-500">
              <span>Showing {visibleListings.length} featured listing{visibleListings.length === 1 ? "" : "s"} from the institutional portfolio</span>
              <div className="flex items-center gap-1">
                <button type="button" disabled className="inline-flex items-center gap-1 border border-slate-200 px-2.5 py-1.5 text-slate-400"><ArrowLeft size={10} /> Previous</button>
                <span className="grid h-6 w-6 place-items-center bg-navy font-bold text-white">1</span>
                <span className="px-2 text-slate-400">Featured selection</span>
                <button type="button" disabled className="inline-flex items-center gap-1 border border-slate-200 px-2.5 py-1.5 text-slate-400">Next <ArrowRight size={10} /></button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <PageCta
        eyebrow="Find the right place to begin"
        heading="See an opportunity that feels right?"
        description="Our property team can arrange a private conversation and help you understand the details before you decide."
        buttonLabel="Arrange a private conversation"
      />
      <Footer />
    </>
  );
}
