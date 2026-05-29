/* Home page — composes all sections */
const HomePage = ({ navigate }) => {
  return (
    <main>
      <Hero navigate={navigate} />
      <TrustHighlights />
      <QuoteSlider />
      <ServicesOverview navigate={navigate} />
      <FurnitureCategories />
      <WhyChooseUs navigate={navigate} />
      <ClientLogos />
      <Gallery />
      <CTABanner navigate={navigate} />
    </main>
  );
};
window.HomePage = HomePage;
