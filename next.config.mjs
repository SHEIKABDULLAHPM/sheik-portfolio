const DEPLOY_BASE_PATH = '/sheik-portfolio';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? DEPLOY_BASE_PATH : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
