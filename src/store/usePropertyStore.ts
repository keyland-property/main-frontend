import { create } from "zustand";
import type { PropertyFilters } from "../api/propertyApi";

interface PropertyState {
  filters: PropertyFilters;
  status: string;
  setFilters: (filters: PropertyFilters) => void;
  setStatus: (status: string) => void;
}

const usePropertyState = create<PropertyState>((set) => ({
  filters: {
    location: "All prime locations",
    category: "Any property type",
    budget: "Any investment",
  },
  status: "All holdings",
  setFilters: (filters) => set({ filters }),
  setStatus: (status) => set({ status }),
}));

export function setPropertyFilters(filters: PropertyFilters) {
  usePropertyState.getState().setFilters(filters);
}

export function setPropertyStatus(status: string) {
  usePropertyState.getState().setStatus(status);
}

export function usePropertyStore() {
  return usePropertyState();
}
