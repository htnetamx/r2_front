import React, { ReactElement } from "react";

import { IProduct } from "dataflows/Product/IProduct";

import { Box } from "@chakra-ui/layout";

import { CategorySectionContainer } from "./CategorySectionContainer/CategorySectionContainer";
import { SalesSectionContainer } from "./SalesSectionContainer/SalesSectionContainer";

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    //TODO: implement product navigation
    alert(`Product ${product.name} clicked`);
  };

  /**
   * Action to add product to cart.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const addToCart = (product: IProduct): void => {
    //TODO: implement add to cart
    alert(`Product ${product.name} clicked`);
  };

  return (
    <Box>
      <CategorySectionContainer />
      <SalesSectionContainer onProductClick={onProductClick} addToCart={addToCart} />
    </Box>
  );
};
