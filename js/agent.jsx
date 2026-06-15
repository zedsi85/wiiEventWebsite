/* ============================================================
   Wii Event Wireframe — Wii Agent (06)
   Live-feel AI chat demo: staggered bubbles, typing indicator,
   recommendation cards slide in. Replayable via prompt chips.
   ============================================================ */

const AGENT_SCRIPTS = {
  outdoor: {
    chip: "Outdoor · 100 guests",
    user: "I need a private outdoor event for 100 guests with lights, tables, a DJ corner, and elegant decoration.",
    intro: "Great — an elegant outdoor evening for 100. Based on your brief, here's a Premium Outdoor Setup:",
    bundleTitle: "Premium Outdoor Setup",
    bundle: ["Lounge furniture", "Cocktail tables ×12", "Ambient lighting rig", "DJ booth + sound system", "Floral decoration", "Delivery & installation"],
    stats: ["100 Guest Capacity", "Lighting + Sound", "Delivery & Installation"],
    budget: "$6,200 – $8,400",
    timeline: "1-day build · evening event",
    outro: "Want me to turn this into a quote, or adjust the style?",
  },
  birthday: {
    chip: "Birthday · 80 guests",
    user: "I'm organizing a birthday party for 80 people at an outdoor villa. Elegant, with lighting, tables, chairs, a small DJ setup, and decoration.",
    intro: "Lovely — an elegant villa birthday for 80. Here's a setup that fits that mood:",
    bundleTitle: "Elegant Villa Birthday",
    bundle: ["80 chairs + 10 round tables", "Warm festoon + uplighting", "Compact DJ + speakers", "Balloon & floral styling", "Lounge corner", "Setup & teardown"],
    stats: ["80 Guest Capacity", "Ambient Lighting", "Rent + Install"],
    budget: "$3,900 – $5,300",
    timeline: "Half-day build · same-day teardown",
    outro: "I can add a photo booth or catering equipment — want me to?",
  },
};

function TypingDots() {
  return (
    <span style={{ display: "inline-flex", gap: 4, alignItems: "center", padding: "2px 2px" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: 999, background: "rgba(255,255,255,0.6)", animation: `wf-typing 1.2s ${i * 0.15}s ease-in-out infinite` }} />
      ))}
    </span>
  );
}

function Bubble({ from, children, delay = 0 }) {
  const isUser = from === "user";
  return (
    <div className="wf-reveal in" style={{
      display: "flex", gap: 10, alignItems: "flex-end", flexDirection: isUser ? "row-reverse" : "row",
      animation: "wf-bubble-in 0.42s var(--ease-out) both", animationDelay: `${delay}ms`,
    }}>
      {!isUser && (
        <span style={{ width: 34, height: 34, flex: "none", borderRadius: 10, background: "var(--grad-stage)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 4px 14px var(--wf-accent-glow)" }}>
          <Icon name="sparkles" size={17} />
        </span>
      )}
      <div style={{
        maxWidth: "82%", padding: "12px 15px", borderRadius: 16,
        borderBottomRightRadius: isUser ? 4 : 16, borderBottomLeftRadius: isUser ? 16 : 4,
        background: isUser ? "var(--wf-accent)" : "rgba(255,255,255,0.07)",
        border: isUser ? "none" : "1px solid rgba(255,255,255,0.12)",
        color: "#fff", fontSize: 14.5, lineHeight: 1.5,
      }}>{children}</div>
    </div>
  );
}

function WiiAgent() {
  const [scriptKey, setScriptKey] = useState("outdoor");
  const [phase, setPhase] = useState(0); // 0 idle,1 user,2 typing,3 intro,4 cards,5 outro
  const startedRef = useRef(false);
  const timers = useRef([]);
  const scrollRef = useRef(null);
  const s = AGENT_SCRIPTS[scriptKey];

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const at = (ms, fn) => timers.current.push(setTimeout(fn, ms));

  const play = (key) => {
    clearTimers();
    if (key) setScriptKey(key);
    setPhase(0);
    at(250, () => setPhase(1));   // user msg
    at(1100, () => setPhase(2));  // typing
    at(2400, () => setPhase(3));  // intro
    at(3100, () => setPhase(4));  // cards
    at(4600, () => setPhase(5));  // outro
  };

  // autoplay on first view
  const rootRef = useRef(null);
  useEffect(() => {
    const el = rootRef.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting && !startedRef.current) { startedRef.current = true; play(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); clearTimers(); };
  }, []);

  useLucide();
  useEffect(() => {
    // keep latest message in view inside the chat panel
    const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight;
  }, [phase, scriptKey]);

  return (
    <section id="agent" ref={rootRef} className="wf-dark" style={{ position: "relative", padding: "var(--section-pad-y) clamp(20px,5vw,80px)", overflow: "hidden", minHeight: "94vh", display: "flex", alignItems: "center" }}>
      <div className="hero-media" style={{ zIndex: 0, opacity: 0.32 }}><img className="kb" src="assets/event-private.png" alt="" /></div>
      <div className="hero-grade g-base" style={{ background: "linear-gradient(180deg, rgba(11,11,13,0.78), rgba(11,11,13,0.92))" }} />
      <ArtBg variant="mesh" style={{ opacity: 0.6 }} />
      <ArtBg variant="beams" beams={3} style={{ opacity: 0.36 }} />
      <Spotlight />
      <div className="wf-wrap wf-agent-grid" style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 50, alignItems: "center" }}>
        {/* LEFT — pitch */}
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionIndex n="06" label="Wii Agent" />
          <Badge tone="pulse" appearance="soft" dot>AI event planner</Badge>
          <h2 className="wf-title" style={{ fontSize: "clamp(2.4rem,4.6vw,4rem)" }}>Plan your event<br />with <span className="wf-kicker">Wii Agent</span>.</h2>
          <p className="wf-sub" style={{ color: "rgba(255,255,255,0.78)" }}>Describe your event in a few words and let Wii Agent suggest the right equipment, services, layouts, and setup options — then turn it into a quote.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
            {[["message-square-text", "Describe it in plain language"], ["wand-sparkles", "Get a tailored equipment bundle"], ["receipt-text", "Budget range + quote, instantly"]].map(([ic, tx]) => (
              <span key={tx} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.85)", fontSize: 15 }}>
                <span style={{ width: 38, height: 38, flex: "none", borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", display: "grid", placeItems: "center", color: "var(--wf-accent)" }}><Icon name={ic} size={18} /></span>
                {tx}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            <button onClick={() => play(scriptKey)} className="wf-btn wf-btn--accent">Chat With Wii Agent <Icon name="arrow-right" size={18} /></button>
            <button onClick={() => play(scriptKey)} className="wf-btn wf-btn--ghost-light"><Icon name="play" size={15} /> See Example Plan</button>
          </div>
        </Reveal>

        {/* RIGHT — chat mock */}
        <Reveal delay={140}>
          <div style={{ position: "relative" }}>
            {/* AI glow */}
            <div style={{ position: "absolute", inset: -2, borderRadius: 30, background: "var(--grad-stage)", filter: "blur(22px)", opacity: 0.45, zIndex: 0, animation: "wf-glow 4s ease-in-out infinite" }} />
            <div style={{ position: "relative", zIndex: 1, background: "rgba(17,17,20,0.86)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 26, overflow: "hidden", backdropFilter: "blur(18px)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
              {/* header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: "var(--grad-stage)", display: "grid", placeItems: "center", color: "#fff" }}><Icon name="sparkles" size={17} /></span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em" }}>Wii Agent</span>
                    <span style={{ fontSize: 11, color: "var(--success-500)", display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--success-500)" }} /> Online</span>
                  </span>
                </span>
                <span className="wf-zone-tag" style={{ position: "static", background: "rgba(255,255,255,0.06)" }}>
                  <span className="diamond">◆</span> Demo · replace with live AI
                </span>
              </div>

              {/* messages */}
              <div ref={scrollRef} style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14, height: 396, overflow: "hidden" }}>
                {phase >= 1 && <Bubble from="user">{s.user}</Bubble>}
                {phase === 2 && (
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                    <span style={{ width: 34, height: 34, flex: "none", borderRadius: 10, background: "var(--grad-stage)", display: "grid", placeItems: "center", color: "#fff" }}><Icon name="sparkles" size={17} /></span>
                    <div style={{ padding: "12px 15px", borderRadius: 16, borderBottomLeftRadius: 4, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}><TypingDots /></div>
                  </div>
                )}
                {phase >= 3 && <Bubble from="agent">{s.intro}</Bubble>}
                {phase >= 4 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 44 }}>
                    {/* bundle card */}
                    <div style={{ animation: "wf-card-slide 0.5s var(--ease-out) both", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.01em" }}><Icon name="package" size={16} style={{ color: "var(--wf-accent)" }} /> {s.bundleTitle}</span>
                        <Badge tone="success" appearance="soft" dot>Quote ready</Badge>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 14px" }}>
                        {s.bundle.map((b) => (
                          <span key={b} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "rgba(255,255,255,0.82)" }}><Icon name="check" size={13} style={{ color: "var(--success-500)", flex: "none" }} /> {b}</span>
                        ))}
                      </div>
                    </div>
                    {/* stat chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, animation: "wf-card-slide 0.5s 0.1s var(--ease-out) both" }}>
                      {s.stats.map((st) => (
                        <span key={st} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", color: "#fff", background: "rgba(84,102,255,0.2)", border: "1px solid rgba(124,138,255,0.4)", borderRadius: 999, padding: "5px 11px" }}>{st}</span>
                      ))}
                    </div>
                    {/* budget + timeline */}
                    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 10, animation: "wf-card-slide 0.5s 0.2s var(--ease-out) both" }}>
                      <div style={{ background: "var(--grad-stage-soft)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 14, padding: "12px 14px" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Est. budget</span>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: "#fff", marginTop: 3 }}>{s.budget}</div>
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "12px 14px" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Timeline</span>
                        <div style={{ fontSize: 13.5, color: "#fff", marginTop: 5, lineHeight: 1.3 }}>{s.timeline}</div>
                      </div>
                    </div>
                    <button className="wf-btn wf-btn--accent" style={{ height: 44, alignSelf: "flex-start", animation: "wf-card-slide 0.5s 0.3s var(--ease-out) both" }}>Request this quote <Icon name="arrow-right" size={16} /></button>
                  </div>
                )}
                {phase >= 5 && <Bubble from="agent">{s.outro}</Bubble>}
              </div>

              {/* input + quick prompts */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: 14 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                  {Object.entries(AGENT_SCRIPTS).map(([k, v]) => (
                    <button key={k} onClick={() => { startedRef.current = true; play(k); }} style={{
                      fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 999, cursor: "pointer",
                      background: scriptKey === k ? "var(--wf-accent-soft)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${scriptKey === k ? "var(--wf-accent)" : "rgba(255,255,255,0.14)"}`, color: "#fff",
                    }}>{v.chip}</button>
                  ))}
                  <button onClick={() => { startedRef.current = true; play(scriptKey); }} style={{ fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 999, cursor: "pointer", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.8)", display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="rotate-ccw" size={13} /> Replay</button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 999, padding: "8px 8px 8px 16px" }}>
                  <Icon name="message-square" size={17} style={{ color: "rgba(255,255,255,0.5)" }} />
                  <span style={{ flex: 1, fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Describe your event…</span>
                  <button onClick={() => { startedRef.current = true; play(scriptKey); }} style={{ width: 38, height: 38, borderRadius: 999, background: "var(--wf-accent)", border: "none", display: "grid", placeItems: "center", color: "#fff", cursor: "pointer" }}><Icon name="arrow-up" size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { WiiAgent });
