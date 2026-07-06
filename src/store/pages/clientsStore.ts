import { clientsStoreType } from "@/types";
import { create } from "zustand";

const useClientsStore = create<clientsStoreType>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  clients: { data: [] },
  setClients: (newClients) => set({ clients: newClients }),
  popUp: { modify: false, remove: false, id: null },
  setPopUp: (popUp) => set({ popUp }),
}));

export default useClientsStore;
