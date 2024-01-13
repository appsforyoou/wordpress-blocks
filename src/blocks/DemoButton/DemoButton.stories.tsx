import type { Meta, StoryObj } from '@storybook/react';

import DemoButton, { DemoButtonVariants } from './DemoButton';

const meta: Meta<typeof DemoButton> = {
    component: DemoButton,
    title: "Blocks/DemoButton",
    tags: ["Blocks", "Demo"],
}

export default meta;

type Story = StoryObj<typeof DemoButton>;
export const Ghost: Story = {
    args: {
        variant: DemoButtonVariants.GHOST,
        children: "Button",
    },
}