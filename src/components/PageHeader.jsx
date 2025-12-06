const PageHeader = ({ title, subtitle, description, align = 'left' }) => {
  const isCentered = align === 'center';
  const containerClasses = [
    'page-heading',
    'flex flex-col gap-3 sm:gap-4',
    isCentered ? 'items-center text-center' : 'items-start text-left',
  ]
    .filter(Boolean)
    .join(' ');

  const copyWrapperClasses = [
    'space-y-3 sm:space-y-4',
    'text-balance',
    isCentered ? 'max-w-3xl mx-auto' : 'max-w-4xl',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={containerClasses}>
      {subtitle ? (
        <span className={`eyebrow ${isCentered ? 'justify-center text-center' : ''}`}>{subtitle}</span>
      ) : null}
      <div className={copyWrapperClasses}>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
};

export default PageHeader;
