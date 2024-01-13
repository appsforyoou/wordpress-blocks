import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

//old babel config
// babel({
//     exclude: 'node_modules/**',
//     presets: [
//         [
//             '@babel/preset-react',
//             {
//                 runtime: "automatic",
//                 importSource: "react"
//             }
//         ],
//     ],
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//     babelHelpers: 'bundled',
// }),

export default {
    onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return
        }
        warn(warning)
    },
    external: [
        'react',
        'react-dom',
        '@wordpress/blocks',
        '@wordpress/block-editor',
        '@wordpress/element',
        '@wordpress/components',
    ],
    input: './src/index.ts',
    output: [
        {
            file: './dist/bundle.js',
            name: 'bundle',
            format: 'umd',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                '@wordpress/blocks': 'wp.blocks',
                '@wordpress/block-editor': 'wp.blockEditor',
                '@wordpress/element': 'wp.element',
                '@wordpress/components': 'wp.components',
            }
        },
    ],
    plugins: [
        json(),
        commonjs({
            include: [
                'node_modules/**',
                './tailwind.config.js',
                './postcss.config.js',
            ]
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
            preventAssignment: true,
        }),
        resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
        postcss({
            config: {
                path: './postcss.config.js'
            }
        }),
        babel({
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-react',
                [
                    '@babel/preset-typescript',
                    { isTSX: true, allExtensions: true }
                ]
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            babelHelpers: 'bundled',
        }),
        terser(),
    ],
}