import wpBlocks from '@wordpress/blocks'
import wpComponents from '@wordpress/components'
import wpEditor from '@wordpress/editor'

declare global {
    interface Window {
        wp: {
            blocks: typeof wpBlocks,
            components: typeof wpComponents,
            editor: typeof wpEditor,
        }
    }
}