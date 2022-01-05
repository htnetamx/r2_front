import React, { ReactElement } from "react";

import { BiPencil } from "react-icons/bi";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Grid, GridItem } from "@chakra-ui/layout";
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
      <Grid
        // h={[450, 250]}
        templateColumns="repeat(5, 1fr)"
        gap={4}
        ml={[0, 14]}
        mr={[0, 14]}
        mt={[4, 4]}
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
        <GridItem colSpan={[12, 2]} h={[16, 20]} colStart={[0, 4]} mt={[2, 0]}>
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
        <GridItem colSpan={[12, 2]} h={[16, 20]} mt={[2, 0]}>
          <FormControl isReadOnly>
            <FormLabel htmlFor="name">Teléfono</FormLabel>
            <Input id="phoneNumber" placeholder={phoneNumber} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[12, 2]} colStart={[0, 4]} h={[16, 20]} mt={[2, 0]}>
          <FormControl isReadOnly>
            <FormLabel htmlFor="storeName">Nombre de la tienda</FormLabel>
            <Input id="storeName" placeholder={storeName} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[12, 2]} colStart={[0, 0]} h={[16, 20]} mt={[2, 0]}>
          <FormControl isReadOnly>
            <FormLabel htmlFor="url">Liga</FormLabel>
            <Input id="url" placeholder={url} />
          </FormControl>
        </GridItem>
      </Grid>
      <Center>
        <Button
          colorScheme="gray"
          mt="12"
          borderRadius="xl"
          size="md"
          height="48px"
          width={["100%", "250px"]}
        >
          Guardar cambios
        </Button>
      </Center>
    </div>
  );
};
