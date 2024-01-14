import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { DemoButtonEditProps, DemoButtonProps } from './types';
import { DemoButtonVariants, DemoButtonVariantsClasses } from './const';


export default function DemoButton_Edit({ attributes, setAttributes }: DemoButtonEditProps) {
    const { variant, label } = attributes as DemoButtonProps

    const updateVariant = (variant: DemoButtonVariants) => {
        setAttributes({ variant })
    }

    const updateLabel = (label: string) => {
        setAttributes({ label })
    }

    return (
        <>
            <BlockControls controls={{}} >
                <ToolbarGroup>
                    <ToolbarDropdownMenu
                        label="Variant"
                        text="Select a variant"
                        icon="admin-appearance"
                        controls={[
                            {
                                title: 'Primary',
                                onClick: () => updateVariant(DemoButtonVariants.PRIMARY),
                                isActive: variant === DemoButtonVariants.PRIMARY,
                            },
                            {
                                title: 'Secondary',
                                onClick: () => updateVariant(DemoButtonVariants.SECONDARY),
                                isActive: variant === DemoButtonVariants.SECONDARY
                            },
                            {
                                title: 'Ghost',
                                onClick: () => updateVariant(DemoButtonVariants.GHOST),
                                isActive: variant === DemoButtonVariants.GHOST
                            },
                        ]}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div className={`${DemoButtonVariantsClasses[variant]} w-fit rounded-lg`}>
                <input
                    className="!bg-transparent !border-0 !outline-none"
                    type="text"
                    value={label}
                    onChange={(e) => updateLabel(e.target.value)}
                />
            </div>
        </>
    )
}