import { writeFileSync } from "fs";
import { join } from "path";

interface Brand {
  title: string;
  slug: string;
  hex: string;
  region: string;
  country: string;
  founded: number;
}

const BRANDS: Brand[] = [
  // Italian
  { title: "Abarth", slug: "abarth", hex: "CC0000", region: "Italian", country: "Italy", founded: 1949 },
  { title: "Alfa Romeo", slug: "alfa-romeo", hex: "CC0000", region: "Italian", country: "Italy", founded: 1910 },
  { title: "De Tomaso", slug: "de-tomaso", hex: "003087", region: "Italian", country: "Italy", founded: 1959 },
  { title: "Ferrari", slug: "ferrari", hex: "CD212A", region: "Italian", country: "Italy", founded: 1939 },
  { title: "Lamborghini", slug: "lamborghini", hex: "D4AF37", region: "Italian", country: "Italy", founded: 1963 },
  { title: "Maserati", slug: "maserati", hex: "003087", region: "Italian", country: "Italy", founded: 1914 },
  { title: "Pagani", slug: "pagani", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1992 },
  { title: "Pininfarina", slug: "pininfarina", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1930 },
  // German
  { title: "Audi", slug: "audi", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { title: "BMW", slug: "bmw", hex: "0066B2", region: "German", country: "Germany", founded: 1916 },
  { title: "Brabus", slug: "brabus", hex: "1A1A1A", region: "German", country: "Germany", founded: 1977 },
  { title: "Gumpert", slug: "gumpert", hex: "1A1A1A", region: "German", country: "Germany", founded: 2004 },
  { title: "Maybach", slug: "maybach", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { title: "Mercedes-AMG", slug: "mercedes-amg", hex: "1A1A1A", region: "German", country: "Germany", founded: 1967 },
  { title: "Porsche", slug: "porsche", hex: "1A1A1A", region: "German", country: "Germany", founded: 1931 },
  // British
  { title: "Arash", slug: "arash", hex: "1A1A1A", region: "British", country: "UK", founded: 1999 },
  { title: "Aston Martin", slug: "aston-martin", hex: "004225", region: "British", country: "UK", founded: 1913 },
  { title: "Bentley", slug: "bentley", hex: "1A5276", region: "British", country: "UK", founded: 1919 },
  { title: "Jaguar", slug: "jaguar", hex: "003F7C", region: "British", country: "UK", founded: 1935 },
  { title: "Lotus", slug: "lotus", hex: "005C3E", region: "British", country: "UK", founded: 1948 },
  { title: "McLaren", slug: "mclaren", hex: "FF8000", region: "British", country: "UK", founded: 1963 },
  { title: "Radical", slug: "radical", hex: "CC0000", region: "British", country: "UK", founded: 1997 },
  { title: "Rolls-Royce", slug: "rolls-royce", hex: "1A1A1A", region: "British", country: "UK", founded: 1904 },
  { title: "TVR", slug: "tvr", hex: "8B0000", region: "British", country: "UK", founded: 1947 },
  // French
  { title: "Alpine", slug: "alpine", hex: "003087", region: "French", country: "France", founded: 1955 },
  { title: "Bugatti", slug: "bugatti", hex: "1B1F8A", region: "French", country: "France", founded: 1909 },
  // American
  { title: "Chevrolet", slug: "chevrolet", hex: "CC0000", region: "American", country: "USA", founded: 1911 },
  { title: "Dodge", slug: "dodge", hex: "CC0000", region: "American", country: "USA", founded: 1900 },
  { title: "Ford", slug: "ford", hex: "003087", region: "American", country: "USA", founded: 1903 },
  { title: "Hennessey", slug: "hennessey", hex: "1A1A1A", region: "American", country: "USA", founded: 1991 },
  { title: "Mosler", slug: "mosler", hex: "003087", region: "American", country: "USA", founded: 1985 },
  { title: "Saleen", slug: "saleen", hex: "1A1A1A", region: "American", country: "USA", founded: 1983 },
  { title: "Shelby", slug: "shelby", hex: "8B0000", region: "American", country: "USA", founded: 1962 },
  { title: "SSC", slug: "ssc", hex: "1A1A1A", region: "American", country: "USA", founded: 1998 },
  // Swedish
  { title: "Koenigsegg", slug: "koenigsegg", hex: "FFCC00", region: "Swedish", country: "Sweden", founded: 1994 },
  { title: "Polestar", slug: "polestar", hex: "1A1A1A", region: "Swedish", country: "Sweden", founded: 2017 },
  // Other
  { title: "Rimac", slug: "rimac", hex: "0033A0", region: "Other", country: "Croatia", founded: 2009 },
  { title: "Spyker", slug: "spyker", hex: "003087", region: "Other", country: "Netherlands", founded: 1999 },
  { title: "W Motors", slug: "w-motors", hex: "1A1A1A", region: "Other", country: "UAE", founded: 2012 },
  { title: "Zenvo", slug: "zenvo", hex: "1A1A1A", region: "Other", country: "Denmark", founded: 2004 },
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
        `  "${b.slug}": { title: "${b.title}", slug: "${b.slug}", country: "${b.country}", region: "${b.region}", founded: ${b.founded}, hex: "${b.hex}" },`
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
