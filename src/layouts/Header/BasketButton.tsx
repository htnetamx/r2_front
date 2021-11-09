import React, { useState, ReactElement } from "react";

import { BASKET_TITLE } from "constants/BasketConstants";
import IconBasket from "styles/icons/Basket";

import { useDisclosure } from "@chakra-ui/react";

import { BasketQuantity, Btn } from "./BasketButton.styles";

/**
 * This component is responsible for displaying the basket button.
 * It is used in the Header component.
 * @returns {ReactElement} The basket button.
 */
export const BasketButton = (): ReactElement => {
  //TODO: implement basket counter
  const [totalQty, setTotalQty] = useState(4);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Btn ref={btnRef} onClick={onOpen} type="button" aria-label={BASKET_TITLE}>
      <IconBasket />
      <BasketQuantity>{totalQty}</BasketQuantity>
    </Btn>
  );
};
