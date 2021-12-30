import React, { ReactElement } from "react";

import { BiPencil } from "react-icons/bi";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Button, Center } from "@chakra-ui/react";

import { IMyInfoFormProps } from "./IMyInfoForm";

/**
 * The MyInfoForm component.
 * @returns {ReactElement} the MyInfoForm component.
 * @param {IMyInfoFormProps} myInfoFormProps ProfitBanner props
 */
export const MyInfoForm = (myInfoFormProps: IMyInfoFormProps): ReactElement => {
  const { name, address, phoneNumber, storeName, url } = myInfoFormProps;
  return (
    <div>
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        Mis datos
      </Text>
      <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }} fontWeight="400">
        Recuerda que solo puedes editar <b>nombre y dirección.</b>
      </Text>
      <SimpleGrid columns={[2, null, 3]} spacing="40px"></SimpleGrid>
      <Grid
        // h={[450, 250]}
        templateColumns="repeat(5, 1fr)"
        gap={4}
        ml={[0, 14]}
        mr={[14]}
        mt={[0, 4]}
      >
        <GridItem colSpan={[12, 2]} h={[16, 20]}>
          <FormControl>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <InputGroup size="md">
              <Input id="name" value={name} />
              <InputRightElement>
                <BiPencil color="#3870FF" />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[12, 2]} h={[16, 20]} colStart={[0, 4]}>
          <FormControl>
            <FormLabel htmlFor="address">Dirección</FormLabel>
            <InputGroup size="md">
              <Input id="address" value={address} />
              <InputRightElement>
                <BiPencil color="#3870FF" />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[12, 2]} h={[16, 20]}>
          <FormControl isReadOnly>
            <FormLabel htmlFor="name">Teléfono</FormLabel>
            <Input id="phoneNumber" placeholder={phoneNumber} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[12, 2]} colStart={[0, 4]} h={[16, 20]}>
          <FormControl isReadOnly>
            <FormLabel htmlFor="storeName">Nombre de la tienda</FormLabel>
            <Input id="storeName" placeholder={storeName} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[12, 2]} colStart={[0, 0]} h={[16, 20]}>
          <FormControl isReadOnly>
            <FormLabel htmlFor="url">Liga</FormLabel>
            <Input id="url" placeholder={url} />
          </FormControl>
        </GridItem>
      </Grid>
      <Center>
        <Button colorScheme="gray" mt="12" borderRadius="xl" size="md" height="48px" width="250px">
          Guardar cambios
        </Button>
      </Center>
    </div>
  );
};
