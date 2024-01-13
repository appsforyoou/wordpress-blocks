import DemoButton_Edit from './DemoButton_Edit'
import DemoButton_Save from './DemoButton_Save'
import { DemoButtonVariants, WordpressBlockAttributes } from './const'

window.wp?.blocks.registerBlockType('appsfy/demo-button', {
    title: 'Demo Button',
    icon: 'button',
    category: 'common',
    attributes: WordpressBlockAttributes,

    example: {
        attributes: {
            variant: DemoButtonVariants.GHOST,
            label: 'Demo Button',
        }
    },

    edit: DemoButton_Edit,
    save: DemoButton_Save
})