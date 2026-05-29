/* Footer — premium dark with quick links, services, contact, social */
const Footer = ({ navigate }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p className="footer-tag">
            Assembly • Installation • Repair Services Across India. Trusted by homes,
            offices, corporate clients and government institutions since 2022.
          </p>
          <div className="footer-socials">
            {[
              { name: "instagram", label: "Instagram" },
              { name: "facebook", label: "Facebook" },
              { name: "linkedin", label: "LinkedIn" },
              { name: "youtube", label: "YouTube" },
            ].map(s => (
              <a key={s.name} href="#" aria-label={s.label} className="social-btn">
                <Icon name={s.name} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h5 className="footer-h">Quick Links</h5>
          <ul>
            {[
              ["home", "Home"], ["services", "Services"], ["about", "About Us"],
              ["clients", "Clients"], ["contact", "Contact Us"]
            ].map(([to, label]) => (
              <li key={to}>
                <a href={`#/${to}`} onClick={(e) => { e.preventDefault(); navigate(to); }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5 className="footer-h">Services</h5>
          <ul>
            {[
              "Furniture Installation",
              "Furniture Assembly",
              "Uninstallation & Relocation",
              "Repair & Maintenance",
              "Corporate Projects",
              "Hydraulic Bed Setup",
            ].map(s => (
              <li key={s}><a href="#/services" onClick={(e) => { e.preventDefault(); navigate("services"); }}>{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5 className="footer-h">Get in Touch</h5>
          <ul className="footer-contact">
            <li>
              <Icon name="map-pin" size={16} />
              <span>Head Office<br /><span className="muted">New Delhi, India · Operations PAN India</span></span>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href="tel:+919999999999">+91 99999 99999</a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href="mailto:hello@shineindiafurniture.in">hello@shineindiafurniture.in</a>
            </li>
            <li>
              <Icon name="whatsapp" size={16} />
              <a href="https://wa.me/919999999999">WhatsApp Chat</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Shine India Furniture Works. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
window.Footer = Footer;
