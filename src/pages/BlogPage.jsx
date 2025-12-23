import { useCallback, useState } from 'react';
import { RefreshCcw, ThumbsDown, ThumbsUp } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { blogPosts } from '../data/blog.js';

const REACTION_STORAGE_PREFIX = 'portfolio:blog:reaction:';

const createReactionSnapshot = (post) => ({
  likes: Number(post.likes ?? 0),
  dislikes: Number(post.dislikes ?? 0),
  userReaction: null,
});

const readStoredReaction = (post) => {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(`${REACTION_STORAGE_PREFIX}${post.id}`);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    return {
      likes: Number(parsed.likes ?? post.likes ?? 0),
      dislikes: Number(parsed.dislikes ?? post.dislikes ?? 0),
      userReaction: parsed.userReaction ?? null,
    };
  } catch (error) {
    console.warn('Failed to parse stored reaction for post', post.id, error);
    return null;
  }
};

const persistReaction = (postId, snapshot) => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(`${REACTION_STORAGE_PREFIX}${postId}`, JSON.stringify(snapshot));
  } catch (error) {
    console.warn('Failed to persist reaction for post', postId, error);
  }
};

const BlogPage = () => {
  const [reactions, setReactions] = useState(() =>
    blogPosts.reduce((acc, post) => {
      const stored = readStoredReaction(post);
      acc[post.id] = stored ?? createReactionSnapshot(post);
      return acc;
    }, {})
  );

  const handleReaction = useCallback((id, type) => {
    setReactions((prev) => {
      const entry = prev[id];
      if (!entry || entry.userReaction) {
        return prev;
      }
      const updated = {
        ...entry,
        likes: type === 'like' ? entry.likes + 1 : entry.likes,
        dislikes: type === 'dislike' ? entry.dislikes + 1 : entry.dislikes,
        userReaction: type,
      };
      persistReaction(id, updated);
      return { ...prev, [id]: updated };
    });
  }, []);

  const handleResetReaction = useCallback((id) => {
    setReactions((prev) => {
      const entry = prev[id];
      if (!entry || !entry.userReaction) {
        return prev;
      }
      const updated = {
        ...entry,
        likes: entry.userReaction === 'like' ? Math.max(0, entry.likes - 1) : entry.likes,
        dislikes: entry.userReaction === 'dislike' ? Math.max(0, entry.dislikes - 1) : entry.dislikes,
        userReaction: null,
      };
      persistReaction(id, updated);
      return { ...prev, [id]: updated };
    });
  }, []);

  return (
    <div className="page-shell">
      <div className="page-stack">
        <PageHeader
          title="Writing & Notes"
          subtitle="Insights & Notes"
        />
      <div className="page-grid page-grid--3">
        {blogPosts.map((post) => (
          <article key={post.id} className="surface-tight flex h-full flex-col gap-4">
            <div className="space-y-1.5">
              <h2 className="text-lg font-semibold text-white">{post.title}</h2>
              <span className="text-xs uppercase tracking-[0.22em] text-indigo-200">Updated {post.publishedOn}</span>
            </div>
            <p className="text-sm text-slate-300/90 sm:text-base">{post.preview}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2 text-sm">
              {(() => {
                const entry = reactions[post.id];
                const isLiked = entry?.userReaction === 'like';
                const isDisliked = entry?.userReaction === 'dislike';
                return (
                  <>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                        isLiked
                          ? 'border-emerald-400 bg-emerald-500/15 text-emerald-200 focus-visible:ring-emerald-400'
                          : 'border-slate-700 bg-slate-900/60 text-slate-100 hover:border-emerald-400 hover:text-emerald-200 focus-visible:ring-emerald-300'
                      }`}
                      onClick={() => handleReaction(post.id, 'like')}
                      aria-pressed={isLiked}
                      aria-label={isLiked ? 'Remove like from this article' : 'Like this article'}
                    >
                      <ThumbsUp size={16} aria-hidden="true" />
                      <span aria-live="polite">Like ({entry?.likes ?? 0})</span>
                    </button>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                        isDisliked
                          ? 'border-rose-400 bg-rose-500/15 text-rose-200 focus-visible:ring-rose-400'
                          : 'border-slate-700 bg-slate-900/60 text-slate-100 hover:border-rose-400 hover:text-rose-200 focus-visible:ring-rose-300'
                      }`}
                      onClick={() => handleReaction(post.id, 'dislike')}
                      aria-pressed={isDisliked}
                      aria-label={isDisliked ? 'Remove dislike from this article' : 'Dislike this article'}
                    >
                      <ThumbsDown size={16} aria-hidden="true" />
                      <span aria-live="polite">Dislike ({entry?.dislikes ?? 0})</span>
                    </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-indigo-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
                        onClick={() => handleResetReaction(post.id)}
                        disabled={!entry?.userReaction}
                        aria-disabled={!entry?.userReaction}
                      >
                        <RefreshCcw size={14} aria-hidden="true" />
                        <span>{entry?.userReaction ? 'Reset' : 'Set reaction'}</span>
                      </button>
                  </>
                );
              })()}
            </div>
          </article>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BlogPage;
