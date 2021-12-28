/* eslint-disable require-jsdoc */
import React, { ReactElement } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { FormControl, FormErrorMessage, FormLabel, Text, VStack } from "@chakra-ui/react";

import { IPhoneNumberStepProps } from "./IPhoneNumberStepProps";
import "react-phone-input-2/lib/style.css";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const PhoneNumberStep = (props: IPhoneNumberStepProps): ReactElement => {
  const { errors, control } = props;

  return (
    <VStack spacing={55}>
      <Text pt={10} fontSize="2xl" fontWeight="600">
        Ingresa tu número de celular para enviarte un código de verificación a tu whatsapp
      </Text>
      <FormControl isInvalid={errors.phone !== undefined}>
        <FormLabel>Número de celular</FormLabel>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              inputStyle={{ width: "100%", height: "40px", fontSize: "1rem" }}
              country={"mx"}
              value={value}
              onChange={onChange}
            />
          )}
        />
        {errors["phone"] && <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>}
      </FormControl>
    </VStack>
  );
};
