import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Ferrari, FerrariMeta } from "../src";

describe("Ferrari component", () => {
  it("renders an img element", () => {
    render(<Ferrari />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("defaults to md size (160px)", () => {
    render(<Ferrari />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "160");
    expect(img).toHaveAttribute("height", "160");
  });

  it("renders sm size at 80px", () => {
    render(<Ferrari size="sm" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "80");
  });

  it("renders lg size at 320px", () => {
    render(<Ferrari size="lg" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "320");
  });

  it("accepts custom width override", () => {
    render(<Ferrari width={240} />);
    expect(screen.getByRole("img")).toHaveAttribute("width", "240");
  });

  it("uses default alt text from brand name", () => {
    render(<Ferrari />);
    expect(screen.getByAltText("Ferrari")).toBeInTheDocument();
  });

  it("accepts custom alt text", () => {
    render(<Ferrari alt="The prancing horse" />);
    expect(screen.getByAltText("The prancing horse")).toBeInTheDocument();
  });

  it("defaults to lazy loading", () => {
    render(<Ferrari />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("can be set to eager loading", () => {
    render(<Ferrari loading="eager" />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
  });

  it("forwards additional props to img", () => {
    render(<Ferrari data-testid="ferrari-logo" className="my-logo" />);
    const img = screen.getByTestId("ferrari-logo");
    expect(img).toHaveClass("my-logo");
  });

  it("src URL points to carlogos.org", () => {
    render(<Ferrari />);
    expect(screen.getByRole("img").getAttribute("src")).toMatch(/carlogos\.org/);
  });
});

describe("FerrariMeta", () => {
  it("has required metadata fields", () => {
    expect(FerrariMeta.title).toBe("Ferrari");
    expect(FerrariMeta.slug).toBe("ferrari");
    expect(FerrariMeta.country).toBe("Italy");
    expect(FerrariMeta.founded).toBe(1939);
    expect(FerrariMeta.hex).toMatch(/^[0-9A-F]{6}$/i);
    expect(FerrariMeta.pngUrl).toMatch(/^https:\/\//);
  });
});
