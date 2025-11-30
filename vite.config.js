import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This line is crucial! It tells the app it lives in this subfolder.
  base: "/my-portfolio/", 
})