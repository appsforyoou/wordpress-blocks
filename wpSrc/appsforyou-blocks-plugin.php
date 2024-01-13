<?php
/**
 * Plugin Name: appsforyou-blocks-plugin
 * Plugin URI: https://appsforyou.tech
 * Description: This plugin provides the HTML Blocks that you can use in the wordpress editor to customize your page, if you remove it, your website will stop working.
 * Version: 1.0
 * Author: AppsForYou
 * Author URI: https://appsforyou.tech
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: appsforyou-blocks-plugin
 * Domain Path: /languages
 */

 function loadBlocks() {
    wp_enqueue_script(
        'appsforyou-blocks',//script handle
        plugins_url( 'bundle.js', __FILE__ ),//script path
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),//dependencies
        1.0//version
    );
 }

 add_action( 'enqueue_block_editor_assets', 'loadBlocks' );
?>