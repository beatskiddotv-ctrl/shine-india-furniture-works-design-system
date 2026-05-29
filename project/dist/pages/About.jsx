/* About Us — story, founders, timeline, values */
const AboutPage = ({ navigate }) => {
  const timeline = [
    { year: "2022", title: "Founded post-COVID", desc: "Krishna Singh starts Shine India with a small team and a single mission — bring craftsmanship to every Indian home." },
    { year: "2023", title: "Expansion phase", desc: "Operations expand from Delhi NCR into Mumbai, Bengaluru, Hyderabad and Pune. First corporate contracts signed." },
    { year: "2024", title: "PAN India operations", desc: "Coverage reaches 28 states. Repair vertical launches alongside install and uninstall." },
    { year: "2025", title: "Corporate projects", desc: "Multi-floor office fit-outs, hotel chains, government institutions. 5,000+ projects delivered." },
    { year: "2026", title: "Next chapter", desc: "Investments in field-team training, in-house manufacturing R&D, and digital service booking — future ready." },
  ];

  const values = [
    { icon: "shield",    title: "Trust over volume", desc: "We'd rather deliver 100 jobs perfectly than 1,000 jobs poorly. Reputation is the only marketing that compounds." },
    { icon: "tool",      title: "Craft first",       desc: "Furniture is craft. Our technicians are trained on materials, joinery and finishing — not just speed." },
    { icon: "users",     title: "People matter",     desc: "Fair wages, safety equipment, paid training. We invest in our field teams as carefully as in our clients." },
    { icon: "sparkles",  title: "Honest pricing",    desc: "Itemised quotes, no on-site surprises. The price you agree is the price you pay." },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="A furniture services company built for modern India."
        description="From a Delhi garage in 2022 to PAN India operations in 2026 — Shine India is reshaping how furniture gets installed, moved and maintained across the country."
        image="${window.__resources["img9"]}"
        breadcrumbs={["Home", "About Us"]}
      />

      {/* Company Story */}
      <section className="section about-story">
        <div className="container story-grid">
          <div className="story-img-stack">
            <img className="story-img-1" src="${window.__resources["img25"]}" alt="Furniture craftsmanship" loading="lazy" />
            <img className="story-img-2" src="${window.__resources["img38"]}" alt="Team at work" loading="lazy" />
            <div className="story-stat">
              <strong>2022</strong>
              <span>Year founded</span>
            </div>
          </div>
          <div className="story-content">
            <span className="eyebrow">The Beginning</span>
            <h2>Born from a single belief — every Indian home deserves furniture that's installed right.</h2>
            <p>
              Shine India Furniture Works was founded in 2022, in the aftermath of COVID-19,
              when families were re-investing in their homes and offices were rebuilding for
              the future. Krishna Singh saw a gap that nobody was filling — an honest,
              skilled, professional furniture services company that treated every assembly,
              repair and relocation with the same care a craftsman would.
            </p>
            <p>
              What started in a single workshop has grown into a PAN India operation, with
              field teams in 28 states and over 5,000 projects delivered for homes,
              corporates, hotels, hostels and government institutions.
            </p>
            <p>
              We're still a young company. But every day, we work to earn the trust that
              comes with being part of someone's home.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section alt founders-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center">Meet the Founders</span>
            <h2>Two backgrounds, one shared vision.</h2>
            <p className="lead">A furniture craftsman and an engineer — building the company together.</p>
          </div>
          <div className="founders-grid">
            <article className="founder-card">
              <div className="founder-photo">
                <img src="${window.__resources["img26"]}" alt="Krishna Singh" loading="lazy" />
                <span className="founder-badge">Founder</span>
              </div>
              <div className="founder-body">
                <h3>Krishna Singh</h3>
                <span className="founder-role">Founder & CEO</span>
                <p>
                  10+ years in the furniture industry — from carpentry workshops in
                  Saharanpur to managing on-site installation teams across North India.
                  Krishna brings the deep craft expertise that defines our quality
                  standards.
                </p>
                <div className="founder-socials">
                  <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                  <a href="#" aria-label="Email"><Icon name="mail" size={16} /></a>
                </div>
              </div>
            </article>

            <article className="founder-card">
              <div className="founder-photo">
                <img src="${window.__resources["img28"]}" alt="Alok Singh" loading="lazy" />
                <span className="founder-badge">Co-Founder</span>
              </div>
              <div className="founder-body">
                <h3>Alok Singh</h3>
                <span className="founder-role">Co-Founder & COO</span>
                <p>
                  Engineering background with a focus on project and quality management.
                  Alok builds the operational systems that let us deliver consistent service
                  across thousands of jobs in 28 states.
                </p>
                <div className="founder-socials">
                  <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                  <a href="#" aria-label="Email"><Icon name="mail" size={16} /></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center">Our Journey</span>
            <h2>From a single workshop to PAN India.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-line"></div>
            {timeline.map((t, i) => (
              <div key={t.year} className={`timeline-row ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-card">
                  <span className="timeline-year">{t.year}</span>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
                <span className="timeline-node"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section warm values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center">What We Believe</span>
            <h2>Four principles we don't compromise on.</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon"><Icon name={v.icon} size={22} /></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner navigate={navigate} />
    </main>
  );
};
window.AboutPage = AboutPage;
