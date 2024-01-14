import { Block, BlockAttribute } from '@wordpress/blocks'
import { DemoButtonProps } from './types'

export enum DemoButtonVariants {
    GHOST = "ghost",
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export const DemoButtonVariantsClasses = {
    [DemoButtonVariants.GHOST]: "bg-transparent border border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500",
    [DemoButtonVariants.PRIMARY]: "bg-blue-500 hover:bg-blue-700 text-white",
    [DemoButtonVariants.SECONDARY]: "bg-gray-500 hover:bg-gray-700 text-white",
}

const defaultVariant = DemoButtonVariants.GHOST
const defaultLabel = "Demo Button"

export const WordpressBlockAttributes: Record<keyof DemoButtonProps, any> = {
    label: { type: "string", default: defaultLabel },
    variant: { enum: Object.values(DemoButtonVariants), default: defaultVariant } as any,
}