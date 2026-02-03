import { routeMetadata } from '@/data/routeMetadata.js';

const FALLBACK = routeMetadata['/'];
const SOCIAL_IMAGE = '/sa-mark.svg';

export const getRouteMetadata = (path) => {
  const meta = routeMetadata[path] ?? FALLBACK;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [SOCIAL_IMAGE],
    },
  };
};
