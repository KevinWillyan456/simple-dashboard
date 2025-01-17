import { FlatCompat } from '@eslint/eslintrc'
import tailwindcss from 'eslint-plugin-tailwindcss'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        plugins: {
            tailwindcss,
        },
        rules: {
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-custom-classname': 'warn',
            'tailwindcss/no-arbitrary-value': 'warn',
        },
        settings: {
            tailwindcss: {
                config: './tailwind.config.js',
            },
        },
    },
]

export default eslintConfig
