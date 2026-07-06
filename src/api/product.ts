import { newProductTypes, productsTypes } from "@/types";
import axios from "axios";
import { createCachedApi } from "@/util/axiosCache";

const { instance: api, clearCache } = createCachedApi();

/*---> Clear the cache when needed <---*/
export const refreshCache = () => clearCache();

/*---> Fetch all products <---*/
export const fetchAllProducts = async (): Promise<productsTypes> => {
  return api
    .cachedGet<productsTypes>(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      headers: { "content-type": "application/json" },
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error fetch all products:", error?.response?.data?.message);
      return { data: [] } as productsTypes;
    });
};

/*---> Create a new product <---*/
export const createNewProduct = async (newProduct: Partial<newProductTypes>) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, newProduct, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error create a new product:", error?.response?.data?.message);
    });
};

/*---> Update a product <---*/
export const updateProduct = async (
  id: string | null,
  product: Partial<newProductTypes>,
) => {
  return axios
    .put(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, product, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error update a product:", error?.response?.data?.message);
    });
};

/*---> Remove product <---*/
export const removeProduct = async (id: string | null) => {
  return axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, {
      headers: { "content-type": "application/json" },
      withCredentials: true,
    })
    .then((response) => response?.data)
    .catch((error: { response?: { data?: { message?: string } } }) => {
      console.error("Error delete a product:", error?.response?.data?.message);
    });
};
