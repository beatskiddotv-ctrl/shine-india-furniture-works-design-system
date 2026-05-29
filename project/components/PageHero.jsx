/* Page hero — for inner pages (Services, About, Clients, Contact) */
const PageHero = ({ eyebrow, title, description, image, breadcrumbs }) => {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(11,18,36,0.78), rgba(11,18,36,0.92)), url(${image})` }}
      />
      <div className="page-hero-overlay-shapes" aria-hidden="true">
        <span className="shape sh-1"></span>
        <span className="shape sh-2"></span>
      </div>
      <div className="container page-hero-inner">
        {breadcrumbs && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="crumb">
                {b}{i < breadcrumbs.length - 1 && <span className="crumb-sep">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow" style={{ color: "var(--beige-300)" }}>{eyebrow}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
      </div>
    </section>
  );
};
window.PageHero = PageHero;
