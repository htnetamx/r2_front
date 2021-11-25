import { ReactElement } from "react";

import { IBasketItemsProps } from "./IBasketItemsProps";

/**
 * The basket item component
 * @param {IBasketItemProps} props the component props.
 * @returns {ReactElement} the react element to render.
 */
export const BasketItems = (props: IBasketItemsProps): ReactElement => {
  return (
    <>
      {props.basketItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </>
  );
};
