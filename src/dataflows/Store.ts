import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { basketReducer } from "./Basket/BasketSlice";

const rootReducer = combineReducers({
  basket: basketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
