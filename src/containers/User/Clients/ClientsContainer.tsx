import React, { ReactElement } from "react";

import { ClientDetail } from "components/User/ClientDetail/ClientDetail";
import { IClientDetailProps } from "components/User/ClientDetail/IClientDetail";
import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";
import { CLIENTS_HEADER, CLIENTS_SUBTITLE, CLIENTS_TITLE } from "constants/userConstant";

import { Container, SimpleGrid, Text } from "@chakra-ui/layout";

/**
 * The User's Clients Container
 * @returns {ReactElement} The User's Clients Container
 */
export const ClientsContainer = (): ReactElement => {
  const clientsSampleObject: IClientDetailProps[] = [
    {
      name: "Viviana García",
      orders: 10,
      lastOrderDate: new Date("December 17, 2021 03:45:00"),
      url: "www.test.com.mx",
    },
    {
      name: "Luis Jímenez",
      orders: 15,
      lastOrderDate: new Date("December 29, 2021 03:45:00"),
      url: "www.test.com.mx",
    },
    {
      name: "Omar Spinosa",
      orders: 20,
      lastOrderDate: new Date("December 26, 2021 03:45:00"),
      url: "www.test.com.mx",
    },
  ];

  const clientsContainerProps = {
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
      <Text fontSize={{ base: "15px", md: "16px", lg: "18px" }} fontWeight="700">
        {CLIENTS_HEADER}
      </Text>
      <Text fontSize={{ base: "15px", md: "16px", lg: "16px" }} fontWeight="400">
        {CLIENTS_TITLE} <b>{CLIENTS_SUBTITLE}</b>
      </Text>
      <SimpleGrid columns={1} spacing={2} mt={10}>
        {clientsSampleObject.map((client, index) => (
          <ClientDetail {...client} key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
