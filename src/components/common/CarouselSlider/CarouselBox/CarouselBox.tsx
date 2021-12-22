import { ReactElement } from "react";
import { Box, Square, Text } from "@chakra-ui/react";
import { ICarouselBox } from "./ICarouselBox";

/**
 * CarouselBox component.
 * @param {ICarouselBox} props the CarouselBox component props.
 * @returns {ReactElement} React element.
 */
export const CarouselBox = (props: ICarouselBox): ReactElement => {
  /**
   * Filter product by discount rate.
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
          onClick={() => filterByDiscount(props.content)}
        >
          <Text p="4px" fontWeight="bold" fontSize="xl" color="white" textAlign="center">
            {props.content}
          </Text>
        </Square>
      </Box>
    </Box>
  );
};
