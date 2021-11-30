import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ProductGridSection } from "components/common/Sections";
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
  const { onProductClick, addToCart } = props;

  const lowPriceOffersSectionProducts = useSelector(selectLowPriceOffersSectionProducts);
  const isLoading = useSelector(selectIsLoadingLowPriceOffersSection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLowPriceOffersProducts());
  }, []);

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <ProductGridSection
      title={LOW_PRICE_OFFERS_SECTION_TITLE}
      products={Array.isArray(lowPriceOffersSectionProducts) ? lowPriceOffersSectionProducts : []}
      onProductClick={onProductClick}
      addToCart={addToCart}
    />
  );
};
