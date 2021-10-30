import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ExportBuildInfo } from '../dist'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    ExportBuildInfo({
      fileName: 'test-build-info.x',
      extend: {
        buildTime: 'test',
        oha: 'oha',
      }
    })
  ]
})
