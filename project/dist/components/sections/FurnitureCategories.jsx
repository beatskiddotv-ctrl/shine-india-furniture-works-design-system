/* Furniture categories — masonry style with hover reveals */
const FurnitureCategories = () => {
  const [tab, setTab] = React.useState("all");

  const cats = {
    Small: [
      { name: "Chair", img: "${window.__resources["img27"]}" },
      { name: "Coffee Table", img: "${window.__resources["img15"]}" },
      { name: "Computer Table", img: "${window.__resources["img33"]}" },
      { name: "Study Table", img: "${window.__resources["img13"]}" },
      { name: "Cabinet", img: "${window.__resources["img34"]}" },
      { name: "Drawer", img: "${window.__resources["img18"]}" },
    ],
    Medium: [
      { name: "Bed", img: "${window.__resources["img12"]}" },
      { name: "Wardrobe", img: "${window.__resources["img34"]}" },
      { name: "TV Units", img: "${window.__resources["img32"]}" },
    ],
    Large: [
      { name: "Hydraulic Bed", img: "${window.__resources["img42"]}" },
      { name: "Sliding Wardrobe", img: "${window.__resources["img21"]}" },
      { name: "Kitchen Cabinet", img: "${window.__resources["img25"]}" },
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
