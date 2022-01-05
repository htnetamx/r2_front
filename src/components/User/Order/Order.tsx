import React, { ReactElement } from "react";

import { BiDetail } from "react-icons/bi";

import {
  ORDER_DETAIL,
  ORDER_NUMBER,
  ORDER_STORE,
  ORDER_TELEPHONE,
  ORDER_TOTAL,
} from "constants/userConstant";

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
      <Box ml="4" mt="1" mb="1" w={["auto", "auto", "150px"]}>
        <Text fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontWeight="500">
          <b>{ORDER_STORE}</b>
          {/* <Text fontSize={{ base: "13px", md: "14px", lg: "14px" }} fontWeight="500"> */}
          {customerName}
          {/* </Text> */}
        </Text>
      </Box>
      <Flex ml={["0", "0", "10"]} mr={["0", "0", "10"]}>
        <Box ml="4" mt="1" mb="1">
          <Text fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontWeight="500">
            <b>{ORDER_TELEPHONE}</b>
            {telephone}
          </Text>
        </Box>
      </Flex>
      <Flex ml={["0", "0", "10"]} mr={["0", "0", "10"]}>
        <Box ml="4" mt="1" mb="1">
          <Text fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontWeight="500">
            <b>{ORDER_NUMBER}</b>
            {orderId}
          </Text>
        </Box>
      </Flex>
      <Flex ml={["0", "0", "6"]} mr="40">
        <Box ml="4" mt="1" mb="1">
          <Text fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontWeight="500">
            <b>{ORDER_TOTAL}</b>${total}
          </Text>
        </Box>
      </Flex>
      <Spacer />
      <Flex ml={["4", "0"]}>
        <Box mt="1" mb="1">
          <Button colorScheme="blue" variant="outline" borderRadius="16px" h={["40px", "50px"]}>
            <BiDetail /> <Text ml="1">{ORDER_DETAIL}</Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
