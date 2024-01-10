import type { Meta, StoryObj } from '@storybook/react';

import FirstBlock from './FirstBlock';

const meta: Meta<typeof FirstBlock> = {
    component: FirstBlock,
    title: "Blocks/FirstBlock",
    tags: ["Blocks", "Demo"],
}

export default meta;

type Story = StoryObj<typeof FirstBlock>;
export const Primary: Story = {
    args: {},
}