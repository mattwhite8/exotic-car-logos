import { writeFileSync } from "fs";
import { join } from "path";

interface Brand {
  title: string;
  slug: string;
  pngUrl: string;
  hex: string;
  region: string;
  country: string;
  founded: number;
}

const BRANDS: Brand[] = [
  // Italian
  { title: "Abarth", slug: "abarth", pngUrl: "https://www.carlogos.org/logo/Abarth-logo.png", hex: "CC0000", region: "Italian", country: "Italy", founded: 1949 },
  { title: "Alfa Romeo", slug: "alfa-romeo", pngUrl: "https://www.carlogos.org/logo/Alfa-Romeo-logo.png", hex: "CC0000", region: "Italian", country: "Italy", founded: 1910 },
  { title: "De Tomaso", slug: "de-tomaso", pngUrl: "https://www.carlogos.org/logo/De-Tomaso-logo.png", hex: "003087", region: "Italian", country: "Italy", founded: 1959 },
  { title: "Ferrari", slug: "ferrari", pngUrl: "https://www.carlogos.org/logo/Ferrari-logo.png", hex: "CD212A", region: "Italian", country: "Italy", founded: 1939 },
  { title: "Lamborghini", slug: "lamborghini", pngUrl: "https://www.carlogos.org/logo/Lamborghini-logo.png", hex: "D4AF37", region: "Italian", country: "Italy", founded: 1963 },
  { title: "Maserati", slug: "maserati", pngUrl: "https://www.carlogos.org/logo/Maserati-logo.png", hex: "003087", region: "Italian", country: "Italy", founded: 1914 },
  { title: "Pagani", slug: "pagani", pngUrl: "https://www.carlogos.org/logo/Pagani-logo.png", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1992 },
  { title: "Pininfarina", slug: "pininfarina", pngUrl: "https://www.carlogos.org/logo/Pininfarina-logo.png", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1930 },
  // German
  { title: "Audi", slug: "audi", pngUrl: "https://www.carlogos.org/logo/Audi-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { title: "BMW", slug: "bmw", pngUrl: "https://www.carlogos.org/logo/BMW-logo.png", hex: "0066B2", region: "German", country: "Germany", founded: 1916 },
  { title: "Brabus", slug: "brabus", pngUrl: "https://www.carlogos.org/logo/Brabus-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1977 },
  { title: "Gumpert", slug: "gumpert", pngUrl: "https://www.carlogos.org/logo/Gumpert-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 2004 },
  { title: "Maybach", slug: "maybach", pngUrl: "https://www.carlogos.org/logo/Maybach-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { title: "Mercedes-AMG", slug: "mercedes-amg", pngUrl: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1967 },
  { title: "Porsche", slug: "porsche", pngUrl: "https://www.carlogos.org/logo/Porsche-logo.png", hex: "1A1A1A", region: "German", country: "Germany", founded: 1931 },
  // British
  { title: "Arash", slug: "arash", pngUrl: "https://www.carlogos.org/logo/Arash-logo.png", hex: "1A1A1A", region: "British", country: "UK", founded: 1999 },
  { title: "Aston Martin", slug: "aston-martin", pngUrl: "https://www.carlogos.org/logo/Aston-Martin-logo.png", hex: "004225", region: "British", country: "UK", founded: 1913 },
  { title: "Bentley", slug: "bentley", pngUrl: "https://www.carlogos.org/logo/Bentley-logo.png", hex: "1A5276", region: "British", country: "UK", founded: 1919 },
  { title: "Jaguar", slug: "jaguar", pngUrl: "https://www.carlogos.org/logo/Jaguar-logo.png", hex: "003F7C", region: "British", country: "UK", founded: 1935 },
  { title: "Lotus", slug: "lotus", pngUrl: "https://www.carlogos.org/logo/Lotus-logo.png", hex: "005C3E", region: "British", country: "UK", founded: 1948 },
  { title: "McLaren", slug: "mclaren", pngUrl: "https://www.carlogos.org/logo/McLaren-logo.png", hex: "FF8000", region: "British", country: "UK", founded: 1963 },
  { title: "Radical", slug: "radical", pngUrl: "https://www.carlogos.org/logo/Radical-Sportscars-logo.png", hex: "CC0000", region: "British", country: "UK", founded: 1997 },
  { title: "Rolls-Royce", slug: "rolls-royce", pngUrl: "https://www.carlogos.org/logo/Rolls-Royce-logo.png", hex: "1A1A1A", region: "British", country: "UK", founded: 1904 },
  { title: "TVR", slug: "tvr", pngUrl: "https://www.carlogos.org/logo/TVR-logo.png", hex: "8B0000", region: "British", country: "UK", founded: 1947 },
  // French
  { title: "Alpine", slug: "alpine", pngUrl: "https://www.carlogos.org/logo/Alpine-logo.png", hex: "003087", region: "French", country: "France", founded: 1955 },
  { title: "Bugatti", slug: "bugatti", pngUrl: "https://www.carlogos.org/logo/Bugatti-logo.png", hex: "1B1F8A", region: "French", country: "France", founded: 1909 },
  // American
  { title: "Chevrolet", slug: "chevrolet", pngUrl: "https://www.carlogos.org/logo/Chevrolet-logo.png", hex: "CC0000", region: "American", country: "USA", founded: 1911 },
  { title: "Dodge", slug: "dodge", pngUrl: "https://www.carlogos.org/logo/Dodge-logo.png", hex: "CC0000", region: "American", country: "USA", founded: 1900 },
  { title: "Ford", slug: "ford", pngUrl: "https://www.carlogos.org/logo/Ford-logo.png", hex: "003087", region: "American", country: "USA", founded: 1903 },
  { title: "Hennessey", slug: "hennessey", pngUrl: "https://www.carlogos.org/logo/Hennessey-logo.png", hex: "1A1A1A", region: "American", country: "USA", founded: 1991 },
  { title: "Mosler", slug: "mosler", pngUrl: "https://www.carlogos.org/logo/Mosler-logo.png", hex: "003087", region: "American", country: "USA", founded: 1985 },
  { title: "Saleen", slug: "saleen", pngUrl: "https://www.carlogos.org/logo/Saleen-logo.png", hex: "1A1A1A", region: "American", country: "USA", founded: 1983 },
  { title: "Shelby", slug: "shelby", pngUrl: "https://www.carlogos.org/logo/Shelby-logo.png", hex: "8B0000", region: "American", country: "USA", founded: 1962 },
  { title: "SSC", slug: "ssc", pngUrl: "https://www.carlogos.org/logo/SSC-logo.png", hex: "1A1A1A", region: "American", country: "USA", founded: 1998 },
  // Swedish
  { title: "Koenigsegg", slug: "koenigsegg", pngUrl: "https://www.carlogos.org/logo/Koenigsegg-logo.png", hex: "FFCC00", region: "Swedish", country: "Sweden", founded: 1994 },
  { title: "Polestar", slug: "polestar", pngUrl: "https://www.carlogos.org/logo/Polestar-logo.png", hex: "1A1A1A", region: "Swedish", country: "Sweden", founded: 2017 },
  // Other
  { title: "Rimac", slug: "rimac", pngUrl: "https://www.carlogos.org/logo/Rimac-logo.png", hex: "0033A0", region: "Other", country: "Croatia", founded: 2009 },
  { title: "Spyker", slug: "spyker", pngUrl: "https://www.carlogos.org/logo/Spyker-logo.png", hex: "003087", region: "Other", country: "Netherlands", founded: 1999 },
  { title: "W Motors", slug: "w-motors", pngUrl: "https://www.carlogos.org/logo/W-Motors-logo.png", hex: "1A1A1A", region: "Other", country: "UAE", founded: 2012 },
  { title: "Zenvo", slug: "zenvo", pngUrl: "https://www.carlogos.org/logo/Zenvo-logo.png", hex: "1A1A1A", region: "Other", country: "Denmark", founded: 2004 },
];

function generateBrandNameType(): string {
  const slugs = BRANDS.map((b) => `  | "${b.slug}"`).join("\n");
  return slugs;
}

function generateBrandsFile(): string {
  const sorted = [...BRANDS].sort((a, b) => a.slug.localeCompare(b.slug));

  const entries = sorted
    .map(
      (b) =>
        `  "${b.slug}": { title: "${b.title}", slug: "${b.slug}", pngUrl: "${b.pngUrl}", country: "${b.country}", region: "${b.region}", founded: ${b.founded}, hex: "${b.hex}" },`
    )
    .join("\n");

  return `import type { CarLogoMeta, BrandName } from "./types";

export const brands: Record<BrandName, CarLogoMeta> = {
${entries}
};
`;
}

// Generate brands.ts
const brandsContent = generateBrandsFile();
writeFileSync(join(__dirname, "..", "src", "brands.ts"), brandsContent, "utf-8");
console.log("Generated: src/brands.ts");

console.log(`\nDone! Registry contains ${BRANDS.length} brands.`);
console.log("Note: Update BrandName type in src/types.ts if brands were added/removed.");
console.log("BrandName slugs:\n" + generateBrandNameType());
