/* ============================================================
   Wii Event Wireframe — Sections C
   3D Space Preview (05) · How It Works (07)
   ============================================================ */

/* ---------------- 05 · 3D SPACE PREVIEW ---------------- */
function Preview3D() {
  const [step, setStep] = useState(2);
  useLucide();
  const steps = [
    { icon: "upload", t: "Upload space", d: "Photo or video of your venue" },
    { icon: "package", t: "Select equipment", d: "Drag from the catalog" },
    { icon: "move-3d", t: "Preview layout", d: "See it placed in 3D / AR" },
    { icon: "check-check", t: "Confirm setup", d: "Lock it & request a quote" },
  ];
  const chips = ["Stage 6×4", "LED Wall", "Moving heads", "Lounge set", "Cocktail tables"];
  return (
    <section id="preview3d" className="wf-section wf-dark-700">
      <ArtBg variant="beams" beams={4} style={{ opacity: 0.7 }} />
      <div className="wf-wrap wf-3d-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48, alignItems: "center" }}>
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionIndex n="05" label="3D Space Preview" />
          <Badge tone="voltage" appearance="soft" dot>Coming soon</Badge>
          <h2 className="wf-title">See it before<br /><span className="wf-kicker">you build it</span>.</h2>
          <p className="wf-sub">Upload a photo or video of your space, drop in the equipment you're considering, and preview the full layout in 3D or AR — before a single truck leaves the warehouse.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
            {steps.map((s, i) => (
              <button key={s.t} onClick={() => setStep(i)} style={{
                display: "flex", alignItems: "center", gap: 14, textAlign: "left", cursor: "pointer",
                padding: "12px 14px", borderRadius: 14, width: "100%",
                background: step === i ? "rgba(255,255,255,0.06)" : "transparent",
                border: `1px solid ${step === i ? "var(--wf-accent)" : "rgba(255,255,255,0.10)"}`,
                transition: "all var(--dur-base) var(--ease-out)",
              }}>
                <span style={{ width: 40, height: 40, flex: "none", borderRadius: 10, display: "grid", placeItems: "center", background: step === i ? "var(--wf-accent)" : "rgba(255,255,255,0.08)", color: "#fff" }}><Icon name={s.icon} size={19} /></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>{i + 1}. {s.t}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{s.d}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* viewport mock */}
        <Reveal delay={120}>
          <div className="wf-glass" style={{ padding: 14, borderRadius: "var(--radius-2xl)" }}>
            {/* viewport chrome */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 8px 12px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)" }}>
                <Icon name="scan-line" size={15} style={{ color: "var(--wf-accent)" }} /> 3D / AR VIEWPORT
              </span>
              <span style={{ display: "flex", gap: 6 }}>
                {["rotate-3d", "maximize", "ruler"].map((ic) => (
                  <span key={ic} style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.08)", display: "grid", placeItems: "center", color: "rgba(255,255,255,0.8)" }}><Icon name={ic} size={15} /></span>
                ))}
              </span>
            </div>
            <CinematicMedia height={340} image="assets/event-corporate.png" alt="Venue preview" pos="center" radius="var(--radius-xl)" kb fade="none" reel reelLabel="3D / AR — replace with live render">
              {/* before/after split — left half = bare 'before' */}
              <span style={{ position: "absolute", inset: 0, right: "48%", zIndex: 2, background: "rgba(11,11,13,0.45)", backdropFilter: "grayscale(1) brightness(0.7)" }} />
              <span style={{ position: "absolute", inset: 0, zIndex: 3, background: "var(--grad-ink-fade)" }} />
              <span style={{ position: "absolute", top: 0, bottom: 0, left: "52%", width: 2, background: "rgba(255,255,255,0.7)", zIndex: 4 }} />
              <span style={{ position: "absolute", top: "50%", left: "52%", transform: "translate(-50%,-50%)", zIndex: 5, width: 40, height: 40, borderRadius: 999, background: "#fff", display: "grid", placeItems: "center", color: "var(--ink-900)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}><Icon name="move-horizontal" size={18} /></span>
              <span style={{ position: "absolute", left: 16, top: 56, zIndex: 5 }}><Badge tone="neutral" appearance="solid" style={{ background: "rgba(11,11,13,0.7)", color: "#fff" }}>BEFORE</Badge></span>
              <span style={{ position: "absolute", right: 16, top: 56, zIndex: 5 }}><Badge tone="voltage" appearance="solid">AFTER · EQUIPPED</Badge></span>
              {/* floating selected-equipment label */}
              <span style={{ position: "absolute", left: 16, bottom: 16, zIndex: 5, display: "flex", gap: 8, flexWrap: "wrap", maxWidth: "76%" }}>
                {chips.slice(0, 3).map((c) => (
                  <span key={c} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.06em", color: "#fff", background: "rgba(84,102,255,0.32)", border: "1px solid rgba(124,138,255,0.6)", borderRadius: 999, padding: "4px 10px" }}>+ {c}</span>
                ))}
              </span>
            </CinematicMedia>
            {/* equipment tray */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", color: "rgba(255,255,255,0.55)" }}>DRAG IN:</span>
              {chips.map((c) => (
                <span key={c} style={{ fontSize: 12.5, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 999, padding: "6px 12px", cursor: "grab" }}>{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 07 · HOW IT WORKS ---------------- */
function HowItWorks() {
  useLucide();
  const steps = [
    { icon: "calendar-check", t: "Choose your event type", d: "Tell us what you're planning — or ask Wii Agent." },
    { icon: "list-checks", t: "Select equipment or a package", d: "Rent only, rent + install, or full production." },
    { icon: "scan-line", t: "Upload your space or request support", d: "Preview in 3D, or hand it to our team." },
    { icon: "receipt-text", t: "Receive a quote", d: "Transparent, itemized, fast." },
    { icon: "party-popper", t: "Confirm — we handle setup", d: "Delivery, install, run, and teardown." },
  ];
  return (
    <section id="how" className="wf-section wf-light">
      <div className="wf-wrap">
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48, maxWidth: 680 }}>
          <SectionIndex n="07" label="How It Works" />
          <h2 className="wf-title" style={{ fontSize: "var(--fs-h1)" }}>Five steps,<br />vision to reality.</h2>
        </Reveal>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 28, left: "8%", right: "8%", height: 2, background: "repeating-linear-gradient(90deg, var(--border-subtle) 0 8px, transparent 8px 16px)", zIndex: 0 }} className="wf-how-line" />
          <div className="wf-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", position: "relative", zIndex: 1 }}>
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 90} style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <span style={{ width: 56, height: 56, borderRadius: 16, background: "var(--ink-900)", color: "#fff", display: "grid", placeItems: "center", position: "relative" }}>
                  <Icon name={s.icon} size={24} />
                  <span style={{ position: "absolute", top: -8, right: -8, width: 24, height: 24, borderRadius: 999, background: "var(--wf-accent)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12 }}>{i + 1}</span>
                </span>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, lineHeight: 1.12, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--text-strong)" }}>{s.t}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: "var(--text-muted)" }}>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Preview3D, HowItWorks });
