import ButtonBase from "./ButtonBase.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof ButtonBase> = {
  title: "Components/atoms/ButtonBase",
  component: ButtonBase,
  argTypes: {
    label: {
      control: "text",
      description: "text",
    },
    theme: {
      control: { type: "select" },
      options: ["primary", "secondary", "thirty"],
      description: "colors",
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof ButtonBase> = {
  render: (args) => ({
    components: { ButtonBase },
    setup() {
      return { args };
    },
    template: `<ButtonBase v-bind="args" />`,
  }),
  args: {
    label: "primary1",
    theme: "primary",
  },
};

export const Secondary: StoryObj<typeof ButtonBase> = {
  render: (args) => ({
    components: { ButtonBase },
    setup() {
      return { args };
    },
    template: `<ButtonBase v-bind="args" />`,
  }),
  args: {
    label: "secondary",
    theme: "secondary",
  },
};

export const Thirty: StoryObj<typeof ButtonBase> = {
  render: (args) => ({
    components: { ButtonBase },
    setup() {
      return { args };
    },
    template: `<ButtonBase v-bind="args" />`,
  }),
  args: {
    label: "thirty",
    theme: "thirty",
  },
};
