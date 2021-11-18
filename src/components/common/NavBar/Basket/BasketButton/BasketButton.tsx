import React, { ReactElement } from "react";

import IconBasket from "styled/icons/Basket";

import { BasketQuantity, Btn } from "./BasketButton.styled";
import { IBasketButtonProps } from "./IBasketButtonProps";

/**
 * The BasketButton component.
 * @param {IBasketButtonProps} props the component props.
 * @returns {ReactElement} The BasketButton component
 */
export const BasketButton = (props: IBasketButtonProps): ReactElement => {
  const { btnRef, onClick, ariaLabel, totalItems } = props;
  return (
    <Btn ref={btnRef} onClick={onClick} type="button" aria-label={ariaLabel}>
      <IconBasket />
      <BasketQuantity>{totalItems}</BasketQuantity>
    </Btn>
  );
};
