import React, { ReactElement } from "react";

import { BiBell } from "react-icons/bi";

import {
  Box,
  Checkbox,
  Circle,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ILogInStepProps } from "./ILogInStepProps";

/**
 * The LogInStep component.
 * @param {ILogInStepProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const LogInStep = (props: ILogInStepProps): ReactElement => {
  const { errors, register } = props;

  return (
    <Stack spacing={3}>
      <FormControl>
        <Input placeholder="Nombre" size="md" errorBorderColor="red.300" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <Input placeholder="Teléfono" size="md" errorBorderColor="red.300" {...register("phone")} />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>
      <Box bg="#EAF7EE" lineHeight="1px" rounded="md" errorBorderColor="red.300">
        <Circle bg="#C1E7CB">
          <BiBell />
        </Circle>
        <Text fontSize="sm">Te enviaremos un código de verificación al Whatsapp </Text>
      </Box>
      <FormControl>
        <Checkbox errorBorderColor="red.300" {...register("isTermsAccepted")}>
          Acepto Los Terminos Y Condiciones de Neta.mx para crear una nueva cuenta
        </Checkbox>
        <FormErrorMessage>{errors.isTermsAccepted?.message}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
};
