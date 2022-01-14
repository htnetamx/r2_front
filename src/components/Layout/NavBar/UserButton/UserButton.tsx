import React, { ReactElement } from "react";

import UserIcon from "styled/icons/User";

import { IconButton } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { IUserButtonProps } from "./IUserButtonProps";

/**
 * User icon component.
 * @param {IUserButtonProps} props UserButton props
 * @returns {ReactElement} the user icon.
 */
export const UserButton = (props: IUserButtonProps): ReactElement => {
  const { ariaLabel } = props;
  return (
    <div>
      <IconButton
        css={css`
          position: relative !important;
        `}
        py={"2"}
        aria-label={ariaLabel}
        _focus={{ boxShadow: "none" }}
        size={"lg"}
        variant={"ghost"}
        icon={
          <>
            <UserIcon />
          </>
        }
      />
    </div>
  );
};
