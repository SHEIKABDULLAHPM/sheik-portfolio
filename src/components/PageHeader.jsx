import { useId } from 'react';

const PageHeader = ({ title, subtitle, description, align = 'left' }) => {
  const headingId = useId();
  const subtitleId = subtitle ? `${headingId}-subtitle` : undefined;
  const descriptionId = description ? `${headingId}-description` : undefined;
  const isCentered = align === 'center';
  const containerClasses = [
    'page-heading',
    'flex flex-col gap-2.5 sm:gap-3.5',
    isCentered ? 'items-center text-center' : 'items-start text-left',
  ]
    .filter(Boolean)
    .join(' ');

  const copyWrapperClasses = [
    'space-y-2.5 sm:space-y-3.5',
    'text-balance',
    isCentered ? 'max-w-3xl mx-auto' : 'max-w-4xl',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={containerClasses} aria-labelledby={headingId} aria-describedby={descriptionId}>
      {subtitle ? (
        <span
          id={subtitleId}
          className={`eyebrow text-xs tracking-[0.22em] ${isCentered ? 'justify-center text-center' : ''}`}
        >
          {subtitle}
        </span>
      ) : null}
      <div className={copyWrapperClasses}>
        <h1
          id={headingId}
          aria-describedby={[subtitleId, descriptionId].filter(Boolean).join(' ') || undefined}
          className="text-[clamp(1.65rem,3vw,2.45rem)] font-semibold leading-tight text-white"
        >
          {title}
        </h1>
        {description ? (
          <p id={descriptionId} className="text-[0.95rem] text-slate-300/90 sm:text-[1.05rem]">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
};

export default PageHeader;
