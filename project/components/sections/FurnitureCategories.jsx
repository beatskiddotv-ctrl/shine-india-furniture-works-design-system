/* Furniture categories — masonry style with hover reveals */
const FurnitureCategories = () => {
  const [tab, setTab] = React.useState("all");

  const cats = {
    Small: [
      { name: "Chair", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80" },
      { name: "Coffee Table", img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80" },
      { name: "Computer Table", img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=900&q=80" },
      { name: "Study Table", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80" },
      { name: "Cabinet", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80" },
      { name: "Drawer", img: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=900&q=80" },
    ],
    Medium: [
      { name: "Bed", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
      { name: "Wardrobe", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80" },
      { name: "TV Units", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80" },
    ],
    Large: [
      { name: "Hydraulic Bed", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=900&q=80" },
      { name: "Sliding Wardrobe", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80" },
      { name: "Kitchen Cabinet", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80" },
    ]
  };

  const tabs = [
    { id: "all", label: "All Furniture" },
    { id: "Small", label: "Small" },
    { id: "Medium", label: "Medium" },
    { id: "Large", label: "Large" },
  ];

  const visible = tab === "all"
    ? Object.entries(cats).flatMap(([k, v]) => v.map(it => ({ ...it, group: k })))
    : cats[tab].map(it => ({ ...it, group: tab }));

  return (
    <section className="section furniture-section">
      <div className="container">
        <div className="furniture-head">
          <div>
            <span className="eyebrow">Furniture Categories</span>
            <h2>From a single chair to your entire kitchen.</h2>
          </div>
          <p className="lead">
            We service every category of furniture you'll find in an Indian home or office —
            built-in or flat-pack, mass-market or bespoke.
          </p>
        </div>

        <div className="cat-tabs" role="tablist">
          {tabs.map(t => (
            <button key={t.id} role="tab"
                    className={`cat-tab ${tab === t.id ? "is-active" : ""}`}
                    onClick={() => setTab(t.id)}>
              {t.label}
              {t.id !== "all" && <span className="cat-tab-count">{cats[t.id].length}</span>}
            </button>
          ))}
        </div>

        <div className="cat-grid">
          {visible.map((it, i) => (
            <a key={`${it.name}-${i}`} href="#/services" className={`cat-tile cat-tile-${(i % 6) + 1}`}>
              <div className="cat-tile-img" style={{ backgroundImage: `url(${it.img})` }} />
              <div className="cat-tile-overlay" />
              <div className="cat-tile-info">
                <span className="cat-tile-group">{it.group} Furniture</span>
                <div className="cat-tile-bottom">
                  <span className="cat-tile-name">{it.name}</span>
                  <span className="cat-tile-arrow">
                    <Icon name="arrow-up-right" size={18} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
window.FurnitureCategories = FurnitureCategories;
