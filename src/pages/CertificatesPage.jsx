import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { certificates } from '../data/siteContent.js';

const FILTER_OPTIONS = ['Courses', 'Other'];

const CertificatesPage = () => {
	const [activeFilter, setActiveFilter] = useState('Courses');

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
		<div className="space-y-10">
			<PageHeader
				title="Certificates & Courses"
				subtitle="Professional Credentials"
				description="Formal coursework and proofs of learning that back my hands-on projects."
			/>

			<section className="surface space-y-5">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200">Filter</p>
						<p className="text-base text-slate-300">Keep things tidy by toggling categories or showing everything.</p>
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
								className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
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
				<p className="text-xs uppercase tracking-[0.3em] text-indigo-200">{activeLabel}</p>
			</div>

			{filteredCertificates.length ? (
				<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{filteredCertificates.map((cert) => {
						const hasImage = Boolean(cert.image);
						return (
							<article
								key={cert.id}
								className="flex h-full flex-col gap-4 rounded-3xl border border-transparent bg-white/5 p-5 shadow-[0_20px_45px_rgba(2,6,23,0.55)] transition"
							>
								<div className="flex items-start gap-3">
									{hasImage ? (
										<div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
											<img
												src={cert.image}
												alt={`${cert.provider} certificate badge`}
												className="h-10 w-10 object-contain"
											/>
										</div>
									) : null}
									<div className="flex flex-1 flex-col gap-1.5">
										<p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-indigo-300">{cert.provider}</p>
										<h2 className="text-lg font-semibold leading-snug text-white">{cert.title}</h2>
										{cert.summary ? <p className="text-sm text-slate-300">{cert.summary}</p> : null}
									</div>
									<span className="ml-auto text-sm font-semibold text-indigo-200">{cert.year}</span>
								</div>
								<div className="flex flex-wrap gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200">
									<span className="rounded-full border border-white/15 px-3 py-1">{cert.category}</span>
									{(cert.technologies ?? []).map((tech) => (
										<span key={tech} className="rounded-full border border-white/10 px-3 py-1">
											{tech}
										</span>
									))}
								</div>
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
								>
									View credential <ArrowUpRight size={16} />
								</a>
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
