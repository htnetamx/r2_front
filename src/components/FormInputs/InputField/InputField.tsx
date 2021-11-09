import * as React from "react";

import {
  useColorModeValue as mode,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { IInputFieldsProps } from "./IInputFieldsProps";

/**
 * The InputField component.
 * @param {IInputFieldsProps} props - The properties passed to the component.
 * @returns {ReactElement} The InputField component.
 **/
export const InputField = React.forwardRef<HTMLInputElement, IInputFieldsProps>(
  (props: IInputFieldsProps, ref): React.ReactElement => {
    const { label, error, disabledAutoComplete, isRequired, ...rest } = props;
    const isInvalidInput = error !== undefined;
    const autoComplete = disabledAutoComplete ? "chrome-off" : "chrome-on";

    return (
      <FormControl position="relative" isInvalid={isInvalidInput} isRequired={isRequired}>
        <FormLabel
          _focus={{
            color: mode("blue.600", "blue.300"),
          }}
          fontWeight="semibold"
          position="absolute"
          color={mode("gray.600", "white")}
          top="-4"
          insetStart="2"
          bg={{
            base: mode("white", "gray.800"),
            md: mode("white", "gray.700"),
          }}
          zIndex={2}
          px="2"
        >
          {label}
        </FormLabel>
        <Input autoComplete={autoComplete} errorBorderColor="red.300" {...rest} ref={ref} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
);
InputField.displayName = "InputField";
