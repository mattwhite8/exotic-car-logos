import React, { useState } from "react";
import {
  Ferrari, FerrariMeta,
  Lamborghini, LamborghiniMeta,
  Maserati, MaseratiMeta,
  AlfaRomeo, AlfaRomeoMeta,
  Pagani, PaganiMeta,
  DeTomaso, DeTomasoMeta,
  Pininfarina, PininfarinaMeta,
  Abarth, AbarthMeta,
  Porsche, PorscheMeta,
  BMW, BMWMeta,
  MercedesAMG, MercedesAMGMeta,
  Brabus, BrabusMeta,
  Audi, AudiMeta,
  Maybach, MaybachMeta,
  Gumpert, GumpertMeta,
  McLaren, McLarenMeta,
  Bentley, BentleyMeta,
  RollsRoyce, RollsRoyceMeta,
  AstonMartin, AstonMartinMeta,
  Lotus, LotusMeta,
  Jaguar, JaguarMeta,
  TVR, TVRMeta,
  Radical, RadicalMeta,
  Arash, ArashMeta,
  Bugatti, BugattiMeta,
  Alpine, AlpineMeta,
  Shelby, ShelbyMeta,
  Dodge, DodgeMeta,
  Chevrolet, ChevroletMeta,
  Ford, FordMeta,
  Saleen, SaleenMeta,
  Hennessey, HennesseyMeta,
  SSC, SSCMeta,
  Mosler, MoslerMeta,
  Koenigsegg, KoenigseggMeta,
  Polestar, PolestarMeta,
  Rimac, RimacMeta,
  Zenvo, ZenvoMeta,
  Spyker, SpykerMeta,
  WMotors, WMotorsMeta,
} from "react-car-logo";
import type { CarLogoMeta, LogoSize } from "react-car-logo";

const ALL_BRANDS: { Component: React.FC<any>; meta: CarLogoMeta }[] = [
  { Component: Ferrari, meta: FerrariMeta },
  { Component: Lamborghini, meta: LamborghiniMeta },
  { Component: Maserati, meta: MaseratiMeta },
  { Component: AlfaRomeo, meta: AlfaRomeoMeta },
  { Component: Pagani, meta: PaganiMeta },
  { Component: DeTomaso, meta: DeTomasoMeta },
  { Component: Pininfarina, meta: PininfarinaMeta },
  { Component: Abarth, meta: AbarthMeta },
  { Component: Porsche, meta: PorscheMeta },
  { Component: BMW, meta: BMWMeta },
  { Component: MercedesAMG, meta: MercedesAMGMeta },
  { Component: Brabus, meta: BrabusMeta },
  { Component: Audi, meta: AudiMeta },
  { Component: Maybach, meta: MaybachMeta },
  { Component: Gumpert, meta: GumpertMeta },
  { Component: McLaren, meta: McLarenMeta },
  { Component: Bentley, meta: BentleyMeta },
  { Component: RollsRoyce, meta: RollsRoyceMeta },
  { Component: AstonMartin, meta: AstonMartinMeta },
  { Component: Lotus, meta: LotusMeta },
  { Component: Jaguar, meta: JaguarMeta },
  { Component: TVR, meta: TVRMeta },
  { Component: Radical, meta: RadicalMeta },
  { Component: Arash, meta: ArashMeta },
  { Component: Bugatti, meta: BugattiMeta },
  { Component: Alpine, meta: AlpineMeta },
  { Component: Shelby, meta: ShelbyMeta },
  { Component: Dodge, meta: DodgeMeta },
  { Component: Chevrolet, meta: ChevroletMeta },
  { Component: Ford, meta: FordMeta },
  { Component: Saleen, meta: SaleenMeta },
  { Component: Hennessey, meta: HennesseyMeta },
  { Component: SSC, meta: SSCMeta },
  { Component: Mosler, meta: MoslerMeta },
  { Component: Koenigsegg, meta: KoenigseggMeta },
  { Component: Polestar, meta: PolestarMeta },
  { Component: Rimac, meta: RimacMeta },
  { Component: Zenvo, meta: ZenvoMeta },
  { Component: Spyker, meta: SpykerMeta },
  { Component: WMotors, meta: WMotorsMeta },
];

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
          {ALL_BRANDS.length} exotic & luxury car brand logos -- React components with size presets, metadata, and tree-shaking
        </p>
      </header>

      {/* Size Presets Demo */}
      <section style={{ padding: "32px 32px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#ccc", marginBottom: 16 }}>Size Presets</h2>
        <div style={{ display: "flex", gap: 40, alignItems: "flex-end", background: "#111", borderRadius: 12, padding: 32, border: "1px solid #222" }}>
          {(["sm", "md", "lg"] as LogoSize[]).map((s) => (
            <div key={s} style={{ textAlign: "center" }}>
              <Ferrari size={s} />
              <div style={{ marginTop: 8, fontSize: 13, color: "#888" }}>
                size="{s}" ({s === "sm" ? "80px" : s === "md" ? "160px" : "320px"})
              </div>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <Ferrari width={120} />
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
{`import { Ferrari, McLaren, FerrariMeta } from 'react-car-logo';

<Ferrari size="md" />           // 160px (default)
<Ferrari size="sm" />           // 80px
<Ferrari size="lg" />           // 320px
<Ferrari width={240} />         // custom override
<Ferrari alt="Ferrari Logo" />  // accessible alt

// Access metadata
console.log(FerrariMeta.country);  // "Italy"
console.log(FerrariMeta.hex);      // "CD212A"
console.log(FerrariMeta.founded);  // 1939`}
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
            {(["sm", "md", "lg"] as LogoSize[]).map((s) => (
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
          {filtered.map(({ Component, meta }) => (
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
              <Component size={size} />
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
