/* Hero — fullscreen with furniture image, parallax-ish floating shapes */
const Hero = ({ navigate }) => {
  const heroRef = React.useRef(null);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    const el = heroRef.current;
    if (el) el.addEventListener("mousemove", onMove);
    return () => el && el.removeEventListener("mousemove", onMove);
  }, []);

  const px = (n) => `${mouse.x * n}px`;
  const py = (n) => `${mouse.y * n}px`;

  return (
    <section ref={heroRef} className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            `linear-gradient(95deg, rgba(11,18,36,0.85) 0%, rgba(11,18,36,0.55) 55%, rgba(11,18,36,0.35) 100%), url('https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2400&q=80')`,
          transform: `scale(1.06) translate(${px(-10)}, ${py(-10)})`
        }}
      />

      {/* Floating shapes */}
      <div className="hero-shapes" aria-hidden="true">
        <span className="float-shape fs-1" style={{ transform: `translate(${px(20)}, ${py(20)})` }}></span>
        <span className="float-shape fs-2" style={{ transform: `translate(${px(-15)}, ${py(15)})` }}></span>
        <span className="float-shape fs-3" style={{ transform: `translate(${px(10)}, ${py(-10)})` }}></span>
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="dot"></span>
            PAN INDIA • TRUSTED SINCE 2022
          </span>

          <h1 className="hero-title">
            Professional Furniture
            <span className="hero-title-em"> Installation & Repair </span>
            Services Across India
          </h1>

          <p className="hero-sub">
            Trusted by homes, offices, corporate clients and institutions for furniture
            assembly, installation, repair and relocation support.
          </p>

          <div className="hero-actions">
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}
               className="btn btn-whatsapp large">
              <Icon name="phone" size={18} />
              Contact Now
            </a>
            <a href="https://wa.me/919999999999" className="btn btn-ghost-light large">
              <Icon name="whatsapp" size={20} />
              WhatsApp Us
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>5,000+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="hero-meta-divider"></div>
            <div className="hero-meta-item">
              <strong>28</strong>
              <span>Indian States Served</span>
            </div>
            <div className="hero-meta-divider"></div>
            <div className="hero-meta-item">
              <strong>4.9★</strong>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>

        {/* Floating glass quote card */}
        <div className="hero-card glass">
          <div className="hero-card-row">
            <div className="hero-card-avatars">
              {[1,2,3].map(i => (
                <span key={i} className="avatar" style={{
                  backgroundImage: `url(https://i.pravatar.cc/80?img=${i*5})`
                }} />
              ))}
            </div>
            <div className="hero-card-stars">
              {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={14} />)}
              <span style={{ marginLeft: 6, fontSize: 13, color: "rgba(255,255,255,0.85)" }}>4.9</span>
            </div>
          </div>
          <p className="hero-card-quote">
            "On-time, professional team — they assembled our entire office in a single afternoon."
          </p>
          <div className="hero-card-meta">
            <strong>Priya M.</strong>
            <span>Operations Lead, Bengaluru</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
};
window.Hero = Hero;
