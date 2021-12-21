import React, { ReactElement } from "react";

import { useDispatch } from "react-redux";

import { IProduct } from "dataflows/Product/IProduct";
import { selectProduct } from "dataflows/Product/IProductSlice";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";

import { Box, Container } from "@chakra-ui/layout";

import { CategorySectionContainer } from "./CategorySectionContainer/CategorySectionContainer";
import { LowPriceOffersSectionContainer } from "./LowPriceOffersSectionContainer/LowPriceOffersSectionContainer";
import { SalesSectionContainer } from "./SalesSectionContainer/SalesSectionContainer";
import { DiscountSectionContainer } from "./DiscountSectionContainer/DiscountSectionContainer";

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    dispatch(selectProduct(product));
    router.push(`products/${product.id}`);
  };

  return (
    <Box bg="#F9F9F9">
      <Container maxW="container.xl">
        <DiscountSectionContainer />
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
