import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { Box, Flex, Spacer } from "@chakra-ui/react";

import RightArrow from "styled/icons/RightArrow";
import { selectTotalBasketPrice, selectTotalDiscountPrice } from "dataflows/Basket/BasketSelectors";
import { CURRENCY_NAME } from "constants/productConstants";
import { formatMoney } from "utils/currencyUtils";

/**
 * The InfoHeader Component
 * @param {IInfoHeaderProps} props the InfoHeader props.
 * @returns {ReactElement} the InfoHeader component.
 */
export const InfoHeader = (): ReactElement => {
  const totalPrice = useSelector(selectTotalBasketPrice);
  const totalDiscountPrice = useSelector(selectTotalDiscountPrice);

  return (
    <Box
      sx={{ position: "sticky", top: "0" }}
      zIndex={3}
      backgroundColor="#E9EFFF"
      height="36px"
      borderBottom="1px solid #AEC5FF"
    >
      <Flex>
        <Flex alignItems="center" ml="16px">
          <Box fontWeight="400" fontSize="14px">
            Ahorro <b>{formatMoney(totalDiscountPrice, CURRENCY_NAME)}</b>
          </Box>
          <Spacer borderRight="1px solid #AEC5FF" alignSelf="center" height="20px" m="8px" />
          <Box fontWeight="400" fontSize="14px">
            Total <b>{formatMoney(totalPrice, CURRENCY_NAME)}</b>
          </Box>
        </Flex>

        <Spacer />

        <Flex alignItems="center" p="2" mr="14px">
          <Box color="#3870FF" fontWeight="700" fontSize="14px">
            Ir a pagar
          </Box>
          <RightArrow />
        </Flex>
      </Flex>
    </Box>
  );
};
