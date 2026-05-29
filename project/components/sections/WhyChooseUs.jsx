/* Why Choose Us — split image + checklist */
const WhyChooseUs = ({ navigate }) => {
  const points = [
    { icon: "users",     title: "Experienced Team",     desc: "10+ years combined experience in furniture craftsmanship & installation." },
    { icon: "zap",       title: "Fast Service",         desc: "Same-day visits in 14 metros. SLA-backed response for corporate clients." },
    { icon: "award",     title: "Affordable Pricing",   desc: "Transparent, itemised quotes. No surprise on-site charges." },
    { icon: "globe",     title: "PAN India Operations", desc: "Coverage across 28 states with local field teams." },
    { icon: "briefcase", title: "Corporate Expertise",  desc: "Large-scale office fit-outs, hostels, hotels and government projects." },
    { icon: "sparkles",  title: "Customer Satisfaction",desc: "4.9★ average rating across 5,000+ completed jobs." },
  ];
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <div className="why-image-wrap">
          <div className="why-image"
               style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80)` }} />
          <div className="why-stat-card glass">
            <div className="why-stat-num">5,000+</div>
            <div className="why-stat-label">Successful Installations</div>
            <div className="why-stat-meter">
              <span style={{ width: "92%" }}></span>
            </div>
            <span className="why-stat-sub">92% repeat / referral business</span>
          </div>
          <div className="why-badge">
            <Icon name="shield" size={20} />
            <div>
              <strong>6-Month</strong>
              <span>Service Guarantee</span>
            </div>
          </div>
        </div>

        <div className="why-content">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Built on craftsmanship, run like a service company.</h2>
          <p className="lead">
            We combine the precision of furniture craftspeople with the discipline of a
            modern operations team — so every install lands on time, on budget and finished
            to spec.
          </p>

          <ul className="why-list">
            {points.map((p, i) => (
              <li key={i} className="why-item">
                <span className="why-icon"><Icon name={p.icon} size={18} /></span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="why-actions">
            <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("about"); }}
               className="btn btn-primary">
              Our Story <Icon name="arrow-right" size={16} />
            </a>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}
               className="btn btn-ghost">Request a Survey</a>
          </div>
        </div>
      </div>
    </section>
  );
};
window.WhyChooseUs = WhyChooseUs;
