import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPLACE 'repo-name' with whatever you name your GitHub repository later!
export default defineConfig({
  plugins: [react()],
  base: '/battlebot-planner/', 
})