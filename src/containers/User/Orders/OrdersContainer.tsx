import React, { ReactElement } from "react";

import { IOrderProps } from "components/User/Order/IOrder";
import { Order } from "components/User/Order/Order";
import { OrderStatus } from "components/User/OrderStatus/OrderStatus";
import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";
import { ISplitCardProps } from "components/User/SplitCard/ISplitCard";
import { SplitCard } from "components/User/SplitCard/SplitCard";

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
  };

  const orderSampleObject: IOrderProps[] = [
    {
      customerName: "Andrea",
      telephone: "55823492",
      orderId: "210455",
      total: 400,
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
      total: 400,
      items: [],
    },
    {
      customerName: "Sara",
      telephone: "55823492",
      orderId: "210455",
      total: 0,
      items: [],
    },
    {
      customerName: "Sara",
      telephone: "55823492",
      orderId: "210455",
      total: 0,
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
        ¡Hola, Abarrotes Macías!
      </Text>
      <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }} fontWeight="400">
        Este es el detalle de tus ordenes del día 16/12/2021.
      </Text>
      <SplitCard {...splitCardObject} />
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        Estado del pedido
      </Text>
      <OrderStatus />
      <Text fontSize={{ base: "15px", md: "16px", lg: "18px" }} fontWeight="700">
        Tus ordenes
      </Text>
      {orderSampleObject.map((order, key) => (
        <Order {...order} key={key} />
      ))}
    </Container>
  );
};
