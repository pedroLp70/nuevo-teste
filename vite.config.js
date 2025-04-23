import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/copia-auxiliar-transporte-para-organizar/',  // Nome exato do seu repositório no GitHub
});
