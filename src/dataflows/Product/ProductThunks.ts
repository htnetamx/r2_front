import {
  GET_CATEGORY_PRODUCTS_URL,
  GET_PRODUCTS_SALES_SECTION_URL,
  GET_PRODUCTS_URL,
} from "constants/productConstants";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "./IProduct";

export const getSalesSectionProducts = createAsyncThunk(
  "product/getSalesSectionProducts",
  async () => {
    const response = await get(GET_PRODUCTS_SALES_SECTION_URL);
    return (await response.data) as IProduct[];
  }
);

export const getLowPriceOffersProducts = createAsyncThunk(
  "product/getLowPriceOffersProducts",
  async () => {
    const response = await get(GET_PRODUCTS_URL);
    return (await response.data) as IProduct[];
  }
);

export const getCategoryProducts = createAsyncThunk(
  "product/getCategoryProducts",
  async (categoryId: string) => {
    const response = await get(`${GET_CATEGORY_PRODUCTS_URL}${categoryId}/product`);
    return (await response.data) as IProduct[];
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId: string) => {
    const response = await get(`${GET_PRODUCTS_URL}${productId}`);
    return (await response.data) as IProduct;
  }
);
