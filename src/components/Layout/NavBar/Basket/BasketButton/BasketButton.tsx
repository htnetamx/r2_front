import React, { ReactElement } from "react";

import IconBasket from "styled/icons/Basket";

import { Box, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { IBasketButtonProps } from "./IBasketButtonProps";

/**
 * Basket icon component.
 * @param {IBasketButtonProps} props the items count in the basket.
 * @returns {ReactElement} the basket icon.
 */
export const BasketButton = (props: IBasketButtonProps): ReactElement => {
  const { btnRef, onClick, ariaLabel, totalItems } = props;
  return (
    <IconButton
      css={css`
        position: relative !important;
      `}
      py={"2"}
      ref={btnRef}
      onClick={onClick}
      aria-label={ariaLabel}
      _focus={{ boxShadow: "none" }}
      size={"lg"}
      variant={"ghost"}
      icon={
        <>
          <IconBasket />
          <Box
            as="span"
            color="white"
            position="absolute"
            top="25px"
            right="2px"
            width="25px"
            height="25px"
            fontSize="0.75rem"
            bgColor="black"
            borderRadius="full"
            zIndex={3}
            pt="6px"
          >
            {totalItems}
          </Box>
        </>
      }
    />
  );
};
