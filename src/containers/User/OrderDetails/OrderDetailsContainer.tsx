import React, { ReactElement } from "react";

import { BsChevronLeft } from "react-icons/bs";

import { IOrderTableProps } from "components/User/OrderTable/IOrderTable";
import { OrderTable } from "components/User/OrderTable/OrderTable";
import { ISplitCardProps } from "components/User/SplitCard/ISplitCard";
import { SplitCard } from "components/User/SplitCard/SplitCard";
import { TO_BACK } from "constants/userConstant";
import IconDetailOrder from "styled/icons/Order/OrderNumber";
import IconDetailTelephone from "styled/icons/Order/Telephone";
import IconDetailUser from "styled/icons/Order/User";

import { Container, Flex, Text } from "@chakra-ui/layout";

import { IOrderDetailsContainerProps } from "./IOrderDetailsContainer";

/**
 * The order details container.
 * @param {IOrderDetailsContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderDetailsContainer = (props: IOrderDetailsContainerProps): ReactElement => {
  const { orderId } = props;

  const splitCardObject: ISplitCardProps = {
    title1: "Nombre cliente: ",
    subtitle1: "Andrea",
    title2: "Teléfono:  ",
    subtitle2: "53455433",
    title3: "Número de orden: ",
    subtitle3: orderId ? orderId : "",
    icon1: <IconDetailUser boxSize={[8, 9, 10, 12]} />,
    icon2: <IconDetailTelephone boxSize={[8, 9, 10, 12]} />,
    icon3: <IconDetailOrder boxSize={[8, 9, 10, 12]} />,
  };

  const objectsSampleObject: IOrderTableProps = {
    objects: [
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000045_papel-higienico-petalo-12-rollos-con-234-hojas-dobles-cu_415.png",
        name: "Lechuga Sangria Unidad",
        quantity: 6,
        price: 300,
      },
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000143_mayonesa-mccormick-con-jugo-de-limon-390-gr_415.jpeg",
        name: "Azúcar",
        quantity: 2,
        price: 30,
      },
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000143_mayonesa-mccormick-con-jugo-de-limon-390-gr_415.jpeg",
        name: "Mayonesa McCormick",
        quantity: 1,
        price: 30,
      },
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000692_cerveza-carta-blanca-6-pack-laton-473ml_415.jpeg",
        name: "Chocolate Delice",
        quantity: 10,
        price: 100,
      },
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000692_cerveza-carta-blanca-6-pack-laton-473ml_415.jpeg",
        name: "Six Pack",
        quantity: 5,
        price: 10000,
      },
    ],
  };

  return (
    <div>
      <Container centerContent={false} maxW="container.lg" p="6">
        <Flex justify={{ base: "start", md: "start" }} onClick={() => window.history.back()} mb="4">
          <BsChevronLeft fontSize="20px" color={"#3870FF"} fontWeight="700" cursor={"pointer"} />
          <Text color={"#3870FF"} fontWeight="700" fontSize="16px" cursor={"pointer"}>
            {TO_BACK}
          </Text>
        </Flex>
        <SplitCard {...splitCardObject} />
      </Container>
      <OrderTable {...objectsSampleObject} />
    </div>
  );
};
