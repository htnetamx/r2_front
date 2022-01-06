import React, { ReactElement } from "react";

import { BiShare } from "react-icons/bi";

import {
  CLIENT_LAST_ORDER,
  CLIENT_NAME,
  CLIENT_ORDERS,
  CLIENT_STATUS1,
  CLIENT_STATUS2,
  CLIENT_STATUS3,
  CLIENT_URL,
} from "constants/userConstant";

import { Box, TextProps } from "@chakra-ui/layout";
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
   * Gets user status based on last order
   * @param {number} daysSinceLastOrder days since last order. Ex: 12
   * @returns {Text} Text ChakraUI component.
   */
  const getStatus = (daysSinceLastOrder: number): TextProps | string => {
    if (daysSinceLastOrder <= 3 && daysSinceLastOrder >= 0) {
      return (
        <Text fontSize={{ base: "14px", md: "11px", lg: "12px" }} color="#3BAE5F" fontWeight="700">
          {CLIENT_STATUS1}
        </Text>
      );
    } else if (daysSinceLastOrder <= 6) {
      return (
        <Text fontSize={{ base: "14px", md: "11px", lg: "12px" }} color="#FF5C00" fontWeight="700">
          {CLIENT_STATUS2}
        </Text>
      );
    } else if (daysSinceLastOrder > 6) {
      return (
        <Text fontSize={{ base: "14px", md: "11px", lg: "12px" }} color="#FF0300" fontWeight="700">
          {CLIENT_STATUS3}
        </Text>
      );
    }
    return "";
  };

  // eslint-disable-next-line require-jsdoc
  function treatAsUTC(date: Date): Date {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }

  // eslint-disable-next-line require-jsdoc
  function daysBetween(startDate: Date, endDate: Date) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate).valueOf() - treatAsUTC(startDate).valueOf()) / millisecondsPerDay;
  }

  return (
    <Box boxShadow="xs" p="4" rounded="md" bg="white">
      <Flex direction={["column", "row", "row"]}>
        <Box>
          <Text>
            {CLIENT_NAME} <b>{name}</b>
          </Text>
          <Flex direction={["column", "row", "row"]} mt="1">
            <Box>
              <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }}>
                {CLIENT_ORDERS} <b>{orders}</b>
              </Text>
            </Box>
            <Box mr={["0", "4", "14"]} ml={["0", "4", "14"]}>
              <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }}>
                {CLIENT_LAST_ORDER}
                <b>
                  Hace {daysSinceLastOrder.toFixed(0)} día
                  {Number(daysSinceLastOrder.toFixed(0)) > 1 && "s"}
                </b>
              </Text>
            </Box>
            <Box mt={["2", "0"]} mb={["3", "0"]}>
              {getStatus(daysSinceLastOrder)}
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="blue" variant="outline" borderRadius="xl">
            <BiShare /> <Text ml="1"> {CLIENT_URL}</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
