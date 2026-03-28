import type { CarLogoProps, CarLogoMeta, LogoSize } from "../src/types";

// These are compile-time checks -- if TypeScript compiles, the tests pass.
const validSize: LogoSize = "md";
const props: CarLogoProps = { size: "lg", alt: "test", loading: "lazy" };
const meta: CarLogoMeta = {
  title: "Test",
  slug: "test",
  pngUrl: "https://example.com/test.png",
  country: "Testland",
  region: "Other",
  founded: 2000,
  hex: "FFFFFF",
};

describe("Type definitions", () => {
  it("compile-time type checks pass", () => {
    expect(validSize).toBe("md");
    expect(props.size).toBe("lg");
    expect(meta.title).toBe("Test");
  });
});
