import React, { useRef, useState, ReactElement } from "react";

import { Step, Steps, Wizard } from "react-albus";
import { useDispatch, useSelector } from "react-redux";

import { BASKET_TITLE } from "constants/basketConstants";
import { CheckoutWizardSteps, CHECKOUT_NEXT_STEP } from "constants/checkoutConstants";
import { selectBasketItems, selectTotalBasketItems } from "dataflows/Basket/BasketSelectors";
import { addQuantity, removeQuantity } from "dataflows/Basket/BasketSlice";
import {
  onClose as onCloseAction,
  setCurrentStep as setCurrentStepAction,
} from "dataflows/Checkout/CheckoutSlice";
import {
  selectCurrentStep,
  selectIsOpen,
  selectValidationList,
} from "dataflows/Checkout/ChekoutSelectors";
import next from "next";

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
import { LogInStepContainer } from "./NameAndTermConditionsContainer/LogInStepContainer";

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
 * @param {ILogInStepContainerProps} props The props for the log in step container
 * @returns {ReactElement} The log in step container
 */
const renderLogInStep = (props: INameAndTermsConditionsContainerProps): ReactElement => {
  return <LogInStepContainer {...props} />;
};

/**
 * The checkout container.
 * @returns {ReactElement} The component.
 */
export const CheckoutContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const btnRef = useRef<HTMLButtonElement>(null);
  const basketItems = useSelector(selectBasketItems);
  const totalBasketItems = useSelector(selectTotalBasketItems);
  const validationList = useSelector(selectValidationList);
  const currentStep = useSelector(selectCurrentStep);
  const isOpen = useSelector(selectIsOpen);

  const [isClickingNextButton, setIsClickingNextButton] = useState(false);

  /**
   * set the validation list
   * @param {IValidationList} validationList The validation list
   * @returns {void}
   **/
  const setValidationList = (validationList: Map<CheckoutWizardSteps, boolean>): void =>
    dispatch(setValidationList(validationList));

  /**
   * Set the current step.
   * @param {CheckoutWizardSteps} currentStep The current step
   * @returns {void}
   */
  const setCurrentStep = (currentStep: CheckoutWizardSteps) =>
    dispatch(setCurrentStepAction(currentStep));

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
  const onClose = () => dispatch(onCloseAction);

  const checkoutSteps: ICheckoutStep[] = [
    {
      id: CheckoutWizardSteps.BASKET,
      title: BASKET_TITLE,
      render: (): ReactElement =>
        renderBasketContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          basketItems,
          totalBasketItems,
          onAddToBasket,
          onRemoveFromBasket,
          currentStep,
          setCurrentStep,
        }),
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{checkoutSteps[currentStep]?.title}</DrawerHeader>
        <DrawerBody>
          <Wizard
            onNext={(wizard) => {
              setIsClickingNextButton(true);
            }}
          >
            <Steps>
              {checkoutSteps.map((step) => (
                <>
                  <Step
                    key={step.id}
                    id={step.id.toString()}
                    render={({ next, previous }) => step.render()}
                  />
                </>
              ))}
            </Steps>
          </Wizard>
        </DrawerBody>
        <DrawerFooter>
          <Button
            colorScheme="blue"
            width="100%"
            borderRadius="xl"
            onClick={() => {
              if (validationList.get(currentStep)) {
                next();
              }
            }}
          >
            {CHECKOUT_NEXT_STEP}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
