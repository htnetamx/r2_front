import React, { ReactElement } from "react";

import { useForm } from "react-hook-form";

import { SAVE_CHANGES, USER_STORE_NAME, USER_TELEPHONE, USER_URL } from "constants/userConstant";
import { InfoFormValidationSchema } from "dataflows/InfoForm/InfoFormValidationSchema";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Button, Center } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { AddressContainer } from "./AddressContainer/AddressContainer";
import { IMyInfoFormProps, PartialIMyInfoFormProps } from "./IMyInfoForm";
import { NameContainer } from "./NameContainer/NameContainer";

/**
 * The MyInfoForm component.
 * @returns {ReactElement} the MyInfoForm component.
 * @param {IMyInfoFormProps} myInfoFormProps ProfitBanner props
 */
export const MyInfoForm = (myInfoFormProps: IMyInfoFormProps): ReactElement => {
  const { name, address, phoneNumber, storeName, url } = myInfoFormProps;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      address,
      name,
    },
    resolver: yupResolver(InfoFormValidationSchema),
  });

  /**
   * Handle form submit: update user's name & address
   * @param {PartialIMyInfoFormProps} userInfo the user's name & address
   * @returns {void}
   */
  const onSubmit = (userInfo: PartialIMyInfoFormProps) => {
    console.log(userInfo);
    return userInfo.address;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          // h={[450, 250]}
          templateColumns="repeat(5, 1fr)"
          gap={4}
          ml={[0, 14]}
          mr={[0, 14]}
          mt={[4, 4]}
        >
          <GridItem colSpan={[12, 12, 2]} h={[16, 20]}>
            <NameContainer errors={errors} register={register} />
          </GridItem>
          <GridItem colSpan={[12, 12, 2]} h={[16, 20]} colStart={[0, 0, 4]} mt={[2, 0]}>
            <AddressContainer errors={errors} register={register} />
          </GridItem>
          <GridItem colSpan={[12, 12, 2]} h={[16, 20]} mt={[2, 0]}>
            <FormControl isReadOnly>
              <FormLabel htmlFor="telephone">{USER_TELEPHONE}</FormLabel>
              <Input id="phoneNumber" placeholder={phoneNumber} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[12, 12, 2]} colStart={[0, 0, 4]} h={[16, 20]} mt={[2, 0]}>
            <FormControl isReadOnly>
              <FormLabel htmlFor="storeName">{USER_STORE_NAME}</FormLabel>
              <Input id="storeName" placeholder={storeName} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[12, 12, 2]} colStart={[0, 0]} h={[16, 20]} mt={[2, 0]}>
            <FormControl isReadOnly>
              <FormLabel htmlFor="url">{USER_URL}</FormLabel>
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
            type="submit"
          >
            {SAVE_CHANGES}
          </Button>
        </Center>
      </form>
    </div>
  );
};
