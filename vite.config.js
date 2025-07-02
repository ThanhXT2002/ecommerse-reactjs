import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      // 'react': 'react.js',
      // 'react-dom': 'react-dom.js',
      // 'react-dom/client': 'react-dom/client.js',
      // 'react-dom/server': 'react-dom/server.js',
      // 'react-dom/test-utils': 'react-dom/test-utils.js',
      // 'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      // 'react/jsx-runtime': 'react/jsx-runtime.js',
      // 'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js'
    }
  }
})
