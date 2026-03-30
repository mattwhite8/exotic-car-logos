import type { CarLogoMeta, BrandName } from "./types";

export const brands: Record<BrandName, CarLogoMeta> = {
  // Italian
  "abarth": { title: "Abarth", slug: "abarth", country: "Italy", region: "Italian", founded: 1949, hex: "CC0000" },
  "alfa-romeo": { title: "Alfa Romeo", slug: "alfa-romeo", country: "Italy", region: "Italian", founded: 1910, hex: "CC0000" },
  "de-tomaso": { title: "De Tomaso", slug: "de-tomaso", country: "Italy", region: "Italian", founded: 1959, hex: "003087" },
  "ferrari": { title: "Ferrari", slug: "ferrari", country: "Italy", region: "Italian", founded: 1939, hex: "CD212A" },
  "lamborghini": { title: "Lamborghini", slug: "lamborghini", country: "Italy", region: "Italian", founded: 1963, hex: "D4AF37" },
  "maserati": { title: "Maserati", slug: "maserati", country: "Italy", region: "Italian", founded: 1914, hex: "003087" },
  "pagani": { title: "Pagani", slug: "pagani", country: "Italy", region: "Italian", founded: 1992, hex: "1A1A1A" },
  "pininfarina": { title: "Pininfarina", slug: "pininfarina", country: "Italy", region: "Italian", founded: 1930, hex: "1A1A1A" },
  // German
  "audi": { title: "Audi", slug: "audi", country: "Germany", region: "German", founded: 1909, hex: "1A1A1A" },
  "bmw": { title: "BMW", slug: "bmw", country: "Germany", region: "German", founded: 1916, hex: "0066B2" },
  "brabus": { title: "Brabus", slug: "brabus", country: "Germany", region: "German", founded: 1977, hex: "1A1A1A" },
  "gumpert": { title: "Gumpert", slug: "gumpert", country: "Germany", region: "German", founded: 2004, hex: "1A1A1A" },
  "maybach": { title: "Maybach", slug: "maybach", country: "Germany", region: "German", founded: 1909, hex: "1A1A1A" },
  "mercedes-amg": { title: "Mercedes-AMG", slug: "mercedes-amg", country: "Germany", region: "German", founded: 1967, hex: "1A1A1A" },
  "porsche": { title: "Porsche", slug: "porsche", country: "Germany", region: "German", founded: 1931, hex: "1A1A1A" },
  // British
  "arash": { title: "Arash", slug: "arash", country: "UK", region: "British", founded: 1999, hex: "1A1A1A" },
  "aston-martin": { title: "Aston Martin", slug: "aston-martin", country: "UK", region: "British", founded: 1913, hex: "004225" },
  "bentley": { title: "Bentley", slug: "bentley", country: "UK", region: "British", founded: 1919, hex: "1A5276" },
  "jaguar": { title: "Jaguar", slug: "jaguar", country: "UK", region: "British", founded: 1935, hex: "003F7C" },
  "lotus": { title: "Lotus", slug: "lotus", country: "UK", region: "British", founded: 1948, hex: "005C3E" },
  "mclaren": { title: "McLaren", slug: "mclaren", country: "UK", region: "British", founded: 1963, hex: "FF8000" },
  "radical": { title: "Radical", slug: "radical", country: "UK", region: "British", founded: 1997, hex: "CC0000" },
  "rolls-royce": { title: "Rolls-Royce", slug: "rolls-royce", country: "UK", region: "British", founded: 1904, hex: "1A1A1A" },
  "tvr": { title: "TVR", slug: "tvr", country: "UK", region: "British", founded: 1947, hex: "8B0000" },
  // French
  "alpine": { title: "Alpine", slug: "alpine", country: "France", region: "French", founded: 1955, hex: "003087" },
  "bugatti": { title: "Bugatti", slug: "bugatti", country: "France", region: "French", founded: 1909, hex: "1B1F8A" },
  // American
  "chevrolet": { title: "Chevrolet", slug: "chevrolet", country: "USA", region: "American", founded: 1911, hex: "CC0000" },
  "dodge": { title: "Dodge", slug: "dodge", country: "USA", region: "American", founded: 1900, hex: "CC0000" },
  "ford": { title: "Ford", slug: "ford", country: "USA", region: "American", founded: 1903, hex: "003087" },
  "hennessey": { title: "Hennessey", slug: "hennessey", country: "USA", region: "American", founded: 1991, hex: "1A1A1A" },
  "mosler": { title: "Mosler", slug: "mosler", country: "USA", region: "American", founded: 1985, hex: "003087" },
  "saleen": { title: "Saleen", slug: "saleen", country: "USA", region: "American", founded: 1983, hex: "1A1A1A" },
  "shelby": { title: "Shelby", slug: "shelby", country: "USA", region: "American", founded: 1962, hex: "8B0000" },
  "ssc": { title: "SSC", slug: "ssc", country: "USA", region: "American", founded: 1998, hex: "1A1A1A" },
  // Swedish
  "koenigsegg": { title: "Koenigsegg", slug: "koenigsegg", country: "Sweden", region: "Swedish", founded: 1994, hex: "FFCC00" },
  "polestar": { title: "Polestar", slug: "polestar", country: "Sweden", region: "Swedish", founded: 2017, hex: "1A1A1A" },
  // Other
  "rimac": { title: "Rimac", slug: "rimac", country: "Croatia", region: "Other", founded: 2009, hex: "0033A0" },
  "spyker": { title: "Spyker", slug: "spyker", country: "Netherlands", region: "Other", founded: 1999, hex: "003087" },
  "w-motors": { title: "W Motors", slug: "w-motors", country: "UAE", region: "Other", founded: 2012, hex: "1A1A1A" },
  "zenvo": { title: "Zenvo", slug: "zenvo", country: "Denmark", region: "Other", founded: 2004, hex: "1A1A1A" },
};
