/* ============================================================
   Wii Event Wireframe — App shell + Tweaks
   ============================================================ */

const HEADLINES = [
  { label: "Vision to Reality", lines: ["Build your event", "from vision", "to reality"], accentLine: 2 },
  { label: "Rent. Design. Preview.", lines: ["Rent.", "Design.", "Preview.", "Produce."], accentLine: 2 },
  { label: "The Event Platform", lines: ["The event platform", "for equipment,", "spaces & experiences."], accentLine: 1 },
];

const ACCENTS = {
  "#5466FF": { c6: "#3D49E8", soft: "rgba(84,102,255,0.16)", glow: "rgba(84,102,255,0.45)", rgb: "84,102,255" },
  "#FF2E9A": { c6: "#D81E86", soft: "rgba(255,46,154,0.16)", glow: "rgba(255,46,154,0.42)", rgb: "255,46,154" },
  "#D9B26A": { c6: "#B68A3E", soft: "rgba(217,178,106,0.18)", glow: "rgba(217,178,106,0.40)", rgb: "217,178,106" },
};

const INTENSITY = {
  Calm: { speed: 0.55, motion: 0.7 },
  Balanced: { speed: 1, motion: 1 },
  Energetic: { speed: 1.6, motion: 1.35 },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#5466FF",
  "intensity": "Balanced",
  "markers": false,
  "headline": 0
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply accent + intensity to CSS vars
  useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS["#5466FF"];
    const r = document.documentElement.style;
    r.setProperty("--wf-accent", t.accent);
    r.setProperty("--wf-accent-600", a.c6);
    r.setProperty("--wf-accent-soft", a.soft);
    r.setProperty("--wf-accent-glow", a.glow);
    r.setProperty("--wf-marker-rgb", a.rgb);
  }, [t.accent]);

  useEffect(() => {
    const i = INTENSITY[t.intensity] || INTENSITY.Balanced;
    const r = document.documentElement.style;
    r.setProperty("--wf-speed", i.speed);
    r.setProperty("--wf-motion", i.motion);
  }, [t.intensity]);

  useEffect(() => {
    document.body.dataset.markers = t.markers ? "on" : "off";
  }, [t.markers]);

  useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });

  const headline = HEADLINES[t.headline] || HEADLINES[0];
  const cycleHeadline = () => setTweak("headline", (t.headline + 1) % HEADLINES.length);

  return (
    <React.Fragment>
      <Nav />
      <Hero headline={headline} onCycleHeadline={cycleHeadline} />
      <ServiceChoice />
      <Marketplace />
      <EventTypes />
      <Preview3D />
      <WiiAgent />
      <HowItWorks />
      <FeaturedSetups />
      <SupplierCTA />
      <Trust />
      <FinalCTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Brand accent" />
        <TweakColor label="Accent color" value={t.accent}
          options={["#5466FF", "#FF2E9A", "#D9B26A"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Motion" />
        <TweakRadio label="Background energy" value={t.intensity}
          options={["Calm", "Balanced", "Energetic"]}
          onChange={(v) => setTweak("intensity", v)} />
        <TweakSection label="Wireframe" />
        <TweakToggle label="Dynamic-zone markers" value={t.markers}
          onChange={(v) => setTweak("markers", v)} />
        <TweakSelect label="Hero headline" value={t.headline}
          options={HEADLINES.map((h, i) => ({ label: h.label, value: i }))}
          onChange={(v) => setTweak("headline", Number(v))} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(() => window.lucide && window.lucide.createIcons(), 200);
