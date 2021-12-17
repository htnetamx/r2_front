import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";

import { LogInStep } from "components/Checkout/LogInStep/LogInStep";
import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";
import { NameAndTermConditionsValidationSchema } from "dataflows/Checkout/NameAndTermConditions/NameAndTermConditionsValidationSchemaValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";

import { yupResolver } from "@hookform/resolvers/yup";

import { INameAndTermsConditionsContainerProps } from "./INameAndTermsConditionsContainerProps";

/**
 * The LogInStepContainer component.
 * @param {INameAndTermsConditionsContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const NameAndTermsConditionsContainer = (
  props: INameAndTermsConditionsContainerProps
): ReactElement => {
  const {
    nameAndTermConditionsFormValues,
    saveNameAndTermConditionsFormValues,
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
  } = useForm<INameAndTermConditionsFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: nameAndTermConditionsFormValues,
    resolver: yupResolver(NameAndTermConditionsValidationSchema),
  });

  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, onfulfilled);
          setValidationList && setValidationList(validationList);
          saveNameAndTermConditionsFormValues && saveNameAndTermConditionsFormValues(getValues());
          loadNextStep && loadNextStep();
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  return <LogInStep errors={errors} register={register} />;
};
