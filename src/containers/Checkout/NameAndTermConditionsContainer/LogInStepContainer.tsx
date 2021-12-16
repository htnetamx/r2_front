import { ReactElement } from "react";

import { LogInStep } from "components/Checkout/LogInStep/LogInStep";

import { ILogInStepContainerProps } from "./ILogInStepContainerProps";

/**
 * The LogInStepContainer component.
 * @param {ILogInStepContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const LogInStepContainer = (props: ILogInStepContainerProps): ReactElement => {
  const { errors, register } = props;
  return <LogInStep errors={errors} register={register} />;
};
