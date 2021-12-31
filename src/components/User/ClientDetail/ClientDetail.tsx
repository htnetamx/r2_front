import React, { ReactElement } from "react";

import { BiShare } from "react-icons/bi";

import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { Button, IconButton, Text } from "@chakra-ui/react";

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
  function treatAsUTC(date: any) {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }
  // eslint-disable-next-line require-jsdoc
  function daysBetween(startDate: any, endDate: any) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
  }

  return (
    <Box boxShadow="xs" p="4" rounded="md" bg="white">
      <Grid templateColumns="repeat(1, 1fr)">
        <GridItem colStart={1}>
          <Text>
            Nombre: <b>{name}</b>
          </Text>
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colStart={1}>
              <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                Pedidos: <b>{orders}</b>
              </Text>
            </GridItem>
            <GridItem colStart={2} colEnd={3}>
              <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                Último pedido: <b>Hace {daysSinceLastOrder.toFixed(0)} día</b>
              </Text>
            </GridItem>
            <GridItem colStart={3} colEnd={3}>
              <Text fontSize={{ base: "10px", md: "11px", lg: "12px" }}>
                {getStatus(daysSinceLastOrder)}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colStart={3}>
          <Button colorScheme="blue" variant="outline">
            <IconButton variant="ghost" aria-label="add" icon={<BiShare />} />
            Compartir liga
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
