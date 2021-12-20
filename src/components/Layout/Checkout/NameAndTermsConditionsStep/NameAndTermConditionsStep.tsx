import React, { ReactElement } from "react";

import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { INameAndTermConditionsStepProps } from "./INameAndTermConditionsStepProps";

/**
 * The LogInStep component.
 * @param {ILogInStepProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const NameAndTermConditionsStep = (props: INameAndTermConditionsStepProps): ReactElement => {
  const { errors, register } = props;

  return (
    <VStack spacing={55}>
      <Text pt={10} fontSize="2xl" fontWeight="600">
        Ingresa tus datos para que la tiendita pueda reconocer tus pedidos:
      </Text>
      <FormControl isInvalid={errors.name !== undefined}>
        <FormLabel>Nombre</FormLabel>
        <Input size="md" errorBorderColor="red.300" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.isTermsAccepted !== undefined}>
        <Checkbox errorBorderColor="red.300" {...register("isTermsAccepted")}>
          Acepto Los Terminos Y Condiciones de Neta.mx para crear una nueva cuenta
        </Checkbox>
        <FormErrorMessage>{errors.isTermsAccepted?.message}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};
