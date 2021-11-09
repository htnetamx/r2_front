import React, { Children, ReactElement } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

import { IButtonProps } from "./IButtonProps";

/**
 * The button component.
 * @param {BoxProps} props - The properties passed to the component.
 * @returns {ReactElement} The button component.
 **/
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props: IButtonProps, ref): ReactElement => {
    return (
      <ChakraButton {...props} ref={ref}>
        {Children}
      </ChakraButton>
    );
  }
);

Button.displayName = "Button";
