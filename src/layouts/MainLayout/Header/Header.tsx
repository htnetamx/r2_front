import { Box, Container } from "@chakra-ui/react";

import { BasketButton } from "./BasketButton/BasketButton";
import { NavBarRoot } from "./NavBar/NavBarRoot";
import { SearchBar } from "./SearchBar/SearchBar";

/**
 * The NavBar component.
 * @returns {React.ReactElement} The NavBar component
 */
export const Header = (): React.ReactElement => {
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
