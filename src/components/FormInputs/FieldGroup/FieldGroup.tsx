import * as React from "react";

import { Box, Heading, Stack } from "@chakra-ui/react";

import { IFieldGroupProps } from "./IFieldGroupProps";

/**
 * The FieldGroup list container.
 * @param {IFieldGroupProps} props - The properties passed to the FieldGroup.
 * @returns {ReactElement} The FieldGroup container.
 **/
export const FieldGroup = (props: IFieldGroupProps): React.ReactElement => {
  const { title, children, ...flexProps } = props;
  return (
    <Stack direction={{ base: "column", lg: "row" }} spacing="6" py="4" {...flexProps}>
      <Box minW="3xs">
        {title && (
          <Heading as="h2" fontWeight="semibold" fontSize="lg" flexShrink={0}>
            {title}
          </Heading>
        )}
      </Box>
      {children}
    </Stack>
  );
};
