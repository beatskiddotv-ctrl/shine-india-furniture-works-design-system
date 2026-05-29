/* Contact page — split layout w/ form, info cards, map, hiring CTA */
const ContactPage = ({ navigate }) => {
  const [form, setForm] = React.useState({
    name: "", phone: "", email: "", service: "", message: ""
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3200);
  };

  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your furniture project."
        description="WhatsApp, call, email or fill the form below. We respond within 30 minutes during business hours, 7 days a week."
        image="${window.__resources["img24"]}"
        breadcrumbs={["Home", "Contact"]}
      />

      {/* Floating contact cards strip */}
      <section className="section tight">
        <div className="container contact-cards">
          {[
            { icon: "phone", title: "Call us", line1: "+91 99999 99999", line2: "Mon–Sat · 9:00 to 20:00", href: "tel:+919999999999", cta: "Call Now" },
            { icon: "whatsapp", title: "WhatsApp", line1: "+91 99999 99999", line2: "Fastest — replies in minutes", href: "https://wa.me/919999999999", cta: "Chat on WhatsApp", accent: true },
            { icon: "mail", title: "Email", line1: "hello@shineindiafurniture.in", line2: "Quotes within 30 minutes", href: "mailto:hello@shineindiafurniture.in", cta: "Send Email" },
            { icon: "map-pin", title: "Head Office", line1: "New Delhi, India", line2: "Operations PAN India", href: "#map", cta: "Get Directions" },
          ].map((c, i) => (
            <a key={i} href={c.href} className={`contact-card ${c.accent ? "accent" : ""}`}>
              <div className="contact-card-icon"><Icon name={c.icon} size={22} /></div>
              <span className="contact-card-title">{c.title}</span>
              <strong className="contact-card-line">{c.line1}</strong>
              <span className="contact-card-sub">{c.line2}</span>
              <span className="contact-card-cta">{c.cta} <Icon name="arrow-right" size={14} /></span>
            </a>
          ))}
        </div>
      </section>

      {/* Form + Side panel */}
      <section className="section contact-form-section">
        <div className="container contact-form-grid">
          <div className="contact-form-card">
            <span className="eyebrow">Request a Quote</span>
            <h2>Tell us about your furniture project.</h2>
            <p className="lead" style={{ marginTop: 10 }}>
              Quick form — we'll get back over WhatsApp or phone, your choice.
            </p>

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><Icon name="check" size={28} stroke={2.4} /></div>
                <h4>Thank you! Your request was received.</h4>
                <p>Our team will reach out within 30 minutes during business hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label>Name *</label>
                    <input required value={form.name} onChange={handle("name")} placeholder="Your full name" />
                  </div>
                  <div className="field">
                    <label>Phone *</label>
                    <input required type="tel" value={form.phone} onChange={handle("phone")} placeholder="+91 99999 99999" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label>Email</label>
                    <input type="email" value={form.email} onChange={handle("email")} placeholder="you@email.com" />
                  </div>
                  <div className="field">
                    <label>Service Type</label>
                    <select value={form.service} onChange={handle("service")}>
                      <option value="">Select a service</option>
                      <option>Furniture Installation</option>
                      <option>Furniture Assembly</option>
                      <option>Uninstallation / Relocation</option>
                      <option>Repair & Maintenance</option>
                      <option>Corporate Fit-out</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea
                    value={form.message}
                    onChange={handle("message")}
                    placeholder="Tell us about the furniture, the location, and what you need..."
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary large">
                    <Icon name="send" size={16} /> Send Request
                  </button>
                  <a href="https://wa.me/919999999999" className="btn btn-whatsapp large">
                    <Icon name="whatsapp" size={20} /> WhatsApp Instead
                  </a>
                </div>
                <p className="form-fineprint">
                  By submitting, you agree to be contacted regarding your request. We never share your data.
                </p>
              </form>
            )}
          </div>

          <aside className="contact-side">
            <div className="contact-side-card hours-card">
              <div className="contact-card-icon dark"><Icon name="clock" size={20} /></div>
              <h4>Business Hours</h4>
              <ul>
                <li><span>Mon – Fri</span><strong>9:00 — 20:00</strong></li>
                <li><span>Saturday</span><strong>9:00 — 18:00</strong></li>
                <li><span>Sunday</span><strong>10:00 — 16:00</strong></li>
                <li><span>WhatsApp</span><strong>24 / 7</strong></li>
              </ul>
            </div>

            <div className="contact-side-card hiring-card">
              <span className="hiring-eyebrow">We're hiring</span>
              <h4>Are you a furniture technician?</h4>
              <p>
                We're always looking for skilled carpenters, installers and field
                supervisors. If you have furniture experience, send your resume on WhatsApp.
              </p>
              <a href="https://wa.me/919999999999" className="btn btn-ghost-light">
                <Icon name="whatsapp" size={18} /> WhatsApp your resume
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="section alt map-section">
        <div className="container">
          <div className="map-head">
            <div>
              <span className="eyebrow">Visit Us</span>
              <h2>Head Office — New Delhi</h2>
              <p className="lead">Operations across 28 Indian states. Drop by our Delhi office or reach our regional teams directly.</p>
            </div>
            <a href="#" className="btn btn-primary">
              <Icon name="map-pin" size={16} /> Open in Google Maps
            </a>
          </div>
          <div className="map-frame">
            {/* Stylised map placeholder — Google Maps embed-style frame */}
            <div className="map-pattern" aria-hidden="true"></div>
            <div className="map-roads" aria-hidden="true">
              <span className="road r1"></span>
              <span className="road r2"></span>
              <span className="road r3"></span>
              <span className="road r4"></span>
            </div>
            <div className="map-pin-marker">
              <span className="map-pin-pulse"></span>
              <div className="map-pin-icon"><Icon name="map-pin" size={20} /></div>
            </div>
            <div className="map-card glass">
              <strong>Shine India Furniture Works</strong>
              <span>Connaught Place, New Delhi 110001</span>
              <div className="map-card-links">
                <a href="#"><Icon name="map-pin" size={14} /> Directions</a>
                <span className="divider-dot"></span>
                <a href="tel:+919999999999"><Icon name="phone" size={14} /> Call</a>
              </div>
            </div>
            <div className="map-attribution">Map · 28 service regions across India</div>
          </div>
        </div>
      </section>

      <CTABanner navigate={navigate} />
    </main>
  );
};
window.ContactPage = ContactPage;
