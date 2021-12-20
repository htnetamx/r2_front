import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";

import { PostalCodeStep } from "components/Layout/Checkout/PostalCodeStep/PostalCodeStep";
import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";
import { PostalCodeValidationSchema } from "dataflows/Checkout/PostalCode/PostalCodeValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IPostalCodeContainerProps } from "./IPostalCodeContainerProps";

/**
 * PostalCodeContainer component.
 * @param {IPostalCodeContainerProps} props the component props.
 * @returns {ReactElement} the react element.
 */
export const PostalCodeContainer = (props: IPostalCodeContainerProps): ReactElement => {
  const {
    postalCodeFormValues,
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
  } = useForm<IPostalCodeFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: postalCodeFormValues,
    resolver: yupResolver(PostalCodeValidationSchema),
  });

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(CheckoutWizardSteps.POSTAL_CODE, onfulfilled);
          setValidationList && setValidationList(validationList);
          saveFormValues && saveFormValues(getValues());
          loadNextStep && loadNextStep();
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  return <PostalCodeStep errors={errors} register={register} />;
};
