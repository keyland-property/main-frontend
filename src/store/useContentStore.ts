import { create } from "zustand";
import { getAboutContent, getPortfolioContent, type AboutContent, type PortfolioListing } from "../api/contentApi";

interface ContentState {
  about: AboutContent | null;
  portfolio: PortfolioListing[];
  portfolioLoaded: boolean;
  loadAbout: () => Promise<AboutContent>;
  loadPortfolio: () => Promise<PortfolioListing[]>;
}

export const useContentStore = create<ContentState>((set) => ({
  about: null,
  portfolio: [],
  portfolioLoaded: false,
  loadAbout: async () => {
    const about = await getAboutContent();
    set({ about });
    return about;
  },
  loadPortfolio: async () => {
    const portfolio = await getPortfolioContent();
    set({ portfolio, portfolioLoaded: true });
    return portfolio;
  },
}));
