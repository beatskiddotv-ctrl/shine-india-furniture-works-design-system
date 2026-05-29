/* Quote slider — auto-scrolling testimonial banner with background images */
const QuoteSlider = () => {
  const quotes = [
    {
      text: "Customer happiness is our top priority.",
      bg: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1800&q=80",
      caption: "Our promise to every client"
    },
    {
      text: "Shifting home? We are here to take care of your furniture.",
      bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      caption: "Relocation & uninstallation services"
    },
    {
      text: "Professional furniture installation across India.",
      bg: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1800&q=80",
      caption: "From metros to tier-2 cities"
    },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % quotes.length), 5200);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="quote-slider">
      {quotes.map((q, idx) => (
        <div
          key={idx}
          className={`qs-slide ${i === idx ? "is-active" : ""}`}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(11,18,36,0.85) 10%, rgba(11,18,36,0.45)), url(${q.bg})` }}
        >
          <div className="container qs-inner">
            <span className="qs-quote-mark">"</span>
            <h2 className="qs-text">{q.text}</h2>
            <p className="qs-caption">{q.caption}</p>
          </div>
        </div>
      ))}
      <div className="qs-controls container">
        <div className="qs-dots">
          {quotes.map((_, idx) => (
            <button key={idx} className={`qs-dot ${i === idx ? "is-active" : ""}`}
                    onClick={() => setI(idx)} aria-label={`Quote ${idx + 1}`}>
              <span></span>
            </button>
          ))}
        </div>
        <div className="qs-count">
          <strong>0{i + 1}</strong>
          <span> / 0{quotes.length}</span>
        </div>
      </div>
    </section>
  );
};
window.QuoteSlider = QuoteSlider;
