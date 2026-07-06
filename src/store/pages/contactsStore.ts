import { contactsStoreType } from "@/types";
import { create } from "zustand";

const useContactsStore = create<contactsStoreType>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  contacts: { data: [] },
  setContacts: (newContacts) => set({ contacts: newContacts }),
  popUp: { modify: false, remove: false, id: null },
  setPopUp: (popUp) => set({ popUp }),
}));

export default useContactsStore;
