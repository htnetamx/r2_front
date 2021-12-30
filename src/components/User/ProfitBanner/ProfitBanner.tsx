import React, { ReactElement } from "react";

import { Center, Stack, Text } from "@chakra-ui/layout";

import { IProfitBannerProps } from "./lProfitBanner";

/**
 * The ProfitBanner component.
 * @returns {ReactElement} the ProfitBanner component.
 * @param {IProfitBannerProps} profitBannerProps ProfitBanner props
 */
export const ProfitBanner = (profitBannerProps: IProfitBannerProps): ReactElement => {
  return (
    <div>
      <Center
        bgGradient="linear(to-r, #d64900 0%, #F52220 100%)"
        h="100px"
        color="white"
        borderRadius="md"
        mt="4"
        mb="4"
        cursor={"pointer"}
        onClick={() => {
          navigator.clipboard.writeText(profitBannerProps.url);
        }}
      >
        <Stack spacing={2} align={"center"}>
          <Text fontSize={{ base: "14px", md: "20px", lg: "20px" }} fontWeight="500">
            Tu ganancia en esta orden es de <b>${profitBannerProps.currentProfit} pesos!</b>
          </Text>
          <Text fontSize={{ base: "16px", md: "24px", lg: "24px" }} fontWeight="700">
            ¡Comparte la liga y sigue ganando!
          </Text>
        </Stack>
      </Center>
    </div>
  );
};
