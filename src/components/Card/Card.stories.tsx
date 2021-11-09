import { Center, Text } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

/**
 * Template for documentation of `Card` component's props.
 * @param {any} args Story argument
 * @returns {ReactElement} Card story.
 */
const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Center
      bgGradient={{ md: "radial(gray.600, gray.800)" }}
      height={{
        base: "100%",
      }}
    >
      <Card {...args}>
        <Text mt="16" fontSize="xs" mx="auto" maxW="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
      </Card>
    </Center>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  maxW: "2xl",
  mx: "auto",
  textAlign: "center",
};
