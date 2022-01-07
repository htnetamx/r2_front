import React, { ReactElement } from "react";

import { ClientDetail } from "components/User/ClientDetail/ClientDetail";
import { IClientDetailProps } from "components/User/ClientDetail/IClientDetail";
import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";
import { CLIENTS_HEADER, CLIENTS_SUBTITLE, CLIENTS_TITLE, SHARE_URL } from "constants/userConstant";
import IconShareGroup from "styled/icons/Order/ShareGroup";

import { Container, SimpleGrid, Text } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";

import { IClientsContainer } from "./IClientsContainer";

/**
 * The User's Clients Container
 * @returns {ReactElement} The User's Clients Container
 */
export const ClientsContainer = (): ReactElement => {
  const clientsSampleObject: IClientDetailProps[] = [
    {
      name: "Viviana García",
      orders: 10,
      lastOrderDate: new Date("January 4, 2022 03:45:00"),
      url: "www.test.com.mx",
    },
    {
      name: "Luis Jímenez",
      orders: 15,
      lastOrderDate: new Date("January 2, 2022 03:45:00"),
      url: "www.test.com.mx",
    },
    {
      name: "Omar Spinosa",
      orders: 20,
      lastOrderDate: new Date("January 1, 2022 03:45:00"),
      url: "www.test.com.mx",
    },
    {
      name: "Iván Morales",
      orders: 100,
      lastOrderDate: new Date("December 28, 2021 03:45:00"),
      url: "www.test.com.mx",
    },
  ];

  const clientsContainerProps: IClientsContainer = {
    clientDetailProps: clientsSampleObject,
  };

  return (
    <Container
      centerContent={false}
      maxW="container.lg"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
    >
      <ReturnToHome />
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        {CLIENTS_HEADER}
      </Text>
      <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }} fontWeight="400">
        {CLIENTS_TITLE} <b>{CLIENTS_SUBTITLE}</b>
      </Text>
      <SimpleGrid columns={1} spacing={2} mt={5} mb={10}>
        {clientsContainerProps.clientDetailProps.map((client, index) => (
          <ClientDetail {...client} key={index} />
        ))}
      </SimpleGrid>
      <Box textAlign={["center", "right"]}>
        <Button color="white" background="#3870FF" borderRadius="xl" height="44px">
          <IconShareGroup />
          <Text ml="4">{SHARE_URL}</Text>
        </Button>
      </Box>
    </Container>
  );
};
