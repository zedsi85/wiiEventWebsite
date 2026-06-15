/* @ds-bundle: {"format":3,"namespace":"WiiEventDesignSystem_37bcec","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SearchBar","sourcePath":"components/core/SearchBar.jsx"},{"name":"CategoryCard","sourcePath":"components/marketplace/CategoryCard.jsx"},{"name":"EquipmentCard","sourcePath":"components/marketplace/EquipmentCard.jsx"},{"name":"RentalDurationSelector","sourcePath":"components/marketplace/RentalDurationSelector.jsx"},{"name":"ServiceCard","sourcePath":"components/marketplace/ServiceCard.jsx"},{"name":"ServiceOptionSelector","sourcePath":"components/marketplace/ServiceOptionSelector.jsx"},{"name":"SupplierCard","sourcePath":"components/marketplace/SupplierCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"811ed0a9e707","components/core/Button.jsx":"b2ad1f5e5e76","components/core/Input.jsx":"1b6b5d4596bc","components/core/SearchBar.jsx":"a9483cc8296b","components/marketplace/CategoryCard.jsx":"7cd195ba883a","components/marketplace/EquipmentCard.jsx":"44b4aa28f440","components/marketplace/RentalDurationSelector.jsx":"a5cae56aab51","components/marketplace/ServiceCard.jsx":"f5bed2ec3b74","components/marketplace/ServiceOptionSelector.jsx":"5b330257531f","components/marketplace/SupplierCard.jsx":"dca20adc8bf2","ui_kits/website/EquipmentDetail.jsx":"5b35111471e3","ui_kits/website/Footer.jsx":"486e9ffd32c9","ui_kits/website/Home.jsx":"c7f427c0c868","ui_kits/website/Marketplace.jsx":"e52703293ff5","ui_kits/website/Nav.jsx":"5393510af963","ui_kits/website/Services.jsx":"62cb6221602e","ui_kits/website/data.js":"afe941be62d9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WiiEventDesignSystem_37bcec = window.WiiEventDesignSystem_37bcec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — Badge / Tag
 * tone: neutral | voltage | pulse | gold | success | warning | danger | verified
 * style: solid | soft | outline. Optional dot indicator.
 */
function Badge({
  children,
  tone = 'neutral',
  appearance = 'soft',
  dot = false,
  icon = null,
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      solid: ['#26262E', '#fff'],
      soft: ['var(--neutral-150)', 'var(--neutral-700)'],
      dot: 'var(--neutral-500)'
    },
    voltage: {
      solid: ['var(--voltage-500)', '#fff'],
      soft: ['var(--voltage-050)', 'var(--voltage-700)'],
      dot: 'var(--voltage-500)'
    },
    pulse: {
      solid: ['var(--pulse-500)', '#fff'],
      soft: ['var(--pulse-050)', 'var(--pulse-600)'],
      dot: 'var(--pulse-500)'
    },
    gold: {
      solid: ['var(--champagne-500)', 'var(--ink-900)'],
      soft: ['var(--champagne-050)', 'var(--champagne-700)'],
      dot: 'var(--champagne-500)'
    },
    success: {
      solid: ['var(--success-500)', '#fff'],
      soft: ['var(--success-050)', '#1c7a52'],
      dot: 'var(--success-500)'
    },
    warning: {
      solid: ['var(--warning-500)', '#fff'],
      soft: ['var(--warning-050)', '#9a6a16'],
      dot: 'var(--warning-500)'
    },
    danger: {
      solid: ['var(--danger-500)', '#fff'],
      soft: ['var(--danger-050)', '#b3373b'],
      dot: 'var(--danger-500)'
    },
    verified: {
      solid: ['var(--voltage-500)', '#fff'],
      soft: ['var(--voltage-050)', 'var(--voltage-700)'],
      dot: 'var(--voltage-500)'
    }
  };
  const p = palette[tone] || palette.neutral;
  let bg,
    color,
    border = '1px solid transparent';
  if (appearance === 'solid') {
    [bg, color] = p.solid;
  } else if (appearance === 'outline') {
    bg = 'transparent';
    color = p.soft[1];
    border = `1px solid ${p.dot}`;
  } else {
    [bg, color] = p.soft;
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '26px',
      padding: '0 11px',
      background: bg,
      color,
      border,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 400,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: p.dot,
      flex: 'none'
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — Button
 * Variants: primary (ink), accent (voltage), secondary (outline), ghost, gold
 * Sizes: sm, md, lg. Optional leading/trailing icon (pass node).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h)',
    lg: 'var(--control-h-lg)'
  };
  const padX = {
    sm: '16px',
    md: '24px',
    lg: '32px'
  };
  const fontSize = {
    sm: '13px',
    md: '15px',
    lg: '16px'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    height: heights[size],
    padding: `0 ${padX[size]}`,
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: fontSize[size],
    letterSpacing: 'var(--ls-button)',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--neutral-100)'
    },
    accent: {
      background: 'var(--voltage-500)',
      color: '#fff',
      boxShadow: 'var(--glow-voltage)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)'
    },
    gold: {
      background: 'var(--grad-champagne)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--glow-champagne)'
    }
  };
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(var(--hover-lift))';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--action-primary-hover)';
    if (variant === 'accent') e.currentTarget.style.background = 'var(--voltage-600)';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'rgba(11,11,13,0.05)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.background = variants[variant].background || 'transparent';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(var(--hover-lift))';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: disabled,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — Input field with label, optional icon, hint/error.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderCol = error ? 'var(--danger-500)' : focus ? 'var(--voltage-500)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: 'var(--control-h)',
      padding: '0 16px',
      background: 'var(--surface-card)',
      border: `1.5px solid ${borderCol}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — SearchBar. Pill search with icon, input and action button.
 */
function SearchBar({
  placeholder = 'Search equipment, services, suppliers…',
  buttonLabel = 'Search',
  onSearch,
  size = 'md',
  style = {},
  ...rest
}) {
  const [val, setVal] = React.useState('');
  const h = size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSearch && onSearch(val);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: h,
      padding: '6px 6px 6px 18px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: val,
    onChange: e => setVal(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: 'calc(' + h + ' - 12px)',
      padding: '0 22px',
      flex: 'none',
      background: 'var(--ink-900)',
      color: 'var(--neutral-100)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '14px',
      cursor: 'pointer'
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — CategoryCard. Visual category tile (equipment or service)
 * with full-bleed image, ink fade, label and count. Dark by default.
 */
function CategoryCard({
  image,
  label,
  count,
  icon = null,
  height = 220,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      height,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: label,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-ink-fade)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: hover ? 1 : 0,
      background: 'var(--grad-stage-soft)',
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      marginBottom: 4,
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '20px',
      letterSpacing: '-0.01em',
      color: '#fff',
      textTransform: 'uppercase',
      lineHeight: 1.05
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, count, " listings")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 999,
      background: hover ? 'var(--voltage-500)' : 'rgba(255,255,255,0.16)',
      backdropFilter: 'blur(6px)',
      color: '#fff',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 18,
      height: 18
    }
  }))));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/EquipmentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — EquipmentCard. Rental listing card: image, title, supplier,
 * price/day, availability, rating. Hover lift.
 */
function EquipmentCard({
  image,
  title,
  category,
  supplier,
  price,
  unit = '/ day',
  availability = 'available',
  rating,
  location,
  verified = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const availMap = {
    available: {
      tone: 'success',
      label: 'Available'
    },
    limited: {
      tone: 'warning',
      label: 'Limited'
    },
    booked: {
      tone: 'danger',
      label: 'Booked'
    }
  };
  const av = availMap[availability] || availMap.available;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: av.tone,
    dot: true,
    appearance: "solid"
  }, av.label)), category && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    appearance: "solid",
    style: {
      background: 'rgba(11,11,13,0.72)',
      color: '#fff',
      backdropFilter: 'blur(6px)'
    }
  }, category))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '18px',
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), supplier && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "by ", supplier), verified && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "badge-check",
    style: {
      width: 14,
      height: 14,
      color: 'var(--voltage-500)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      fontSize: '12.5px',
      color: 'var(--text-muted)'
    }
  }, location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 14,
      height: 14
    }
  }), location), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    style: {
      width: 14,
      height: 14,
      color: 'var(--champagne-500)',
      fill: 'var(--champagne-500)'
    }
  }), rating)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '22px',
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 999,
      background: hover ? 'var(--voltage-500)' : 'var(--neutral-100)',
      color: hover ? '#fff' : 'var(--ink-900)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 18,
      height: 18
    }
  })))));
}
Object.assign(__ds_scope, { EquipmentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/EquipmentCard.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/RentalDurationSelector.jsx
try { (() => {
/**
 * Wii Event — RentalDurationSelector. Preset chips + day stepper.
 */
function RentalDurationSelector({
  value = 3,
  onChange,
  presets = [1, 3, 7, 14],
  style = {}
}) {
  const [internal, setInternal] = React.useState(value);
  const days = value !== undefined && onChange ? value : internal;
  const set = d => {
    const v = Math.max(1, d);
    setInternal(v);
    onChange && onChange(v);
  };
  const Step = ({
    dir,
    icon
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => set(days + dir),
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, presets.map(p => {
    const on = days === p;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: () => set(p),
      style: {
        height: 36,
        padding: '0 16px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '13px',
        background: on ? 'var(--ink-900)' : 'var(--surface-card)',
        color: on ? 'var(--neutral-100)' : 'var(--text-body)',
        border: `1.5px solid ${on ? 'var(--ink-900)' : 'var(--border-subtle)'}`,
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, p === 1 ? '1 day' : p === 7 ? '1 week' : p === 14 ? '2 weeks' : `${p} days`);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Step, {
    dir: -1,
    icon: "minus"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      minWidth: 96,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '28px',
      color: 'var(--text-strong)'
    }
  }, days), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, days === 1 ? 'day' : 'days')), /*#__PURE__*/React.createElement(Step, {
    dir: 1,
    icon: "plus"
  })));
}
Object.assign(__ds_scope, { RentalDurationSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/RentalDurationSelector.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — ServiceCard. Event-service offering with icon, title,
 * blurb and link. Light by default; pass dark for ink sections.
 */
function ServiceCard({
  icon = 'sparkles',
  title,
  desc,
  meta,
  dark = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      height: '100%',
      padding: '24px',
      cursor: 'pointer',
      background: dark ? 'var(--ink-600)' : 'var(--surface-card)',
      border: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-xl)',
      boxShadow: !dark && hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 'var(--radius-md)',
      flex: 'none',
      background: hover ? 'var(--grad-stage)' : dark ? 'var(--ink-500)' : 'var(--neutral-100)',
      color: hover ? '#fff' : dark ? '#fff' : 'var(--ink-900)',
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      flex: 1
    }
  }, meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: dark ? 'var(--voltage-400)' : 'var(--voltage-600)'
    }
  }, meta), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '20px',
      letterSpacing: '-0.01em',
      color: dark ? '#fff' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14px',
      lineHeight: 1.55,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '13px',
      color: dark ? '#fff' : 'var(--ink-900)'
    }
  }, "Explore", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16,
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/ServiceOptionSelector.jsx
try { (() => {
/**
 * Wii Event — ServiceOptionSelector. The signature 3-way choice:
 * Rental only / Rental + installation / Full A-to-Z setup.
 */
function ServiceOptionSelector({
  value,
  onChange,
  options,
  style = {}
}) {
  const items = options || [{
    id: 'rental',
    label: 'Rental only',
    desc: 'Pick up or get it delivered',
    icon: 'package'
  }, {
    id: 'install',
    label: 'Rental + installation',
    desc: 'We deliver and set it up',
    icon: 'wrench'
  }, {
    id: 'full',
    label: 'Full A-to-Z setup',
    desc: 'Design, build, run, dismantle',
    icon: 'sparkles',
    tag: 'Popular'
  }];
  const [internal, setInternal] = React.useState(value || items[0].id);
  const active = value !== undefined ? value : internal;
  const pick = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '12px',
      ...style
    }
  }, items.map(opt => {
    const on = active === opt.id;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.id,
      onClick: () => pick(opt.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        textAlign: 'left',
        padding: '16px 18px',
        cursor: 'pointer',
        width: '100%',
        background: on ? 'var(--voltage-050)' : 'var(--surface-card)',
        border: `1.5px solid ${on ? 'var(--voltage-500)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: on ? 'var(--ring-selected)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--voltage-500)' : 'var(--neutral-100)',
        color: on ? '#fff' : 'var(--ink-900)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": opt.icon,
      style: {
        width: 20,
        height: 20
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '15px',
        color: 'var(--text-strong)'
      }
    }, opt.label), opt.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--champagne-700)',
        background: 'var(--champagne-050)',
        padding: '2px 7px',
        borderRadius: 999
      }
    }, opt.tag)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: 'var(--text-muted)'
      }
    }, opt.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 22,
        height: 22,
        borderRadius: 999,
        border: `2px solid ${on ? 'var(--voltage-500)' : 'var(--neutral-300)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: 999,
        background: 'var(--voltage-500)'
      }
    })));
  }));
}
Object.assign(__ds_scope, { ServiceOptionSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/ServiceOptionSelector.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/SupplierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wii Event — SupplierCard. Verified vendor profile: avatar, name,
 * specialty, rating, location, verification badge, CTA.
 */
function SupplierCard({
  logo,
  name,
  specialty,
  rating,
  reviews,
  location,
  verified = true,
  listings,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--neutral-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("i", {
    "data-lucide": "building-2",
    style: {
      width: 24,
      height: 24,
      color: 'var(--neutral-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '17px',
      color: 'var(--text-strong)'
    }
  }, name), verified && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "badge-check",
    style: {
      width: 17,
      height: 17,
      color: 'var(--voltage-500)'
    }
  })), specialty && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, specialty))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, rating != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    appearance: "soft",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "star",
      style: {
        width: 12,
        height: 12
      }
    })
  }, rating, reviews ? ` · ${reviews}` : ''), location && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    appearance: "soft",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "map-pin",
      style: {
        width: 12,
        height: 12
      }
    })
  }, location), listings != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "voltage",
    appearance: "soft"
  }, listings, " listings")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    full: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "View supplier"));
}
Object.assign(__ds_scope, { SupplierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/SupplierCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EquipmentDetail.jsx
try { (() => {
// Wii Event — Equipment Detail page
function WiiDetail({
  onNav
}) {
  const {
    Badge,
    Button,
    RentalDurationSelector,
    ServiceOptionSelector,
    SupplierCard
  } = window.WiiEventDesignSystem_37bcec;
  const wrap = {
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    padding: '0 var(--section-pad-x)'
  };
  const [days, setDays] = React.useState(3);
  const [option, setOption] = React.useState('install');
  const gallery = ['../../assets/event-corporate.png', '../../assets/event-festival-stage.png', '../../assets/event-festival-aerial.png'];
  const [main, setMain] = React.useState(gallery[0]);
  const perDay = 240;
  const optionFee = {
    rental: 0,
    install: 180,
    full: 650
  }[option];
  const total = perDay * days + optionFee;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 28,
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('marketplace'),
    style: {
      cursor: 'pointer'
    }
  }, "Marketplace"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 14,
      height: 14
    }
  }), /*#__PURE__*/React.createElement("span", null, "LED Screens"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 14,
      height: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 600
    }
  }, "LED Video Wall 4\xD73m")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: main,
    alt: "",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true,
    appearance: "solid"
  }, "Available"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 12
    }
  }, gallery.map(g => /*#__PURE__*/React.createElement("button", {
    key: g,
    onClick: () => setMain(g),
    style: {
      flex: 1,
      height: 88,
      padding: 0,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      border: `2px solid ${main === g ? 'var(--voltage-500)' : 'transparent'}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wii-h3",
    style: {
      margin: '0 0 16px'
    }
  }, "Specifications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [['Resolution', '3.9mm pixel pitch'], ['Size', '4m × 3m modular'], ['Brightness', '5000 nits'], ['Power', '3-phase, 6kW'], ['Setup time', '~2 hours'], ['Crew', '2 technicians']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      padding: 26,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "voltage",
    appearance: "soft"
  }, "LED Screens"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    appearance: "soft"
  }, "Premium")), /*#__PURE__*/React.createElement("h1", {
    className: "wii-h2",
    style: {
      margin: '0 0 8px'
    }
  }, "LED Video Wall 4\xD73m"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    style: {
      width: 15,
      height: 15,
      color: 'var(--champagne-500)',
      fill: 'var(--champagne-500)'
    }
  }), "4.9 \xB7 212 reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 15,
      height: 15
    }
  }), "Tunis"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Rental duration"), /*#__PURE__*/React.createElement(RentalDurationSelector, {
    value: days,
    onChange: setDays
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Service option"), /*#__PURE__*/React.createElement(ServiceOptionSelector, {
    value: option,
    onChange: setOption
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingTop: 18,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Estimated total"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 32,
      color: 'var(--text-strong)'
    }
  }, "$", total.toLocaleString()))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    full: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Request a Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "calendar",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Check availability"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-20)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wii-h3",
    style: {
      margin: '0 0 16px'
    }
  }, "Supplied by"), /*#__PURE__*/React.createElement(SupplierCard, {
    name: "Lumen Stage Co.",
    specialty: "Lighting & LED",
    verified: true,
    rating: 4.9,
    reviews: 212,
    location: "Tunis",
    listings: 48
  }))));
}
window.WiiDetail = WiiDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EquipmentDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Wii Event — Site footer
// Inline brand glyphs (Lucide dropped brand/social icons from core).
const WII_SOCIAL = {
  instagram: 'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.95c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07Zm0 3.32a4.53 4.53 0 1 1 0 9.06 4.53 4.53 0 0 1 0-9.06Zm0 1.95a2.58 2.58 0 1 0 0 5.16 2.58 2.58 0 0 0 0-5.16Zm4.74-3.4a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12Z',
  linkedin: 'M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.4h3.3V21H3.3V8.4Zm5.5 0h3.16v1.72h.05c.44-.83 1.52-1.71 3.12-1.71 3.34 0 3.96 2.2 3.96 5.06V21h-3.3v-5.66c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H8.8V8.4Z',
  facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z',
  youtube: 'M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15V9l5.2 3-5.2 3Z'
};
function SocialIcon({
  name
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "17",
    height: "17",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: WII_SOCIAL[name]
  }));
}
function WiiFooter({
  onNav
}) {
  const cols = [{
    h: 'Marketplace',
    items: ['Lighting', 'LED Screens', 'Stages', 'Sound', 'Tents & Structures']
  }, {
    h: 'Services',
    items: ['Private Events', 'Corporate Events', 'Festival Management', 'Weddings', 'Brand Activations']
  }, {
    h: 'Company',
    items: ['About', 'Suppliers', 'Contact', 'Careers', 'Press']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "wii-dark",
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-on-dark)',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--section-pad-x) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wii-logo-white.png",
    alt: "Wii Event",
    style: {
      height: 30,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "From equipment rental to full event production \u2014 the tools, people, and technology to bring your event vision to life."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--voltage-400)'
    }
  }, "\u2014 The Event Specialists")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)'
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      cursor: 'pointer'
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.4)'
    }
  }, "\xA9 2026 Wii Event. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['instagram', 'linkedin', 'facebook', 'youtube'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    "aria-label": s,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.06)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: s
  })))))));
}
window.WiiFooter = WiiFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Wii Event — Homepage
function WiiHome({
  onNav
}) {
  const {
    Button,
    Badge,
    CategoryCard,
    ServiceCard,
    EquipmentCard,
    ServiceOptionSelector
  } = window.WiiEventDesignSystem_37bcec;
  const D = window.WII_DATA;
  const Eyebrow = ({
    children,
    light
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: light ? 'var(--voltage-400)' : 'var(--voltage-600)'
    }
  }, children);
  const wrap = {
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    padding: '0 var(--section-pad-x)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      position: 'relative',
      background: 'var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/event-festival-aerial.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(11,11,13,0.55) 0%, rgba(11,11,13,0.75) 60%, var(--ink-900) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-spotlight)',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      paddingTop: 120,
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "The Event Specialists \xB7 Rental \u2192 Full Production"), /*#__PURE__*/React.createElement("h1", {
    className: "wii-display",
    style: {
      margin: '22px 0 0',
      color: '#fff'
    }
  }, "Plan your", /*#__PURE__*/React.createElement("br", null), "event,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'transparent',
      background: 'var(--grad-stage)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text'
    }
  }, "end to end.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      maxWidth: 560,
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-on-dark)'
    }
  }, "Rent equipment, add delivery and installation, or hand over the whole production. One platform for private events, corporate launches, and festivals."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    }),
    onClick: () => onNav('detail')
  }, "Plan Your Event"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('marketplace'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "layout-grid",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Explore Equipment")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      marginTop: 48
    }
  }, [['2,400+', 'Equipment listings'], ['180+', 'Verified suppliers'], ['1,200+', 'Events produced']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 30,
      color: '#fff'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, l))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Equipment Marketplace"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '12px 0 0'
    }
  }, "Browse by category")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('marketplace'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "All categories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, D.categories.map(c => /*#__PURE__*/React.createElement(CategoryCard, {
    key: c.label,
    image: c.image,
    label: c.label,
    count: c.count,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": c.icon
    }),
    onClick: () => onNav('marketplace')
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '12px 0 18px',
      color: '#fff'
    }
  }, "Choose your level of setup"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 30px',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 440
    }
  }, "Take the gear and run it yourself, or let our team handle delivery, installation, and the full production from A to Z."), /*#__PURE__*/React.createElement(ServiceOptionSelector, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['package', 'Rental only', 'Pick up or get it delivered. You run the show.'], ['wrench', 'Rental + installation', 'We deliver, install, test, and pack down.'], ['sparkles', 'Full A-to-Z setup', 'Design, build, staff, and run the entire event.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16,
      padding: 20,
      background: 'var(--ink-600)',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--voltage-400)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18,
      color: 'var(--voltage-400)'
    }
  }), t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)'
    }
  }, d)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 44px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Event Services"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '12px 0 14px'
    }
  }, "Private, corporate & festival production"), /*#__PURE__*/React.createElement("p", {
    className: "wii-body",
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "One team for design, lighting, stages, decoration, and hospitality \u2014 at any scale.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    icon: s.icon,
    meta: s.meta,
    title: s.title,
    desc: s.desc,
    onClick: () => onNav('services')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Featured"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '12px 0 0'
    }
  }, "Popular this season")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('marketplace')
  }, "View marketplace")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, D.equipment.slice(0, 3).map(e => /*#__PURE__*/React.createElement(EquipmentCard, _extends({
    key: e.title
  }, e, {
    onClick: () => onNav('detail')
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      background: 'var(--ink-900)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-stage-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    appearance: "solid",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sparkles",
      style: {
        width: 12,
        height: 12
      }
    })
  }, "New \xB7 Premium feature"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '18px 0 16px',
      color: '#fff'
    }
  }, "Preview equipment in your real space"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 26px',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 460
    }
  }, "Upload a photo or video of your venue, drop in stages, lighting, and d\xE9cor, and see the full setup in 3D before you book. Compare before and after, then send it straight to a quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 30
    }
  }, ['Upload your space photo or video', 'Place selected equipment in 3D / AR', 'Compare before & after, then request a quote'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 18,
      height: 18,
      color: 'var(--voltage-400)'
    }
  }), t))), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "scan-line",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "Try the 3D preview")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-on-dark)',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/event-private.png",
    alt: "3D space preview",
    style: {
      width: '100%',
      height: 380,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(11,11,13,0) 40%, rgba(11,11,13,0.6))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    appearance: "solid",
    style: {
      background: 'rgba(11,11,13,0.7)',
      color: '#fff',
      backdropFilter: 'blur(6px)'
    }
  }, "Before"), /*#__PURE__*/React.createElement(Badge, {
    tone: "voltage",
    appearance: "solid"
  }, "After")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 12,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(11,11,13,0.6)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "move-3d",
    style: {
      width: 18,
      height: 18,
      color: 'var(--voltage-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#fff'
    }
  }, "Drag to place \xB7 12 items in this layout")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 40,
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(28px, 4vw, 56px)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "For suppliers"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '12px 0 14px'
    }
  }, "List your equipment. Reach more events."), /*#__PURE__*/React.createElement("p", {
    className: "wii-body",
    style: {
      margin: '0 0 26px',
      color: 'var(--text-muted)',
      maxWidth: 460
    }
  }, "Join a verified network of event suppliers and get booked for private, corporate, and festival productions across the region."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Become a Supplier")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['badge-check', 'Verified supplier badge'], ['calendar-check', 'Manage availability & bookings'], ['trending-up', 'Grow with featured listings']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--voltage-050)',
      color: 'var(--voltage-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 20,
      height: 20
    }
  })), t)))))), /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      background: 'var(--ink-900)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-spotlight)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      paddingTop: 100,
      paddingBottom: 100,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Ready when you are"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-display",
    style: {
      margin: '18px auto 0',
      color: '#fff',
      maxWidth: 900,
      fontSize: 'clamp(2.6rem, 5vw, 4.4rem)'
    }
  }, "Let's build your", /*#__PURE__*/React.createElement("br", null), "next event."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px auto 0',
      maxWidth: 520,
      fontSize: 18,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Choose your setup, preview your space, and let the right team handle the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    }),
    onClick: () => onNav('detail')
  }, "Request a Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "Talk to our team")))));
}
window.WiiHome = WiiHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Marketplace.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Wii Event — Equipment Marketplace
function WiiMarketplace({
  onNav
}) {
  const {
    SearchBar,
    Badge,
    Button,
    EquipmentCard
  } = window.WiiEventDesignSystem_37bcec;
  const D = window.WII_DATA;
  const cats = ['All', 'Lighting', 'LED Screens', 'Stages', 'Sound', 'Furniture', 'Tents'];
  const [active, setActive] = React.useState('All');
  const wrap = {
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    padding: '0 var(--section-pad-x)'
  };
  const filtered = active === 'All' ? D.equipment : D.equipment.filter(e => e.category === active);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--bg-page)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 56,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--voltage-400)'
    }
  }, "Marketplace"), /*#__PURE__*/React.createElement("h1", {
    className: "wii-h1",
    style: {
      margin: '12px 0 22px',
      color: '#fff'
    }
  }, "Rent the gear. Add a crew."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    size: "lg"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 32,
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, cats.map(c => {
    const on = active === c;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setActive(c),
      style: {
        height: 38,
        padding: '0 16px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 13,
        background: on ? 'var(--ink-900)' : 'var(--surface-card)',
        color: on ? 'var(--neutral-100)' : 'var(--text-body)',
        border: `1.5px solid ${on ? 'var(--ink-900)' : 'var(--border-subtle)'}`,
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, c);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, filtered.length, " results"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 38,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sliders-horizontal",
    style: {
      width: 15,
      height: 15
    }
  }), "Filters"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, filtered.map(e => /*#__PURE__*/React.createElement(EquipmentCard, _extends({
    key: e.title
  }, e, {
    onClick: () => onNav('detail')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "badge-check",
    style: {
      width: 20,
      height: 20,
      color: 'var(--voltage-500)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h3",
    style: {
      margin: 0
    }
  }, "Verified suppliers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, D.suppliers.map(s => /*#__PURE__*/React.createElement(window.WiiEventDesignSystem_37bcec.SupplierCard, _extends({
    key: s.name
  }, s, {
    verified: true
  })))))));
}
window.WiiMarketplace = WiiMarketplace;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Marketplace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Wii Event — Site navigation bar
function WiiNav({
  current,
  onNav
}) {
  const {
    Button,
    SearchBar
  } = window.WiiEventDesignSystem_37bcec;
  const [scrolled, setScrolled] = React.useState(false);
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'marketplace',
    label: 'Marketplace'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'detail',
    label: 'How it works'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(11,11,13,0.72)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--section-pad-x)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wii-logo-white.png",
    alt: "Wii Event",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: current === l.id ? '#fff' : 'rgba(255,255,255,0.62)',
      background: current === l.id ? 'rgba(255,255,255,0.08)' : 'transparent',
      transition: 'color var(--dur-base), background var(--dur-base)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('marketplace'),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 999,
      color: '#fff',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 19,
      height: 19
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Plan Your Event")));
}
window.WiiNav = WiiNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Wii Event — Event Services page
function WiiServices({
  onNav
}) {
  const {
    Badge,
    Button,
    ServiceCard
  } = window.WiiEventDesignSystem_37bcec;
  const D = window.WII_DATA;
  const wrap = {
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    padding: '0 var(--section-pad-x)'
  };
  const eventTypes = [{
    icon: 'heart',
    t: 'Weddings'
  }, {
    icon: 'cake',
    t: 'Birthdays'
  }, {
    icon: 'party-popper',
    t: 'Themed Parties'
  }, {
    icon: 'gem',
    t: 'Engagements'
  }, {
    icon: 'rocket',
    t: 'Product Launches'
  }, {
    icon: 'megaphone',
    t: 'Brand Activations'
  }, {
    icon: 'tent',
    t: 'Tents & Structures'
  }, {
    icon: 'concierge-bell',
    t: 'Hospitality'
  }];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      position: 'relative',
      background: 'var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/event-corporate.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(11,11,13,0.6), var(--ink-900))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      paddingTop: 84,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--voltage-400)'
    }
  }, "Event Services"), /*#__PURE__*/React.createElement("h1", {
    className: "wii-display",
    style: {
      margin: '18px 0 0',
      color: '#fff',
      fontSize: 'clamp(2.6rem,5vw,4.4rem)'
    }
  }, "From vision to", /*#__PURE__*/React.createElement("br", null), "collective emotion."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 30px',
      maxWidth: 520,
      fontSize: 18,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Private events, corporate launches, festivals, and branded experiences \u2014 designed, built, and run by one team."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    }),
    onClick: () => onNav('detail')
  }, "Request a Quote"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '0 0 6px'
    }
  }, "What we produce"), /*#__PURE__*/React.createElement("p", {
    className: "wii-body",
    style: {
      margin: '0 0 40px',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "Six core disciplines, combined into a single production."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    onClick: () => onNav('detail')
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--voltage-600)'
    }
  }, "Every occasion"), /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '12px 0 0'
    }
  }, "Built for any kind of event")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, eventTypes.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 22,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--neutral-100)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": e.icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, e.t)))))), /*#__PURE__*/React.createElement("section", {
    className: "wii-dark",
    style: {
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 80,
      paddingBottom: 80,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wii-h2",
    style: {
      margin: '0 0 22px',
      color: '#fff'
    }
  }, "Tell us about your event"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    }),
    onClick: () => onNav('detail')
  }, "Start your quote"))));
}
window.WiiServices = WiiServices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Wii Event — sample marketplace data for the UI kit
window.WII_DATA = {
  categories: [{
    label: 'Lighting',
    count: 128,
    icon: 'lightbulb',
    image: '../../assets/event-festival-stage.png'
  }, {
    label: 'LED Screens',
    count: 64,
    icon: 'monitor-play',
    image: '../../assets/event-corporate.png'
  }, {
    label: 'Stages',
    count: 42,
    icon: 'drama',
    image: '../../assets/event-festival-aerial.png'
  }, {
    label: 'Decoration',
    count: 86,
    icon: 'flower-2',
    image: '../../assets/event-private.png'
  }, {
    label: 'Sound',
    count: 73,
    icon: 'speaker',
    image: '../../assets/event-festival-stage.png'
  }, {
    label: 'Tents & Structures',
    count: 39,
    icon: 'tent',
    image: '../../assets/event-festival-aerial.png'
  }],
  services: [{
    icon: 'sparkles',
    meta: 'Private',
    title: 'Private Events',
    desc: 'Weddings, birthdays, themed parties and engagements, designed down to the last detail.'
  }, {
    icon: 'briefcase',
    meta: 'Business',
    title: 'Corporate Events',
    desc: 'Seminars, product launches, press conferences and grand openings that drive your brand.'
  }, {
    icon: 'music',
    meta: 'Live',
    title: 'Festival Management',
    desc: 'Large-scale festivals where stage, light and crowd energy come together.'
  }, {
    icon: 'drama',
    meta: 'Production',
    title: 'Stage Design',
    desc: 'Custom stages engineered and built for any scale, indoor or outdoor.'
  }, {
    icon: 'lightbulb',
    meta: 'Atmosphere',
    title: 'Lighting Design',
    desc: 'Scenography and lighting systems that shape the mood of the room.'
  }, {
    icon: 'megaphone',
    meta: 'Marketing',
    title: 'Brand Activations',
    desc: 'Immersive branded environments and product launches that perform.'
  }],
  equipment: [{
    title: 'LED Video Wall 4×3m',
    category: 'LED Screens',
    supplier: 'Lumen Stage Co.',
    verified: true,
    price: '$240',
    availability: 'available',
    rating: 4.9,
    location: 'Tunis',
    image: '../../assets/event-corporate.png'
  }, {
    title: 'Moving Head Light Kit',
    category: 'Lighting',
    supplier: 'Halo Productions',
    verified: true,
    price: '$120',
    availability: 'available',
    rating: 4.8,
    location: 'Tunis',
    image: '../../assets/event-festival-stage.png'
  }, {
    title: 'Modular Stage Deck 6×4',
    category: 'Stages',
    supplier: 'BuildUp Events',
    verified: false,
    price: '$380',
    availability: 'limited',
    rating: 4.7,
    location: 'Sousse',
    image: '../../assets/event-festival-aerial.png'
  }, {
    title: 'Luxury Lounge Set',
    category: 'Furniture',
    supplier: 'Maison Décor',
    verified: true,
    price: '$95',
    availability: 'available',
    rating: 5.0,
    location: 'Tunis',
    image: '../../assets/event-private.png'
  }, {
    title: 'Line Array PA System',
    category: 'Sound',
    supplier: 'SonicPro',
    verified: true,
    price: '$310',
    availability: 'booked',
    rating: 4.9,
    location: 'Tunis',
    image: '../../assets/event-festival-stage.png'
  }, {
    title: 'Stretch Tent 10×15m',
    category: 'Tents',
    supplier: 'BuildUp Events',
    verified: false,
    price: '$450',
    availability: 'available',
    rating: 4.6,
    location: 'Hammamet',
    image: '../../assets/event-festival-aerial.png'
  }],
  suppliers: [{
    name: 'Lumen Stage Co.',
    specialty: 'Lighting & LED',
    rating: 4.9,
    reviews: 212,
    location: 'Tunis',
    listings: 48
  }, {
    name: 'Maison Décor',
    specialty: 'Decoration & Scenography',
    rating: 5.0,
    reviews: 134,
    location: 'Tunis',
    listings: 31
  }, {
    name: 'SonicPro',
    specialty: 'Sound & Staging',
    rating: 4.8,
    reviews: 98,
    location: 'Sousse',
    listings: 22
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.EquipmentCard = __ds_scope.EquipmentCard;

__ds_ns.RentalDurationSelector = __ds_scope.RentalDurationSelector;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ServiceOptionSelector = __ds_scope.ServiceOptionSelector;

__ds_ns.SupplierCard = __ds_scope.SupplierCard;

})();
