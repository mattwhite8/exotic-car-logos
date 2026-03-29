import React, { useState } from "react";
import { ReactCarLogo, brands } from "react-car-logo";
import type { CarLogoMeta, LogoSize, BrandName } from "react-car-logo";

const ALL_BRANDS = Object.entries(brands).map(([slug, meta]) => ({
  name: slug as BrandName,
  meta,
}));

const REGIONS = ["All", "Italian", "German", "British", "French", "American", "Swedish", "Other"];

export default function App() {
  const [size, setSize] = useState<LogoSize>("md");
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<CarLogoMeta | null>(null);

  const filtered = ALL_BRANDS.filter(({ meta }) => {
    if (region !== "All" && meta.region !== region) return false;
    if (search && !meta.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: "#0a0a0a", color: "#e5e5e5", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #222", padding: "24px 32px" }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: "#fff" }}>
          react-car-logo
        </h1>
        <p style={{ margin: "6px 0 0", color: "#888", fontSize: 14 }}>
          {ALL_BRANDS.length} exotic & luxury car brand logos -- one React component, pass the make as a slug
        </p>
      </header>

      {/* Size Presets Demo */}
      <section style={{ padding: "32px 32px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#ccc", marginBottom: 16 }}>Size Presets</h2>
        <div style={{ display: "flex", gap: 40, alignItems: "flex-end", background: "#111", borderRadius: 12, padding: 32, border: "1px solid #222" }}>
          {(["icon", "sm", "md", "lg"] as LogoSize[]).map((s) => (
            <div key={s} style={{ textAlign: "center" }}>
              <ReactCarLogo name="ferrari" size={s} />
              <div style={{ marginTop: 8, fontSize: 13, color: "#888" }}>
                size="{s}" ({s === "icon" ? "32px" : s === "sm" ? "80px" : s === "md" ? "160px" : "320px"})
              </div>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <ReactCarLogo name="ferrari" width={120} />
            <div style={{ marginTop: 8, fontSize: 13, color: "#888" }}>
              width={"{120}"} (custom)
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section style={{ padding: "32px 32px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#ccc", marginBottom: 16 }}>Usage</h2>
        <pre style={{ background: "#111", borderRadius: 12, padding: 24, border: "1px solid #222", fontSize: 13, lineHeight: 1.7, overflowX: "auto", color: "#c8d6e5" }}>
{`import { ReactCarLogo, brands } from 'react-car-logo';

<ReactCarLogo name="ferrari" />             // 160px (default)
<ReactCarLogo name="ferrari" size="icon" />  // 32px
<ReactCarLogo name="ferrari" size="sm" />    // 80px
<ReactCarLogo name="ferrari" size="lg" />    // 320px
<ReactCarLogo name="ferrari" width={240} />  // custom override
<ReactCarLogo name="ferrari" alt="Logo" />   // accessible alt

// Access metadata
console.log(brands.ferrari.country);  // "Italy"
console.log(brands.ferrari.hex);      // "CD212A"
console.log(brands.ferrari.founded);  // 1939`}
        </pre>
      </section>

      {/* Controls */}
      <section style={{ padding: "32px 32px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#ccc", marginBottom: 16 }}>
          All {ALL_BRANDS.length} Brands
        </h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 20 }}>
          {/* Search */}
          <input
            type="text"
            placeholder="Search brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: "#111", border: "1px solid #333", borderRadius: 8,
              padding: "8px 14px", color: "#e5e5e5", fontSize: 14, width: 200, outline: "none",
            }}
          />

          {/* Region filter */}
          <div style={{ display: "flex", gap: 4 }}>
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                style={{
                  background: region === r ? "#fff" : "#1a1a1a",
                  color: region === r ? "#000" : "#888",
                  border: "1px solid",
                  borderColor: region === r ? "#fff" : "#333",
                  borderRadius: 6, padding: "6px 12px", cursor: "pointer",
                  fontSize: 13, fontWeight: region === r ? 600 : 400,
                  transition: "all 0.15s",
                }}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Size toggle */}
          <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
            {(["icon", "sm", "md", "lg"] as LogoSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                style={{
                  background: size === s ? "#fff" : "#1a1a1a",
                  color: size === s ? "#000" : "#888",
                  border: "1px solid",
                  borderColor: size === s ? "#fff" : "#333",
                  borderRadius: 6, padding: "6px 12px", cursor: "pointer",
                  fontSize: 13, fontWeight: size === s ? 600 : 400,
                  transition: "all 0.15s",
                }}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p style={{ fontSize: 13, color: "#666", margin: "0 0 16px" }}>
          Showing {filtered.length} of {ALL_BRANDS.length} brands
        </p>

        {/* Logo Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${size === "lg" ? 340 : size === "md" ? 200 : 140}px, 1fr))`,
          gap: 16,
          paddingBottom: 40,
        }}>
          {filtered.map(({ name, meta }) => (
            <div
              key={meta.slug}
              onClick={() => setSelected(selected?.slug === meta.slug ? null : meta)}
              style={{
                background: selected?.slug === meta.slug ? "#1a1a2e" : "#111",
                border: "1px solid",
                borderColor: selected?.slug === meta.slug ? `#${meta.hex}44` : "#222",
                borderRadius: 12,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <ReactCarLogo name={name} size={size} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#ddd" }}>{meta.title}</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
                  {meta.country} &middot; {meta.founded}
                </div>
              </div>
              {selected?.slug === meta.slug && (
                <div style={{
                  width: "100%", borderTop: "1px solid #222", paddingTop: 12, marginTop: 4,
                  fontSize: 12, color: "#888", lineHeight: 1.8,
                }}>
                  <div><strong style={{ color: "#aaa" }}>Slug:</strong> {meta.slug}</div>
                  <div><strong style={{ color: "#aaa" }}>Region:</strong> {meta.region}</div>
                  <div>
                    <strong style={{ color: "#aaa" }}>Color:</strong>{" "}
                    <span style={{
                      display: "inline-block", width: 10, height: 10, borderRadius: 2,
                      background: `#${meta.hex}`, verticalAlign: "middle", marginRight: 4,
                    }} />
                    #{meta.hex}
                  </div>
                  <div style={{ wordBreak: "break-all" }}>
                    <strong style={{ color: "#aaa" }}>PNG:</strong>{" "}
                    <a href={meta.pngUrl} target="_blank" rel="noopener" style={{ color: "#4a9eff" }}>
                      {meta.pngUrl.split("/").pop()}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
