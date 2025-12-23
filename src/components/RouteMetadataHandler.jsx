import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMetadata } from '../data/routeMetadata.js';

const DEFAULT_META = routeMetadata['/'];

const ensureMeta = (selector, attributes) => {
  if (typeof document === 'undefined') {
    return null;
  }
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  return element;
};

const RouteMetadataHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const meta = routeMetadata[location.pathname] ?? DEFAULT_META;
    const pageTitle = meta.title ?? DEFAULT_META.title;
    const pageDescription = meta.description ?? DEFAULT_META.description;

    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleElement.textContent = pageTitle;
    }

    const descriptionTag = ensureMeta('meta[name="description"]', { name: 'description' });
    if (descriptionTag) {
      descriptionTag.setAttribute('content', pageDescription);
    }

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    const ogDescription = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    const twitterTitle = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    const twitterDescription = ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' });

    ogTitle?.setAttribute('content', pageTitle);
    ogDescription?.setAttribute('content', pageDescription);
    twitterTitle?.setAttribute('content', pageTitle);
    twitterDescription?.setAttribute('content', pageDescription);

    return undefined;
  }, [location.pathname]);

  return null;
};

export default RouteMetadataHandler;
