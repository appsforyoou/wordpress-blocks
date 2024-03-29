import type { Meta, StoryObj } from '@storybook/react';
import DemoButton_Edit from './DemoButton_Edit';
import { DemoButtonEditProps, DemoButtonProps, DemoButtonSaveProps } from './types';
import DemoButton_Save from './DemoButton_Save';
import { DemoButtonVariants } from './const';
import { useArgs } from '@storybook/client-api';

const DemoButton_Edit_Wrapper = () => {
    const [attributes, updateArgs] = useArgs<DemoButtonProps>()

    const wpBlockProps: DemoButtonEditProps = {
        attributes,
        isSelected: false,
        context: undefined,
        setAttributes: (newAttributes) => updateArgs({ ...attributes, ...newAttributes }),
        clientId: "",
        className: "",
    }

    return <DemoButton_Edit {...wpBlockProps} />
}

const DemoButton_Save_Wrapper = ({ variant, label }: DemoButtonProps) => {

    const wpBlockProps: DemoButtonSaveProps = {
        attributes: { variant, label },
        className: "",
    }

    return <DemoButton_Save {...wpBlockProps} />
}

const meta: Meta<typeof DemoButton_Edit_Wrapper> = {
    title: "Blocks/DemoButton",
    tags: ["Blocks", "Wordpress", "default_blocks"],
    argTypes: {
        variant: {
            control: "select",
            options: Object.values(DemoButtonVariants)
        }
    }
}

export default meta;

type EditVariantStory = StoryObj<typeof DemoButton_Edit_Wrapper>;
export const EditState: EditVariantStory = {
    name: "Edit State",
    render: DemoButton_Edit_Wrapper,
    args: {
        variant: DemoButtonVariants.GHOST,
        label: "Click me",
    },
}

type SaveVariantStory = StoryObj<typeof DemoButton_Save_Wrapper>;
export const SaveState: SaveVariantStory = {
    name: "Save State",
    render: DemoButton_Save_Wrapper,
    args: {
        variant: DemoButtonVariants.GHOST,
        label: "Click me",
    },
}