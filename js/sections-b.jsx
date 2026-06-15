/* ============================================================
   Wii Event Wireframe — Sections B (HI-FI)
   Equipment Marketplace (03) · Event Types (04)
   ============================================================ */
const { SearchBar, CategoryCard, EquipmentCard } = window.WiiEventDesignSystem_37bcec;

/* ---------------- 03 · EQUIPMENT MARKETPLACE ---------------- */
function Marketplace() {
  useLucide();
  const cats = [
    { t: "Chairs & Tables", n: 142, icon: "armchair", img: "assets/event-private.png", pos: "center" },
    { t: "Lighting", n: 128, icon: "lightbulb", img: "assets/event-festival-stage.png", pos: "left" },
    { t: "LED Screens", n: 64, icon: "monitor-play", img: "assets/event-corporate.png", pos: "center" },
    { t: "Sound Systems", n: 73, icon: "speaker", img: "assets/event-festival-stage.png", pos: "right" },
    { t: "Stages", n: 42, icon: "drama", img: "assets/event-festival-aerial.png", pos: "center" },
    { t: "Tents & Structures", n: 39, icon: "tent", img: "assets/event-festival-aerial.png", pos: "left" },
    { t: "Decoration", n: 86, icon: "flower-2", img: "assets/event-private.png", pos: "right" },
    { t: "Hospitality", n: 51, icon: "concierge-bell", img: "assets/event-corporate.png", pos: "left" },
  ];
  const items = [
    { title: "LED Video Wall 4×3m", category: "LED Screens", supplier: "Lumen Stage Co.", price: "$240", availability: "available", img: "assets/event-corporate.png", location: "Tunis", rating: 4.9, verified: true },
    { title: "Moving Head Light Kit", category: "Lighting", supplier: "Halo Productions", price: "$120", availability: "available", img: "assets/event-festival-stage.png", location: "Tunis", rating: 4.8, verified: true },
    { title: "Modular Stage Deck 6×4", category: "Stages", supplier: "BuildUp Events", price: "$380", availability: "limited", img: "assets/event-festival-aerial.png", location: "Sousse", rating: 4.7, verified: false },
    { title: "Luxury Lounge Set", category: "Furniture", supplier: "Maison Décor", price: "$95", availability: "available", img: "assets/event-private.png", location: "Tunis", rating: 5.0, verified: true },
  ];
  return (
    <section id="marketplace" className="wf-section wf-light-alt">
      <div className="wf-wrap">
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
            <SectionIndex n="03" label="Equipment Marketplace" />
            <h2 className="wf-title" style={{ fontSize: "var(--fs-h1)" }}>Rent anything<br />your event needs.</h2>
            <p className="wf-sub">A curated catalog from verified suppliers — book by the day, filter by city, compare availability in real time.</p>
          </div>
          <a href="#marketplace"><Button variant="secondary" iconRight={<Icon name="arrow-right" size={16} />}>Browse all categories</Button></a>
        </Reveal>

        <Reveal style={{ marginBottom: 30, maxWidth: 760 }}>
          <SearchBar size="lg" placeholder="Search lighting, LED, stages, tents…" />
        </Reveal>

        {/* category tiles — DS CategoryCard */}
        <div className="wf-grid wf-cols-4" style={{ marginBottom: 44 }}>
          {cats.map((c, i) => (
            <Reveal key={c.t} delay={i * 55}>
              <CategoryCard image={c.img} label={c.t} count={c.n} icon={<Icon name={c.icon} size={20} />} height={190} style={{ objectPosition: c.pos }} />
            </Reveal>
          ))}
        </div>

        {/* featured listings — DS EquipmentCard */}
        <Reveal style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <span className="wf-eyebrow">Featured listings</span>
          <span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--text-muted)" }}>AVAILABLE · TUNIS</span>
        </Reveal>
        <div className="wf-grid wf-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <EquipmentCard {...it} image={it.img} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 04 · EVENT TYPES ---------------- */
function EventTypes() {
  useLucide();
  const types = [
    { t: "Private Events", img: "assets/event-private.png", pos: "center", big: true, reel: true },
    { t: "Corporate", img: "assets/event-corporate.png", pos: "left" },
    { t: "Weddings", img: "assets/event-private.png", pos: "left" },
    { t: "Birthdays", img: "assets/event-private.png", pos: "right" },
    { t: "Product Launches", img: "assets/event-corporate.png", pos: "right" },
    { t: "Festivals", img: "assets/event-festival-stage.png", pos: "center", big: true, reel: true },
    { t: "Brand Activations", img: "assets/event-festival-aerial.png", pos: "center" },
    { t: "Brunch Events", img: "assets/event-festival-aerial.png", pos: "left" },
    { t: "Nightlife", img: "assets/event-festival-stage.png", pos: "right" },
  ];
  return (
    <section id="events" className="wf-section wf-dark">
      <ArtBg variant="mesh" style={{ opacity: 0.4 }} />
      <div className="wf-wrap">
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 42, maxWidth: 720 }}>
          <SectionIndex n="04" label="Event Types" />
          <h2 className="wf-title">Events we<br /><span className="wf-kicker">power</span>.</h2>
          <p className="wf-sub">Private celebrations, corporate launches, festivals, and branded experiences — all from one platform.</p>
        </Reveal>

        <div className="wf-events-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 18 }}>
          {types.map((ty, i) => (
            <Reveal key={ty.t} delay={i * 55} style={{ gridColumn: ty.big ? "span 3" : "span 2" }} className="wf-event-cell">
              <a href="#agent" style={{ display: "block", height: "100%" }}>
                <CinematicMedia image={ty.img} alt={ty.t} pos={ty.pos} height={ty.big ? 280 : 220}
                  radius="var(--radius-xl)" reel={ty.reel} reelLabel="Event reel" fade="strong">
                  <span style={{ position: "absolute", left: 18, right: 18, bottom: 16, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <span className="wf-eyebrow" style={{ color: "rgba(255,255,255,0.62)" }}>0{i + 1}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: ty.big ? 30 : 21, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#fff", lineHeight: 0.98 }}>{ty.t}</span>
                    </span>
                    <span style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(255,255,255,0.16)", backdropFilter: "blur(6px)", display: "grid", placeItems: "center", color: "#fff", flex: "none" }}><Icon name="arrow-up-right" size={18} /></span>
                  </span>
                </CinematicMedia>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Marketplace, EventTypes });
