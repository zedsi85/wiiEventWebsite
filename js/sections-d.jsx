/* ============================================================
   Wii Event Wireframe — Sections D
   Featured Setups (08) · Supplier CTA (09) · Trust (10)
   Final CTA (11) · Footer
   ============================================================ */
const { SupplierCard } = window.WiiEventDesignSystem_37bcec;

/* ---------------- 08 · FEATURED SETUPS ---------------- */
function FeaturedSetups() {
  useLucide();
  const feats = [
    { t: "Festival Stage Setup", tag: "Production", img: "assets/event-festival-stage.png", span: "big", pos: "center" },
    { t: "Corporate Launch", tag: "Corporate", img: "assets/event-corporate.png", pos: "left" },
    { t: "Private Luxury Party", tag: "Private", img: "assets/event-private.png", pos: "right" },
    { t: "Wedding Setup", tag: "Wedding", img: "assets/event-private.png", pos: "left" },
    { t: "Outdoor Branded Experience", tag: "Activation", img: "assets/event-festival-aerial.png", span: "wide", pos: "center" },
  ];
  return (
    <section id="featured" className="wf-section wf-light-alt">
      <div className="wf-wrap">
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 620 }}>
            <SectionIndex n="08" label="Featured Setups" />
            <h2 className="wf-title" style={{ fontSize: "var(--fs-h1)" }}>Built by Wii Event.</h2>
            <p className="wf-sub">From festival mainstages to private luxury setups — a look at real productions delivered end to end.</p>
          </div>
          <a href="#cta"><Button variant="secondary" iconRight={<Icon name="arrow-right" size={16} />}>View all setups</Button></a>
        </Reveal>

        <div className="wf-featured-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: 240, gap: 18 }}>
          {feats.map((f, i) => (
            <Reveal key={f.t} delay={i * 70}
              style={{ gridColumn: f.span === "big" ? "span 2" : f.span === "wide" ? "span 2" : "span 1", gridRow: f.span === "big" ? "span 2" : "span 1" }}
              className={`wf-feat ${f.span || ""}`}>
              <a href="#cta" style={{ display: "block", height: "100%" }}>
                <CinematicMedia height="100%" image={f.img} alt={f.t} pos={f.pos || "center"} radius="var(--radius-xl)" fade="strong" reel reelLabel="Event film">
                  <span style={{ position: "absolute", left: 18, top: 18 }}><Badge tone="neutral" appearance="solid" style={{ background: "rgba(11,11,13,0.6)", color: "#fff", backdropFilter: "blur(6px)" }}>{f.tag}</Badge></span>
                  <span style={{ position: "absolute", left: 18, right: 18, bottom: 16, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: f.span === "big" ? 30 : 19, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#fff", lineHeight: 0.98 }}>{f.t}</span>
                    <span style={{ width: 36, height: 36, borderRadius: 999, background: "rgba(255,255,255,0.16)", backdropFilter: "blur(6px)", display: "grid", placeItems: "center", color: "#fff", flex: "none" }}><Icon name="arrow-up-right" size={17} /></span>
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

/* ---------------- 09 · SUPPLIER / PARTNER CTA ---------------- */
function SupplierCTA() {
  useLucide();
  const suppliers = [
    { name: "Lumen Stage Co.", specialty: "Lighting & LED", rating: 4.9, reviews: 212, location: "Tunis", listings: 48 },
    { name: "Maison Décor", specialty: "Decoration & Scenography", rating: 5.0, reviews: 134, location: "Tunis", listings: 31 },
    { name: "SonicPro", specialty: "Sound & Staging", rating: 4.8, reviews: 98, location: "Sousse", listings: 22 },
  ];
  const stats = [["320+", "Verified suppliers"], ["4,800+", "Listings live"], ["1,200+", "Events produced"]];
  return (
    <section id="suppliers" className="wf-section wf-light">
      <div className="wf-wrap">
        <div className="wf-supplier-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionIndex n="09" label="Suppliers & Partners" />
            <h2 className="wf-title" style={{ fontSize: "var(--fs-h1)" }}>List your gear.<br /><span className="wf-kicker">Reach every host.</span></h2>
            <p className="wf-sub">Put your equipment in front of brands, agencies, and private clients planning real events. You manage stock and pricing — we bring the demand.</p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", margin: "4px 0" }}>
              {stats.map(([n, l]) => (
                <div key={l} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 30, color: "var(--text-strong)" }}>{n}</span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Button variant="primary" iconRight={<Icon name="arrow-right" size={16} />}>List Your Equipment</Button>
              <Button variant="secondary">Become a Partner</Button>
            </div>
          </Reveal>

          <Reveal delay={120} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <CinematicMedia image="assets/event-festival-aerial.png" alt="Live production" pos="center" radius="var(--radius-xl)" fade="strong" style={{ gridColumn: "1 / -1", height: 150 }} reel reelLabel="Supplier reel">
              <span style={{ position: "absolute", left: 16, bottom: 14, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#fff" }}>4,800+ listings live</span>
            </CinematicMedia>
            {suppliers.map((sp) => (
              <SupplierCard key={sp.name} name={sp.name} specialty={sp.specialty} verified rating={sp.rating} reviews={sp.reviews} location={sp.location} listings={sp.listings} style={sp.specialty === "Sound & Staging" ? { gridColumn: "1 / -1" } : {}} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10 · TRUST / WHY WII EVENT ---------------- */
function Trust() {
  useLucide();
  const reasons = [
    { icon: "badge-check", t: "Verified suppliers", d: "Every vendor vetted for quality and reliability." },
    { icon: "wrench", t: "Installation support", d: "We deliver, build, and run it on-site." },
    { icon: "layout-grid", t: "Wide equipment catalog", d: "Lighting, LED, stages, sound, tents, décor." },
    { icon: "drama", t: "Production expertise", d: "From private dinners to full festivals." },
    { icon: "monitor-smartphone", t: "Digital planning", d: "Plan, compare, and book in one place." },
    { icon: "scan-line", t: "3D preview technology", d: "See your setup before you commit." },
    { icon: "route", t: "End-to-end coordination", d: "One team from concept to teardown." },
    { icon: "shield-check", t: "Reliable logistics", d: "On-time delivery, every event." },
  ];
  return (
    <section id="trust" className="wf-section wf-dark">
      <ArtBg variant="shapes" style={{ opacity: 0.5 }} />
      <div className="wf-wrap">
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 44, maxWidth: 700 }}>
          <SectionIndex n="10" label="Why Wii Event" />
          <h2 className="wf-title">One platform.<br /><span className="wf-kicker">Total trust.</span></h2>
          <Diamonds items={["Verified", "Insured", "On-time", "End-to-end"]} style={{ color: "rgba(255,255,255,0.7)" }} />
        </Reveal>
        <div className="wf-grid wf-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 55}>
              <div className="wf-card-dark" style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "grid", placeItems: "center", color: "var(--wf-accent)" }}><Icon name={r.icon} size={21} /></span>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#fff" }}>{r.t}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,0.62)" }}>{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 11 · FINAL CTA ---------------- */
function FinalCTA() {
  useLucide();
  return (
    <section id="cta" className="wf-dark" style={{ position: "relative", padding: "clamp(80px,12vw,160px) clamp(20px,5vw,80px)", overflow: "hidden", textAlign: "center" }}>
      <div className="hero-media" style={{ zIndex: 0 }}><img className="kb" src="assets/event-festival-aerial.png" alt="Festival aerial" /></div>
      <div className="hero-grade g-spot" />
      <div className="hero-grade g-tint" />
      <div className="hero-grade g-base" style={{ background: "radial-gradient(120% 120% at 50% 50%, rgba(11,11,13,0.5) 0%, rgba(11,11,13,0.86) 70%)" }} />
      <ArtBg variant="beams" beams={4} style={{ zIndex: 1, opacity: 0.55 }} />
      <Spotlight />
      <div className="wf-grain" style={{ zIndex: 2 }} />
      <span className="cine-reel" style={{ top: "auto", bottom: 18, left: "50%", transform: "translateX(-50%)" }}><span className="rec" /> CTA reel · replace with cinematic footage</span>
      <div className="wf-wrap" style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <span className="wf-eyebrow" style={{ color: "var(--wf-accent)" }}>— Let's build it</span>
        <h2 className="wf-title" style={{ color: "#fff", fontSize: "clamp(2.6rem,6vw,5.5rem)" }}>Ready to build<br />your next event?</h2>
        <p className="wf-sub" style={{ color: "rgba(255,255,255,0.8)", textAlign: "center", maxWidth: "52ch" }}>Choose your setup, preview your space, and let the right team handle the rest.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 6 }}>
          <a href="#agent" className="wf-btn wf-btn--accent">Plan Your Event <Icon name="arrow-right" size={18} /></a>
          <a href="#marketplace" className="wf-btn wf-btn--ghost-light">Explore Equipment</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  useLucide();
  const cols = [
    ["Platform", ["Equipment", "Event Services", "3D Preview", "Wii Agent"]],
    ["Company", ["About", "Suppliers", "Careers", "Contact"]],
    ["Resources", ["How it works", "Pricing", "Help center", "Terms"]],
  ];
  return (
    <footer className="wf-dark-700" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "64px clamp(20px,5vw,80px) 36px" }}>
      <div className="wf-wrap">
        <div className="wf-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 320 }}>
            <img src="assets/wii-logo-white.png" alt="Wii Event" style={{ height: 34, width: "auto", objectFit: "contain", objectPosition: "left" }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>The event platform for equipment, spaces & experiences. Part of the EVA Group — The Event Specialists.</p>
            <Diamonds items={["Rent", "Design", "Preview", "Produce"]} style={{ color: "rgba(255,255,255,0.5)" }} />
          </div>
          {cols.map(([h, links]) => (
            <div key={h} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="wf-eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>{h}</span>
              {links.map((l) => (
                <a key={l} href="#hero" style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", transition: "color var(--dur-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.78)")}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", paddingTop: 24 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "rgba(255,255,255,0.4)" }}>© 2026 WII EVENT · WIREFRAME</span>
          <span style={{ display: "flex", gap: 10 }}>
            {["Instagram", "LinkedIn", "Facebook"].map((ic) => (
              <span key={ic} style={{ height: 36, padding: "0 14px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "grid", placeItems: "center", color: "rgba(255,255,255,0.7)", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em" }}>{ic.slice(0, 2).toUpperCase()}</span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FeaturedSetups, SupplierCTA, Trust, FinalCTA, Footer });
