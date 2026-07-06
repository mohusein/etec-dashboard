import { contactsTypes } from "@/types";
import axios from "axios";
import { createCachedApi } from "@/util/axiosCache";

const { instance: api, clearCache } = createCachedApi();

/*---> Clear the cache when needed <---*/
export const refreshCache = () => clearCache();

/*---> Fetch all contacts <---*/
export const fetchAllContacts = async (): Promise<contactsTypes> => {
  return api
    .cachedGet<contactsTypes>(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error fetch all contacts:", error?.response?.data?.message);
      return { data: [] } as contactsTypes;
    });
};

/*---> Remove a contact <---*/
export const removeContact = async (contactId: string | null) => {
  return axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/${contactId}`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error delete a contact:", error?.response?.data?.message);
    });
};
