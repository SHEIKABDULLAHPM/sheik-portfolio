const PageHeader = ({ title, subtitle, description, align = 'left' }) => {
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
    <header className={containerClasses}>
      {subtitle ? (
        <span className={`eyebrow tracking-[0.28em] ${isCentered ? 'justify-center text-center' : ''}`}>{subtitle}</span>
      ) : null}
      <div className={copyWrapperClasses}>
        <h1 className="text-[clamp(1.75rem,3.6vw,2.7rem)] leading-tight">{title}</h1>
        {description ? <p className="text-sm text-slate-300 sm:text-base">{description}</p> : null}
      </div>
    </header>
  );
};

export default PageHeader;
