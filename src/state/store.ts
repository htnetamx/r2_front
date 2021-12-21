import { basketReducer } from "dataflows/Basket/BasketSlice";
import { categoryReducer } from "dataflows/Category/CategorySlice";
import { checkoutReducer } from "dataflows/Checkout/CheckoutSlice";
import { storeReducer } from "dataflows/Stores/StoreSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../dataflows/Product/IProductSlice";

const rootReducer = combineReducers({
  basket: basketReducer,
  category: categoryReducer,
  product: productReducer,
  checkout: checkoutReducer,
  store: storeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
