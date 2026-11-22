import { getPortfolioContent, type PortfolioListing } from "./contentApi";

export type PropertyCategory = "Residence" | "Penthouse" | "Land";
export type PropertyStatus = "For Sale" | "Under Management" | "For Development";

export interface Property {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  status: PropertyStatus;
  category: PropertyCategory;
  priceLkr: number;
  price: string;
  priceNote: string;
  tag: string;
  specs: { primary: string; secondary: string; tertiary: string };
  foreignPrice: string;
  foreignNote: string;
}

export interface PropertyFilters {
  location: string;
  category: string;
  budget: string;
}

const currencyFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function toProperty(item: PortfolioListing): Property {
  const category: PropertyCategory = item.type === "Villa" ? "Residence" : item.type === "Apartment" ? "Penthouse" : "Land";
  return {
    id: item.id,
    name: item.name,
    location: item.location,
    description: item.description,
    image: item.image,
    status: item.status,
    category,
    priceLkr: item.prices.LKR,
    price: `LKR ${currencyFormatter.format(item.prices.LKR)}`,
    priceNote: item.priceCaption,
    tag: item.badge,
    specs: {
      primary: item.specs.beds || item.specs.perches,
      secondary: item.specs.sqft,
      tertiary: item.compliance,
    },
    foreignPrice: `USD ${currencyFormatter.format(item.prices.USD)} · CAD ${currencyFormatter.format(item.prices.CAD)}`,
    foreignNote: item.compliance,
  };
}

export async function getFeaturedProperties(
  filters: PropertyFilters,
  status: string,
): Promise<Property[]> {
  const properties = (await getPortfolioContent()).map(toProperty);
  const location = filters.location.toLowerCase();
  return properties.filter((property) => {
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
