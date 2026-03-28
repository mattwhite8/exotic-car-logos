import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Chevrolet",
  slug: "chevrolet",
  pngUrl: "https://www.carlogos.org/logo/Chevrolet-logo.png",
  country: "USA",
  region: "American",
  founded: 1911,
  hex: "CC0000",
};

export const Chevrolet: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Chevrolet",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Chevrolet-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Chevrolet;
