import { DemoButtonVariantsClasses } from './const';
import { DemoButtonProps, DemoButtonSaveProps } from './types';

export default function DemoButton_Save({ attributes, className }: DemoButtonSaveProps) {
    const { variant, label } = attributes as DemoButtonProps
    
    return (
        <button className={`${DemoButtonVariantsClasses[variant]} ${className}`}>
            {label}
        </button>
    )
}