import { basketReducer } from "dataflows/Basket/BasketSlice";
import { categoryReducer } from "dataflows/Category/CategorySlice";
import { productReducer } from "../dataflows/Product/IProductSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  basket: basketReducer,
  category: categoryReducer,
  product: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
