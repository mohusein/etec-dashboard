import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface CacheEntry {
  data: unknown;
  expiry: number;
}

/**
 * Simple in-memory cache wrapper for axios GET requests.
 * Drop-in replacement for the abandoned axios-cache-adapter package.
 */
export function createCachedApi(maxAge = 15 * 60 * 1000): {
  instance: AxiosInstance & {
    cachedGet: <T>(url: string, config?: AxiosRequestConfig) => Promise<{ data: T }>;
  };
  clearCache: () => void;
} {
  const store = new Map<string, CacheEntry>();
  const instance = axios.create() as AxiosInstance & {
    cachedGet: <T>(url: string, config?: AxiosRequestConfig) => Promise<{ data: T }>;
  };

  instance.cachedGet = async <T>(url: string, config?: AxiosRequestConfig) => {
    const entry = store.get(url);
    if (entry && Date.now() < entry.expiry) {
      return { data: entry.data as T };
    }
    const response = await instance.get<T>(url, config);
    store.set(url, { data: response.data, expiry: Date.now() + maxAge });
    return response;
  };

  const clearCache = () => store.clear();
  return { instance, clearCache };
}
