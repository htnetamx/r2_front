import React, { ReactElement } from "react";

import { IProduct } from "dataflows/Product/IProduct";
import { useBasket } from "hooks/basketHooks";

import { Box, Container } from "@chakra-ui/layout";

import { CategorySectionContainer } from "./CategorySectionContainer/CategorySectionContainer";
import { LowPriceOffersSectionContainer } from "./LowPriceOffersSectionContainer/LowPriceOffersSectionContainer";
import { SalesSectionContainer } from "./SalesSectionContainer/SalesSectionContainer";

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    //TODO: implement product navigation
    alert(`Product ${product.name} clicked`);
  };

  return (
    <Box bg="#F9F9F9">
      <Container maxW="container.xl">
        <CategorySectionContainer />
        <SalesSectionContainer
          onProductClick={onProductClick}
          addToCart={addToBasket}
          removeFromCart={removeFromBasket}
          getQtyInCart={getQtyInBasket}
        />
        <LowPriceOffersSectionContainer
          onProductClick={onProductClick}
          addToCart={addToBasket}
          removeFromCart={removeFromBasket}
          getQtyInCart={getQtyInBasket}
        />
      </Container>
    </Box>
  );
};
