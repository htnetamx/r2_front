import React, { ReactElement } from "react";

import { Image } from "@chakra-ui/image";
import { Box, Container, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Tr } from "@chakra-ui/react";

//props: IOrderTableProps
/**
 * The order table component.
 * @returns { ReactElement } The table component
 */
export const OrderTable = (): ReactElement => {
  const orderSampleObject: any = {
    customerName: "Andrea",
    telephone: "55823492",
    orderId: "210455",
    total: 400,
    items: [
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000045_papel-higienico-petalo-12-rollos-con-234-hojas-dobles-cu_415.png",
        name: "Lechuga Sangria Unidad",
        quantity: 6,
        price: 300,
      },
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000143_mayonesa-mccormick-con-jugo-de-limon-390-gr_415.jpeg",
        name: "Azúcar",
        quantity: 2,
        price: 30,
      },
      {
        image:
          "https://testinglab.netamx.app/images/thumbs/0000692_cerveza-carta-blanca-6-pack-laton-473ml_415.jpeg",
        name: "Chocolate Delice",
        quantity: 10,
        price: 100,
      },
    ],
  };

  return (
    <div>
      <Container
        centerContent={false}
        maxW="container.lg"
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
      >
        <Table variant="simple">
          <Tbody>
            {orderSampleObject.items.map((item: any, key: number) => (
              <Tr key={key}>
                <Td>
                  <Box display="flex">
                    <Image borderRadius="lg" width="40px" src={item.image} mr="4" />
                    <Text fontWeight="700">{item.name}</Text>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="700">Cantidad </Text>
                  {item.quantity}
                </Td>
                <Td>
                  <Text fontWeight="700">Precio unitario </Text>${item.price}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
};
