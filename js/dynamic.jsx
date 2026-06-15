/* ============================================================
   Wii Event Wireframe — shared dynamic / artifact components
   Exposes helpers on window for the section scripts.
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* Lucide icon helper — re-renders icons after mount */
function Icon({ name, size = 20, style = {}, cls = "" }) {
  return <i data-lucide={name} className={cls} style={{ width: size, height: size, ...style }}></i>;
}

/* Refresh lucide icons whenever DOM changes (cheap + safe) */
function useLucide(dep) {
  useEffect(() => { window.lucide && window.lucide.createIcons(); });
}

/* IntersectionObserver float-in */
function Reveal({ children, as = "div", delay = 0, className = "", style = {}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`wf-reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

/* Animated background layer — the CSS art engine */
function ArtBg({ variant = "mesh", image, beams = 3, shapes, className = "", style = {} }) {
  if (variant === "footage") {
    return (
      <div className={`wf-art wf-art--footage ${className}`} style={style}>
        {image && <img src={image} alt="" />}
      </div>
    );
  }
  if (variant === "beams") {
    const cols = ["rgba(124,138,255,0.55)", "rgba(255,102,182,0.5)", "rgba(217,178,106,0.45)", "rgba(124,138,255,0.4)"];
    return (
      <div className={`wf-art wf-art--beams ${className}`} style={style}>
        {Array.from({ length: beams }).map((_, i) => (
          <span key={i} className="beam" style={{
            "--x": `${12 + i * (76 / Math.max(1, beams - 1))}%`,
            "--beam-c": cols[i % cols.length],
            animationDelay: `${i * -2.2}s`,
          }} />
        ))}
      </div>
    );
  }
  if (variant === "shapes") {
    const def = shapes || [
      { l: "8%", t: "18%", w: 120, h: 120, r: "50%", fill: false, d: 0 },
      { l: "78%", t: "12%", w: 80, h: 80, r: "16px", fill: true, d: -3 },
      { l: "62%", t: "62%", w: 160, h: 160, r: "50%", fill: false, d: -6 },
      { l: "22%", t: "68%", w: 64, h: 64, r: "12px", fill: true, d: -1.5 },
      { l: "44%", t: "30%", w: 40, h: 40, r: "50%", fill: false, d: -4 },
    ];
    return (
      <div className={`wf-art wf-art--shapes ${className}`} style={style}>
        {def.map((s, i) => (
          <span key={i} className={`shape ${s.fill ? "fill" : ""}`} style={{
            left: s.l, top: s.t, width: s.w, height: s.h, borderRadius: s.r, animationDelay: `${s.d}s`,
          }} />
        ))}
      </div>
    );
  }
  if (variant === "led") return <div className={`wf-art wf-art--led ${className}`} style={style} />;
  // default mesh
  return <div className={`wf-art wf-art--mesh ${className}`} style={style} />;
}

/* The signature placeholder: a marked, animated media zone */
function DynamicZone({
  label = "Dynamic artifact",
  meta = "Loop · replace with video",
  variant = "mesh",
  image,
  height,
  aspect,
  flat = false,
  play = true,
  beams = 3,
  shapes,
  className = "",
  style = {},
  children,
}) {
  const boxStyle = { ...style };
  if (height) boxStyle.height = height;
  if (aspect) boxStyle.aspectRatio = aspect;
  return (
    <div className={`wf-zone ${flat ? "wf-zone--flat" : ""} ${className}`} style={boxStyle}>
      <ArtBg variant={variant} image={image} beams={beams} shapes={shapes} />
      <div className="wf-grain" />
      <span className="wf-zone-tag">
        <span className="dot" />
        <span className="diamond">◆</span>
        {label}
      </span>
      {play && (
        <div className="wf-zone-play">
          <span className="ring">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="cap">Video placeholder</span>
        </div>
      )}
      {meta && (
        <span className="wf-zone-meta">
          <Icon name="repeat" size={11} /> {meta}
        </span>
      )}
      {children && <div style={{ position: "relative", zIndex: 4, height: "100%" }}>{children}</div>}
    </div>
  );
}

/* Wireframe section index eyebrow: "03 / EQUIPMENT" */
function SectionIndex({ n, label, style = {} }) {
  return (
    <span className="wf-index" style={style}>
      <span className="num">{n}</span>
      <span className="bar" />
      {label}
    </span>
  );
}

/* Diamond-separated service list — brand motif */
function Diamonds({ items, style = {} }) {
  return (
    <span className="wf-diamonds" style={style}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="d">◆</span>}
          <span>{it}</span>
        </React.Fragment>
      ))}
    </span>
  );
}

/* Cursor-follow spotlight inside a positioned parent */
function Spotlight({ className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const parent = el.parentElement; if (!parent) return;
    const move = (e) => {
      const r = parent.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    parent.addEventListener("mousemove", move);
    return () => parent.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className={`wf-spot ${className}`} />;
}

/* Small motion-note pill placed in section margins (annotation layer) */
function MotionNote({ children, style = {} }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em",
      textTransform: "uppercase", color: "var(--text-muted)",
      border: "1px dashed rgba(var(--wf-marker-rgb),0.4)", borderRadius: 999,
      padding: "5px 11px", ...style,
    }}>
      <Icon name="wand-sparkles" size={12} style={{ color: "var(--wf-accent)" }} />
      {children}
    </span>
  );
}

/* Hi-fi cinematic media: real image, video-swap-ready, graded overlays */
function CinematicMedia({
  image, alt = "", height, aspect, pos = "center",
  fade = "fade", tint = true, kb = false, hover = true,
  reel = false, reelLabel = "Live reel", radius,
  className = "", style = {}, children,
}) {
  const box = { ...style };
  if (height != null) box.height = height;
  if (aspect) box.aspectRatio = aspect;
  if (radius != null) box.borderRadius = radius;
  const fadeCls = fade === "strong" ? "cine-fade strong" : fade === "side" ? "cine-fade side" : fade === "none" ? "" : "cine-fade";
  return (
    <div className={`cine ${kb ? "kb" : ""} ${hover ? "hoverable" : ""} ${className}`} style={box}>
      <img className="cine-img" src={image} alt={alt} style={{ objectPosition: pos }} />
      {fadeCls && <span className={fadeCls} />}
      {tint && <span className="cine-tint" />}
      {reel && <span className="cine-reel"><span className="rec" /> {reelLabel}</span>}
      {children && <div className="cine-content">{children}</div>}
    </div>
  );
}

Object.assign(window, { Icon, useLucide, Reveal, ArtBg, DynamicZone, CinematicMedia, SectionIndex, Diamonds, Spotlight, MotionNote });
