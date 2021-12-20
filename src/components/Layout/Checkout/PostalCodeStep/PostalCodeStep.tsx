import { ReactElement } from "react";

import { FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from "@chakra-ui/react";

import { IPostalCodeStepProps } from "./IPostalCodeStepProps";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const PostalCodeStep = (props: IPostalCodeStepProps): ReactElement => {
  const { errors, register } = props;
  return (
    <VStack spacing={55}>
      <Text pt={10} fontSize="2xl" fontWeight="600">
        Necesitamos el código postal de tu hogar para verificar tu ubicación.
      </Text>
      <FormControl isInvalid={errors.postalCode !== undefined}>
        <FormLabel>Código postal</FormLabel>
        <Input size="md" errorBorderColor="red.300" type="number" {...register("postalCode")} />
        <FormErrorMessage>{errors.postalCode?.message}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};
