import BottomSheet from "./BottomSheet.vue";
import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/molecules/BottomSheet",
  component: BottomSheet,
};

export default meta;

export const Default: StoryObj<typeof BottomSheet> = {
  render: () => ({
    components: { BottomSheet },
    setup() {
      const isShow = ref(true);
      const toggle = () => (isShow.value = !isShow.value);
      return { isShow, toggle };
    },
    template: `
      <button @click="toggle">Open</button>
      <BottomSheet :isShow="isShow" @close="toggle">
        <h3>contents</h3>
        <p>slot contents</p>
        <button @click="toggle">Close</button>
      </BottomSheet>
    `,
  }),
};
