import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  resolve: {
    alias: {
     '@src': path.resolve(__dirname, './src'),
     '@components': path.resolve(__dirname, 'src/components')
    }
  },
  //base: '',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  }
})
