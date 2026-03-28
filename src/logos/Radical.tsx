import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Radical",
  slug: "radical",
  pngUrl: "https://www.carlogos.org/logo/Radical-Sportscars-logo.png",
  country: "UK",
  region: "British",
  founded: 1997,
  hex: "CC0000",
};

export const Radical: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Radical",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Radical-Sportscars-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Radical;
