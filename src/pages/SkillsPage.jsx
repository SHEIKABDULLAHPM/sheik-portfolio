import { useEffect, useState } from 'react';
import { Brain, CircuitBoard, Code2, Coffee, Database, Globe, Users, Wrench } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { skillDecks } from '../data/skills.js';

const PINNED_STORAGE_KEY = 'portfolio:pinned-skills';

const deriveDefaultPinnedIds = () => skillDecks.filter((deck) => deck.defaultPinned).map((deck) => deck.id);

const sanitizePinnedIds = (ids) => {
	if (!Array.isArray(ids)) {
		return null;
	}
	const validIds = ids.filter((id) => skillDecks.some((deck) => deck.id === id));
	return validIds;
};

const getStoredPinnedIds = () => {
	if (typeof window === 'undefined') {
		return null;
	}
	try {
		const raw = window.localStorage.getItem(PINNED_STORAGE_KEY);
		if (!raw) {
			return null;
		}
		const parsed = JSON.parse(raw);
		return sanitizePinnedIds(parsed);
	} catch (error) {
		console.warn('Failed to parse pinned skills from storage:', error);
		return null;
	}
};

const iconMap = {
	'programming-languages': Code2,
	'core-cs-concepts': CircuitBoard,
	'web-development': Globe,
	'databases': Database,
	'ai-machine-learning': Brain,
	'java-oracle-track': Coffee,
	'tools-analytics-platforms': Wrench,
	'soft-skills': Users,
};

const accentMap = {
	'programming-languages': {
		chipBg: 'bg-indigo-500/15',
		chipBorder: 'border-indigo-400/40',
		chipText: 'text-indigo-100',
		barGradientFrom: 'from-indigo-400',
		barGradientVia: 'via-purple-400',
		barGradientTo: 'to-indigo-500',
		barShadow: 'shadow-sm shadow-indigo-500/40',
	},
	'core-cs-concepts': {
		chipBg: 'bg-amber-500/15',
		chipBorder: 'border-amber-400/40',
		chipText: 'text-amber-100',
		barGradientFrom: 'from-amber-400',
		barGradientVia: 'via-orange-400',
		barGradientTo: 'to-amber-500',
		barShadow: 'shadow-sm shadow-amber-500/40',
	},
	'web-development': {
		chipBg: 'bg-emerald-500/15',
		chipBorder: 'border-emerald-400/40',
		chipText: 'text-emerald-100',
		barGradientFrom: 'from-emerald-400',
		barGradientVia: 'via-teal-400',
		barGradientTo: 'to-emerald-500',
		barShadow: 'shadow-sm shadow-emerald-500/40',
	},
	'databases': {
		chipBg: 'bg-cyan-500/15',
		chipBorder: 'border-cyan-400/40',
		chipText: 'text-cyan-100',
		barGradientFrom: 'from-cyan-400',
		barGradientVia: 'via-sky-400',
		barGradientTo: 'to-cyan-500',
		barShadow: 'shadow-sm shadow-cyan-500/40',
	},
	'ai-machine-learning': {
		chipBg: 'bg-violet-500/15',
		chipBorder: 'border-violet-400/40',
		chipText: 'text-violet-100',
		barGradientFrom: 'from-violet-400',
		barGradientVia: 'via-fuchsia-400',
		barGradientTo: 'to-violet-500',
		barShadow: 'shadow-sm shadow-violet-500/40',
	},
	'java-oracle-track': {
		chipBg: 'bg-orange-500/15',
		chipBorder: 'border-orange-400/40',
		chipText: 'text-orange-100',
		barGradientFrom: 'from-orange-400',
		barGradientVia: 'via-amber-400',
		barGradientTo: 'to-orange-500',
		barShadow: 'shadow-sm shadow-orange-500/40',
	},
	'tools-analytics-platforms': {
		chipBg: 'bg-sky-500/15',
		chipBorder: 'border-sky-400/40',
		chipText: 'text-sky-100',
		barGradientFrom: 'from-sky-400',
		barGradientVia: 'via-cyan-400',
		barGradientTo: 'to-sky-500',
		barShadow: 'shadow-sm shadow-sky-500/40',
	},
	'soft-skills': {
		chipBg: 'bg-rose-500/15',
		chipBorder: 'border-rose-400/40',
		chipText: 'text-rose-100',
		barGradientFrom: 'from-rose-400',
		barGradientVia: 'via-pink-400',
		barGradientTo: 'to-rose-500',
		barShadow: 'shadow-sm shadow-rose-500/40',
	},
};

const SkillsPage = () => {
	const [pinnedIds, setPinnedIds] = useState(() => {
		const stored = getStoredPinnedIds();
		if (stored !== null) {
			return stored;
		}
		return deriveDefaultPinnedIds();
	});
	const [hoveredId, setHoveredId] = useState(null);

	useEffect(() => {
		const stored = getStoredPinnedIds();
		if (stored) {
			setPinnedIds((prev) => {
				if (JSON.stringify(prev) === JSON.stringify(stored)) {
					return prev;
				}
				return stored;
			});
			return;
		}
		setPinnedIds(deriveDefaultPinnedIds());
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}
		window.localStorage.setItem(PINNED_STORAGE_KEY, JSON.stringify(pinnedIds));
	}, [pinnedIds]);

	const togglePin = (id) => {
		setPinnedIds((prev) => {
			const isPinned = prev.includes(id);
			if (isPinned) {
				return prev.filter((value) => value !== id);
			}
			return [...prev, id];
		});
	};

	const setHoverState = (id, isHovering) => {
		setHoveredId((prev) => {
			if (isHovering) {
				return id;
			}
			return prev === id ? null : prev;
		});
	};

	return (
		<div className="space-y-10 sm:space-y-12">
			<PageHeader
				title="Skills & Domains"
				subtitle="Core Competencies"
				description="An interactive snapshot of the stacks, foundations, and soft skills I rely on day-to-day."
			/>
			<section className="surface-tight space-y-3">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-300">Skill decks overview</p>
					<span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-indigo-200">{pinnedIds.length} pinned</span>
				</div>
				<p className="text-sm text-slate-300 leading-relaxed">
					Hover a card to peek at proficiency levels. Pin favourites to keep them surfaced for quick reference.
				</p>
			</section>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
				{skillDecks.map((deck) => {
					const Icon = iconMap[deck.id] ?? Code2;
					const isPinned = pinnedIds.includes(deck.id);
					const isHovered = hoveredId === deck.id;
					const isExpanded = isPinned || isHovered;
					return (
						<SkillCard
							key={deck.id}
							title={deck.title}
							icon={Icon}
							items={deck.items}
							expanded={isExpanded}
							onHoverChange={(isHovering) => setHoverState(deck.id, isHovering)}
							isPinned={isPinned}
							onPinToggle={() => togglePin(deck.id)}
							accent={accentMap[deck.id]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsPage;
