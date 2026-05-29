/* Header / Site nav + mobile drawer */
const Header = ({ route, navigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => { setOpen(false); }, [route]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { to: "home", label: "Home" },
    { to: "services", label: "Services" },
    { to: "about", label: "About Us" },
    { to: "clients", label: "Clients" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="nav-desktop" aria-label="Primary">
          {links.map(l => (
            <a key={l.to}
               href={`#/${l.to}`}
               className={`nav-link ${route === l.to ? "is-active" : ""}`}
               onClick={(e) => { e.preventDefault(); navigate(l.to); }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="tel:+919999999999" className="header-phone">
            <Icon name="phone" size={16} />
            <span>+91 99999 99999</span>
          </a>
          <a href="#/contact"
             onClick={(e) => { e.preventDefault(); navigate("contact"); }}
             className="btn btn-primary small">
            Get a Quote
            <Icon name="arrow-right" size={16} />
          </a>
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-drawer-head">
          <Logo />
          <button className="hamburger" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Icon name="x" size={22} />
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile">
          {links.map(l => (
            <a key={l.to}
               href={`#/${l.to}`}
               className={`mobile-nav-link ${route === l.to ? "is-active" : ""}`}
               onClick={(e) => { e.preventDefault(); navigate(l.to); }}>
              {l.label}
              <Icon name="arrow-up-right" size={18} />
            </a>
          ))}
        </nav>
        <div className="mobile-drawer-foot">
          <a href="tel:+919999999999" className="btn btn-ghost large" style={{ width: "100%" }}>
            <Icon name="phone" size={18} /> Call Now
          </a>
          <a href="https://wa.me/919999999999" className="btn btn-whatsapp large" style={{ width: "100%" }}>
            <Icon name="whatsapp" size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
      <div className={`drawer-scrim ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
    </header>
  );
};
window.Header = Header;
