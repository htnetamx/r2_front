import React, { ReactElement } from "react";

import { CarouselSlider } from "components/common/CarouselSlider";
import { ProductBox } from "components/common/ProductBox/ProductBox";
import {
  CURRENCY_NAME,
  MAX_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_PRODUCTS_PER_SLIDE_MOBILE,
  PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  SALE_PRODUCT_SUBTITLE,
} from "constants/productConstants";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";

import { Box, Text } from "@chakra-ui/react";

import { ISalesSectionProps } from "./ISalesSectionProps";

/**
 * Sales section component.
 * @param {ISalesSectionProps} props - Component props.
 * @returns {ReactElement} - Element to render.
 */
export const SalesSection = (props: ISalesSectionProps): ReactElement => {
  const { title, products, onProductClick, addToCart } = props;

  const productElements = products.map((product) => {
    const productDiscount = product.oldPrice - product.price;
    const productSubtitle = productDiscount
      ? `${SALE_PRODUCT_SUBTITLE} ${formatMoney(productDiscount, CURRENCY_NAME)}`
      : "";

    return (
      <ProductBox
        key={product.id}
        id={product.id}
        productImageUrl={product.seoFilename}
        productName={product.name}
        productPrice={formatMoney(product.price, CURRENCY_NAME)}
        productOldPrice={formatMoney(product.oldPrice, CURRENCY_NAME)}
        onProductClick={() => onProductClick(product)}
        addToCart={() => addToCart(product)}
        productSubtitle={productSubtitle}
        productShortDescription={product.name}
        hasDiscount={productDiscount > 0}
      />
    );
  });

  const productBreakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  return (
    <Box pt={7}>
      <Box pb={5}>
        <Text fontSize="xl" fontWeight={700}>
          {title}
        </Text>
      </Box>
      <Box>
        <CarouselSlider elements={productElements} breakpoints={productBreakpoints} />
      </Box>
    </Box>
  );
};
