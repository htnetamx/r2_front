import React, { ReactElement } from "react";

import { IOrderProps } from "components/User/Order/IOrder";
import { Order } from "components/User/Order/Order";
import { OrderStatus } from "components/User/OrderStatus/OrderStatus";
import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";
import { ISplitCardProps } from "components/User/SplitCard/ISplitCard";
import { SplitCard } from "components/User/SplitCard/SplitCard";
import { ORDERS_HEADER, ORDERS_STATUS, ORDERS_TITLE, YOUR_ORDERS } from "constants/userConstant";
import IconBasket from "styled/icons/Order/Basket";
import IconNeta from "styled/icons/Order/Neta";
import IconOrder from "styled/icons/Order/Order";

import { Container, Text } from "@chakra-ui/layout";

import { IOrderContainerProps } from "./IOrdersContainer";

/**
 * The orders container.
 * @param {IOrderContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderContainer = (props: IOrderContainerProps): ReactElement => {
  const {} = props;

  const splitCardObject: ISplitCardProps = {
    title1: "Total vendido: ",
    subtitle1: "$3.420",
    title2: "Total órdenes:  ",
    subtitle2: "6",
    title3: "Total a pagar a Neta: ",
    subtitle3: "$3420",
    icon1: <IconBasket boxSize={[8, 9, 10, 12]} />,
    icon2: <IconOrder boxSize={[8, 9, 10, 12]} />,
    icon3: <IconNeta boxSize={[8, 9, 10, 12]} />,
  };

  const orderSampleObject: IOrderProps[] = [
    {
      customerName: "Andrea",
      telephone: "55823492",
      orderId: "210455",
      total: 20000,
      items: [
        {
          name: "Lechuga Sangria Unidad",
          quantity: 6,
          price: 300,
        },
        {
          name: "Lechuga Sangria Unidad",
          quantity: 6,
          price: 300,
        },
      ],
    },
    {
      customerName: "Pedro",
      telephone: "55823492",
      orderId: "210455",
      total: 1400,
      items: [],
    },
    {
      customerName: "Sara",
      telephone: "55823492",
      orderId: "210455",
      total: 20,
      items: [],
    },
    {
      customerName: "Alejandro",
      telephone: "55823492",
      orderId: "210455",
      total: 200,
      items: [],
    },
    {
      customerName: "Sara",
      telephone: "55823492",
      orderId: "210455",
      total: 0,
      items: [],
    },
  ];

  return (
    <Container
      centerContent={false}
      maxW="container.lg"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
    >
      <ReturnToHome />
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        {ORDERS_HEADER}
      </Text>
      <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }} fontWeight="400">
        {ORDERS_TITLE}
      </Text>
      <SplitCard {...splitCardObject} />
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        {ORDERS_STATUS}
      </Text>
      <OrderStatus />
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        {YOUR_ORDERS}
      </Text>
      {orderSampleObject.map((order, key) => (
        <Order {...order} key={key} />
      ))}
    </Container>
  );
};
