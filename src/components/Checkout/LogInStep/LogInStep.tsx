import React, { ReactElement } from "react";

import { BiBell } from "react-icons/bi";

import { Box, Checkbox, Circle, Input, Stack, Text } from "@chakra-ui/react";

import { ILogInStepProps } from "./ILogInStepProps";

/**
 * The LogInStep component.
 * @param {ILogInStepProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const LogInStep = (props: ILogInStepProps): ReactElement => {
  return (
    <Stack spacing={3}>
      <Input placeholder="Nombre" size="md" />
      <Input placeholder="Teléfono" size="md" />
      <Box bg="#EAF7EE" lineHeight="1px" rounded="md">
        <Circle bg="#C1E7CB">
          <BiBell />
          <Text fontSize="sm">Te enviaremos un código de verificación al Whatsapp </Text>
        </Circle>
      </Box>
      <Checkbox>Acepto Los Terminos Y Condiciones de Neta.mx para crear una nueva cuenta</Checkbox>
    </Stack>
  );
};
