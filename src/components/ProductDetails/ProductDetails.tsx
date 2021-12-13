import React, { ReactElement } from "react";

import { ADD_TO_CART_BIG_BUTTON_TEXT, CURRENCY_NAME } from "constants/productConstants";
import { formatMoney, getDiscount } from "utils/currencyUtils";

import { Box, Button, Text } from "@chakra-ui/react";

import { ImageSlider } from "../common/ImageSlider/ImageSlider";
import { IProductDetailsProps } from "./IProductDetailsProps";

/**
 * The ProductDetails component.
 * @param {IProductDetailsProps} props - Component props.
 * @returns {ReactElement} the ProductDetails component.
 */
export const ProductDetails = (props: IProductDetailsProps): ReactElement => {
  const { product, addToCart } = props;

  return (
    <Box>
      <Box
        maxW="container.xl"
        height="300px"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginTop="4"
      >
        {/* TODO: images prop should be an array */}
        <Box width="100%" marginBottom="3">
          <ImageSlider />
        </Box>
        <Box width="100%" marginTop="3">
          <Text fontSize="16px" fontWeight="500" color="#212121">
            {product.name}
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" borderBottom="#F4F4F4 solid 2px" marginBottom="1">
        <Text fontSize="24px" fontWeight="700">
          {formatMoney(product.price, CURRENCY_NAME)}
        </Text>
        <Text
          fontSize="18px"
          fontWeight="400"
          marginLeft="2"
          color="#CCCCCC"
          textDecoration="line-through"
        >
          {formatMoney(product.oldPrice, CURRENCY_NAME)}
        </Text>
        <Text display="flex" fontSize="14px" fontWeight="400" marginBottom="4" color="#00A556">
          Estás ahorrando
          <Text fontSize="14px" fontWeight="700" color="#00A556" marginLeft="0.5" marginRight="0.5">
            {getDiscount(product.oldPrice, product.price, CURRENCY_NAME)}
          </Text>
          en este producto
        </Text>
      </Box>
      <Box borderBottom="#F4F4F4 solid 2px">
        <Text fontSize="14px" fontWeight="550" color="#212121" marginBottom="1">
          {"Descripción del producto"}
        </Text>
        <Text fontSize="14px" fontWeight="300" color="#6A696E" marginBottom="12px">
          {product.name}
          {/* TODO: Description prop is missing in backend  */}
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" marginTop="16px">
        <Button
          width="328px"
          size="lg"
          borderRadius="16px"
          padding="2"
          colorScheme="blue"
          onClick={() => addToCart(product)}
        >
          {ADD_TO_CART_BIG_BUTTON_TEXT}
        </Button>
      </Box>
    </Box>
  );
};
