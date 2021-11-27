import React, { useRef, FC, ReactElement } from "react";

import { useSelector } from "react-redux";

import { Footer } from "components/Layout/Footer";
import { INavBarProps, NavBar } from "components/Layout/NavBar";
import { BASKET_EMPTY_TITLE, BASKET_TITLE, CHECKOUT_TITLE } from "constants/basketConstants";
import { SEARCH_BAR_PLACEHOLDER } from "constants/searchBarConstants";
import { selectBasketItems, selectTotalBasketItems } from "dataflows/Basket/BasketSelectors";
import { useRouter } from "next/router";

import { useDisclosure, Box } from "@chakra-ui/react";

/**
 * The Layout container component
 * @param {ReactNode} param0 children
 * @returns {ReactElement} The layout container.
 */
export const LayoutContainer: FC = ({ children }): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const btnRef = useRef<HTMLButtonElement>(null);
  const basketItems = useSelector(selectBasketItems);
  const totalBasketItems = useSelector(selectTotalBasketItems);
  const isHome = router.pathname === "/";

  const navBarProps: INavBarProps = {
    isHome,
    searchBarProps: {
      searchBarPlaceholder: SEARCH_BAR_PLACEHOLDER,
    },
    basketProps: {
      basketButtonProps: {
        totalItems: totalBasketItems,
        onClick: onOpen,
        btnRef,
        ariaLabel: BASKET_TITLE,
      },
      basketPanelProps: {
        isOpen,
        onClose,
        basketItems,
        basketTitle: BASKET_TITLE,
        basketCheckoutTitle: CHECKOUT_TITLE,
        basketEmptyTitle: BASKET_EMPTY_TITLE,
        finalFocusRef: btnRef,
      },
    },
    storeSelectorProps: {
      storeSelectorOptions: [{ key: "tiendita", value: "Soda Fountain" }], //TODO: Retrieve stores from backend and state,
    },
  };

  return (
    <Box>
      <NavBar {...navBarProps} />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
