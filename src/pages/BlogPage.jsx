import { useState } from 'react';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { blogPosts } from '../data/siteContent.js';

const BlogPage = () => {
  const [reactions, setReactions] = useState(() =>
    blogPosts.reduce((acc, post) => {
      acc[post.id] = { likes: post.likes, dislikes: post.dislikes };
      return acc;
    }, {})
  );

  const handleReaction = (id, type) => {
    setReactions((prev) => {
      const entry = prev[id];
      const updated =
        type === 'like'
          ? { ...entry, likes: entry.likes + 1 }
          : { ...entry, dislikes: entry.dislikes + 1 };
      return { ...prev, [id]: updated };
    });
  };

  return (
    <div className="space-y-10">
      <PageHeader
        title="Writing & Notes"
        subtitle="Insights & Notes"
      />
      <div className="space-y-5">
        {blogPosts.map((post) => (
          <article key={post.id} className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <span className="text-sm text-slate-400">Published {post.publishedOn}</span>
            </div>
            <p className="text-base text-slate-200">{post.preview}</p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 px-4 py-2 text-slate-100"
                onClick={() => handleReaction(post.id, 'like')}
              >
                <ThumbsUp size={16} /> Like ({reactions[post.id].likes})
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 px-4 py-2 text-slate-100"
                onClick={() => handleReaction(post.id, 'dislike')}
              >
                <ThumbsDown size={16} /> Dislike ({reactions[post.id].dislikes})
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
