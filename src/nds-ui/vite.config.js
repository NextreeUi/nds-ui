import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nds-ui/",
  build: {
    lib: {
      entry: './index.js',
      name: 'nds-ui',
      fileName: (format) => `index.${format}.js`,
    },
  }
})
