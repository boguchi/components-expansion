import CheckBox from "./CheckBox.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof CheckBox> = {
  title: "Components/atoms/CheckBox",
  component: CheckBox,
  argTypes: {
    label: {
      control: "text",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof CheckBox> = {
  render: (args) => ({
    components: { CheckBox },
    setup() {
      return { args };
    },
    template: `<CheckBox v-bind="args" />`,
  }),
  args: {
    label: "label2",
  },
};
