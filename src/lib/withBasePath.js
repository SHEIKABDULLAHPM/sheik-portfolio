const RAW_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const BASE_PATH = RAW_BASE_PATH === '/' ? '' : RAW_BASE_PATH;
const EXTERNAL_PATTERN = /^([a-z]+:)?\/\//i;

const resolveSrc = (input) => {
  if (typeof input === 'string') {
    return input;
  }

  if (input && typeof input === 'object' && typeof input.src === 'string') {
    return input.src;
  }

  return null;
};

const shouldBypass = (value) =>
  !value ||
  EXTERNAL_PATTERN.test(value) ||
  value.startsWith('data:') ||
  value.startsWith('blob:');

export const withBasePath = (value) => {
  const src = resolveSrc(value);

  if (!src) {
    return value;
  }

  if (shouldBypass(src) || !BASE_PATH) {
    return src;
  }

  if (src.startsWith(BASE_PATH)) {
    return src;
  }

  if (src.startsWith('/')) {
    return `${BASE_PATH}${src}`;
  }

  return `${BASE_PATH}/${src}`;
};
