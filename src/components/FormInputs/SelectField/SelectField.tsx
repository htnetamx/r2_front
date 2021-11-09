import * as React from "react";

import {
  useColorModeValue as mode,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { ISelectFieldProps } from "./ISelectFieldProps";

export const SelectField = React.forwardRef<HTMLSelectElement, ISelectFieldProps>(
  (props: ISelectFieldProps, ref) => {
    const { label, error, options, isRequired, ...rest } = props;
    const isInvalidInput = error !== undefined;

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
        <Select ref={ref} errorBorderColor="red.300" {...rest}>
          {options &&
            options.map((option, index) => (
              <option key={`${option.key}-${index}`} value={option.key}>
                {option.text}
              </option>
            ))}
        </Select>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
);
SelectField.displayName = "SelectField";
