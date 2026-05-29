/* Trust highlights — animated glassy cards */
const TrustHighlights = () => {
  const items = [
    { icon: "users", title: "Skilled Professionals", desc: "Trained technicians with deep furniture craftsmanship expertise." },
    { icon: "globe", title: "PAN India Service", desc: "Active across 28 states — metros, tier-2 and remote cities." },
    { icon: "briefcase", title: "Corporate & Individual", desc: "From a single chair to 500-seat office fit-outs." },
    { icon: "shield", title: "Quality Assurance", desc: "Every job audited. 6-month service guarantee included." },
    { icon: "zap", title: "Fast Response", desc: "Same-day site visits in 14+ cities. Average dispatch under 4 hours." },
  ];
  return (
    <section className="section alt trust-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow center">Why Customers Trust Us</span>
          <h2>Service standards built for India's homes & offices.</h2>
          <p className="lead">Five pillars that hold every Shine India job together — from a single chair assembly to a multi-city office rollout.</p>
        </div>
        <div className="trust-grid">
          {items.map((it, i) => (
            <div key={i} className="trust-card" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="trust-icon">
                <Icon name={it.icon} size={22} />
              </div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
              <span className="trust-num">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.TrustHighlights = TrustHighlights;
