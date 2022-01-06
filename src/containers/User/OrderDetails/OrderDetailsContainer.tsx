import React, { ReactElement } from "react";

import { BsChevronLeft } from "react-icons/bs";

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
    icon1: <IconDetailUser boxSize={[8, 12]} />,
    icon2: <IconDetailTelephone boxSize={[8, 12]} />,
    icon3: <IconDetailOrder boxSize={[8, 12]} />,
  };

  return (
    <div>
      <Container
        centerContent={false}
        maxW="container.lg"
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
      >
        <Flex justify={{ base: "start", md: "start" }} onClick={() => window.history.back()} mb="4">
          <BsChevronLeft fontSize="20px" color={"#3870FF"} fontWeight="700" cursor={"pointer"} />
          <Text color={"#3870FF"} fontWeight="700" fontSize="16px" cursor={"pointer"}>
            {TO_BACK}
          </Text>
        </Flex>
        <SplitCard {...splitCardObject} />
        <OrderTable />
      </Container>
    </div>
  );
};
