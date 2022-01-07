import React, { ReactElement } from "react";

import { useRouter } from "next/router";
import IconHelp from "styled/icons/Menu/Help";
import IconDetail from "styled/icons/Order/Detail";
import IconInvoice from "styled/icons/Order/Invoice";
import { formatDate } from "utils/dateUtils";

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, Spacer } from "@chakra-ui/react";

import { IInvoiceProps } from "./IInvoice";

/**
 * The Invoice component.
 * @returns {ReactElement} the Invoice component.
 * @param {IInvoiceProps} invoiceProps ProfitBanner props
 */
export const Invoice = (invoiceProps: IInvoiceProps): ReactElement => {
  const { name, deliveryDate, orderId } = invoiceProps;
  const router = useRouter();

  return (
    <Box boxShadow="base" p="2" rounded="md" bg="white">
      <Flex direction={["column", "row", "row"]}>
        <Box p="2" mr="4" w={["auto", "auto", "140px"]}>
          <Text>
            <b>Nombre Tienda: </b>
            {name}
          </Text>
        </Box>
        <Box mb={["2", "0"]} ml={["2", "0"]} mt={["0", "2"]} w={["auto", "auto", "160px"]}>
          <Text>
            <b>Fecha de entrega: </b>
            {formatDate(deliveryDate)}
          </Text>
        </Box>
        <Spacer />
        <Box pl="2">
          <Button
            color="#3870FF"
            borderColor="#3870FF"
            variant="outline"
            mr={["2", "4"]}
            borderRadius="16px"
            h={["40px", "50px"]}
          >
            <IconInvoice /> <Text ml="1">Ver factura</Text>
          </Button>
          <Button
            color="#3870FF"
            borderColor="#3870FF"
            variant="outline"
            mr={["2", "4"]}
            borderRadius="16px"
            h={["40px", "50px"]}
            onClick={() => router.push(`/orders/${orderId}`)}
          >
            <IconDetail /> <Text ml="1">Ver órdenes</Text>
          </Button>
          <Button
            color="#3870FF"
            borderColor="#3870FF"
            variant="outline"
            mr="4"
            mt={["2", "0"]}
            mb={["2", "0"]}
            borderRadius="16px"
            h={["40px", "50px"]}
          >
            <IconHelp /> <Text ml="1">Necesito ayuda con esta factura</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
