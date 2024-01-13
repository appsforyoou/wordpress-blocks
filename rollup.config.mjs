import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/bundle.js',
            name: 'bundle',
            format: 'iife',
        },
    ],
    plugins: [
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
        typescript(),
        babel({
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-react',
                    {
                        runtime: "automatic",
                        importSource: "react"
                    }
                ],
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            babelHelpers: 'bundled',
        }),
        terser(),
    ],
}