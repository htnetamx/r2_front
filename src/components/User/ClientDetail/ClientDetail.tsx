import React, { ReactElement } from "react";

import {
  CLIENT_LAST_ORDER,
  CLIENT_NAME,
  CLIENT_ORDERS,
  CLIENT_STATUS1,
  CLIENT_STATUS2,
  CLIENT_STATUS3,
  CLIENT_STATUS_EMOJI1,
  CLIENT_STATUS_EMOJI2,
  CLIENT_STATUS_EMOJI3,
  CLIENT_URL,
} from "constants/userConstant";
import IconShare from "styled/icons/Order/Share";
import { daysBetween } from "utils/dateUtils";

import { Box, FlexProps } from "@chakra-ui/layout";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";

import { IClientDetailProps } from "./IClientDetail";

/**
 * The ClientDetail component.
 * @returns {ReactElement} the Client's details component.
 * @param {IClientDetailProps} props ClientDetail props
 */
export const ClientDetail = (props: IClientDetailProps): ReactElement => {
  const { name, orders, lastOrderDate } = props;
  const now = new Date();
  const daysSinceLastOrder = daysBetween(lastOrderDate, now);

  /**
   * Gets user status in Text based on last order
   * @param {number} daysSinceLastOrder days since last order. Ex: 12
   * @returns {FlexProps} Text ChakraUI component.
   */
  const getStatus = (daysSinceLastOrder: number): string | FlexProps => {
    if (daysSinceLastOrder <= 3 && daysSinceLastOrder >= 0) {
      return (
        <Flex>
          <Text mr="2">{CLIENT_STATUS_EMOJI1}</Text>
          <Text
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            color="#3BAE5F"
            fontWeight="700"
          >
            {CLIENT_STATUS1}
          </Text>
        </Flex>
      );
    } else if (daysSinceLastOrder <= 6) {
      return (
        <Flex direction={["row", "row"]}>
          <Box p={["2", "0"]} mr={["0", "2"]}>
            {CLIENT_STATUS_EMOJI2}
          </Box>
          <Box>
            <Text
              fontSize={{ base: "14px", md: "14px", lg: "14px" }}
              color="#ff5c00"
              fontWeight="700"
            >
              {CLIENT_STATUS2}
            </Text>
          </Box>
        </Flex>
      );
    } else if (daysSinceLastOrder > 6) {
      return (
        <Flex direction={["row", "row"]}>
          <Box p={["2", "0"]} mr={["0", "2"]}>
            {CLIENT_STATUS_EMOJI3}
          </Box>
          <Box>
            <Text
              fontSize={{ base: "14px", md: "14px", lg: "14px" }}
              color="#FF0300"
              fontWeight="700"
            >
              {CLIENT_STATUS3}
            </Text>
          </Box>
        </Flex>
      );
    }
    return "";
  };

  return (
    <Box boxShadow="xs" p="4" rounded="md" bg="white">
      <Flex direction={["column", "column", "row", "row"]}>
        <Box>
          <Text fontSize={{ base: "18px", md: "14px", lg: "14px" }}>
            {CLIENT_NAME} <b>{name}</b>
          </Text>
          <Flex direction={["column", "row", "row"]} mt="1">
            <Box w="100px">
              <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }}>
                {CLIENT_ORDERS} <b>{orders}</b>
              </Text>
            </Box>
            <Box mr={["0", "4", "13"]} ml={["0", "4", "14"]} w="200px">
              <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }}>
                {CLIENT_LAST_ORDER}
                <b>
                  Hace {daysSinceLastOrder.toFixed(0)} día
                  {Number(daysSinceLastOrder.toFixed(0)) > 1 && "s"}
                </b>
              </Text>
            </Box>
            <Box mt={["2", "0"]} mb={["3", "0"]} w={["180px", "220px", "180px", "auto"]}>
              {getStatus(daysSinceLastOrder)}
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Button color="#3870FF" borderColor="#3870FF" variant="outline" borderRadius="xl">
            <IconShare /> <Text ml="2"> {CLIENT_URL}</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
