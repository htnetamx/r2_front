import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/productConstants";
import IconWallet from "styled/icons/Wallet";
import { formatMoney } from "utils/currencyUtils";

import { Box, Center, Divider, Link, Text } from "@chakra-ui/react";

import { IOrderReviewProps } from "./IOrderReviewProps";

// TODO: this component needs this props from backend
const fakeProps = {
  customerName: "Ana Polanco",
  deliveryAddress: "Tienda los rivera, calle 34 - 23",
  cash: true,
  creditCard: false,
  discount: 5,
  deliveryFee: 0,
};

/**
 *  The order review screen component
 * @param {IOrderReviewProps} props The component props
 * @returns {ReactElement} The order review screen component
 */
export const OrderReview = (props: IOrderReviewProps): ReactElement => {
  const { totalNetPrice } = props;
  return (
    <Center display="flex" flexDirection="column" alignItems="center">
      <Box
        width="328px"
        height="84px"
        border="1px solid #F1F1F1"
        boxSizing="border-box"
        borderRadius="16px"
        marginTop="24px"
        marginBottom="24px"
        display="flex"
        flexDirection="column"
      >
        <Text
          color="#616161"
          fontSize="16px"
          fontWeight="400"
          display="flex"
          alignItems="center"
          marginTop="16px"
          marginLeft="16px"
        >
          Para quién es este pedido:
        </Text>
        <Text fontSize="16px" display="flex" alignItems="center" margin="8px 0px 16px 16px">
          {fakeProps.customerName}
        </Text>
      </Box>
      <Box
        width="328px"
        height="84px"
        border="1px solid #F1F1F1"
        boxSizing="border-box"
        borderRadius="16px"
        marginBottom="24px"
      >
        <Text
          color="#616161"
          fontSize="16px"
          fontWeight="400"
          display="flex"
          alignItems="center"
          marginTop="16px"
          marginLeft="16px"
        >
          Dirección de entrega
        </Text>
        <Text fontSize="16px" display="flex" alignItems="center" margin="8px 0px 16px 16px">
          {fakeProps.deliveryAddress}
        </Text>
      </Box>
      <Box
        width="328px"
        height="84px"
        border="1px solid #F1F1F1"
        boxSizing="border-box"
        borderRadius="16px"
        marginBottom="24px"
      >
        <Text
          color="#616161"
          fontSize="16px"
          fontWeight="400"
          display="flex"
          alignItems="center"
          marginTop="16px"
          marginLeft="16px"
        >
          Forma de pago
        </Text>
        {fakeProps.creditCard ? (
          <Text fontSize="16px" display="flex" alignItems="center" margin="8px 0px 16px 16px">
            Tarjeta de Crédito
          </Text>
        ) : (
          <Box display="flex" alignItems="center" margin="8px 0px 16px 16px">
            <IconWallet />
            <Text fontSize="16px" display="flex" alignItems="center" marginLeft="9px">
              Efectivo
            </Text>
          </Box>
        )}
      </Box>
      <Box
        width="328px"
        height="54px"
        border="1px solid #F1F1F1"
        boxSizing="border-box"
        borderRadius="16px"
        marginBottom="24px"
      >
        <Text
          fontSize="16px"
          fontWeight="400"
          display="flex"
          alignItems="center"
          margin="16px"
          justifyContent="space-between"
        >
          Código de descuento
          <Link href="" color="#3870FF">
            Agregar
          </Link>
        </Text>
      </Box>
      <Box
        width="328px"
        height="229px"
        border="1px solid #F1F1F1"
        boxSizing="border-box"
        borderRadius="16px"
        marginBottom="24px"
      >
        <Text
          color="#616161"
          fontSize="16px"
          fontWeight="400"
          display="flex"
          alignItems="center"
          marginTop="16px"
          marginLeft="16px"
        >
          Tu orden
        </Text>
        {fakeProps.discount && (
          <Box
            width="296px"
            height="36px"
            background="#EAF7EE"
            borderRadius="8px"
            border="1px solid #C1E7CB"
            margin="8px 16px 16px 16px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text display="flex">
              {"Estás ahorrando"}
              <Text fontWeight="700" marginRight="2px" marginLeft="2px">
                {formatMoney(fakeProps.discount, CURRENCY_NAME)}
              </Text>
              {"en esta orden"}
            </Text>
          </Box>
        )}
        <Box display="flex" justifyContent="space-between" margin="16px">
          <Text>Sub-Total</Text>
          <Text>{formatMoney(totalNetPrice - fakeProps.discount, CURRENCY_NAME)} </Text>
        </Box>
        <Box display="flex" justifyContent="space-between" margin="16px">
          <Text>Envío</Text>
          <Text textDecoration="line-through">{formatMoney(0, CURRENCY_NAME)}</Text>
        </Box>
        <Divider width="296px" marginLeft="16px" />
        <Box display="flex" justifyContent="space-between" margin="16px" fontWeight="700">
          <Text>Total</Text>
          <Text>{formatMoney(totalNetPrice - fakeProps.discount, CURRENCY_NAME)}</Text>
        </Box>
      </Box>
    </Center>
  );
};
