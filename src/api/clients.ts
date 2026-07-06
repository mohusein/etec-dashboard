import { accountTypes } from "@/types";
import axios from "axios";
import { createCachedApi } from "@/util/axiosCache";

const { instance: api, clearCache } = createCachedApi();

/*---> Clear the cache when needed <---*/
export const refreshCache = () => clearCache();

/*---> Fetch all clients <---*/
export const fetchAllClients = async (): Promise<accountTypes> => {
  return api
    .cachedGet<accountTypes>(`${process.env.NEXT_PUBLIC_API_URL}/api/clients`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error fetch all clients:", error?.response?.data?.message);
      return { data: [] } as accountTypes;
    });
};

/*---> Remove a client <---*/
export const removeClient = async (
  clientId: string | null,
): Promise<{ message: string }> => {
  return axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/client/${clientId}`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error remove a clients", error?.response?.data?.message);
    });
};
