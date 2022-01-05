import React, { ReactElement } from "react";

import { BiDetail, BiHelpCircle } from "react-icons/bi";

import { useRouter } from "next/router";

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
            {new Date(deliveryDate).toDateString()}
          </Text>
        </Box>
        <Spacer />
        <Box pl="2">
          <Button
            colorScheme="blue"
            variant="outline"
            mr={["2", "4"]}
            borderRadius="16px"
            h={["40px", "50px"]}
          >
            <BiDetail /> <Text ml="1">Ver factura</Text>
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            mr={["2", "4"]}
            borderRadius="16px"
            h={["40px", "50px"]}
            onClick={() => router.push(`/orders/${orderId}`)}
          >
            <BiDetail /> <Text ml="1">Ver órdenes</Text>
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            mr="4"
            mt={["2", "0"]}
            mb={["2", "0"]}
            borderRadius="16px"
            h={["40px", "50px"]}
          >
            <BiHelpCircle /> <Text ml="1">Necesito ayuda con esta factura</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
    // <Box boxShadow="xs" p="4" rounded="md" bg="white">
    //   <Grid templateColumns="repeat(1, 1fr)">
    //     <GridItem colStart={1}>
    //       <Text>Nombre Tienda: {name}</Text>
    //     </GridItem>
    //     <GridItem colStart={2} colEnd={3}>
    //       <Text>Fecha de entrega: {new Date(deliveryDate).toDateString()}</Text>
    //     </GridItem>
    //     <GridItem colStart={3} colEnd={3}>
    //       <Button colorScheme="blue" variant="outline">
    //         <IconButton variant="ghost" aria-label="add" icon={<BiDetail />} />
    //         Ver órdenes
    //       </Button>
    //     </GridItem>
    //     {/* <GridItem colStart={3} colEnd={3}>
    //       <Button colorScheme="blue" variant="outline">
    //         <IconButton variant="ghost" aria-label="add" icon={<BiHelpCircle />} />
    //         Necesito ayuda con esta factura
    //       </Button>
    //     </GridItem> */}
    //   </Grid>
    // </Box>
  );
};
