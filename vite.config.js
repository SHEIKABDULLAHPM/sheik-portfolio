import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

const GITHUB_PAGES_BASE = '/sheik-portfolio/';

const createImageminPlugin = () =>
  viteImagemin({
    gifsicle: { optimizationLevel: 3 },
    optipng: { optimizationLevel: 5 },
    mozjpeg: { quality: 80 },
    pngquant: { quality: [0.65, 0.85], speed: 3 },
    svgo: {
      plugins: [
        { name: 'removeViewBox', active: false },
        { name: 'removeEmptyAttrs', active: true },
      ],
    },
  });

export default defineConfig(({ command, mode }) => {
  const isProductionBuild = command === 'build' || mode === 'production';

  return {
    base: isProductionBuild ? GITHUB_PAGES_BASE : '/',
    plugins: [react(), ...(command === 'build' ? [createImageminPlugin()] : [])],
  };
});
