import React, { ReactElement } from "react";

import { Center, Divider, Flex, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";

import { ISplitCardProps } from "./ISplitCard";

/**
 * The SplitCard component.
 * @returns {ReactElement} the SplitCard component.
 * @param {IProfitBannerProps} splitCardProps ProfitBanner props
 */
export const SplitCard = (splitCardProps: ISplitCardProps): ReactElement => {
  const { title1, subtitle1, icon1, title2, subtitle2, icon2, title3, subtitle3, icon3 } =
    splitCardProps;

  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      mt="6"
      mb="6"
      boxShadow="xs"
      p={["1", "2", "4"]}
      rounded="lg"
      justify="center"
    >
      <Flex align="center" mx="2" mt={["2", "0"]}>
        {icon1}
        <Box ml="2" mx="4" width={["auto", "auto", "140px"]}>
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>
            {title1}
            <b> {subtitle1}</b>
          </Text>
        </Box>
      </Flex>
      <Center
        align="center"
        height={["0px", "0px", "40px"]}
        ml={["0", "0", "3", "8"]}
        mr={["0", "0", "3", "8"]}
      >
        <Divider orientation="vertical" />
      </Center>
      <Flex align="center" mx="2" mt={["2", "0"]}>
        {icon2}
        <Box ml="2" mx="4" width={["auto", "auto", "140px"]}>
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>
            {title2}
            <b>{subtitle2}</b>
          </Text>
        </Box>
      </Flex>
      <Center
        align="center"
        height={["0px", "0px", "40px"]}
        ml={["0", "0", "3", "8"]}
        mr={["0", "0", "3", "8"]}
      >
        <Divider orientation="vertical" />
      </Center>
      <Flex align="center" mx="2" mt={["2", "0"]} mb={["2", "0"]}>
        {icon3}
        <Box ml="2" mx="4" width={["auto", "auto", "140px"]}>
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>
            {title3}
            <b>{subtitle3}</b>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
