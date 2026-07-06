import { dashboardStoreType } from "@/types";
import { create } from "zustand";

const useDashboardStore = create<dashboardStoreType>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  products: { data: [] },
  setProducts: (newProducts) => set({ products: newProducts }),
  orders: { data: [] },
  setOrders: (newOrders) => set({ orders: newOrders }),
  purchased: { data: [] },
  setPurchased: (newPurchased) => set({ purchased: newPurchased }),
  clients: { data: [] },
  setClients: (newClients) => set({ clients: newClients }),
}));

export default useDashboardStore;
