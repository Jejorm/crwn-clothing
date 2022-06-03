import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/payment': {
  //       target: 'http://localhost:8889',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: path => path.replace(/^\/payment/, "")
  //     }
  //   }
  // },
  plugins: [
      react(),
      svgrPlugin()
    ]
})
