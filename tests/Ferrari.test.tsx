import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReactCarLogo, brands } from "../src";

describe("ReactCarLogo component", () => {
  it("renders an img element", () => {
    render(<ReactCarLogo name="ferrari" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("defaults to md size (160px)", () => {
    render(<ReactCarLogo name="ferrari" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "160");
    expect(img).toHaveAttribute("height", "160");
  });

  it("renders icon size at 32px", () => {
    render(<ReactCarLogo name="ferrari" size="icon" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "32");
  });

  it("renders sm size at 80px", () => {
    render(<ReactCarLogo name="ferrari" size="sm" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "80");
  });

  it("renders lg size at 320px", () => {
    render(<ReactCarLogo name="ferrari" size="lg" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "320");
  });

  it("accepts custom width override", () => {
    render(<ReactCarLogo name="ferrari" width={240} />);
    expect(screen.getByRole("img")).toHaveAttribute("width", "240");
  });

  it("uses default alt text from brand name", () => {
    render(<ReactCarLogo name="ferrari" />);
    expect(screen.getByAltText("Ferrari")).toBeInTheDocument();
  });

  it("accepts custom alt text", () => {
    render(<ReactCarLogo name="ferrari" alt="The prancing horse" />);
    expect(screen.getByAltText("The prancing horse")).toBeInTheDocument();
  });

  it("defaults to lazy loading", () => {
    render(<ReactCarLogo name="ferrari" />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("can be set to eager loading", () => {
    render(<ReactCarLogo name="ferrari" loading="eager" />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
  });

  it("forwards additional props to img", () => {
    render(<ReactCarLogo name="ferrari" data-testid="ferrari-logo" className="my-logo" />);
    const img = screen.getByTestId("ferrari-logo");
    expect(img).toHaveClass("my-logo");
  });

  it("src is set from local logo asset", () => {
    render(<ReactCarLogo name="ferrari" />);
    expect(screen.getByRole("img").getAttribute("src")).not.toBeNull();
  });

  it("renders different brands via name prop", () => {
    const { rerender } = render(<ReactCarLogo name="lamborghini" />);
    expect(screen.getByAltText("Lamborghini")).toBeInTheDocument();

    rerender(<ReactCarLogo name="porsche" />);
    expect(screen.getByAltText("Porsche")).toBeInTheDocument();
  });
});

describe("brands registry", () => {
  it("has Ferrari metadata", () => {
    expect(brands.ferrari.title).toBe("Ferrari");
    expect(brands.ferrari.slug).toBe("ferrari");
    expect(brands.ferrari.country).toBe("Italy");
    expect(brands.ferrari.founded).toBe(1939);
    expect(brands.ferrari.hex).toMatch(/^[0-9A-F]{6}$/i);

  });
});
