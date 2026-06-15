/* ============================================================
   Wii Event Wireframe — Sections A
   Nav · Hero (01) · Service Choice (02)
   ============================================================ */
const DS = window.WiiEventDesignSystem_37bcec;
const { Button, Badge, ServiceOptionSelector } = DS;

/* ---------------- NAVIGATION ---------------- */
function Nav({ headline, onCycleHeadline }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useLucide();
  const links = [
    ["Equipment", "#marketplace"], ["Event Services", "#services"], ["3D Preview", "#preview3d"],
    ["Wii Agent", "#agent"], ["Suppliers", "#suppliers"], ["About", "#trust"], ["Contact", "#cta"],
  ];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base)",
      background: solid ? "rgba(11,11,13,0.82)" : "transparent",
      backdropFilter: solid ? "blur(14px)" : "none",
      borderBottom: `1px solid ${solid ? "rgba(255,255,255,0.10)" : "transparent"}`,
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,4vw,44px)", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="assets/logo.jpg" alt="Wii Event" style={{ height: 40, borderRadius: 10, display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Event<br />Platform</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 26 }} className="wf-nav-links">
          {links.map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.82)", letterSpacing: "0.01em", transition: "color var(--dur-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#agent" className="wf-btn wf-btn--accent" style={{ height: 44, padding: "0 20px", fontSize: 14 }}>
            Plan Your Event <Icon name="arrow-up-right" size={16} />
          </a>
          <button aria-label="menu" className="wf-nav-burger" onClick={() => setOpen(!open)} style={{ display: "none", width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", cursor: "pointer", alignItems: "center", justifyContent: "center" }}>
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- 01 · HERO ---------------- */
function Hero({ headline, onCycleHeadline }) {
  useLucide();
  const cards = [
    { icon: "package", t: "Equipment Rental", d: "8 categories, verified suppliers", href: "#marketplace" },
    { icon: "wrench", t: "Full Event Setup", d: "Delivery, install & dismantle", href: "#services" },
    { icon: "scan-line", t: "3D Space Preview", d: "Drop equipment into your venue", href: "#preview3d" },
    { icon: "music", t: "Festival & Corporate", d: "Production at any scale", href: "#events" },
  ];
  return (
    <section id="hero" className="hero wf-dark wii-dark">
      {/* Hero background — drop a <video autoplay muted loop> here to go live */}
      <div className="hero-media">
        <img className="kb" src="assets/event-festival-stage.png" alt="Festival main stage at night" />
      </div>
      <div className="hero-grade g-side" />
      <div className="hero-grade g-tint" />
      <div className="hero-grade g-spot" />
      <ArtBg variant="beams" beams={3} style={{ zIndex: 1, opacity: 0.42 }} />
      <div className="hero-grade g-base" />
      <Spotlight />
      <div className="wf-grain" style={{ zIndex: 2 }} />

      <span className="hero-reel">
        <span className="rec" /> Live reel · replace with stage footage <span className="tc">02:14</span>
      </span>
      <span className="hero-vrail">Tunis · TN<span style={{ color: "var(--wf-accent)" }}>◆</span>Est. 2019</span>

      <div style={{ position: "relative", zIndex: 4, maxWidth: 1320, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 920 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span className="wf-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>— The Event Specialists</span>
            <Badge tone="success" appearance="soft" dot>Available · Tunis</Badge>
            <button onClick={onCycleHeadline} title="Shuffle headline" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
              <Icon name="shuffle" size={14} />
            </button>
          </div>

          <h1 className="wf-title" style={{ color: "#fff", fontSize: "clamp(3.1rem, 7.4vw, 6.6rem)", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
            {headline.lines.map((ln, i) => (
              <span key={i} style={{ display: "block", color: i === headline.accentLine ? "var(--wf-accent)" : "#fff" }}>{ln}</span>
            ))}
          </h1>

          <p style={{ margin: 0, fontSize: "clamp(1.05rem,1.5vw,1.3rem)", lineHeight: 1.5, color: "rgba(255,255,255,0.82)", maxWidth: "56ch", textWrap: "pretty" }}>
            From equipment rental to full production, Wii Event gives you the tools, people, and technology to bring your event vision to life.
          </p>
          <Diamonds items={["Rent", "Design", "Preview", "Produce"]} style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 8, alignItems: "center" }}>
            <a href="#agent" className="wf-btn wf-btn--accent">Plan Your Event <Icon name="arrow-right" size={18} /></a>
            <a href="#marketplace" className="wf-btn wf-btn--ghost-light">Explore Equipment</a>
            <button className="wf-btn" style={{ background: "transparent", color: "#fff", border: "none", height: 52, paddingLeft: 4 }}>
              <span style={{ width: 40, height: 40, borderRadius: 999, display: "grid", placeItems: "center", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.28)", marginRight: 4 }}><Icon name="play" size={15} style={{ marginLeft: 2 }} /></span>
              Watch showreel
            </button>
          </div>
        </div>

        {/* Floating service card rail */}
        <div className="hero-rail" style={{ marginTop: 52 }}>
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 90} as="a" href={c.href || "#services"} className="hero-scard">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="ico"><Icon name={c.icon} size={22} /></span>
                <span className="num">0{i + 1}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#fff", lineHeight: 1.05 }}>{c.t}</span>
                <span className="desc" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{c.d}</span>
              </div>
              <span className="arr" style={{ marginTop: "auto", alignSelf: "flex-start" }}><Icon name="arrow-up-right" size={16} /></span>
            </Reveal>
          ))}
        </div>

        {/* trust strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginTop: 30, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div className="hero-trust">
            <span className="stat"><b>320+</b><span>Verified suppliers</span></span>
            <span className="sep">◆</span>
            <span className="stat"><b>4,800+</b><span>Listings live</span></span>
            <span className="sep">◆</span>
            <span className="stat"><b>1,200+</b><span>Events produced</span></span>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)" }}>
            SCROLL <Icon name="arrow-down" size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 02 · SERVICE CHOICE ---------------- */
function ServiceChoice() {
  const [active, setActive] = useState(1);
  useLucide();
  const levels = [
    { icon: "package", tag: "01", t: "Rent equipment only", d: "Browse the marketplace, book by the day, and pick up or arrange your own delivery. Full control, lowest cost.", pts: ["Self-service catalog", "Pick-up or delivery", "Pay per day"], img: "assets/event-private.png", pos: "left" },
    { icon: "wrench", tag: "02", t: "Rent with delivery & installation", d: "We bring it, build it, and make sure everything runs. You handle the vision, we handle the rig.", pts: ["Delivered to venue", "Pro installation", "On-site support"], img: "assets/event-festival-aerial.png", pos: "center" },
    { icon: "sparkles", tag: "03", t: "Full A-to-Z event production", d: "Design, build, staff, run, and dismantle. One team, one quote, end to end.", pts: ["Concept & design", "Crew & coordination", "Run & teardown"], popular: true, img: "assets/event-festival-stage.png", pos: "center" },
  ];
  return (
    <section id="services" className="wf-section wf-light">
      <div className="wf-wrap">
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 44, maxWidth: 720 }}>
          <SectionIndex n="02" label="Service Choice" />
          <h2 className="wf-title" style={{ fontSize: "var(--fs-h1)" }}>Choose how much<br /><span className="wf-kicker">we handle</span>.</h2>
          <p className="wf-sub">Three ways to work with Wii Event — from a single rental to a fully produced experience. Pick a level, change it any time.</p>
        </Reveal>

        <div className="wf-grid wf-cols-3">
          {levels.map((lv, i) => {
            const on = active === i;
            return (
              <Reveal key={lv.t} delay={i * 100}>
                <div onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                  className="wf-card" style={{
                    padding: 0, overflow: "hidden", cursor: "pointer", height: "100%",
                    border: on ? "1.5px solid var(--wf-accent)" : "1px solid var(--border-subtle)",
                    boxShadow: on ? "0 18px 48px rgba(11,11,13,0.12)" : "var(--shadow-sm)",
                    transform: on ? "translateY(-4px)" : "none",
                    transition: "all var(--dur-base) var(--ease-out)",
                  }}>
                  {/* cinematic media */}
                  <CinematicMedia image={lv.img} alt={lv.t} pos={lv.pos} height={156} radius="0" fade="strong" reel reelLabel="Loop" />
                  <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ width: 48, height: 48, borderRadius: 12, display: "grid", placeItems: "center", background: on ? "var(--wf-accent)" : "var(--neutral-100)", color: on ? "#fff" : "var(--ink-900)", transition: "all var(--dur-base)" }}>
                        <Icon name={lv.icon} size={22} />
                      </span>
                      {lv.popular
                        ? <Badge tone="gold" appearance="soft">Most popular</Badge>
                        : <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--text-muted)" }}>{lv.tag} / 03</span>}
                    </div>
                    <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 21, lineHeight: 1.1, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--text-strong)" }}>{lv.t}</h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{lv.d}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 2 }}>
                      {lv.pts.map((p) => (
                        <span key={p} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5, color: "var(--text-body)" }}>
                          <Icon name="check" size={15} style={{ color: "var(--wf-accent)" }} /> {p}
                        </span>
                      ))}
                    </div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 6, fontWeight: 700, fontSize: 14, color: on ? "var(--wf-accent)" : "var(--ink-900)" }}>
                      Choose this level <Icon name="arrow-right" size={16} />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal style={{ marginTop: 36 }}>
          <div className="wf-card wf-config-grid" style={{ padding: "26px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="wf-eyebrow">Configure in one tap</span>
              <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, lineHeight: 1.1, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--text-strong)" }}>Set your service level</h3>
              <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.55 }}>This choice carries through the whole flow — marketplace, 3D preview, and your quote.</p>
              <Button variant="primary" size="md" iconRight={<Icon name="arrow-right" size={16} />} style={{ alignSelf: "flex-start", marginTop: 4 }}>Request a quote</Button>
              <MotionNote style={{ marginTop: 4 }}>Selected row gets a 2px voltage ring</MotionNote>
            </div>
            <ServiceOptionSelector />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, ServiceChoice });
