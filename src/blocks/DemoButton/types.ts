import { HTMLAttributes } from 'react'
import { DemoButtonVariants } from './const'

export type ExtraProps = {
    variant: DemoButtonVariants
    label?: string
}

export type ExtraEditProps = {
    onVariantChanged: (variant: DemoButtonVariants) => void
} & ExtraProps

export type Props = HTMLAttributes<HTMLButtonElement> & ExtraProps
export type EditDemoButtonProps = HTMLAttributes<HTMLDivElement> & ExtraEditProps