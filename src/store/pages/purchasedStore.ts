import { purchasedStoreType } from "@/types";
import { create } from "zustand";

const usePurchasedStore = create<purchasedStoreType>((set) => ({
  purchaseds: { data: [] },
  setPurchaseds: (newPurchased) => set({ purchaseds: newPurchased }),
  loading: true,
  setLoading: (loading) => set({ loading }),
  popUp: { modify: false, remove: false, id: null },
  setPopUp: (popUp) => set({ popUp }),
}));

export default usePurchasedStore;
