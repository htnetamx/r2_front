import React, { ReactElement } from "react";

import { BiShare } from "react-icons/bi";

import { Box } from "@chakra-ui/layout";
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
  console.log(new Date(props.lastOrderDate));
  console.log(now);
  const daysSinceLastOrder = daysBetween(lastOrderDate, now);

  // eslint-disable-next-line require-jsdoc
  const getStatus = (daysSinceLastOrder: number) => {
    if (daysSinceLastOrder <= 3) {
      return "🥳 ¡Este cliente es la Neta!";
    } else if (daysSinceLastOrder <= 6) {
      return "😐 ¡Comparte la liga para que siga pidiendo!";
    } else if (daysSinceLastOrder > 6) {
      return "😭 ¡Lo extrañamos, compartele la liga ya! ";
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
            Nombre: <b>{name}</b>
          </Text>
          <Flex direction={["column", "row", "row"]}>
            <Box>
              <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                Pedidos: <b>{orders}</b>
              </Text>
            </Box>
            <Box mr={["0", "4", "14"]} ml={["0", "4", "14"]}>
              <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                Último pedido: <b>Hace {daysSinceLastOrder.toFixed(0)} día</b>
              </Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "10px", md: "11px", lg: "12px" }}>
                {getStatus(daysSinceLastOrder)}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="blue" variant="outline" borderRadius="xl">
            <BiShare /> <Text ml="1"> Compartir liga</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
