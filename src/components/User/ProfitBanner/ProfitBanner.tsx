import React, { useState, ReactElement } from "react";

import {
  BANNER_CLIPBOARD,
  BANNER_PROFIT,
  BANNER_PROFIT2,
  BANNER_SHARE_URL,
} from "constants/userConstant";

import { Box, Center, Stack, Text } from "@chakra-ui/layout";
import { Fade } from "@chakra-ui/transition";

import { IProfitBannerProps } from "./lProfitBanner";

/**
 * The ProfitBanner component.
 * @returns {ReactElement} the ProfitBanner component.
 * @param {IProfitBannerProps} profitBannerProps ProfitBanner props
 */
export const ProfitBanner = (profitBannerProps: IProfitBannerProps): ReactElement => {
  const [copy, setCopy] = useState(false);

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
          setCopy(true);
          setTimeout(() => setCopy(false), 1000);
        }}
      >
        <Stack spacing={2} align={"center"}>
          <Text fontSize={{ base: "14px", md: "20px", lg: "20px" }} fontWeight="500">
            {BANNER_PROFIT}
            <b>
              ${profitBannerProps.currentProfit} {BANNER_PROFIT2}
            </b>
          </Text>
          <Text fontSize={{ base: "16px", md: "24px", lg: "24px" }} fontWeight="700">
            {BANNER_SHARE_URL}
          </Text>
          <Fade in={copy}>
            <Box p="4px" position="absolute" color="white" bg="gray" rounded="md" shadow="md">
              <Text fontSize={{ base: "14px", md: "18px", lg: "18px" }} fontWeight="500">
                {BANNER_CLIPBOARD}
              </Text>
            </Box>
          </Fade>
        </Stack>
      </Center>
    </div>
  );
};
