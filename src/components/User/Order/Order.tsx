import React, { ReactElement } from "react";

import { BiDetail } from "react-icons/bi";

import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";

import { IOrderProps } from "./IOrder";

/**
 * The orders component.
 * @param {IOrderProps} props the component props.
 * @returns { ReactElement } The order description container.
 */
export const Order = (props: IOrderProps): ReactElement => {
  const { customerName, telephone, orderId, total } = props;
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      mb="2"
      mt="3"
      boxShadow="xs"
      p={["1", "1", "1"]}
      rounded="lg"
    >
      <Flex>
        <Box ml="4" mt="1" mb="1">
          <Text fontSize={{ base: "13px", md: "14px", lg: "14px" }} fontWeight="700">
            {"Nombre Cliente"}
          </Text>
          <Text fontSize={{ base: "13px", md: "14px", lg: "13px" }}>{customerName}</Text>
        </Box>
      </Flex>
      <Flex ml="10" mr="10">
        <Box ml="4" mt="1" mb="1">
          <Text fontSize={{ base: "13px", md: "14px", lg: "14px" }} fontWeight="700">
            {"Teléfono"}
          </Text>
          <Text fontSize={{ base: "13px", md: "14px", lg: "13px" }}>{telephone}</Text>
        </Box>
      </Flex>
      <Flex ml="10" mr="10">
        <Box ml="4" mt="1" mb="1">
          <Text fontSize={{ base: "13px", md: "14px", lg: "14px" }} fontWeight="700">
            {"Número de orden:"}
          </Text>
          <Text fontSize={{ base: "13px", md: "14px", lg: "13px" }}>{orderId}</Text>
        </Box>
      </Flex>
      <Flex ml="6" mr="40">
        <Box mt="1" mb="1">
          <Text fontSize={{ base: "13px", md: "14px", lg: "14px" }} fontWeight="700">
            {"Total:"}
          </Text>
          <Text fontSize={{ base: "13px", md: "14px", lg: "13px" }}>${total}</Text>
        </Box>
      </Flex>
      <Spacer />
      <Flex>
        <Box mt="1" mb="1">
          <Button colorScheme="blue" variant="outline" borderRadius="xl">
            <BiDetail /> <Text ml="1">Ver detalle</Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
