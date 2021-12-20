import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";

import { PhoneNumberStep } from "components/Layout/Checkout/PhoneNumberStep/PhoneNumberStep";
import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";
import { PhoneNumberValidationSchema } from "dataflows/Checkout/PhoneNumber/PhoneNumberValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IPhoneNumberContainerProps } from "./IPhoneNumberContainerProps";

/**
 * The PhoneNumberContainer component.
 * @param {IPhoneNumberContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const PhoneNumberContainer = (props: IPhoneNumberContainerProps): ReactElement => {
  const {
    phoneNumberFormValues,
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
  } = useForm<IPhoneNumberFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: phoneNumberFormValues,
    resolver: yupResolver(PhoneNumberValidationSchema),
  });

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(CheckoutWizardSteps.PHONE_NUMBER, onfulfilled);
          setValidationList && setValidationList(validationList);
          saveFormValues && saveFormValues(getValues());
          loadNextStep && loadNextStep();
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  return <PhoneNumberStep errors={errors} register={register} />;
};
