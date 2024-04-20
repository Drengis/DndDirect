import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: ['mobx', 'mobx-react-lite'],
  },
  babel: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
  },
});