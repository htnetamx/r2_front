import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Dialog } from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

/**
 * Template for documentation of `Button` component's props.
 * @param {any} args Story argument
 * @returns {ReactElement} Button story.
 */
const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
