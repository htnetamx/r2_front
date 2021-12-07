import { ReactElement } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { ILogInStepContainerProps } from "./ILogInStepContainerProps";
import { ILogInStepFormValues } from "./ILogInStepFormValues";
import { LogInStepValidationSchema } from "./LogInStepValidationSchema";

/**
 * The LogInStepContainer component.
 * @param {ILogInStepContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const LogInStepContainer = (props: ILogInStepContainerProps): ReactElement => {
  const {
    register,
    setValue,
    trigger,
    getValues,
    setError,
    clearErrors,
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogInStepFormValues>({
    mode: "onChange",
    reValidateMode: "onBlur",
    resolver: yupResolver(LogInStepValidationSchema),
  });

  return <div>LogInStepContainer</div>;
};
