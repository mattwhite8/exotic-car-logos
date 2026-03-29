import type { ReactCarLogoProps, CarLogoMeta, LogoSize, BrandName } from "../src/types";

// These are compile-time checks -- if TypeScript compiles, the tests pass.
const validSize: LogoSize = "icon";
const validName: BrandName = "ferrari";
const props: ReactCarLogoProps = { name: "ferrari", size: "lg", alt: "test", loading: "lazy" };
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
    expect(validSize).toBe("icon");
    expect(validName).toBe("ferrari");
    expect(props.size).toBe("lg");
    expect(props.name).toBe("ferrari");
    expect(meta.title).toBe("Test");
  });
});
