import React, { ReactElement } from "react";

import { BiCheck } from "react-icons/bi";

import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

//props: IOrderStatusProps
/**
 * The order status component.
 * @returns { ReactElement } The order status component
 */
export const OrderStatus = (): ReactElement => {
  return (
    <Box boxShadow="xs" rounded="md" bg="white" mb="4">
      <Box pt="5" pb={["0", "2"]} pl={["14", "36"]} pr={["10", "36"]} mt="4" mb={["0", "0"]}>
        <RangeSlider defaultValue={[0, 50, 100]} min={0} max={100} isReadOnly={true}>
          <RangeSliderTrack bg="green.100">
            <RangeSliderFilledTrack bg="green.400" />
          </RangeSliderTrack>
          {/* <Text pt="2">Alistando tu pedido</Text> */}
          {/* <Box pt="10"> */}
          {/* </Box> */}
          <RangeSliderThumb index={0} boxSize={[7, 10]} border="1px" borderColor="green">
            <Box color="white" bg="green.500" as={BiCheck} w="100%" h="100%" borderRadius="100%" />
          </RangeSliderThumb>
          <RangeSliderThumb index={1} boxSize={[7, 10]} borderColor="green.400" border="2px">
            <Text fontWeight="700" color="green.500" fontSize={["18px", "22px"]}>
              2
            </Text>
          </RangeSliderThumb>
          <RangeSliderThumb index={2} boxSize={[7, 10]} border="2px" borderColor="green.400">
            <Text fontWeight="700" color="green.500" fontSize={["18px", "22px"]}>
              3
            </Text>
          </RangeSliderThumb>
        </RangeSlider>
      </Box>
      <Flex pb="4">
        <Box align="center" ml={["1", "12", "20", "20"]} width={["auto", "auto"]}>
          <Text fontSize={{ base: "13px", md: "16px", lg: "16px" }} fontWeight="700">
            Alistando tu pedido
          </Text>
        </Box>
        <Spacer />
        <Box align="center">
          <Text fontSize={{ base: "13px", md: "16px", lg: "16px" }} fontWeight="700">
            Pedido en camino
          </Text>
        </Box>
        <Spacer />
        <Box mr={["1", "12", "20", "20"]} align="center">
          <Text fontSize={{ base: "13px", md: "16px", lg: "16px" }} fontWeight="700">
            Pedido entregado
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
