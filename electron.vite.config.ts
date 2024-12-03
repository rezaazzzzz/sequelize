import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        external: ['sqlite3'], // Externalize sqlite3
      },
      commonjsOptions: {
        dynamicRequireTargets: [
          // Include all sqlite3 files that may be dynamically required
          'node_modules/sqlite3/lib/*.js',
        ],
        ignoreDynamicRequires: false, // Allow dynamic requires
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        external: ['sqlite3'], // Ensure sqlite3 is externalized for preload
      },
    },
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [react()],
  },
});
