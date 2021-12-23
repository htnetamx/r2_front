import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IStore } from "./IStore";

export const getStoreByName = createAsyncThunk("store/getStoreDetail", async (name: string) => {
  const response = await get(`store?url=${name}`);
  const stores = (await response.data) as IStore[];
  if (Array.isArray(stores) && stores.length !== 0) return stores[0];
  else return undefined;
});
