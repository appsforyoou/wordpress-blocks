import { BlockAttribute } from '@wordpress/blocks'
import { HTMLAttributes } from 'react'

export enum DemoButtonVariants {
    GHOST = "ghost",
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export type ExtraProps = {
    variant: DemoButtonVariants
    label?: string
}

type Props = HTMLAttributes<HTMLButtonElement> & ExtraProps

export const WordpressBlockAttributes: Record<keyof ExtraProps, BlockAttribute<unknown>> = {
    label: { type: "string" },
    variant: { enum: Object.values(DemoButtonVariants) } as any,
}  

const DemoButtonVariantsClasses = {
    [DemoButtonVariants.GHOST]: "bg-transparent border border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500",
    [DemoButtonVariants.PRIMARY]: "bg-blue-500 hover:bg-blue-700 text-white",
    [DemoButtonVariants.SECONDARY]: "bg-gray-500 hover:bg-gray-700 text-white",
}

export default function DemoButton({ variant = DemoButtonVariants.GHOST, children, label, className, ...rest }: Props) {
    const btnContent = label || children

    return (
        <button {...rest} className={`${DemoButtonVariantsClasses[variant]} ${className}`}>
            {btnContent}
        </button>
    )
}

window.wp?.blocks.registerBlockType('appsfy/demo-button', {
    title: 'Demo Button',
    icon: 'button',
    category: 'common',
    attributes: WordpressBlockAttributes,

    edit: function(props) {
        const { attributes, setAttributes } = props
        return <DemoButton {...attributes as ExtraProps} />
    },

    save: function(props) {
        const { attributes } = props
        return <DemoButton {...attributes as ExtraProps} />
    }
})