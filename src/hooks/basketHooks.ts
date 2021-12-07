import { useDispatch, useSelector } from "react-redux";

import { selectBasketItems } from "dataflows/Basket/BasketSelectors";
import { addItem, removeItem } from "dataflows/Basket/BasketSlice";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { IProduct } from "dataflows/Product/IProduct";

/**
 * Basic hook to get the basket items
 * @returns {Object} The basket hook.
 */
export const useBasket = () => {
  const basketItems: IBasketItem[] = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  /**
   * Mapping of the product to the basket item
   * @param {IProduct} product The product to add to the basket.
   * @returns {IBasketItem} The basket item.
   */
  const mapProductToBasketItem = (product: IProduct): IBasketItem => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      pictureUrl: product.seoFilename,
      minQuantity: product.orderMinimumQuantity,
      maxQuantity: product.orderMaximumQuantity,
      quantity: 1,
    };
  };

  /**
   * Action to add product to cart.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const addToBasket = (product: IProduct): void => {
    dispatch(addItem(mapProductToBasketItem(product)));
  };

  /**
   * Action to remove product from cart.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const removeFromBasket = (product: IProduct): void => {
    dispatch(removeItem(mapProductToBasketItem(product)));
  };

  /**
   * Get the quantity of a product in the cart.
   * @param {IProduct} product the product clicked.
   * @returns {number} the quantity of the product in the cart.
   **/
  const getQtyInBasket = (product: IProduct): number => {
    const item = basketItems.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  };

  return {
    addToBasket,
    removeFromBasket,
    getQtyInBasket,
  };
};
