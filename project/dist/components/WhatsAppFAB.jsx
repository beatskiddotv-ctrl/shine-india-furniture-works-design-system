/* Sticky WhatsApp floating action button (page-wide) */
const WhatsAppFAB = () => {
  const [show, setShow] = React.useState(true);
  return (
    <a href="https://wa.me/919999999999"
       target="_blank" rel="noopener noreferrer"
       className={`whatsapp-fab ${show ? "" : "is-hidden"}`}
       aria-label="Chat with us on WhatsApp">
      <span className="wa-pulse"></span>
      <Icon name="whatsapp" size={28} />
      <span className="wa-label">Chat with us</span>
    </a>
  );
};
window.WhatsAppFAB = WhatsAppFAB;
