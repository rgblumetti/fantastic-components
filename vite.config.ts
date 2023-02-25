import { defineConfig } from 'vite'
import { resolve } from 'pathe'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.tsx'),
            name: "fantastic-components",
            fileName: "fantastic-components"
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'react'
                }
            }
        }
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        })
    ],
})
