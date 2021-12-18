import React, { useRef, useState, ReactElement } from "react";

import { BsXLg } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { Step, Steps, Wizard } from "react-multistep-wizard";
import { useDispatch, useSelector } from "react-redux";

import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { selectBasketItems } from "dataflows/Basket/BasketSelectors";
import { addQuantity, removeQuantity } from "dataflows/Basket/BasketSlice";
import { selectCurrentStep, selectIsOpen } from "dataflows/Checkout/CheckoutSelectors";
import {
  moveToNextStep,
  moveToPreviousStep,
  onClose as onCloseAction,
} from "dataflows/Checkout/CheckoutSlice";
import { ICheckoutFormValues } from "dataflows/Checkout/ICheckoutFormValues";
import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";
import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";
import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
} from "@chakra-ui/react";

import { BasketContainer } from "./BasketContainer/BasketContainer";
import { IBasketContainerProps } from "./BasketContainer/IBasketContainerProps";
import { ICheckoutStep } from "./ICheckoutStep";
import { INameAndTermsConditionsContainerProps } from "./NameAndTermConditionsContainer/INameAndTermsConditionsContainerProps";
import { NameAndTermsConditionsContainer } from "./NameAndTermConditionsContainer/NameAndTermsConditionsContainer";
import { IPhoneNumberContainerProps } from "./PhoneNumberContainer/IPhoneNumberContainerProps";
import { PhoneNumberContainer } from "./PhoneNumberContainer/PhoneNumberContainer";
import { IPostalCodeContainerProps } from "./PostalCodeContainer/IPostalCodeContainerProps";
import { PostalCodeContainer } from "./PostalCodeContainer/PostalCodeContainer";
import { IVerificationCodeContainerProps } from "./VerificationCodeContainer/IVerificationCodeContainerProps";
import { VerificationCodeContainer } from "./VerificationCodeContainer/VerificationCodeContainer";

/**
 * Renders the basket container
 * @param {IBasketContainerProps} props The props for the basket container
 * @returns {ReactElement} The basket container
 */
const renderBasketContainer = (props: IBasketContainerProps): ReactElement => {
  return <BasketContainer {...props} />;
};

/**
 * Renders the log in step container
 * @param {INameAndTermsConditionsContainerProps} props The props for the log in step container
 * @returns {ReactElement} The log in step container
 */
const renderNameAndTermConditionsContainer = (
  props: INameAndTermsConditionsContainerProps
): ReactElement => {
  return <NameAndTermsConditionsContainer {...props} />;
};

/**
 * Renders the phone number step container
 * @param {IPhoneNumberContainerProps} props The props for the phone number step container
 * @returns {ReactElement} The phone number step container
 */
const renderPhoneNumberContainer = (props: IPhoneNumberContainerProps): ReactElement => {
  return <PhoneNumberContainer {...props} />;
};

/**
 * Renders the verification code step container
 * @param {IVerificationCodeContainerProps} props The props for the verification code step container
 * @returns {ReactElement} The verification code step container
 **/
const renderVerificationCodeContainer = (props: IVerificationCodeContainerProps): ReactElement => {
  return <VerificationCodeContainer {...props} />;
};

/**
 * Render the postal code step container
 * @param {IPostalCodeContainerProps} props the props for the postal code step container
 * @returns {ReactElement} The postal code step container
 */
const renderPostalCodeContainer = (props: IPostalCodeContainerProps): ReactElement => {
  return <PostalCodeContainer {...props} />;
};

/**
 * The checkout container.
 * @returns {ReactElement} The component.
 */
export const CheckoutContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const basketItems = useSelector(selectBasketItems);
  const currentStep = useSelector(selectCurrentStep);
  const isOpen = useSelector(selectIsOpen);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [isClickingNextButton, setIsClickingNextButton] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState<ICheckoutFormValues>();
  const [validationList, setValidationList] = useState(
    new Map([
      [CheckoutWizardSteps.BASKET, true],
      [CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, false],
      [CheckoutWizardSteps.PHONE_NUMBER, false],
      [CheckoutWizardSteps.VERIFICATION_CODE, false],
      [CheckoutWizardSteps.POSTAL_CODE, false],
    ])
  );

  /**
   * Add quantity to the basket
   * @param {string} productId The product id
   * @returns {void}
   **/
  const onAddToBasket = (productId: string) => dispatch(addQuantity(productId));

  /**
   * Remove quantity from the basket
   * @param {string} productId The product id
   * @returns {void}
   **/
  const onRemoveFromBasket = (productId: string) => dispatch(removeQuantity(productId));

  /**
   * On close panel action
   * @returns {void}
   **/
  const onClose = () => dispatch(onCloseAction());

  /**
   * Save the checkout form
   * @param {Partial<ICheckoutFormValues>} formValues The form values
   * @returns {void}
   **/
  const saveFormValues = (formValues: Partial<ICheckoutFormValues>): void => {
    const checkoutFormValues = {
      ...checkoutForm,
      ...formValues,
    } as ICheckoutFormValues;
    setCheckoutForm(checkoutFormValues);
  };

  /**
   * On next button click callback
   * @param {Function} next callback function
   * @returns {Function} The callback function
   * */
  const loadNextStep = () => {
    if (validationList.get(currentStep)) {
      dispatch(moveToNextStep());
    }
  };

  /**
   * load previous step
   * @returns {void}
   **/
  const loadPreviousStep = () => {
    dispatch(moveToPreviousStep());
  };

  const checkoutSteps: ICheckoutStep[] = [
    {
      id: CheckoutWizardSteps.BASKET,
      render: (): ReactElement =>
        renderBasketContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          basketItems,
          onAddToBasket,
          onRemoveFromBasket,
          currentStep,
          loadNextStep,
        }),
    },
    {
      id: CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS,
      render: (): ReactElement =>
        renderNameAndTermConditionsContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          nameAndTermConditionsFormValues: checkoutForm as INameAndTermConditionsFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
        }),
    },
    {
      id: CheckoutWizardSteps.PHONE_NUMBER,
      render: (): ReactElement =>
        renderPhoneNumberContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          phoneNumberFormValues: checkoutForm as IPhoneNumberFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
        }),
    },
    {
      id: CheckoutWizardSteps.VERIFICATION_CODE,
      render: (): ReactElement =>
        renderVerificationCodeContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          verificationCodeFormValues: checkoutForm as IVerificationCodeFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
        }),
    },
    {
      id: CheckoutWizardSteps.POSTAL_CODE,
      render: (): ReactElement =>
        renderPostalCodeContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          postalCodeFormValues: checkoutForm as IPostalCodeFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
        }),
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md" finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <Flex p={3}>
          <IconButton
            disabled={currentStep === CheckoutWizardSteps.BASKET}
            colorScheme="gray"
            size="md"
            aria-label="step back"
            icon={<FaChevronLeft />}
            onClick={loadPreviousStep}
          />
          <Spacer />
          <IconButton
            colorScheme="gray"
            size="md"
            aria-label="close basket"
            icon={<BsXLg />}
            onClick={onClose}
          />
        </Flex>

        <DrawerBody>
          <Wizard
            externalOverrides={{
              currentStep: currentStep,
              next: loadNextStep,
              previous: loadPreviousStep,
            }}
          >
            <Steps>
              {checkoutSteps.map((step) => (
                <Step key={step.id}>{() => step.render()}</Step>
              ))}
            </Steps>
          </Wizard>
        </DrawerBody>
        <DrawerFooter>
          <Button
            colorScheme="blue"
            width="100%"
            borderRadius="xl"
            onClick={() => setIsClickingNextButton(true)}
          >
            Continuar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
