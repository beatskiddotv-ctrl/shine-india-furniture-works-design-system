/* Icon set — inline SVGs (Lucide style stroke=1.6). Single component. */
const Icon = ({ name, size = 20, stroke = 1.7, className = "", style }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
    className: `icon ${className}`, style
  };
  switch (name) {
    case "phone": return (
      <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>);
    case "whatsapp": return (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" className={`icon ${className}`} style={style}>
        <path d="M16.003 3C9.374 3 4 8.373 4 15a11.95 11.95 0 0 0 1.62 6.024L4 29l8.176-2.146A12.001 12.001 0 0 0 28 15c0-6.627-5.373-12-11.997-12Zm0 21.838a9.83 9.83 0 0 1-5.005-1.37l-.36-.214-4.851 1.272 1.296-4.728-.235-.376A9.835 9.835 0 1 1 16.003 24.838Zm5.626-7.367c-.308-.155-1.825-.9-2.108-1.003-.283-.103-.488-.155-.694.155-.205.31-.795 1.003-.976 1.21-.18.207-.36.232-.668.077-.308-.155-1.3-.479-2.475-1.527-.915-.815-1.533-1.823-1.713-2.132-.18-.31-.019-.477.135-.632.139-.139.308-.36.463-.54.155-.18.205-.31.308-.516.103-.207.05-.387-.025-.542-.077-.155-.694-1.673-.95-2.293-.25-.6-.504-.518-.694-.527l-.591-.01a1.13 1.13 0 0 0-.823.387c-.283.31-1.082 1.057-1.082 2.577 0 1.52 1.108 2.99 1.262 3.197.155.207 2.184 3.335 5.293 4.677.74.32 1.317.512 1.767.655.742.236 1.418.203 1.95.123.595-.088 1.825-.745 2.083-1.464.258-.72.258-1.337.18-1.464-.077-.129-.282-.207-.59-.362Z"/>
      </svg>);
    case "mail": return (
      <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
    case "map-pin": return (
      <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
    case "arrow-right": return (
      <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
    case "arrow-up-right": return (
      <svg {...props}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>);
    case "check": return (
      <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>);
    case "menu": return (
      <svg {...props}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
    case "x": return (
      <svg {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
    case "chevron-down": return (
      <svg {...props}><polyline points="6 9 12 15 18 9"/></svg>);
    case "chevron-left": return (
      <svg {...props}><polyline points="15 18 9 12 15 6"/></svg>);
    case "chevron-right": return (
      <svg {...props}><polyline points="9 18 15 12 9 6"/></svg>);
    case "plus": return (
      <svg {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>);
    case "minus": return (
      <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/></svg>);
    case "star": return (
      <svg {...props} fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
    case "users": return (
      <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
    case "shield": return (
      <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
    case "zap": return (
      <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
    case "tool": return (
      <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>);
    case "truck": return (
      <svg {...props}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>);
    case "package": return (
      <svg {...props}><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>);
    case "home": return (
      <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
    case "briefcase": return (
      <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);
    case "award": return (
      <svg {...props}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>);
    case "clock": return (
      <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
    case "globe": return (
      <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z"/></svg>);
    case "sparkles": return (
      <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>);
    case "instagram": return (
      <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
    case "facebook": return (
      <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
    case "linkedin": return (
      <svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
    case "youtube": return (
      <svg {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>);
    case "send": return (
      <svg {...props}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>);
    case "calendar": return (
      <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
    case "search": return (
      <svg {...props}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>);
    case "armchair": return (
      <svg {...props}><path d="M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"/><path d="M3 16a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3h10v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="7" y1="19" x2="7" y2="22"/><line x1="17" y1="19" x2="17" y2="22"/></svg>);
    case "bed": return (
      <svg {...props}><path d="M2 9V19M2 17h20M22 19v-7a3 3 0 0 0-3-3H10v8"/><circle cx="6" cy="13" r="2"/></svg>);
    default: return null;
  }
};

window.Icon = Icon;
