import { useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Pin } from 'lucide-react';

/**
 * @typedef {{ name: string; proficiency: number }} SkillItem
 */

/**
 * @param {{
 *   title: string;
 *   icon?: import('react').ComponentType<any>;
 *   items?: SkillItem[];
 *   expanded?: boolean;
 *   onHoverChange?: (isHovering: boolean) => void;
 *   isPinned?: boolean;
 *   onPinToggle?: () => void;
 *   accent?: {
 *     chipBg?: string;
 *     chipBorder?: string;
 *     chipText?: string;
 *     barGradientFrom?: string;
 *     barGradientVia?: string;
 *     barGradientTo?: string;
 *     barShadow?: string;
 *   };
 * }} props
 */
const SkillCard = ({
  title,
  icon: Icon,
  items,
  expanded = false,
  onHoverChange,
  isPinned = false,
  onPinToggle,
  accent,
}) => {
  const skillItems = items ?? [];
  const hasDetails = skillItems.length > 0;
  const isExpanded = isPinned || expanded;

  const {
    chipBg = 'bg-indigo-500/15',
    chipBorder = 'border-indigo-400/40',
    chipText = 'text-indigo-100',
    barGradientFrom = 'from-indigo-400',
    barGradientVia = 'via-purple-400',
    barGradientTo = 'to-indigo-500',
    barShadow = 'shadow-sm shadow-indigo-500/40',
  } = accent ?? {};

  const handleKeyDown = useCallback(
    (event) => {
      if (!hasDetails) {
        return;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (onPinToggle) {
          onPinToggle();
        } else if (onHoverChange) {
          onHoverChange(!isExpanded);
        }
      }
    },
    [hasDetails, isExpanded, onHoverChange, onPinToggle]
  );

  const isHoverable = hasDetails;
  const helperText = isPinned
    ? 'Pinned · click to unpin'
    : isExpanded
      ? 'Hover away to hide'
      : 'Click to pin or hover to preview';

  const handleActivate = useCallback(
    (event) => {
      if (!hasDetails) {
        return;
      }
      if (event) {
        event.preventDefault();
      }
      if (onPinToggle) {
        onPinToggle();
        return;
      }
      if (onHoverChange) {
        onHoverChange(!isExpanded);
      }
    },
    [hasDetails, isExpanded, onHoverChange, onPinToggle]
  );

  const handlePinToggle = useCallback(
    (event) => {
      if (!hasDetails || !onPinToggle) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      onPinToggle();
    },
    [hasDetails, onPinToggle]
  );

  const handleMouseEnter = useCallback(() => {
    if (!hasDetails || !onHoverChange) {
      return;
    }
    onHoverChange(true);
  }, [hasDetails, onHoverChange]);

  const handleMouseLeave = useCallback(() => {
    if (!hasDetails || !onHoverChange) {
      return;
    }
    onHoverChange(false);
  }, [hasDetails, onHoverChange]);

  return (
    <motion.div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/12 bg-white/5 p-4 shadow-[0_18px_40px_rgba(2,6,23,0.45)] backdrop-blur-lg will-change-transform sm:p-5 ${
        hasDetails ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400/50' : ''
      }`}
      style={{ transition: 'border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, borderColor: isExpanded ? 'rgba(99, 102, 241, 0.4)' : 'rgba(71, 85, 105, 0.7)' }}
      whileHover={isHoverable ? { scale: 1.01, y: -4 } : {}}
      whileTap={isHoverable ? { scale: 0.985 } : {}}
      transition={{ type: 'spring', stiffness: 260, damping: 34, mass: 0.6 }}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      role={hasDetails ? 'button' : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      aria-expanded={hasDetails ? isExpanded : undefined}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 ${
          isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-90'
        }`}
        style={{ transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
      <div className="relative flex items-center justify-between gap-3">
        <motion.div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl will-change-transform ${
            isExpanded
              ? 'bg-indigo-500/30 text-white'
              : 'bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/20 group-hover:text-white'
          }`}
          style={{ transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          whileHover={{ rotate: isExpanded ? 0 : 3, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        >
          {Icon ? <Icon size={20} /> : null}
        </motion.div>
        <p
          className={`flex-1 text-base font-semibold ${
            isExpanded ? 'text-indigo-100' : 'text-white group-hover:text-indigo-100'
          }`}
          style={{ transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {title}
        </p>
        {hasDetails ? (
          <button
            type="button"
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-slate-700/40 bg-slate-900/40 text-indigo-200 transition-colors duration-300 hover:border-indigo-400/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/40 ${
              isPinned ? 'border-indigo-400/60 bg-indigo-500/20 text-indigo-100' : ''
            }`}
            aria-label={isPinned ? 'Unpin skill card' : 'Pin skill card'}
            aria-pressed={isPinned}
            onClick={handlePinToggle}
          >
            <Pin size={16} className={`transition-transform duration-300 ${isPinned ? 'rotate-45 fill-current' : ''}`} />
          </button>
        ) : null}
      </div>
      {hasDetails ? (
        <>
          <motion.p
            className={`relative mt-2 text-[11px] font-semibold uppercase tracking-wide ${
              isExpanded ? 'text-indigo-200/80' : 'text-indigo-200/70'
            }`}
            style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.04, duration: 0.28 }}
          >
            {helperText}
          </motion.p>
          <motion.div
            className="relative mt-3 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.28, ease: [0.48, 0.04, 0.32, 0.9] }}
          >
            {skillItems.map((item) => (
              <span
                key={`${item.name}-preview`}
                className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'
                } ${chipBg} ${chipBorder} ${chipText}`}
              >
                {item.name}
              </span>
            ))}
          </motion.div>
          <AnimatePresence initial={false}>
            {isExpanded ? (
              <motion.ul
                key="skill-details"
                className="relative mt-3 flex flex-col gap-2 text-sm text-slate-300"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.48, 0.04, 0.32, 0.9] }}
              >
                {skillItems.map((item) => {
                  const pct = Math.max(0, Math.min(100, Number(item.proficiency ?? 0)));
                  return (
                    <motion.li
                      key={item.name}
                      className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-sm shadow-slate-900/25"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2, ease: [0.48, 0.04, 0.32, 0.9] }}
                    >
                      <div className="flex items-center justify-start gap-3">
                        <span
                          className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${chipBg} ${chipBorder} ${chipText}`}
                        >
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${barGradientFrom} ${barGradientVia} ${barGradientTo} ${barShadow} will-change-transform`}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            exit={{ width: 0 }}
                            transition={{ duration: 0.4, ease: [0.48, 0.04, 0.32, 0.9] }}
                          />
                        </div>
                        <span className="w-10 shrink-0 text-right text-xs font-semibold text-indigo-200/80">{pct}%</span>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </>
      ) : null}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-90'
        }`}
        style={{ transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl will-change-transform" />
      </div>
    </motion.div>
  );
};

export default SkillCard;
