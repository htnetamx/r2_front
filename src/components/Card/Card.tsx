import { ReactElement } from "react";

import { useColorModeValue, Box, BoxProps } from "@chakra-ui/react";

/**
 * The card component.
 * @param {BoxProps} props - The properties passed to the component.
 * @returns {ReactElement} The card component.
 **/
export const Card = (props: BoxProps): ReactElement => (
  <Box bg={useColorModeValue("white", "gray.800")} rounded={{ md: "2xl" }} p="8" {...props} />
);
