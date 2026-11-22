import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Property, PropertyFilters } from "../api/propertyApi";
import { setPropertyStatus, usePropertyStore } from "../store/usePropertyStore";
import PropertyCard from "./PropertyCard";
import SectionHeading from "./SectionHeading";

const statuses = ["All holdings", "For Sale", "Under Management", "For Development"];

const sampleProperties: Property[] = [
  {
    id: "sample-colombo-residence",
    name: "Colombo Garden Residence",
    location: "Colombo 07",
    description: "A spacious city residence close to Colombo's leading schools, parks, and business districts.",
    image: "/keyland-hero-residence.png",
    status: "For Sale",
    category: "Residence",
    priceLkr: 125_000_000,
    price: "LKR 125,000,000",
    priceNote: "Guide price",
    tag: "Sample listing",
    specs: { primary: "4 bedrooms", secondary: "18 perches", tertiary: "Title review available" },
    foreignPrice: "USD 405,000 · CAD 550,000",
    foreignNote: "Illustrative pricing",
  },
  {
    id: "sample-kotte-penthouse",
    name: "Kotte Lakefront Penthouse",
    location: "Kotte",
    description: "A contemporary managed residence with open views and convenient access to the city.",
    image: "/keyland-hero-residence.png",
    status: "Under Management",
    category: "Penthouse",
    priceLkr: 92_000_000,
    price: "LKR 92,000,000",
    priceNote: "Guide price",
    tag: "Sample listing",
    specs: { primary: "3 bedrooms", secondary: "2,100 sqft", tertiary: "Managed property" },
    foreignPrice: "USD 298,000 · CAD 405,000",
    foreignNote: "Illustrative pricing",
  },
  {
    id: "sample-gampaha-land",
    name: "Gampaha Development Land",
    location: "Gampaha",
    description: "A development opportunity with convenient access to the expressway and regional amenities.",
    image: "/keyland-hero-residence.png",
    status: "For Development",
    category: "Land",
    priceLkr: 42_000_000,
    price: "LKR 42,000,000",
    priceNote: "Guide price",
    tag: "Sample listing",
    specs: { primary: "Residential land", secondary: "40 perches", tertiary: "Development opportunity" },
    foreignPrice: "USD 136,000 · CAD 185,000",
    foreignNote: "Illustrative pricing",
  },
];

function filterSampleProperties(filters: PropertyFilters, status: string): Property[] {
  const location = filters.location.toLowerCase();
  return sampleProperties.filter((property) => {
    const matchesLocation =
      location === "all prime locations" ||
      property.location.toLowerCase().includes(location);
    const matchesCategory =
      filters.category === "Any property type" ||
      property.category.toLowerCase() === filters.category.toLowerCase();
    const matchesBudget =
      filters.budget === "Any investment" ||
      (filters.budget === "Under LKR 50M" && property.priceLkr < 50_000_000) ||
      (filters.budget === "LKR 50M – 100M" &&
        property.priceLkr >= 50_000_000 &&
        property.priceLkr <= 100_000_000) ||
      (filters.budget === "LKR 100M+" && property.priceLkr > 100_000_000);
    const matchesStatus = status === "All holdings" || property.status === status;
    return matchesLocation && matchesCategory && matchesBudget && matchesStatus;
  });
}

export default function FeaturedProperties() {
  const { filters, status } = usePropertyStore();
  const properties = useMemo(() => filterSampleProperties(filters, status), [filters, status]);

  // Backend integration, restore when the portfolio API is ready:
  // useEffect(() => {
  //   let active = true;
  //   getFeaturedProperties(filters, status)
  //     .then((results) => {
  //       if (active) setProperties(results);
  //     })
  //     .catch((error: Error) => {
  //       console.error("Could not load featured properties.", error);
  //     });
  //   return () => {
  //     active = false;
  //   };
  // }, [filters, status]);

  return (
    <section id="portfolio" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="A considered selection" title="Places to call your own" />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {statuses.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={status === item}
                onClick={() => setPropertyStatus(item)}
                className={`border-b py-2 text-[9px] font-medium uppercase tracking-[0.13em] transition-colors ${
                  status === item
                    ? "border-gold text-navy"
                    : "border-transparent text-[#68756c] hover:border-[#dce5dc] hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
            <a href="/portfolio" className="group inline-flex items-center gap-1 px-1 text-[9px] font-medium uppercase tracking-[0.13em] text-navy">
              View full portfolio <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {properties.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        ) : (
          <div className="mt-10 border border-[#dce5dc] bg-[#f7f8f5] px-6 py-16 text-center">
            <h3 className="font-display text-2xl text-navy">No properties match those filters</h3>
            <p className="mt-2 text-sm text-slate-500">Try a different location, property type, or investment scope.</p>
            <button
              type="button"
              onClick={() => {
                setPropertyStatus("All holdings");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-5 border border-gold px-5 py-3 text-[9px] font-medium uppercase tracking-[0.15em] text-navy hover:bg-[#edf2ec]"
            >
              Browse all properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
