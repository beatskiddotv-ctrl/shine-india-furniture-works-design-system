/* Clients page — corporate logos + testimonials + project showcase */
const ClientsPage = ({ navigate }) => {
  const sectors = [
    { name: "Corporate", count: 240, icon: "briefcase" },
    { name: "Government", count: 32, icon: "shield" },
    { name: "Residential", count: 4800, icon: "home" },
    { name: "Hospitality", count: 64, icon: "award" },
  ];

  const testimonials = [
    {
      quote: "Shine India installed our entire 300-seat Bangalore office across one weekend. Every workstation, every cabinet, every detail. We've worked with them on three offices since.",
      name: "Priya Mehta",
      role: "Head of Workplace, Tech Co.",
      location: "Bengaluru",
      avatar: "${window.__resources["img4"]}",
    },
    {
      quote: "We moved across cities and they handled the dismantling in Pune and re-installation in Hyderabad — including a hydraulic bed that we thought would never travel safely.",
      name: "Rohit Kapoor",
      role: "Homeowner",
      location: "Pune → Hyderabad",
      avatar: "${window.__resources["img2"]}",
    },
    {
      quote: "What stands out is honesty. The quote they sent matched the final bill to the rupee. For government tenders that level of discipline is rare.",
      name: "Anita Verma",
      role: "Procurement Officer",
      location: "Government Institution",
      avatar: "${window.__resources["img3"]}",
    },
    {
      quote: "We've sent them 40+ client projects as their installation partner. They're an extension of our design studio at this point.",
      name: "Karan Shah",
      role: "Principal Designer",
      location: "Interior Design Studio, Mumbai",
      avatar: "${window.__resources["img1"]}",
    },
  ];

  const projects = [
    { img: "${window.__resources["img8"]}", title: "Tech Co. Bengaluru HQ", scale: "320 workstations · 12 conference rooms", year: "2025" },
    { img: "${window.__resources["img14"]}", title: "Boutique Hotel Goa", scale: "48 rooms · custom hospitality fit-out", year: "2025" },
    { img: "${window.__resources["img31"]}", title: "Residential — Whitefield", scale: "Full home install · 4BHK luxury", year: "2024" },
    { img: "${window.__resources["img22"]}", title: "Govt. Institution Bhopal", scale: "Library & hostel · 220 units", year: "2024" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by India's homes, offices and institutions."
        description="From single-family homes to multi-floor corporate fit-outs, we've built our reputation one delivered project at a time."
        image="${window.__resources["img9"]}"
        breadcrumbs={["Home", "Clients"]}
      />

      {/* Sector stats */}
      <section className="section tight">
        <div className="container">
          <div className="sector-stats">
            {sectors.map(s => (
              <div key={s.name} className="sector-stat">
                <div className="sector-stat-icon"><Icon name={s.icon} size={20} /></div>
                <div>
                  <strong>{s.count.toLocaleString("en-IN")}+</strong>
                  <span>{s.name} clients</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogos heading={true} />

      {/* Government clients band */}
      <section className="section alt gov-section">
        <div className="container gov-grid">
          <div>
            <span className="eyebrow">Government & Institutions</span>
            <h2>Tender-ready, audit-ready, on-spec.</h2>
            <p className="lead">
              We hold active engagements with state institutions, public sector
              undertakings and government hostels. Our compliance documentation,
              quality protocols and itemised invoicing are tender-ready.
            </p>
            <ul className="gov-points">
              {[
                "GST-registered & audit compliant",
                "MSME registered vendor",
                "PAN India service capability",
                "Documented quality protocols"
              ].map(p => (
                <li key={p}><Icon name="check" size={14} stroke={2.4} /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="gov-card-stack">
            <div className="gov-stat-card">
              <span>Active engagements</span>
              <strong>32 Govt. clients</strong>
              <div className="gov-stat-bar"><span style={{ width: "78%" }}></span></div>
            </div>
            <div className="gov-stat-card">
              <span>States covered</span>
              <strong>28 of 28</strong>
              <div className="gov-stat-bar"><span style={{ width: "100%" }}></span></div>
            </div>
            <div className="gov-stat-card">
              <span>On-time delivery</span>
              <strong>96.4%</strong>
              <div className="gov-stat-bar"><span style={{ width: "96%" }}></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center">Testimonials</span>
            <h2>What our clients say.</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <Icon key={j} name="star" size={14} />)}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-meta">
                  <img src={t.avatar} alt={t.name} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}<span className="divider-dot"></span>{t.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section alt projects-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center">Project Showcase</span>
            <h2>Recent installations & fit-outs.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article key={i} className="project-card">
                <div className="project-img" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="project-body">
                  <span className="project-year">{p.year}</span>
                  <h3>{p.title}</h3>
                  <p>{p.scale}</p>
                  <span className="btn-link">View case study <Icon name="arrow-right" size={16} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner navigate={navigate} />
    </main>
  );
};
window.ClientsPage = ClientsPage;
