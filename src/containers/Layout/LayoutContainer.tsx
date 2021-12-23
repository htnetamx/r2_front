import React, { useRef, FC, ReactElement, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Footer } from "components/Layout/Footer";
import { INavBarProps, NavBar } from "components/Layout/NavBar";
import { BASKET_TITLE } from "constants/basketConstants";
import { SEARCH_BAR_PLACEHOLDER } from "constants/searchBarConstants";
import { selectTotalBasketItems } from "dataflows/Basket/BasketSelectors";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import { useRouter } from "next/router";

import { Box } from "@chakra-ui/react";

import { CheckoutContainer } from "./Checkout/CheckoutContainer";
import { selectStore, selectIsLoadingStore } from "dataflows/Stores/StoreSelectors";
import { getStoreByName } from "dataflows/Stores/StoreThunks";

/**
 * The Layout container component
 * @param {ReactNode} param0 children
 * @returns {ReactElement} The layout container.
 */
export const LayoutContainer: FC = ({ children }): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();

  const btnRef = useRef<HTMLButtonElement>(null);
  const totalBasketItems = useSelector(selectTotalBasketItems);
  const isHome = router.pathname === "/";
  const store = useSelector(selectStore);
  const isLoadingStore = useSelector(selectIsLoadingStore);

  const storeName =
    process.env.NODE_ENV === "development" ? "proteinclubescalerillas.netamx.app" : router.basePath;

  useEffect(() => {
    dispatch(getStoreByName(storeName));
  }, []);

  /**
   * Handles on open action
   * @returns {void}
   **/
  const onOpen = (): void => {
    dispatch(onOpenAction());
  };

  const navBarProps: INavBarProps = {
    isHome,
    searchBarProps: {
      searchBarPlaceholder: SEARCH_BAR_PLACEHOLDER,
    },
    basketProps: {
      totalItems: totalBasketItems,
      onClick: onOpen,
      btnRef,
      ariaLabel: BASKET_TITLE,
    },
    store,
  };

  return isLoadingStore ? (
    //TODO: Delete when the loader component is implemented
    <div>Loading...</div>
  ) : (
    <Box>
      <NavBar {...navBarProps} />
      <CheckoutContainer />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
