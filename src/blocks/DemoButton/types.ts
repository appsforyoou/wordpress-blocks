import { DemoButtonVariants } from './const'
import { BlockEditProps, BlockSaveProps } from '@wordpress/blocks'

export type DemoButtonProps = {
    variant: DemoButtonVariants
    label: string
}

export type DemoButtonEditProps = BlockEditProps<Record<keyof DemoButtonProps, any>>
export type DemoButtonSaveProps = BlockSaveProps<Record<keyof DemoButtonProps, any>>