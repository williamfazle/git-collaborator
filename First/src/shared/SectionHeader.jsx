const SectionHeader = ({ eyebrow, title, description, action }) => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-base-content/70">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
};

export default SectionHeader;
