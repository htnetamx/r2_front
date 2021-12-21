import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";

import { VerificationCodeStep } from "components/Layout/Checkout/VerificationCodeStep/VerificationCodeStep";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { VerificationCodeValidationSchema } from "dataflows/Checkout/VerificationCode/VerificationCodeValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IVerificationCodeContainerProps } from "./IVerificationCodeContainerProps";

/**
 * The VerificationCodeContainer component.
 * @param {IVerificationCodeContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const VerificationCodeContainer = (props: IVerificationCodeContainerProps): ReactElement => {
  const {
    verificationCodeFormValues,
    saveFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    validationList,
    setValidationList,
    loadNextStep,
  } = props;

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<IVerificationCodeFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: verificationCodeFormValues,
    resolver: yupResolver(VerificationCodeValidationSchema),
  });

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          // validationList.set(CheckoutWizardSteps.VERIFICATION_CODE, onfulfilled);
          // setValidationList && setValidationList(validationList);
          saveFormValues && saveFormValues(getValues());
          loadNextStep && loadNextStep();
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  return <VerificationCodeStep errors={errors} register={register} />;
};
