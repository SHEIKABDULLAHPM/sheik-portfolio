import { useState } from 'react';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { blogPosts } from '../data/siteContent.js';

const BlogPage = () => {
  const [reactions, setReactions] = useState(() =>
    blogPosts.reduce((acc, post) => {
      acc[post.id] = { likes: post.likes, dislikes: post.dislikes, userReaction: null };
      return acc;
    }, {})
  );

  const handleReaction = (id, type) => {
    setReactions((prev) => {
      const entry = prev[id];
      if (!entry || entry.userReaction) {
        return prev;
      }

      const updated = { ...entry };
      if (type === 'like') {
        updated.likes += 1;
      } else {
        updated.dislikes += 1;
      }
      updated.userReaction = type;
      return { ...prev, [id]: updated };
    });
  };

  return (
    <div className="space-y-10">
      <PageHeader
        title="Writing & Notes"
        subtitle="Insights & Notes"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="flex h-full flex-col space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <span className="text-sm text-slate-400">Published {post.publishedOn}</span>
            </div>
            <p className="text-base text-slate-200">{post.preview}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
              {(() => {
                const entry = reactions[post.id];
                const isLiked = entry?.userReaction === 'like';
                const isDisliked = entry?.userReaction === 'dislike';
                return (
                  <>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 transition-colors ${
                        isLiked
                          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                          : 'border-slate-700 bg-slate-900/60 text-slate-100 hover:border-emerald-400 hover:text-emerald-200'
                      }`}
                      onClick={() => handleReaction(post.id, 'like')}
                    >
                      <ThumbsUp size={16} /> Like ({entry?.likes ?? 0})
                    </button>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 transition-colors ${
                        isDisliked
                          ? 'border-rose-400 bg-rose-500/10 text-rose-200'
                          : 'border-slate-700 bg-slate-900/60 text-slate-100 hover:border-rose-400 hover:text-rose-200'
                      }`}
                      onClick={() => handleReaction(post.id, 'dislike')}
                    >
                      <ThumbsDown size={16} /> Dislike ({entry?.dislikes ?? 0})
                    </button>
                  </>
                );
              })()}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
