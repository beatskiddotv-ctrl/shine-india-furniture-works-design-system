/* CTA Banner — dark premium section */
const CTABanner = ({ navigate }) => {
  return (
    <section className="cta-banner">
      <div
        className="cta-banner-bg"
        style={{
          backgroundImage:
            `linear-gradient(105deg, rgba(11,18,36,0.92) 30%, rgba(11,18,36,0.6)), url('${window.__resources["img20"]}')`
        }}
      />
      <div className="cta-banner-shapes" aria-hidden="true">
        <span className="cta-shape s1"></span>
        <span className="cta-shape s2"></span>
      </div>
      <div className="container cta-banner-inner">
        <div className="cta-text">
          <span className="eyebrow" style={{ color: "var(--beige-300)" }}>Get in Touch Today</span>
          <h2>Need professional furniture installation support?</h2>
          <p>Tell us what you're working with — a single piece, a full home, or 500 workstations. We'll respond within 30 minutes during business hours.</p>
        </div>
        <div className="cta-actions">
          <a href="tel:+919999999999" className="btn btn-primary large" style={{ background: "white", color: "var(--navy-900)" }}>
            <Icon name="phone" size={18} /> Call Now
          </a>
          <a href="https://wa.me/919999999999" className="btn btn-whatsapp large">
            <Icon name="whatsapp" size={20} /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};
window.CTABanner = CTABanner;
