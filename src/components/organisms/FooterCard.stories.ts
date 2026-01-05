import FooterCard from "./FooterCard.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof FooterCard> = {
  title: "Components/organisms/FooterCard",
  component: FooterCard,
};

export default meta;

export const Default: StoryObj<typeof FooterCard> = {
  render: () => ({
    components: { FooterCard },
    template: `
      <div style="width: 100%; height: 1000px;">
        <FooterCard>contents</FooterCard>
      </div>
    `,
  }),
  args: {},
};
