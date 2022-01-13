/// <reference types="vitest" />
import { defineConfig } from 'vite'

import typescript from '@rollup/plugin-typescript'

import { resolve } from 'path'

export default defineConfig({
  test: {
    watch: false
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@observerly/polaris',
      fileName: format => `polaris.${format}.js`
    },
    rollupOptions: {
      output: {
        sourcemap: true
      }
    }
  }
})
