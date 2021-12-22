import React, { useEffect, useState } from "react";

import { BsChevronLeft, BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

import { RETURN_TO_HOME } from "constants/navBarConstants";
import { selectTotalBasketItems } from "dataflows/Basket/BasketSelectors";
import throttle from "lodash.throttle";
import { useRouter } from "next/router";

import {
  useColorModeValue,
  Box,
  Container,
  Flex,
  IconButton,
  Img,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BasketButton } from "./BasketButton/BasketButton";
import { UserButton } from "./UserButton/UserButton";
import { INavBarProps } from "./INavBarProps";
import { InfoHeader } from "./InfoHeader";
import { SearchBar } from "./SearchBar";
import { StoreSelector } from "./StoreSelector";

/**
 * The NavBar component.
 * @param {INavBarProps} props The component props
 * @returns {React.ReactElement} The NavBar component
 */
export const NavBar = (props: INavBarProps): React.ReactElement => {
  const { isHome } = props;
  const totalItems = useSelector(selectTotalBasketItems);
  const showInfoHeader = totalItems > 0;

  return (
    <Box
      sx={{ position: "sticky", top: "0" }}
      zIndex={3}
      backdropFilter="saturate(200%) blur(5px)"
      backgroundColor="rgba(255,255, 255, 0.8)"
    >
      <Container maxW="container.xl">
        {isHome ? <HomeNavBar {...props} /> : <PageNavBar {...props} />}
      </Container>

      {showInfoHeader && <InfoHeader />}
    </Box>
  );
};

/**
 * The NavBar component.
 * @param {INavBarProps} props The component props
 * @returns {React.ReactElement} The NavBar component
 */
const HomeNavBar = (props: INavBarProps): React.ReactElement => {
  const { searchBarProps, storeSelectorProps, basketProps, userProps } = props;
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      <Stack direction="column" pt={2} hidden={hasScrolled}>
        <Img htmlWidth="75px" objectFit="cover" src="/assets/images/logo.png" alt="Neta" />
      </Stack>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex justify={{ base: "start", md: "start" }}>
          <StoreSelector hasScrolled={hasScrolled} {...storeSelectorProps} />
        </Flex>
        <Spacer />
        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <BasketButton {...basketProps} />
        </Stack>
        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <UserButton {...userProps} />
        </Stack>
      </Flex>
      <Stack direction="column" pt={2} pb={2} hidden={hasScrolled}>
        <SearchBar {...searchBarProps} />
      </Stack>
    </>
  );
};

/**
 * The NavBar component.
 * @param {INavBarProps} props The component props
 * @returns {React.ReactElement} The NavBar component
 */
const PageNavBar = (props: INavBarProps): React.ReactElement => {
  const { basketProps } = props;
  const router = useRouter();
  return (
    <Flex
      minH={"60px"}
      py={{ base: 2 }}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      align={"center"}
    >
      <Flex justify={{ base: "start", md: "start" }} onClick={() => router.push("/")}>
        <BsChevronLeft fontSize="20px" /> <Text>{RETURN_TO_HOME}</Text>
      </Flex>
      <Spacer />
      <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
        <IconButton
          icon={<BsSearch fontSize="25px" />}
          aria-label="search"
          _focus={{ boxShadow: "none" }}
          size="lg"
          variant={"ghost"}
        />
        <BasketButton {...basketProps} />
      </Stack>
    </Flex>
  );
};
