import { ReactDatePickerProps } from "react-datepicker";

import { IFieldProps } from "../IFieldProps";

export interface IDatePickerFieldProps extends IFieldProps, ReactDatePickerProps<any> {}
