import { RootState } from "state/store";

/**
 * Selector to get the menu popover state
 * @param {RootState} state the root state
 * @returns {boolean} true if it is open, false otherwise
 */
export const selectIsMenuOpen = (state: RootState): boolean => state.menu.isOpen;
