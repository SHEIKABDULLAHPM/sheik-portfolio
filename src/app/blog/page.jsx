import BlogClient from './BlogClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/blog') ?? {};

const BlogPage = () => <BlogClient />;

export default BlogPage;
