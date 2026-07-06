import { productsStoreType } from "@/types";
import { create } from "zustand";

const useProductsStore = create<productsStoreType>((set) => ({
  product: {
    name: "",
    description: "",
    price: null,
    pictures: [],
    categoryId: "",
  },
  setProduct: (updater) =>
    set((state) => ({
      product:
        typeof updater === "function" ? updater(state.product) : { ...state.product, ...updater },
    })),
  products: { data: [] },
  setProducts: (newProducts) => set({ products: newProducts }),
  orders: { data: [] },
  setOrders: (newOrders) => set({ orders: newOrders }),
  categories: { data: [] },
  setCategories: (newCategories) => set({ categories: newCategories }),
  picture: "",
  setPicture: (newPicture) => set({ picture: newPicture }),
  loading: { newProduct: false, showProducts: true },
  setLoading: (loading) =>
    set((state) => ({ loading: { ...state.loading, ...loading } })),
  popUp: { modify: false, remove: false, id: null },
  setPopUp: (popUp) => set({ popUp }),
}));

export default useProductsStore;
