import React, { ReactElement } from "react";

import {
  ADD_TO_CART_BUTTON_TEXT,
  CURRENCY_NAME,
  SALE_PRODUCT_SUBTITLE,
} from "constants/productConstants";
import { formatMoney } from "utils/currencyUtils";

import { Img } from "@chakra-ui/image";
import { Box, Button, Center, Skeleton, Square, Text } from "@chakra-ui/react";

import { IProductCardProps } from "./IProductCardProps";

/**
 * The ProductBox component.
 * @param {IProductCardProps} props the component props.
 * @returns {ReactElement} the ProductBox component.
 */
export const ProductCard = (props: IProductCardProps): ReactElement => {
  const { product, addToCart, onProductClick } = props;
  const productDiscount = product.oldPrice - product.price;
  const productSubtitle = productDiscount
    ? `${SALE_PRODUCT_SUBTITLE} ${formatMoney(productDiscount, CURRENCY_NAME)}`
    : "";
  const hasDiscount = productDiscount > 0;
  return (
    <Box>
      <Box maxW="sm" height={{ base: "300px", md: "280px" }} overflow="hidden">
        <Square
          rounded="md"
          boxShadow="md"
          minW={{ base: 159, md: "160px" }}
          bg="white"
          borderWidth="1px"
          onClick={() => onProductClick(product)}
        >
          <Img
            src={product.seoFilename}
            draggable="false"
            alt={product.name}
            height="150px"
            fallback={<Skeleton />}
          />
        </Square>

        <Box pt="6">
          <Box display="flex" alignItems="baseline" minH="17.6px">
            <Text fontWeight="semibold" fontSize="xs" color="#E0329B">
              {productSubtitle}
            </Text>
          </Box>

          <Box>
            <Text
              as="span"
              pr={2}
              mt="1"
              fontWeight="semibold"
              fontSize={{ base: "md", md: "xl" }}
              lineHeight="tight"
            >
              {formatMoney(product.price, CURRENCY_NAME)}
            </Text>
            {hasDiscount && (
              <Text as="s" fontSize="xs">
                {formatMoney(product.oldPrice, CURRENCY_NAME)}
              </Text>
            )}
          </Box>

          <Box mt="2">
            <Text fontSize={{ base: "xs", md: "xs" }} noOfLines={[3, 2]}>
              {product.name}
            </Text>
          </Box>
        </Box>
      </Box>
      <Center>
        <Button
          width="120px"
          height={{ base: "27px", md: "29px" }}
          colorScheme="blue"
          borderRadius="full"
          fontSize="0.8rem"
          onClick={() => addToCart(product)}
        >
          {ADD_TO_CART_BUTTON_TEXT}
        </Button>
      </Center>
    </Box>
  );
};
