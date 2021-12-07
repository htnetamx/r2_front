import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ProductDetails } from "components/ProductDetails/ProductDetails";
import { addItem } from "dataflows/Basket/BasketSlice";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectIsLoadingSelectedProduct,
  selectSelectedProduct,
} from "dataflows/Product/ProductSelectors";
import { getProductById } from "dataflows/Product/ProductThunks";

import { Container } from "@chakra-ui/layout";

import { IProductDetailsContainerProps } from "./IProductDetailsContainerProps";

/**
 * The product details container.
 * @param { IProductDetailsContainerProps } props The container props
 * @returns { ReactElement } The product details container.
 */
export const ProductDetailsContainer = (props: IProductDetailsContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);
  const isLoading = useSelector(selectIsLoadingSelectedProduct);

  useEffect(() => {
    if (product === undefined) {
      dispatch(getProductById(props.productId));
    }
  }, []);

  /**
   * Action to add product to cart.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const addToCart = (product: IProduct): void => {
    //TODO: implement add to cart hook in the future
    const item: IBasketItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      pictureUrl: product.seoFilename,
    };
    dispatch(addItem(item));
  };

  return (
    <Container maxW="container.xl">
      {product === undefined || isLoading ? (
        <> Loading...</>
      ) : (
        <ProductDetails product={product} addToCart={addToCart} />
      )}
    </Container>
  );
};
