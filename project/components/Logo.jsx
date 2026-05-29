/* Logo — wordmark with monogram (no SVG furniture drawing — typographic). */
const Logo = ({ inverse = false, compact = false }) => {
  const fg = inverse ? "#FFFFFF" : "#0F172A";
  const accent = "#8B5E3C";
  return (
    <a href="#/" className="logo" aria-label="Shine India Furniture Works — home">
      <span className="logo-mark" style={{ background: fg, color: inverse ? "#0F172A" : "#FFFFFF" }}>
        <span className="logo-mark-S">S</span>
        <span className="logo-mark-dot" style={{ background: accent }}></span>
      </span>
      {!compact && (
        <span className="logo-text" style={{ color: fg }}>
          <span className="logo-line-1">Shine India</span>
          <span className="logo-line-2" style={{ color: accent }}>Furniture Works</span>
        </span>
      )}
    </a>
  );
};
window.Logo = Logo;
