import { ordersTypes } from "@/types";
import axios from "axios";
import { createCachedApi } from "@/util/axiosCache";

const { instance: api, clearCache } = createCachedApi();

/*---> Clear the cache when needed <---*/
export const refreshCache = () => clearCache();

/*---> Fetch all orders <---*/
export const fetchAllOrders = async (): Promise<ordersTypes> => {
  return api
    .cachedGet<ordersTypes>(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error fetch all orders:", error?.response?.data?.message);
      return { data: [] } as ordersTypes;
    });
};

/*---> Change order state <---*/
export const changeOrderState = async (
  id: string | null,
  newStatus: { status: string },
) => {
  return axios
    .put(`${process.env.NEXT_PUBLIC_API_URL}/api/order/${id}`, newStatus, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error change a order state:", error?.response?.data?.message);
    });
};
