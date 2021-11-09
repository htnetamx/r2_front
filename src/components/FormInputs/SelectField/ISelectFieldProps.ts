import { IDisplayable } from "components/Interfaces/IDisplayable";

import { SelectFieldProps as SelectProps } from "@chakra-ui/react";

import { IFieldProps } from "../IFieldProps";

export interface ISelectFieldProps extends SelectProps, IFieldProps {
  /**
   * Select options.
   * @type {IDisplayable[]}
   */
  options?: IDisplayable<number>[] | IDisplayable<string>[];
}
