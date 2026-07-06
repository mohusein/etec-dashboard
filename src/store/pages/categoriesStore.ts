import { categoriesStoreType } from "@/types";
import { create } from "zustand";

const useCategorieStore = create<categoriesStoreType>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  categorie: "",
  setCategorie: (categorie) => set({ categorie }),
  categories: { data: [] },
  setCategories: (newCategories) => set({ categories: newCategories }),
  popUp: { modify: false, remove: false, id: null },
  setPopUp: (popUp) => set({ popUp }),
}));

export default useCategorieStore;
