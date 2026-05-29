/* Services Page — detailed service breakdown w/ accordion FAQs + process timeline */
const ServicesPage = ({ navigate }) => {
  const categories = [
    {
      id: "installation",
      icon: "tool",
      title: "Installation",
      tagline: "Assembly & on-site installation done right.",
      desc: "From flat-pack to fully built-in — we handle the precision, the heavy lifting, and the clean-up. Tools, anchors and finishings included.",
      types: ["Beds & Hydraulic Beds", "Wardrobes (sliding & swing)", "Kitchen Modular Cabinets", "Office Workstations", "Reception & Conference", "TV Units & Entertainment", "Study & Computer Tables", "Chairs & Lounge Seating"],
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "uninstallation",
      icon: "truck",
      title: "Uninstallation",
      tagline: "Safe dismantling for moves & redesigns.",
      desc: "Moving cities? Renovating? We disassemble, label, pack and prepare your furniture so it travels safely — and reinstalls flawlessly on the other end.",
      types: ["Wardrobe dismantling", "Bed disassembly", "Modular kitchen un-fits", "Office decommissioning", "Floor-to-floor moves", "Storage prep packing", "Sensitive piece handling", "Re-install on arrival"],
      img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "repair",
      icon: "package",
      title: "Repair",
      tagline: "Hinges, hydraulics, polish, structure.",
      desc: "We fix what others would replace. Loose joints, broken hinges, sticky drawers, sagging hydraulics, scratched surfaces — restored, refinished and warrantied.",
      types: ["Hinge replacement", "Drawer slide repair", "Hydraulic pump service", "Joint reinforcement", "Polish & re-finish", "Upholstery touch-ups", "Wood crack repair", "Hardware swap"],
      img: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const process = [
    { step: "01", title: "Inquiry", desc: "Share photos and details over WhatsApp or our form." },
    { step: "02", title: "Quote & Schedule", desc: "Itemised written quote within 30 minutes during business hours." },
    { step: "03", title: "Site Visit", desc: "Trained technician arrives on time with tools and hardware." },
    { step: "04", title: "Execution", desc: "Job completed to spec with site-cleanup and quality check." },
    { step: "05", title: "Warranty", desc: "6-month service guarantee on workmanship, no questions asked." },
  ];

  const faqs = [
    { q: "Do you provide service in tier-2 and tier-3 cities?", a: "Yes — we operate in 28 states across India, including over 90 tier-2 and tier-3 cities. For remote locations, we coordinate with verified local field teams under our quality protocols." },
    { q: "How quickly can a technician reach my home?", a: "In our 14 priority metros (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune and more) we offer same-day or next-day visits. Elsewhere, typical dispatch is 24–48 hours." },
    { q: "Is the quote final, or are there hidden charges?", a: "Our quote is final and itemised. We only revise if the on-site scope is materially different from what you described — and we always confirm before starting." },
    { q: "What if something is damaged during the work?", a: "Every job carries a written 6-month workmanship warranty. In the rare event of accidental damage, we either repair or replace at our cost." },
    { q: "Can you handle large corporate fit-outs?", a: "Yes. We've delivered 500+ seat office setups, multi-floor relocations and hotel/hostel installations. We sign NDAs and master service agreements with corporate clients." },
  ];

  const [openFaq, setOpenFaq] = React.useState(0);
  const [activeCat, setActiveCat] = React.useState("installation");

  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        title="Services built for India's furniture, end-to-end."
        description="Installation, uninstallation and repair — for individual homes, corporate offices, hotels, hostels, government institutions and interior design partners."
        image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2200&q=80"
        breadcrumbs={["Home", "Services"]}
      />

      {/* Services navigation pills */}
      <section className="section tight">
        <div className="container">
          <div className="services-pills">
            {categories.map(c => (
              <a key={c.id} href={`#${c.id}`}
                 onClick={(e) => {
                   e.preventDefault();
                   setActiveCat(c.id);
                   document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                 }}
                 className={`services-pill ${activeCat === c.id ? "is-active" : ""}`}>
                <Icon name={c.icon} size={18} />
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Each category detail */}
      {categories.map((c, i) => (
        <section key={c.id} id={c.id} className={`section ${i % 2 === 1 ? "alt" : ""} category-detail`}>
          <div className="container">
            <div className={`cat-detail-grid ${i % 2 === 1 ? "reverse" : ""}`}>
              <div className="cat-detail-content">
                <span className="cat-detail-step">0{i + 1} / 03</span>
                <span className="eyebrow">{c.tagline}</span>
                <h2>{c.title}</h2>
                <p className="lead">{c.desc}</p>

                <h4 className="cat-types-h">Furniture types we handle</h4>
                <ul className="cat-types">
                  {c.types.map((t, j) => (
                    <li key={j}>
                      <Icon name="check" size={14} stroke={2.4} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="hero-actions">
                  <a href="https://wa.me/919999999999" className="btn btn-whatsapp">
                    <Icon name="whatsapp" size={18} /> Get a Quote
                  </a>
                  <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}
                     className="btn btn-ghost">
                    Request Survey
                  </a>
                </div>
              </div>
              <div className="cat-detail-img-wrap">
                <img src={c.img} alt={c.title} loading="lazy" />
                <div className="cat-detail-badge">
                  <Icon name={c.icon} size={20} />
                  <span>{c.title}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Timeline */}
      <section className="section dark process-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" style={{ color: "var(--beige-300)" }}>How We Work</span>
            <h2 style={{ color: "white" }}>A simple, structured 5-step process.</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.7)" }}>
              No surprises. Every job follows the same five stages, whether it's a single chair or a 500-seat office.
            </p>
          </div>
          <div className="process-timeline">
            {process.map((p, i) => (
              <div key={p.step} className="process-step" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="process-step-num">{p.step}</div>
                <div className="process-step-line"></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section faqs-section">
        <div className="container faqs-grid">
          <div className="faqs-intro">
            <span className="eyebrow">Frequently Asked</span>
            <h2>Questions our customers ask before booking.</h2>
            <p className="lead">Couldn't find what you need? WhatsApp us — usually we reply within minutes.</p>
            <a href="https://wa.me/919999999999" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={18} /> Ask on WhatsApp
            </a>
          </div>
          <div className="faqs-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "is-open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-toggle">
                    <Icon name={openFaq === i ? "minus" : "plus"} size={18} />
                  </span>
                </button>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner navigate={navigate} />
    </main>
  );
};
window.ServicesPage = ServicesPage;
