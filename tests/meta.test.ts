import { brands } from "../src/brands";
import { SIZE_MAP, CDN_WIDTH_MAP } from "../src/types";

describe("brands registry", () => {
  const entries = Object.entries(brands);

  it("has exactly 40 brands", () => {
    expect(entries.length).toBe(40);
  });

  entries.forEach(([slug, meta]) => {
    describe(slug, () => {
      it("has a valid slug matching the key", () => {
        expect(meta.slug).toBe(slug);
      });

      it("has a title", () => {
        expect(meta.title.length).toBeGreaterThan(0);
      });

      it("has a valid pngUrl", () => {
        expect(meta.pngUrl).toMatch(/^https:\/\//);
      });

      it("has a valid hex color", () => {
        expect(meta.hex).toMatch(/^[0-9A-F]{6}$/i);
      });
    });
  });
});

describe("SIZE_MAP", () => {
  it("has icon, sm, md, lg keys", () => {
    expect(Object.keys(SIZE_MAP)).toEqual(["icon", "sm", "md", "lg"]);
  });

  it("icon < sm < md < lg", () => {
    expect(SIZE_MAP.icon).toBeLessThan(SIZE_MAP.sm);
    expect(SIZE_MAP.sm).toBeLessThan(SIZE_MAP.md);
    expect(SIZE_MAP.md).toBeLessThan(SIZE_MAP.lg);
  });
});

describe("CDN_WIDTH_MAP", () => {
  it("has icon, sm, md, lg keys", () => {
    expect(Object.keys(CDN_WIDTH_MAP)).toEqual(["icon", "sm", "md", "lg"]);
  });

  it("all sizes fetch 640px", () => {
    expect(CDN_WIDTH_MAP.icon).toBe(640);
    expect(CDN_WIDTH_MAP.sm).toBe(640);
    expect(CDN_WIDTH_MAP.md).toBe(640);
    expect(CDN_WIDTH_MAP.lg).toBe(640);
  });
});
