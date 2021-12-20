import { ReactElement } from "react";
import { Box, Square, Text } from "@chakra-ui/react";

/**
 * BoxItem component.
 * @param {props} props the product clicked.
 * @returns {ReactElement} React element.
 */
export const CarouselBox = (props: any): ReactElement => {
  /**
   * BoxItem component.
   * @param {name} name the product clicked.
   * @returns {void} function element.
   */
  const filterByDiscount = (name: string) => console.log("Filter by", name);
  return (
    <Box>
      <Box
        height={{ base: "169px", md: "169px", xs: "192px" }}
        width={{ base: "295px", md: "295px", xs: "152px" }}
        overflow="hidden"
      >
        <Square
          height="169px"
          rounded="md"
          boxShadow="md"
          bg="white"
          borderWidth="1px"
          backgroundColor={props.color}
          onClick={() => filterByDiscount(props.name)}
        >
          <Text p="4px" fontWeight="bold" fontSize="xl" color="white" textAlign="center">
            {props.name}
          </Text>
        </Square>
      </Box>
    </Box>
  );
};
