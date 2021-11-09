import { maskArray } from "react-text-mask";

import { InputProps } from "@chakra-ui/react";

import { IFieldProps } from "../IFieldProps";

export interface IInputFieldsProps extends InputProps, IFieldProps {
  /**
   * Input mask
   * @field
   */
  mask?: maskArray | ((value: string) => maskArray) | undefined;
}
