import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 1000),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  validateStatus: (status) => {
    return status >= 200 && status < 401;
  },
});

/**
 * Add JWT token to request
 * @param {string} token JWT token
 * @returns {void}
 **/
export const addJwtToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/**
 * GET HTTP request
 * @param {string} url the url to request
 * @param {object} params the params to send
 * @param {string} baseUrl the base url to use.
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const get = (
  url: string,
  params?: Record<string, unknown>,
  baseUrl?: string //TODO: remove this after the API gateway is implemented.
): Promise<AxiosResponse<unknown>> => {
  if (baseUrl) {
    axios.defaults.baseURL = baseUrl;
  }
  return instance.get<unknown>(url, { params });
};

/**
 * POST HTTP request
 * @param {string} url the url to request
 * @param {object} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const post = (url: string, data: Record<string, unknown>): Promise<AxiosResponse<unknown>> =>
  instance.post<unknown>(url, data);

/**
 * POST form-urlencoded HTTP request
 * @param {string} url the url to request
 * @param {FormData} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const postForm = (url: string, data: URLSearchParams): Promise<AxiosResponse<unknown>> => {
  const axiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 1000),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  return instance.post<unknown>(url, data, axiosConfig);
};

/**
 * PUT HTTP request
 * @param {string} url the url to request
 * @param {object} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const put = (url: string, data: Record<string, unknown>): Promise<AxiosResponse<unknown>> =>
  instance.put<unknown>(url, data);

/**
 * DELETE HTTP request
 * @param {string} url the url to request
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const del = (url: string): Promise<AxiosResponse<unknown>> => instance.delete<unknown>(url);
