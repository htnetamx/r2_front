import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "components/common/ProductCard";
import { GridSection } from "components/common/Sections";
import { LOW_PRICE_OFFERS_SECTION_TITLE } from "constants/productConstants";
import {
  selectIsLoadingLowPriceOffersSection,
  selectLowPriceOffersSectionProducts,
} from "dataflows/Product/ProductSelectors";
import { getLowPriceOffersProducts } from "dataflows/Product/ProductThunks";

import { Box } from "@chakra-ui/layout";

import { ILowPriceOffersSectionContainerProps } from "./ILowPriceOffersSectionContainerProps";

/**
 * The LowPriceOffersSectionContainer container.
 * @param {ILowPriceOffersSectionContainerProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const LowPriceOffersSectionContainer = (
  props: ILowPriceOffersSectionContainerProps
): ReactElement => {
  const { onProductClick, addToCart, removeFromCart, getQtyInCart } = props;

  const lowPriceOffersSectionProducts = useSelector(selectLowPriceOffersSectionProducts);
  const isLoading = useSelector(selectIsLoadingLowPriceOffersSection);
  const dispatch = useDispatch();

  const productElements = lowPriceOffersSectionProducts.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        onProductClick={onProductClick}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        qtyOnBasket={getQtyInCart(product)}
      />
    );
  });

  useEffect(() => {
    dispatch(getLowPriceOffersProducts());
  }, []);

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <GridSection title={LOW_PRICE_OFFERS_SECTION_TITLE} elements={productElements} />
  );
};
