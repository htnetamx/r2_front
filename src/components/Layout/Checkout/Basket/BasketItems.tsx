import React, { ReactElement } from "react";

import { BiMinus, BiPlus } from "react-icons/bi";

import { UNITS_TITLE } from "constants/basketConstants";
import { CURRENCY_NAME } from "constants/productConstants";
import { formatMoney } from "utils/currencyUtils";

import { Box, HStack, IconButton, Img, Stack, Text } from "@chakra-ui/react";

import { IBasketItemsProps } from "./IBasketItemsProps";

/**
 * The basket item component
 * @param {IBasketItemProps} props the component props.
 * @returns {ReactElement} the react element to render.
 */
export const BasketItems = (props: IBasketItemsProps): ReactElement => {
  const { basketItems, onAddToBasket, onRemoveFromBasket } = props;
  return (
    <>
      {basketItems.map((item) => (
        <Stack key={item.id} direction="row" width="full">
          <Img
            rounded="lg"
            width="100px"
            height="120px"
            fit="cover"
            src={item.pictureUrl}
            alt={item.name}
            draggable="false"
            loading="lazy"
          />
          <Box pt="4">
            <Stack spacing="0.5">
              <Text fontWeight="medium" fontSize={{ base: "xs", md: "md" }} noOfLines={[2, 2]}>
                {item.name}
              </Text>
              <Text fontWeight="medium" fontSize={{ base: "xs", md: "md" }}>
                {formatMoney(item.price, CURRENCY_NAME)}
              </Text>
              <HStack spacing="1" mt="3" justify="space-between">
                <Text fontWeight="medium" fontSize={{ base: "xs", md: "md" }}>
                  {UNITS_TITLE}: {item.quantity}
                </Text>
                <HStack>
                  <IconButton
                    boxSize="5"
                    bg="black"
                    textColor="white"
                    colorScheme="black"
                    aria-label="remove"
                    icon={<BiMinus />}
                    onClick={() => onRemoveFromBasket(item.id)}
                  />
                  <IconButton
                    bg="black"
                    textColor="white"
                    boxSize="5"
                    colorScheme="black"
                    aria-label="add"
                    icon={<BiPlus />}
                    onClick={() => onAddToBasket(item.id)}
                    disabled={!!item.maxQuantity && item.quantity >= item.maxQuantity}
                  />
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      ))}
    </>
  );
};
