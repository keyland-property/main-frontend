export interface AboutContent {
  hero: { eyebrow: string; title: string; description: string; imageUrl: string };
  stats: { value: string; label: string; note: string }[];
  intro: { eyebrow: string; title: string; description: string; imageUrl: string; highlights: string[] };
  vision: { title: string; vision: string; mission: string; points: string[] };
  values: { title: string; description: string }[];
  valuesTitle: string;
  alliance: {
    title: string;
    description: string;
    quote: string;
    features: { title: string; description: string }[];
  };
}

export interface PublicReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  featured: boolean;
}

export interface PortfolioListing {
  id: string;
  name: string;
  location: string;
  status: "For Sale" | "Under Management" | "For Development";
  badge: string;
  description: string;
  image: string;
  prices: { LKR: number; USD: number; CAD: number };
  priceCaption: string;
  compliance: string;
  specs: { beds?: string; baths?: string; perches: string; sqft: string; last: string; lastIcon: "roof" | "waves" | "building" | "trees" };
  cta: string;
  ctaIcon: "calendar" | "download" | "building" | "shield";
  priority: number;
  region: "Colombo South" | "Kotte" | "Gothatuwa" | "Gampaha";
  type: "Villa" | "Apartment" | "Commercial Land" | "Residential Land";
}

export interface ConsultationRequest {
  name: string;
  email: string;
  phone: string;
  office: string;
  interest: string;
  message: string;
}

const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost:4000/api").replace(/\/+$/, "");

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => null) as { error?: string } | null;
    throw new Error(body?.error || `Content request failed (${response.status}).`);
  }
  return response.json() as Promise<T>;
}

export const getAboutContent = () => request<AboutContent>("/content/about");
export const getPortfolioContent = () => request<PortfolioListing[]>("/content/portfolio");
export const getPublicReviews = () => request<PublicReview[]>("/content/reviews");

export function submitConsultation(data: ConsultationRequest) {
  return request<{ id: string; message: string }>("/contacts", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
