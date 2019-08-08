import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/js/index.ts',
    output: {
        file: 'dist/js/content.js',
        format: 'iife',
        name: 'Tlm'
    },
    plugins: [
        resolve({
            mainFields: ['jsnext', 'module', 'main', 'browser'],
            browser: true
        }),
        eslint({
            exclude: [
                'src/styles/**',
            ]
        })
    ]
};