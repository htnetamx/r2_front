import React, { ReactElement } from "react";

import { useDispatch } from "react-redux";

import { addItem } from "dataflows/Basket/BasketSlice";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { IProduct } from "dataflows/Product/IProduct";
import { selectProduct } from "dataflows/Product/IProductSlice";
import { useRouter } from "next/router";

import { Box, Container } from "@chakra-ui/layout";

import { CategorySectionContainer } from "./CategorySectionContainer/CategorySectionContainer";
import { LowPriceOffersSectionContainer } from "./LowPriceOffersSectionContainer/LowPriceOffersSectionContainer";
import { SalesSectionContainer } from "./SalesSectionContainer/SalesSectionContainer";

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    dispatch(selectProduct(product));
    router.push(`products/${product.id}`);
  };

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
    <Box bg="#F9F9F9">
      <Container maxW="container.xl">
        <CategorySectionContainer />
        <SalesSectionContainer onProductClick={onProductClick} addToCart={addToCart} />
        <LowPriceOffersSectionContainer onProductClick={onProductClick} addToCart={addToCart} />
      </Container>
    </Box>
  );
};
