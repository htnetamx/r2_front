import { FC, ReactElement } from "react";

import { Box } from "@chakra-ui/layout";

/**
 * This is the root component of the NavBar.
 * @param {ReactNode} children The children of the NavBar.
 * @returns {ReactElement} The root component of the NavBar.
 */
export const NavBarRoot: FC = ({ children }): ReactElement => {
  return (
    <Box
      sx={{ position: "-webkit-sticky", /* Safari */ position: "sticky", top: "0" }}
      zIndex={3}
      backdropFilter="saturate(200%) blur(5px)"
      backgroundColor="rgba(255,255, 255, 0.7)"
    >
      {children}
    </Box>
  );
};
