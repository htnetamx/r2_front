import { useEffect, useState, ReactElement } from "react";

import { COUNTDOWN_TIMER_SECONDS } from "constants/checkoutConstants";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  HStack,
  PinInput,
  PinInputField,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IVerificationCodeStepProps } from "./IVerificationCodeStepProps";

/**
 * The VerificationCodeStep component.
 * @param {IVerificationCodeStepProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const VerificationCodeStep = (props: IVerificationCodeStepProps): ReactElement => {
  const { errors, register } = props;

  const [seconds, setSeconds] = useState(COUNTDOWN_TIMER_SECONDS);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <VStack spacing={55}>
      <Text pt={10} fontSize="2xl" fontWeight="600">
        Ingresa el codigo de verificación que enviamos a tu whatsapp.
      </Text>
      <Center>
        <FormControl isInvalid={errors.verificationCode !== undefined}>
          <HStack>
            <PinInput size="lg" otp {...(register("verificationCode") as any)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <FormErrorMessage>{errors.verificationCode?.message}</FormErrorMessage>
        </FormControl>
      </Center>
      <Center>
        {seconds === 0 ? (
          <VStack>
            <Text>¿No recibiste el código al whatsapp?</Text>
            <Button variant="ghost">Enviar de nuevo</Button>
          </VStack>
        ) : (
          <Box>
            <Text pb={5}>Cuando termine el tiempo podrá solicitar otro código</Text>
            <Progress size="xs" isIndeterminate />
            <Text pt={2} align="center" fontWeight={700}>
              {seconds} Segundos
            </Text>
          </Box>
        )}
      </Center>
    </VStack>
  );
};
