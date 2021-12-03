import React, { ReactElement } from "react";

import { BiMinus, BiPlus } from "react-icons/bi";

import { HStack, IconButton, Input } from "@chakra-ui/react";

import { IIncrementalButtonProps } from "./IIncrementalButtonProps";

/**
 * IncrementalButton component.
 * @param {IIncrementalButtonProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const IncrementalButton = (props: IIncrementalButtonProps): ReactElement => {
  const { min, max, defaultValue, onAdd, onSubtract } = props;
  const currentValue = defaultValue && min && defaultValue >= min ? defaultValue : min;
  const isDisabled = currentValue === max;

  return (
    <HStack
      width="145px"
      height={{ base: "27px", md: "32px" }}
      rounded="full"
      borderWidth="1px"
      overflow="hidden"
    >
      <IconButton variant="ghost" aria-label="remove" icon={<BiMinus />} onClick={onSubtract} />
      <Input variant="unstyled" readOnly textAlign="center" value={currentValue} />
      <IconButton
        variant="ghost"
        aria-label="add"
        icon={<BiPlus />}
        onClick={onAdd}
        disabled={isDisabled}
      />
    </HStack>
  );
};
