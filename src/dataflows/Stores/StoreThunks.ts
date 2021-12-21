import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IStore } from "./IStore";

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const defaultName: string = "proteinclubescalerillas.netamx.app";

export const getStoreByName = createAsyncThunk("store/getStoreDetail", async () => {
  const response = await get(`http://3.12.73.245:3009/api/v1/store?url=${defaultName}`);
  return (await response.data) as IStore;
});
