import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { basketReducer } from "dataflows/Basket/BasketSlice";
import { categoryReducer } from "dataflows/Category/CategorySlice";
import { checkoutReducer } from "dataflows/Checkout/CheckoutSlice";
import { menuReducer } from "dataflows/Menu/MenuPopover";
import { productReducer } from "dataflows/Product/IProductSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["basket"],
};

const rootReducer = combineReducers({
  basket: basketReducer,
  category: categoryReducer,
  product: productReducer,
  checkout: checkoutReducer,
  menu: menuReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
