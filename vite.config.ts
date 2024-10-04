import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  const isDevelop = mode === 'development';

  return defineConfig({
    server: {
      port: 3000,
      open: true,
      proxy: isDevelop
        ? {
            '/api': {
              target: 'http://localhost:8000',
              changeOrigin: true,
              secure: false,
            },
          }
        : undefined,
    },
    plugins: [react(), tsconfigPaths()],
  });
};
