import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { certificates } from '../data/certificates.js';

const FILTER_OPTIONS = ['All', 'Courses', 'Other'];

const CertificatesPage = () => {
	const [activeFilter, setActiveFilter] = useState('All');

	const filteredCertificates = useMemo(() => {
		if (activeFilter === 'All') {
			return certificates;
		}
		return certificates.filter((cert) => {
			const certificateType = cert.type ?? 'Courses';
			return certificateType === activeFilter;
		});
	}, [activeFilter]);

	const totalCertificates = certificates.length;
	const isShowingAll = activeFilter === 'All';
	const activeLabel = isShowingAll ? 'All credentials' : `${activeFilter} only`;

	return (
		<div className="space-y-12">
			<PageHeader
				title="Certificates & Courses"
				subtitle="Professional Credentials"
				description="Formal coursework and proofs of learning that back my hands-on projects."
			/>

			<section className="surface space-y-6">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Filter</p>
						<p className="text-sm text-slate-300/80 sm:text-base">Keep things tidy by toggling categories or showing everything.</p>
					</div>
					<button
						type="button"
						onClick={() => setActiveFilter('All')}
						disabled={isShowingAll}
						className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
							isShowingAll
								? 'cursor-not-allowed border-white/10 text-slate-500'
								: 'border-white/20 text-slate-200 hover:border-indigo-400 hover:text-white'
						}`}
					>
						Show all
					</button>
				</div>
				<div className="flex flex-wrap gap-2">
					{FILTER_OPTIONS.map((option) => {
						const isActive = activeFilter === option;
						return (
							<button
								key={option}
								type="button"
								onClick={() => setActiveFilter(option)}
								aria-pressed={isActive}
								className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition text-center leading-tight whitespace-normal break-words ${
									isActive
										? 'border-white/40 bg-white/15 text-white'
										: 'border-white/15 bg-white/5 text-slate-300 hover:border-indigo-300 hover:text-white'
								}`}
							>
								{option}
							</button>
						);
					})}
				</div>
			</section>

			<div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
				<p>
					Showing {filteredCertificates.length} of {totalCertificates}
				</p>
				<p className="text-xs uppercase tracking-[0.22em] text-indigo-200">{activeLabel}</p>
			</div>

			{filteredCertificates.length ? (
				<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{filteredCertificates.map((cert) => {
						const hasImage = Boolean(cert.image);
						return (
							<article
								key={cert.id}
								className="surface-tight flex h-full flex-col gap-4"
							>
								{hasImage ? (
									<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
										<img
											src={cert.image}
											alt={`${cert.provider} certificate`}
											className="h-auto w-full object-contain transition duration-300 ease-out group-hover:scale-[1.01]"
										/>
									</div>
								) : null}
								<div className="flex flex-col gap-2">
									<p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-indigo-200">{cert.provider}</p>
									<h2 className="text-[clamp(1rem,2vw,1.2rem)] font-semibold leading-snug text-white">{cert.title}</h2>
									{cert.summary ? <p className="text-sm text-slate-300/90">{cert.summary}</p> : null}
								</div>
								<div className="flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-indigo-200">
									<span className="rounded-full border border-white/20 px-3 py-1">Issued {cert.year}</span>
									<span className="rounded-full border border-white/15 px-3 py-1">{cert.category}</span>
								</div>
								<div className="flex flex-wrap gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-indigo-200">
									{(cert.technologies ?? []).map((tech) => (
										<span key={tech} className="rounded-full border border-white/10 px-3 py-1">
											{tech}
										</span>
									))}
								</div>
								{cert.link ? (
									<a
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
									>
										View credential <ArrowUpRight size={16} />
									</a>
								) : null}
							</article>
						);
					})}
				</div>
			) : (
				<div className="surface text-center text-slate-400">
					<p className="text-base font-semibold text-white">No certificates match those filters.</p>
					<p className="text-sm">Switch categories or tap “Show all”.</p>
				</div>
			)}
		</div>
	);
};

export default CertificatesPage;
