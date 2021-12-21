import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/productConstants";
import IconDiscount from "styled/icons/CheckoutFlow/Discount";
import IconLocation from "styled/icons/CheckoutFlow/Location";
import IconMoney from "styled/icons/CheckoutFlow/Money";
import IconPerson from "styled/icons/CheckoutFlow/Person";
import { formatMoney } from "utils/currencyUtils";

import { Box, Center, Divider, Link, Text } from "@chakra-ui/react";

import { IOrderReviewProps } from "./IOrderReviewProps";

// TODO: this component needs this props from backend
const fakeProps = {
  customerName: "Ana Polanco",
  deliveryAddress: "Tienda los rivera, calle 34 - 23",
  cash: true,
  creditCard: false,
  discountCoupon: "DC5",
  deliveryFee: 0,
};

/**
 *  The order review screen component
 * @param {IOrderReviewProps} props The component props
 * @returns {ReactElement} The order review screen component
 */
export const OrderReview = (props: IOrderReviewProps): ReactElement => {
  const { totalNetPrice } = props;
  /**
   * function to get the amount of the discount from a coupon code
   * @param {string} couponCode code of the discount coupon
   * @returns {number} the amount of the discount
   */
  const getDiscountFromCoupon = (couponCode: string): number => {
    let discount = 0;
    if (couponCode === "DC5") return (discount = 5);
    return discount;
  };

  return (
    <Center display="flex" flexDirection="column" alignItems="center">
      <Box width="328px" marginTop="24px" display="flex">
        <Box display="flex" alignItems="center">
          <IconLocation />
        </Box>
        <Box>
          <Text
            color="#616161"
            fontSize="16px"
            fontWeight="400"
            display="flex"
            alignItems="center"
            marginTop="15px"
            marginLeft="15px"
          >
            Dirección de entrega
          </Text>
          <Text fontSize="16px" display="flex" alignItems="center" margin="0px 0px 15px 15px">
            {fakeProps.deliveryAddress}
          </Text>
        </Box>
      </Box>
      <Divider width="328px" margin="0px 16px" />
      <Box width="328px" display="inherit">
        <Box display="flex" alignItems="center">
          <IconPerson />
        </Box>
        <Box>
          <Text
            color="#616161"
            fontSize="16px"
            fontWeight="400"
            display="flex"
            alignItems="center"
            marginTop="15px"
            marginLeft="15px"
          >
            Quien recibe
          </Text>
          <Text fontSize="16px" display="flex" alignItems="center" margin="0px 0px 15px 15px">
            {fakeProps.customerName}
          </Text>
        </Box>
      </Box>
      <Divider width="328px" margin="0px 16px" />
      <Box width="328px" display="inherit">
        <Box display="flex" alignItems="center">
          <IconMoney />
        </Box>
        <Box>
          <Text
            color="#616161"
            fontSize="16px"
            fontWeight="400"
            display="flex"
            alignItems="center"
            marginTop="15px"
            marginLeft="15px"
          >
            Método de pago
          </Text>
          {fakeProps.creditCard ? (
            <Text fontSize="16px" display="flex" alignItems="center" margin="0px 0px 15px 15px">
              Tarjeta de Crédito
            </Text>
          ) : (
            <Text fontSize="16px" display="flex" alignItems="center" margin="0px 0px 15px 15px">
              Efectivo
            </Text>
          )}
        </Box>
      </Box>
      <Divider width="328px" margin="0px 16px" />
      <Box width="328px" height="54px" marginBottom="30px" display="inherit">
        <Box display="flex" alignItems="center">
          <IconDiscount />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text
            fontSize="16px"
            fontWeight="400"
            display="flex"
            alignItems="center"
            marginLeft="16px"
            justifyContent="space-between"
          >
            Código de descuento
            <Link
              href=""
              color="#3870FF"
              marginLeft="80px"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="bold"
            >
              Agregar
            </Link>
          </Text>
        </Box>
      </Box>
      <Box width="328px" height="229px" marginBottom="24px">
        {fakeProps.discountCoupon && (
          <Box
            height="36px"
            background="#EAF7EE"
            borderRadius="8px 8px 0px 0px"
            border="1px solid #C1E7CB"
            marginBottom="17px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text display="flex">
              {"Estás ahorrando"}
              <Text fontWeight="700" marginRight="2px" marginLeft="2px">
                {formatMoney(getDiscountFromCoupon(fakeProps.discountCoupon), CURRENCY_NAME)}
              </Text>
              {"en esta orden"}
            </Text>
          </Box>
        )}
        <Box display="flex" justifyContent="space-between" margin="16px">
          <Text>Sub-Total</Text>
          <Text>
            {formatMoney(
              totalNetPrice - getDiscountFromCoupon(fakeProps.discountCoupon),
              CURRENCY_NAME
            )}{" "}
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          margin="16px"
          fontWeight="bold"
          color="#009688"
        >
          <Text>Costo de envío</Text>
          <Text>{formatMoney(0, CURRENCY_NAME)}</Text>
        </Box>
        <Box display="flex" justifyContent="space-between" margin="16px" fontWeight="bold">
          <Text>Total</Text>
          <Text>
            {formatMoney(
              totalNetPrice - getDiscountFromCoupon(fakeProps.discountCoupon),
              CURRENCY_NAME
            )}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
