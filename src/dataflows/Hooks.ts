import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./Store";

/**
 * Dispatch hook
 * @returns {AppDispatch} The app dispatch
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
