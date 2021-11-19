import React from "react";

import { Box, Flex, Img, Spacer } from "@chakra-ui/react";

import { Basket } from "./Basket";
import { INavBarProps } from "./INavBarProps";
import { NavBarRoot } from "./NavBarRoot";
import { SearchBar } from "./SearchBar";
import { StoreSelector } from "./StoreSelector";

/**
 * The NavBar component.
 * @param {INavBarProps} props The component props
 * @returns {React.ReactElement} The NavBar component
 */
export const NavBar = (props: INavBarProps): React.ReactElement => {
  const { searchBarProps, storeSelectorProps, basketProps } = props;
  return (
    <NavBarRoot>
      <Flex pt={4} pb={4}>
        <Img htmlWidth="75px" objectFit="cover" src="/assets/images/logo.png" alt="Neta" />
      </Flex>
      <Flex pb={4}>
        <Box>
          <StoreSelector {...storeSelectorProps} />
        </Box>
        <Spacer />
        <Box>
          <Basket {...basketProps} />
        </Box>
      </Flex>
      <Flex>
        <SearchBar {...searchBarProps} />
      </Flex>
    </NavBarRoot>
  );
};
