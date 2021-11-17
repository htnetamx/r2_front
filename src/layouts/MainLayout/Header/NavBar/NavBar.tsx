import { Box, Container } from "@chakra-ui/react";

import { BasketButton } from "../BasketButton/BasketButton";
import { SearchBar } from "../SearchBar/SearchBar";
import { NavBarRoot } from "./NavBarRoot";

/**
 * The NavBar component.
 * @returns {React.ReactElement} The NavBar component
 */
export const NavBar = () => {
  return (
    <NavBarRoot>
      <Container>
        <Box>
          <div>Here is the logo</div>
        </Box>
        <Box>
          <div>Here is the tiendita menu</div>
        </Box>
        <Box>
          <BasketButton />
        </Box>
        <Box>
          <SearchBar />
        </Box>
      </Container>
    </NavBarRoot>
  );
};
