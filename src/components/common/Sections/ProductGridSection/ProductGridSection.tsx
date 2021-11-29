import React, { ReactElement } from "react";

import { ProductGrid } from "components/common/ProductGrid/ProductGrid";

import { Box, Text } from "@chakra-ui/layout";

import { IProductGridSection } from "./IProductGridSection";

/**
 * Product grid offers section
 * @param {IProductGridSection} props the props of the component
 * @returns {ReactElement} the component.
 */
export const ProductGridSection = (props: IProductGridSection): ReactElement => {
  const { title, products, onProductClick, addToCart } = props;
  return (
    <Box pt={7}>
      <Box pb={5}>
        <Text fontSize="xl" fontWeight={700}>
          {title}
        </Text>
      </Box>
      <Box>
        <ProductGrid products={products} onProductClick={onProductClick} addToCart={addToCart} />
      </Box>
    </Box>
  );
};
