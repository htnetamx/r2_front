import { useRef, FC, ReactElement } from "react";

import { useSelector } from "react-redux";

import { Footer } from "components/common/Footer";
import { INavBarProps, NavBar } from "components/common/NavBar";
import { BASKET_EMPTY_TITLE, BASKET_TITLE, CHECKOUT_TITLE } from "constants/basketConstants";
import { SEARCH_BAR_PLACEHOLDER } from "constants/searchBarConstants";
import { selectBasketItems } from "dataflows/Basket/BasketSlice";

import { useDisclosure } from "@chakra-ui/react";

/**
 * The Layout container component
 * @param {ReactNode} param0 children
 * @returns {ReactElement} The layout container.
 */
export const LayoutContainer: FC = ({ children }): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const basketItems = useSelector(selectBasketItems);

  const navBarProps: INavBarProps = {
    searchBarProps: {
      searchBarPlaceholder: SEARCH_BAR_PLACEHOLDER,
    },
    basketProps: {
      basketButtonProps: {
        totalItems: basketItems.length,
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
      storeSelectorOptions: [{ key: "tiendita", value: "Soda Fountain" }], //TODO: Retrive stores from backend and state,
    },
  };

  return (
    <>
      <NavBar {...navBarProps} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
