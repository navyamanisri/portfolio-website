function SectionHeader({ label, title, subtitle }) {
  return (
    <header className="section-header">
      <p className="section__label">{label}</p>
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;
