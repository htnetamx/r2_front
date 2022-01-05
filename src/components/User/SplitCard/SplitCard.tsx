import React, { ReactElement } from "react";

import IconBasket from "styled/icons/Order/Basket";
import IconNeta from "styled/icons/Order/Neta";
import IconOrder from "styled/icons/Order/Order";

import { Center, Divider, Flex, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";

import { ISplitCardProps } from "./ISplitCard";

/**
 * The SplitCard component.
 * @returns {ReactElement} the SplitCard component.
 * @param {IProfitBannerProps} splitCardProps ProfitBanner props
 */
export const SplitCard = (splitCardProps: ISplitCardProps): ReactElement => {
  const { title1, subtitle1, title2, subtitle2, title3, subtitle3 } = splitCardProps;

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
        <IconBasket />
        <Box ml="2" mx="4">
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>{title1}</Text>
          <Text fontSize={{ base: "17px", md: "20px", lg: "21px" }} fontWeight="700">
            {subtitle1}
          </Text>
        </Box>
      </Flex>
      <Center align="center" height={["0px", "0px", "40px"]} ml="8" mr="8">
        <Divider orientation="vertical" />
      </Center>
      <Flex align="center" mx="2" mt={["2", "0"]}>
        <IconOrder />
        <Box ml="2" mx="4">
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>{title2}</Text>
          <Text fontSize={{ base: "17px", md: "20px", lg: "21px" }} fontWeight="700">
            {subtitle2}
          </Text>
        </Box>
      </Flex>
      <Center align="center" height={["0px", "0px", "40px"]} ml="8" mr="8">
        <Divider orientation="vertical" />
      </Center>
      <Flex align="center" mx="2" mt={["2", "0"]} mb={["2", "0"]}>
        <IconNeta />
        <Box ml="2" mx="4">
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>{title3}</Text>
          <Text fontSize={{ base: "17px", md: "20px", lg: "21px" }} fontWeight="700">
            {subtitle3}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
