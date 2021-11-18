import { Box, Container, Flex, Img, Select, Spacer } from "@chakra-ui/react";

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
        <Box pt={4} pb={4}>
          <Img htmlWidth="75px" objectFit="cover" src="/assets/images/logo.png" alt="Neta" />
        </Box>
        <Flex>
          <Box>
            <Select variant="unstyled" placeholder="Soda Fountain" />
          </Box>
          <Spacer />
          <Box>
            <BasketButton />
          </Box>
        </Flex>
        <Box>
          <SearchBar />
        </Box>
      </Container>
    </NavBarRoot>
  );
};
