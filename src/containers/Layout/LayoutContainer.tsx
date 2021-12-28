import React, { useRef, FC, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Footer } from "components/Layout/Footer";
import { INavBarProps, NavBar } from "components/Layout/NavBar";
import { BASKET_TITLE } from "constants/basketConstants";
import { SEARCH_BAR_PLACEHOLDER } from "constants/searchBarConstants";
import { USER_TITLE } from "constants/userConstant";
import { selectTotalBasketItems } from "dataflows/Basket/BasketSelectors";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import { onOpen as onOpenMenuAction } from "dataflows/Menu/MenuPopover";
import { useRouter } from "next/router";

import { Box } from "@chakra-ui/react";

import { CheckoutContainer } from "./Checkout/CheckoutContainer";

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

  /**
   * Handles on open action
   * @returns {void}
   **/
  const onOpen = (): void => {
    dispatch(onOpenAction());
  };

  /**
   * Handles on open UserMenu action
   * @returns {void}
   **/
  const onOpenMenu = (): void => {
    dispatch(onOpenMenuAction());
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
    userButtonProps: {
      onClick: onOpenMenu,
      ariaLabel: USER_TITLE,
    },
    storeSelectorProps: {
      storeSelectorOptions: [{ key: "tiendita", value: "Soda Fountain" }], //TODO: Retrieve stores from backend and state,
    },
  };

  return (
    <Box>
      <NavBar {...navBarProps} />
      <CheckoutContainer />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
