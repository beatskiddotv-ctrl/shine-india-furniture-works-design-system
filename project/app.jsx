/* App root — Shine India site shell, hash routing, page transitions */
const { useState, useEffect } = React;

const App = () => {
  const parseHash = () => {
    const h = window.location.hash.replace(/^#\/?/, "");
    const route = (h.split("/")[0] || "home").toLowerCase();
    return ["home", "services", "about", "clients", "contact"].includes(route) ? route : "home";
  };

  const [route, setRoute] = useState(parseHash());

  const navigate = (to) => {
    window.location.hash = `/${to}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Scroll-reveal observer (basic; applies .in to .reveal elements)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route]);

  let Page = HomePage;
  if (route === "services") Page = ServicesPage;
  else if (route === "about")    Page = AboutPage;
  else if (route === "clients")  Page = ClientsPage;
  else if (route === "contact")  Page = ContactPage;

  return (
    <>
      <Header route={route} navigate={navigate} />
      <div key={route} className="page-wrap">
        <Page navigate={navigate} />
      </div>
      <Footer navigate={navigate} />
      <WhatsAppFAB />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
