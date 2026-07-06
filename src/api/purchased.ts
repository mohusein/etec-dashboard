import { ordersTypes } from "@/types";
import axios from "axios";
import { createCachedApi } from "@/util/axiosCache";

const { instance: api, clearCache } = createCachedApi();

/*---> Clear the cache when needed <---*/
export const refreshCache = () => clearCache();

/*---> Fetch all purchased <---*/
export const fetchAllPurchased = async (): Promise<ordersTypes> => {
  return api
    .cachedGet<ordersTypes>(`${process.env.NEXT_PUBLIC_API_URL}/api/purchaseds`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error fetch all purchased:", error?.response?.data?.message);
      return { data: [] } as ordersTypes;
    });
};

/*---> Delete a purchased product <---*/
export const removePurchasedProduct = async (productId: string | null) => {
  return axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/purchased/${productId}`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error purchased product:", error?.response?.data?.message);
    });
};
