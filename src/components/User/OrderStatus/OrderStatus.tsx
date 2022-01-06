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
    <Box boxShadow="xs" rounded="md" bg="white">
      <Box pt="5" pb={["0", "5"]} pl={["34", "36"]} pr={["34", "36"]} mt="4" mb={["0", "6"]}>
        <RangeSlider defaultValue={[0, 50, 100]} min={0} max={100} isReadOnly={true}>
          <RangeSliderTrack bg="green.100">
            <RangeSliderFilledTrack bg="green.400" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} boxSize={[7, 10]} border="1px" borderColor="green">
            <Box color="white" bg="green.500" as={BiCheck} w="100%" h="100%" borderRadius="100%" />
          </RangeSliderThumb>
          <RangeSliderThumb index={1} boxSize={[7, 10]} borderColor="green.400" border="2px">
            <Text fontWeight="700" color="green.500" fontSize="22px">
              2
            </Text>
          </RangeSliderThumb>
          <RangeSliderThumb index={2} boxSize={[7, 10]} border="2px" borderColor="green.400">
            <Text fontWeight="700" color="green.500" fontSize="22px">
              3
            </Text>
          </RangeSliderThumb>
        </RangeSlider>
      </Box>
      <Flex mt="2" pl="0" ml="0">
        <Box>
          <Text>Alistando tu pedido</Text>
        </Box>
        <Spacer />
        <Box align="center">
          <Text>Pedido en camino</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>Pedido entregado</Text>
        </Box>
      </Flex>
    </Box>
  );
};
