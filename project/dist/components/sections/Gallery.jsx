/* Gallery — masonry-style image grid with lightbox */
const Gallery = () => {
  const images = [
    { src: "${window.__resources["img32"]}", title: "Living room install", category: "Residential" },
    { src: "${window.__resources["img8"]}", title: "Corporate fit-out", category: "Office" },
    { src: "${window.__resources["img42"]}", title: "Hydraulic bed setup", category: "Residential" },
    { src: "${window.__resources["img10"]}", title: "Sliding wardrobe", category: "Residential" },
    { src: "${window.__resources["img25"]}", title: "Kitchen cabinets", category: "Residential" },
    { src: "${window.__resources["img39"]}", title: "Team at work", category: "Behind the scenes" },
    { src: "${window.__resources["img14"]}", title: "Reception desk install", category: "Office" },
    { src: "${window.__resources["img27"]}", title: "Designer chair assembly", category: "Residential" },
  ];

  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    const onKey = (e) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((active + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((active - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="section alt gallery-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow center">Recent Work</span>
          <h2>Real installs, real homes & offices.</h2>
          <p className="lead">A glimpse of jobs we've completed across the country — from cosy 1BHKs to multi-floor corporate setups.</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <button key={i}
                    className={`gallery-tile g-${i % 8}`}
                    onClick={() => setActive(i)}
                    aria-label={`Open ${img.title}`}>
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-tile-meta">
                <span className="gallery-tile-cat">{img.category}</span>
                <span className="gallery-tile-title">{img.title}</span>
              </div>
              <span className="gallery-tile-zoom">
                <Icon name="arrow-up-right" size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lb-close" aria-label="Close"><Icon name="x" size={22} /></button>
          <button className="lb-nav lb-prev"
                  onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}
                  aria-label="Previous"><Icon name="chevron-left" size={24} /></button>
          <button className="lb-nav lb-next"
                  onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }}
                  aria-label="Next"><Icon name="chevron-right" size={24} /></button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[active].src} alt={images[active].title} />
            <div className="lb-caption">
              <span>{images[active].category}</span>
              <strong>{images[active].title}</strong>
              <span className="lb-counter">{active + 1} of {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
window.Gallery = Gallery;
