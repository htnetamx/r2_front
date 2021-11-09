import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

/**
 * Template for documentation of `Button` component's props.
 * @param {any} args Story argument
 * @returns {ReactElement} Button story.
 */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
