/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ForwardedRef } from "react";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  useColorMode,
  useColorModeValue as mode,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import "./date-picker.css";
import { IDatePickerFieldProps } from "./IDatePickerFieldProps";

export const DatePickerField = React.forwardRef(
  (props: IDatePickerFieldProps, ref: ForwardedRef<any>): React.ReactElement => {
    const { label, error, isRequired, ...rest } = props;
    const isInvalidInput = error !== undefined;
    const isLight = useColorMode().colorMode === "light";
    const errorClass = isInvalidInput ? "picker-error" : "";
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
        <div className={isLight ? `light-theme ${errorClass}` : `dark-theme ${errorClass}`}>
          <ReactDatePicker
            customInput={<Input errorBorderColor="red.300" />}
            yearDropdownItemNumber={15}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            useShortMonthInDropdown
            {...rest}
            ref={ref}
          />
        </div>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
);

DatePickerField.displayName = "DatePickerField";
