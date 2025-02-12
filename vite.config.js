import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/homyzEstate/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['swiper/css'],
    },
  },
});