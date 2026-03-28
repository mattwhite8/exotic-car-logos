import { writeFileSync } from "fs";
import { join } from "path";

interface Brand {
  component: string;
  title: string;
  slug: string;
  pngUrl: string;
  hex: string;
  region: string;
  country: string;
  founded: number;
}

const BRANDS: Brand[] = [
  // Italian — confirmed working
  { component: "Ferrari", title: "Ferrari", slug: "ferrari", pngUrl: "https://www.carlogos.org/logo/Ferrari-logo.png", hex: "CD212A", region: "Italian", country: "Italy", founded: 1939 },
  { component: "Lamborghini", title: "Lamborghini", slug: "lamborghini", pngUrl: "https://www.carlogos.org/logo/Lamborghini-logo.png", hex: "D4AF37", region: "Italian", country: "Italy", founded: 1963 },
  { component: "Maserati", title: "Maserati", slug: "maserati", pngUrl: "https://www.carlogos.org/logo/Maserati-logo.png", hex: "003087", region: "Italian", country: "Italy", founded: 1914 },
  { component: "AlfaRomeo", title: "Alfa Romeo", slug: "alfa-romeo", pngUrl: "https://www.carlogos.org/logo/Alfa-Romeo-logo.png", hex: "CC0000", region: "Italian", country: "Italy", founded: 1910 },
  { component: "Pagani", title: "Pagani", slug: "pagani", pngUrl: "https://www.carlogos.org/logo/Pagani-logo.png", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1992 },
  { component: "DeTomaso", title: "De Tomaso", slug: "de-tomaso", pngUrl: "https://www.carlogos.org/logo/De-Tomaso-logo.png", hex: "003087", region: "Italian", country: "Italy", founded: 1959 },
  { component: "Pininfarina", title: "Pininfarina", slug: "pininfarina", pngUrl: "https://www.carlogos.org/logo/Pininfarina-logo.png", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1930 },
  { component: "Abarth", title: "Abarth", slug: "abarth", pngUrl: "https://www.carlogos.org/logo/Abarth-logo.png", hex: "CC0000", region: "Italian", country: "Italy", founded: 1949 },
  // German — confirmed working
  { component: "Porsche", title: "Porsche", slug: "porsche", pngUrl: "https://www.carlogos.org/logo/Porsche-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1931 },
  { component: "BMW", title: "BMW", slug: "bmw", pngUrl: "https://www.carlogos.org/logo/BMW-logo.png", hex: "0066B2", region: "German", country: "Germany", founded: 1916 },
  { component: "MercedesAMG", title: "Mercedes-AMG", slug: "mercedes-amg", pngUrl: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1967 },
  { component: "Brabus", title: "Brabus", slug: "brabus", pngUrl: "https://www.carlogos.org/logo/Brabus-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1977 },
  { component: "Audi", title: "Audi", slug: "audi", pngUrl: "https://www.carlogos.org/logo/Audi-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { component: "Maybach", title: "Maybach", slug: "maybach", pngUrl: "https://www.carlogos.org/logo/Maybach-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { component: "Gumpert", title: "Gumpert", slug: "gumpert", pngUrl: "https://www.carlogos.org/logo/Gumpert-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 2004 },
  // British — confirmed working
  { component: "McLaren", title: "McLaren", slug: "mclaren", pngUrl: "https://www.carlogos.org/logo/McLaren-logo.png", hex: "FF8000", region: "British", country: "UK", founded: 1963 },
  { component: "Bentley", title: "Bentley", slug: "bentley", pngUrl: "https://www.carlogos.org/logo/Bentley-logo.png", hex: "1A5276", region: "British", country: "UK", founded: 1919 },
  { component: "RollsRoyce", title: "Rolls-Royce", slug: "rolls-royce", pngUrl: "https://www.carlogos.org/logo/Rolls-Royce-logo.png", hex: "1A1A1A", region: "British", country: "UK", founded: 1904 },
  { component: "AstonMartin", title: "Aston Martin", slug: "aston-martin", pngUrl: "https://www.carlogos.org/logo/Aston-Martin-logo.png", hex: "004225", region: "British", country: "UK", founded: 1913 },
  { component: "Lotus", title: "Lotus", slug: "lotus", pngUrl: "https://www.carlogos.org/logo/Lotus-logo.png", hex: "005C3E", region: "British", country: "UK", founded: 1948 },
  { component: "Jaguar", title: "Jaguar", slug: "jaguar", pngUrl: "https://www.carlogos.org/logo/Jaguar-logo.png", hex: "003F7C", region: "British", country: "UK", founded: 1935 },
  { component: "TVR", title: "TVR", slug: "tvr", pngUrl: "https://www.carlogos.org/logo/TVR-logo.png", hex: "8B0000", region: "British", country: "UK", founded: 1947 },
  { component: "Radical", title: "Radical", slug: "radical", pngUrl: "https://www.carlogos.org/logo/Radical-Sportscars-logo.png", hex: "CC0000", region: "British", country: "UK", founded: 1997 },
  { component: "Arash", title: "Arash", slug: "arash", pngUrl: "https://www.carlogos.org/logo/Arash-logo.png", hex: "1A1A1A", region: "British", country: "UK", founded: 1999 },
  // French — confirmed working
  { component: "Bugatti", title: "Bugatti", slug: "bugatti", pngUrl: "https://www.carlogos.org/logo/Bugatti-logo.png", hex: "1B1F8A", region: "French", country: "France", founded: 1909 },
  { component: "Alpine", title: "Alpine", slug: "alpine", pngUrl: "https://www.carlogos.org/logo/Alpine-logo.png", hex: "003087", region: "French", country: "France", founded: 1955 },
  // American — confirmed working
  { component: "Shelby", title: "Shelby", slug: "shelby", pngUrl: "https://www.carlogos.org/logo/Shelby-logo.png", hex: "8B0000", region: "American", country: "USA", founded: 1962 },
  { component: "Dodge", title: "Dodge", slug: "dodge", pngUrl: "https://www.carlogos.org/logo/Dodge-logo.png", hex: "CC0000", region: "American", country: "USA", founded: 1900 },
  { component: "Chevrolet", title: "Chevrolet", slug: "chevrolet", pngUrl: "https://www.carlogos.org/logo/Chevrolet-logo.png", hex: "CC0000", region: "American", country: "USA", founded: 1911 },
  { component: "Ford", title: "Ford", slug: "ford", pngUrl: "https://www.carlogos.org/logo/Ford-logo.png", hex: "003087", region: "American", country: "USA", founded: 1903 },
  { component: "Saleen", title: "Saleen", slug: "saleen", pngUrl: "https://www.carlogos.org/logo/Saleen-logo.png", hex: "1A1A1A", region: "American", country: "USA", founded: 1983 },
  { component: "Hennessey", title: "Hennessey", slug: "hennessey", pngUrl: "https://www.carlogos.org/logo/Hennessey-logo.png", hex: "1A1A1A", region: "American", country: "USA", founded: 1991 },
  { component: "SSC", title: "SSC", slug: "ssc", pngUrl: "https://www.carlogos.org/logo/SSC-logo.png", hex: "1A1A1A", region: "American", country: "USA", founded: 1998 },
  { component: "Mosler", title: "Mosler", slug: "mosler", pngUrl: "https://www.carlogos.org/logo/Mosler-logo.png", hex: "003087", region: "American", country: "USA", founded: 1985 },
  // Swedish — confirmed working
  { component: "Koenigsegg", title: "Koenigsegg", slug: "koenigsegg", pngUrl: "https://www.carlogos.org/logo/Koenigsegg-logo.png", hex: "FFCC00", region: "Swedish", country: "Sweden", founded: 1994 },
  { component: "Polestar", title: "Polestar", slug: "polestar", pngUrl: "https://www.carlogos.org/logo/Polestar-logo.png", hex: "1A1A1A", region: "Swedish", country: "Sweden", founded: 2017 },
  // Other — confirmed working
  { component: "Rimac", title: "Rimac", slug: "rimac", pngUrl: "https://www.carlogos.org/logo/Rimac-logo.png", hex: "0033A0", region: "Other", country: "Croatia", founded: 2009 },
  { component: "Zenvo", title: "Zenvo", slug: "zenvo", pngUrl: "https://www.carlogos.org/logo/Zenvo-logo.png", hex: "1A1A1A", region: "Other", country: "Denmark", founded: 2004 },
  { component: "Spyker", title: "Spyker", slug: "spyker", pngUrl: "https://www.carlogos.org/logo/Spyker-logo.png", hex: "003087", region: "Other", country: "Netherlands", founded: 1999 },
  { component: "WMotors", title: "W Motors", slug: "w-motors", pngUrl: "https://www.carlogos.org/logo/W-Motors-logo.png", hex: "1A1A1A", region: "Other", country: "UAE", founded: 2012 },
];

function generateComponent(brand: Brand): string {
  return `import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "${brand.title}",
  slug: "${brand.slug}",
  pngUrl: "${brand.pngUrl}",
  country: "${brand.country}",
  region: "${brand.region}",
  founded: ${brand.founded},
  hex: "${brand.hex}",
};

export const ${brand.component}: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "${brand.title}",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="${brand.pngUrl}"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default ${brand.component};
`;
}

function generateIndex(): string {
  const sorted = [...BRANDS].sort((a, b) => a.component.localeCompare(b.component));

  const exports = sorted
    .map((b) => `export { ${b.component}, meta as ${b.component}Meta } from "./logos/${b.component}";`)
    .join("\n");

  return `// Auto-generated barrel export — do not edit by hand
// Run: npm run generate

${exports}

// Type and constant exports
export type { CarLogoProps, CarLogoMeta, LogoSize } from "./types";
export { SIZE_MAP, CDN_WIDTH_MAP } from "./types";
`;
}

function generateAllLogos(): string {
  const sorted = [...BRANDS].sort((a, b) => a.component.localeCompare(b.component));

  const exports = sorted
    .map((b) => `export { ${b.component} } from "./logos/${b.component}";`)
    .join("\n");

  return `// Import this to get all logos in one object.
// WARNING: This disables tree-shaking. Use named imports where possible.

${exports}
`;
}

// Clean out old logos
const { readdirSync, unlinkSync } = require("fs");
const logosDir = join(__dirname, "..", "src", "logos");
for (const file of readdirSync(logosDir)) {
  if (file.endsWith(".tsx")) {
    unlinkSync(join(logosDir, file));
  }
}

// Generate all logo components
for (const brand of BRANDS) {
  const content = generateComponent(brand);
  const filePath = join(logosDir, `${brand.component}.tsx`);
  writeFileSync(filePath, content, "utf-8");
  console.log(`Generated: src/logos/${brand.component}.tsx`);
}

// Generate index.ts
const indexContent = generateIndex();
writeFileSync(join(__dirname, "..", "src", "index.ts"), indexContent, "utf-8");
console.log("Generated: src/index.ts");

// Generate allLogos.ts
const allLogosContent = generateAllLogos();
writeFileSync(join(__dirname, "..", "src", "allLogos.ts"), allLogosContent, "utf-8");
console.log("Generated: src/allLogos.ts");

console.log(`\nDone! Generated ${BRANDS.length} logo components.`);
