import { HTMLAttributes } from 'react'

export enum DemoButtonVariants {
    GHOST = "ghost",
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

type Props = HTMLAttributes<HTMLButtonElement> & {
    variant: DemoButtonVariants
}

const DemoButtonVariantsClasses = {
    [DemoButtonVariants.GHOST]: "bg-transparent border border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500",
    [DemoButtonVariants.PRIMARY]: "bg-blue-500 hover:bg-blue-700 text-white",
    [DemoButtonVariants.SECONDARY]: "bg-gray-500 hover:bg-gray-700 text-white",
}

export default function DemoButton({ variant = DemoButtonVariants.GHOST, children, className, ...rest }: Props) {
    return (
        <button {...rest} className={`${DemoButtonVariantsClasses[variant]} ${className}`}>
            {children}
        </button>
    )
}