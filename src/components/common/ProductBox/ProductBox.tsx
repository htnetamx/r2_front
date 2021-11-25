import React, { ReactElement } from "react";

import { ADD_TO_CART_BUTTON_TEXT } from "constants/productConstants";

import { Img } from "@chakra-ui/image";
import { Box, Button, Center, Square, Text } from "@chakra-ui/react";

import { IProductBoxProps } from "./IProductBoxProps";

/**
 * The ProductBox component.
 * @param {IProductBoxProps} props the component props.
 * @returns {ReactElement} the ProductBox component.
 */
export const ProductBox = (props: IProductBoxProps): ReactElement => {
  const {
    id,
    productName,
    productPrice,
    productOldPrice,
    productSubtitle,
    productImageUrl,
    productShortDescription,
    hasDiscount,
    addToCart,
    onProductClick,
  } = props;

  return (
    <Box>
      <Box maxW="sm" height={{ base: "290px", md: "290px" }} overflow="hidden">
        <Square onClick={() => onProductClick(id)}>
          <Square borderRadius="lg" boxShadow="md" minW="150px">
            <Img src={productImageUrl} alt={productName} height="150px" />
          </Square>
        </Square>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
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
              {productPrice}
            </Text>
            {hasDiscount && (
              <Text as="s" fontSize="xs">
                {productOldPrice}
              </Text>
            )}
          </Box>

          <Box mt="2">
            <Text fontSize={{ base: "xs", md: "md" }} noOfLines={[3, 2]}>
              {productShortDescription}
            </Text>
          </Box>
        </Box>
      </Box>
      <Center>
        <Button
          width="120px"
          height={{ base: "27px", md: "33px" }}
          color="white"
          bg="#3870FF"
          borderRadius="full"
          onClick={() => addToCart(id)}
        >
          {ADD_TO_CART_BUTTON_TEXT}
        </Button>
      </Center>
    </Box>
  );
};
