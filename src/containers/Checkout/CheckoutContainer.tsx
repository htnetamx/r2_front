import React, { useRef, useState, ReactElement } from "react";

import { Step, Steps, Wizard } from "react-albus";
import { useDispatch, useSelector } from "react-redux";

import { CheckoutWizardSteps, CHECKOUT_NEXT_STEP } from "constants/checkoutConstants";
import { selectBasketItems } from "dataflows/Basket/BasketSelectors";
import { addQuantity, removeQuantity } from "dataflows/Basket/BasketSlice";
import { selectCurrentStep, selectIsOpen } from "dataflows/Checkout/CheckoutSelectors";
import { moveToNextStep, onClose as onCloseAction } from "dataflows/Checkout/CheckoutSlice";
import { ICheckoutFormValues } from "dataflows/Checkout/ICheckoutFormValues";
import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

import { BasketContainer } from "./BasketContainer/BasketContainer";
import { IBasketContainerProps } from "./BasketContainer/IBasketContainerProps";
import { ICheckoutStep } from "./ICheckoutStep";
import { INameAndTermsConditionsContainerProps } from "./NameAndTermConditionsContainer/INameAndTermsConditionsContainerProps";
import { NameAndTermsConditionsContainer } from "./NameAndTermConditionsContainer/NameAndTermsConditionsContainer";

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
    ])
  );

  /**
   * Set the current step.
   * @param {Function} next callback function
   * @returns {void}
   */
  const goToNextStep = (next: () => void): void => {
    dispatch(moveToNextStep());
    next();
  };

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
   * @param {INameAndTermConditionsFormValues} nameAndTermConditionsFormValues The form values
   * @returns {void}
   **/
  const saveNameAndTermConditionsFormValues = (
    nameAndTermConditionsFormValues: INameAndTermConditionsFormValues
  ) => {
    const formValues = { checkoutForm, ...nameAndTermConditionsFormValues } as ICheckoutFormValues;
    setCheckoutForm(formValues);
  };

  /**
   * On next button click callback
   * @param {Function} next callback function
   * @returns {Function} The callback function
   * */
  const loadNextStep = (next: () => void) => {
    return () => {
      if (validationList.get(currentStep)) {
        goToNextStep(next);
      }
    };
  };

  const checkoutSteps: ICheckoutStep[] = [
    {
      id: CheckoutWizardSteps.BASKET,
      render: (next: () => void): ReactElement =>
        renderBasketContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          basketItems,
          onAddToBasket,
          onRemoveFromBasket,
          currentStep,
          loadNextStep: loadNextStep(next),
        }),
    },
    {
      id: CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS,
      render: (next: () => void): ReactElement =>
        renderNameAndTermConditionsContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          nameAndTermConditionsFormValues: checkoutForm as INameAndTermConditionsFormValues,
          saveNameAndTermConditionsFormValues,
          currentStep,
          loadNextStep: loadNextStep(next),
        }),
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md" finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>
        <Wizard>
          <DrawerBody>
            <Steps>
              {checkoutSteps.map((step) => (
                <>
                  <Step
                    key={step.id}
                    id={step.id.toString()}
                    render={({ next }) => step.render(next)}
                  />
                </>
              ))}
            </Steps>
          </DrawerBody>
          <DrawerFooter>
            <Button
              colorScheme="blue"
              width="100%"
              borderRadius="xl"
              onClick={() => setIsClickingNextButton(true)}
            >
              {CHECKOUT_NEXT_STEP}
            </Button>
          </DrawerFooter>
        </Wizard>
      </DrawerContent>
    </Drawer>
  );
};
