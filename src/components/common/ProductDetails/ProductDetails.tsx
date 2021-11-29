import React, { ReactElement } from "react";

import { ADD_TO_CART_BIG_BUTTON_TEXT, CURRENCY_SYMBOL } from "constants/productConstants";

import { Box, Button, Image, Text } from "@chakra-ui/react";

/**
 * The ProductDetails component.
 * @param {IProductDetailsProps} props - Component props.
 * @returns {ReactElement} the ProductDetails component.
 */

export const ProductDetails = (props): ReactElement => {
  const {
    id,
    productName,
    productPrice,
    productOldPrice,
    // productSubtitle,
    productImages,
    productDescription,
  } = props;

  console.log(productImages);

  return (
    <Box>
      <Box
        maxW="sm"
        height="300px"
        // overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="2.5"
      >
        <Image
          src={productImages[0]}
          alt="product image"
          // objectFit="cover"
          height="154px"
          width="200px"
        />
        <Box width="200px" height="50px" margin="2.5">
          {/* TODO: implement images carrousel */}
        </Box>
        <Text margin="2">{productName}</Text>
      </Box>
      <Box borderBottom="#F4F4F4 solid 2px" marginBottom="12px">
        <Text fontSize="24px" fontWeight="700">{`${CURRENCY_SYMBOL}${productPrice}`}</Text>
      </Box>
      <Box borderBottom="#F4F4F4 solid 2px">
        <Text fontSize="14px" fontWeight="550" color="#212121" marginBottom="4px">
          {"Descripción del producto"}
        </Text>
        <Text fontSize="14px" fontWeight="300" color="#6A696E" marginBottom="12px">
          {productDescription}
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" marginTop="16px">
        <Button width="328px" size="lg" borderRadius="16px" padding="2" colorScheme="blue">
          {ADD_TO_CART_BIG_BUTTON_TEXT}
        </Button>
      </Box>
    </Box>
  );
};
