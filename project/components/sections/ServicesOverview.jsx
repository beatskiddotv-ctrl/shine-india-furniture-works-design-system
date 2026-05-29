/* Services overview — three core service cards (Install / Uninstall / Repair) */
const ServicesOverview = ({ navigate }) => {
  const services = [
    {
      icon: "tool",
      title: "Furniture Installation",
      desc: "Expert assembly and on-site installation for residential, office and institutional furniture — fully tools-included.",
      includes: ["IKEA, Pepperfry & flat-pack", "Modular & built-in fits", "Wall mounting & anchoring"],
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: "truck",
      title: "Uninstallation & Relocation",
      desc: "Safe dismantling, packing and re-installation when you move — across the city or across the country.",
      includes: ["Wardrobes, beds, cabinets", "Pack-ready disassembly", "PAN India re-install"],
      img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: "package",
      title: "Repair & Maintenance",
      desc: "Hinges, slides, polishing, hydraulics, broken joints — restoration that extends furniture life by years.",
      includes: ["Drawer & hinge fixes", "Hydraulic bed servicing", "Polish & finish restore"],
      img: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow center">Our Core Services</span>
          <h2>Three services. One promise — done right.</h2>
          <p className="lead">Whether you bought it online, inherited it, or are taking it across the country, we'll handle the heavy lifting and the precise finishing.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="service-card-img" style={{ backgroundImage: `url(${s.img})` }}>
                <span className="service-num">0{i + 1}</span>
                <div className="service-icon-wrap"><Icon name={s.icon} size={22} /></div>
              </div>
              <div className="service-card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-includes">
                  {s.includes.map((inc, j) => (
                    <li key={j}><Icon name="check" size={14} stroke={2.4} /> {inc}</li>
                  ))}
                </ul>
                <a href="#/services" onClick={(e) => { e.preventDefault(); navigate("services"); }}
                   className="btn-link">
                  Learn more <Icon name="arrow-right" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
window.ServicesOverview = ServicesOverview;
