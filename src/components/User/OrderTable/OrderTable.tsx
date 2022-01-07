import React, { ReactElement } from "react";

import { ORDER_PRICE, ORDER_QUANTITY } from "constants/userConstant";

import { Image } from "@chakra-ui/image";
import { Box, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Tr } from "@chakra-ui/react";

import { IObjectProps, IOrderTableProps } from "./IOrderTable";

/**
 * The order table component.
 * @param {IOrderTableProps} props the order table props.
 * @returns { ReactElement } The table component
 *
 */
export const OrderTable = (props: IOrderTableProps): ReactElement => {
  const { objects } = props;
  return (
    <div>
      <Container
        centerContent={false}
        maxW="976px"
        boxShadow="md"
        rounded="md"
        bg="white"
        display={["none", "block", "block", "block"]}
      >
        <Box maxHeight="320px" overflow="auto">
          <Table variant="simple">
            <Tbody>
              {objects.map((object: IObjectProps, key: number) => (
                <Tr key={key}>
                  <Td>
                    <Box display="flex">
                      <Image borderRadius="lg" width="40px" src={object.image} mr="4" />
                      <Text fontWeight="700">{object.name}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Text fontWeight="700">{ORDER_QUANTITY} </Text>
                    {object.quantity}
                  </Td>
                  <Td>
                    <Text fontWeight="700">{ORDER_PRICE} </Text>${object.price}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box align="right" mr="8" mt="4" pb="4">
          <Text fontWeight="700" fontSize="30px" color="#3870FF">
            Total: $500
          </Text>
        </Box>
      </Container>
      {/* <Container maxW="container.lg"> */}
      <Box>
        <Box maxHeight="210px" overflow="auto" display={["block", "none", "none", "none"]}>
          {objects.map((object: IObjectProps, key: number) => (
            <Box key={key} mb="4">
              <Divider mb="4" borderColor="#9F9F9F" />
              <Flex ml="4">
                <Box display="flex">
                  <Image borderRadius="lg" width="40px" src={object.image} mr="4" />
                  <Text fontWeight="700" fontSize="19px">
                    {object.name}
                  </Text>
                </Box>
              </Flex>
              <Grid ml="16" mt="2" h="40px" templateColumns="repeat(4, 1fr)">
                <GridItem colSpan={2}>
                  <Text fontWeight="700" fontSize="17px">
                    {ORDER_QUANTITY}
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontWeight="700" fontSize="17px">
                    {ORDER_PRICE}
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text>{object.quantity}</Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text>${object.price}</Text>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
        <Box align="right" mr="8" mt="4">
          <Text fontWeight="700" fontSize="30px" color="#3870FF">
            Total: $500
          </Text>
        </Box>
      </Box>

      {/* </Container> */}
    </div>
  );
};
