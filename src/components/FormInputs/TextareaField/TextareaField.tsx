import * as React from "react";

import {
  useColorModeValue as mode,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import { ITextareaFieldProps } from "./ITextareaFieldProps";

/**
 * The TextAreaField component.
 * @param {ITextAreaFieldsProps} props - The properties passed to the component.
 * @returns {ReactElement} The TextAreaField component.
 **/
export const TextareaField = React.forwardRef<HTMLTextAreaElement, ITextareaFieldProps>(
  (props: ITextareaFieldProps, ref): React.ReactElement => {
    const { label, error, disabledAutoComplete, isRequired, ...rest } = props;
    const isInvalidTextArea = error !== undefined;
    const autoComplete = disabledAutoComplete ? "chrome-off" : "chrome-on";

    return (
      <FormControl position="relative" isInvalid={isInvalidTextArea} isRequired={isRequired}>
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
        <Textarea autoComplete={autoComplete} errorBorderColor="red.300" {...rest} ref={ref} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
);
TextareaField.displayName = "TextareaField";
