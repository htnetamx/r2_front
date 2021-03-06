import { ReactElement } from "react";

import { FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from "@chakra-ui/react";

import { IPhoneNumberStepProps } from "./IPhoneNumberStepProps";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const PhoneNumberStep = (props: IPhoneNumberStepProps): ReactElement => {
  const { errors, register } = props;
  return (
    <VStack spacing={55}>
      <Text pt={10} fontSize="2xl" fontWeight="600">
        Ingresa tu número de celular para enviarte un código de verificación a tu whatsapp
      </Text>
      <FormControl isInvalid={errors.phone !== undefined}>
        <FormLabel>Número de celular</FormLabel>
        <Input size="md" errorBorderColor="red.300" {...register("phone")} />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};
