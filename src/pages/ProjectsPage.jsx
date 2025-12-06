import { useMemo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { projects } from '../data/siteContent.js';

const ProjectsPage = () => {
	const categoryFilters = useMemo(
		() => ['All', ...new Set(projects.flatMap((project) => project.filters ?? ['General']))],
		[]
	);
	const [activeCategory, setActiveCategory] = useState('All');

	const filteredProjects = projects.filter((project) => {
		const categories = project.filters && project.filters.length > 0 ? project.filters : ['General'];
		return activeCategory === 'All' ? true : categories.includes(activeCategory);
	});

	const LinkButton = ({ href, children, variant = 'default' }) => {
		const isDisabled = !href;
		const baseClasses =
			'inline-flex w-full min-w-[120px] items-center justify-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 sm:flex-1';
		const variantClasses =
			variant === 'primary'
				? isDisabled
					? 'bg-indigo-500/40'
					: 'bg-indigo-500/90 hover:bg-indigo-400'
				: isDisabled
				? 'border border-white/15'
				: 'border border-white/15 hover:border-indigo-400';
		const stateClasses = isDisabled ? 'cursor-not-allowed opacity-60' : '';

		return (
			<a
				href={href ?? '#'}
				target={isDisabled ? undefined : '_blank'}
				rel={isDisabled ? undefined : 'noopener noreferrer'}
				title={isDisabled ? 'Link coming soon' : undefined}
				aria-disabled={isDisabled}
				tabIndex={isDisabled ? -1 : undefined}
				onClick={(event) => {
					if (isDisabled) {
						event.preventDefault();
					}
				}}
				className={`${baseClasses} ${variantClasses} ${stateClasses}`}
			>
				{children}
			</a>
		);
	};

	return (
		<div className="space-y-8 lg:space-y-10">
			<PageHeader
				title="Projects & Experiments"
				subtitle="Case Studies"
				description="A curated log of tools, dashboards, and research experiments that shaped my craft."
			/>
			<section className="surface space-y-4 sm:space-y-5">
				<div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-slate-300">
					<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-300">Filter by focus</p>
					<span className="text-[0.7rem] text-slate-400">{filteredProjects.length} showing</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{categoryFilters.map((category) => {
						const isActive = activeCategory === category;
						return (
							<button
								key={category}
								type="button"
								onClick={() => setActiveCategory(category)}
								className={`rounded-full border px-4 py-2 text-[0.75rem] font-medium uppercase tracking-wide transition ${
									isActive ? 'border-white/30 bg-white/10 text-white' : 'border-white/15 text-slate-200 hover:border-white/30'
								}`}
							>
								{category}
							</button>
						);
					})}
				</div>
			</section>
			<div className="grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
				{filteredProjects.length === 0 ? (
					<p className="surface text-sm text-slate-400">
						No projects match “{activeCategory}”. Try another filter.
					</p>
				) : (
					filteredProjects.map((project) => (
						<article
							key={project.id}
							className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_45px_rgba(2,6,23,0.55)] backdrop-blur sm:p-5"
						>
							<div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl">
								<img
									src={project.image}
									alt={project.title}
									className="h-full w-full object-cover"
									loading="lazy"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-indigo-500/30" />
							</div>
							<div className="flex flex-1 flex-col gap-3">
								<div className="space-y-2">
									<p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-slate-300">
										{(project.filters && project.filters.length > 0 ? project.filters : ['General']).join(' • ')}
									</p>
									<h2 className="text-[clamp(1.15rem,2.8vw,1.35rem)] font-semibold leading-snug text-white">
										{project.title}
									</h2>
									<p className="text-sm text-slate-300/90">{project.description}</p>
								</div>
								<div className="flex flex-wrap gap-1.5">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-indigo-100"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
							<div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
								<LinkButton href={project.github}>
									<Github size={16} />
									<span>GitHub</span>
								</LinkButton>
								<LinkButton href={project.live} variant="primary">
									<ExternalLink size={16} />
									<span>Live</span>
								</LinkButton>
							</div>
						</article>
					))
				)}
			</div>
		</div>
	);
};

export default ProjectsPage;
