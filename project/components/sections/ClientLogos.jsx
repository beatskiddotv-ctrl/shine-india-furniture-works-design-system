/* Client logos — infinite marquee */
const ClientLogos = ({ heading = true }) => {
  const clients = [
    "Tata Consultancy", "Wipro", "Infosys", "Mahindra", "Godrej",
    "Reliance", "ITC Hotels", "Marriott", "IKEA", "Pepperfry",
    "Urban Ladder", "HDFC Bank", "Bharti Airtel", "Asian Paints"
  ];
  const row = [...clients, ...clients];
  return (
    <section className={`client-logos ${heading ? "section tight" : ""}`}>
      <div className="container">
        {heading && (
          <div className="client-head">
            <span className="eyebrow center">Trusted By</span>
            <h3>Powering furniture operations for India's leading brands.</h3>
          </div>
        )}
        <div className="logo-marquee" aria-hidden="false">
          <div className="logo-track">
            {row.map((c, i) => (
              <div key={i} className="logo-cell">
                <span className="logo-text-mark">{c}</span>
              </div>
            ))}
          </div>
          <div className="logo-fade left"></div>
          <div className="logo-fade right"></div>
        </div>
      </div>
    </section>
  );
};
window.ClientLogos = ClientLogos;
