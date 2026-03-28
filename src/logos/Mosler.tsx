import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Mosler",
  slug: "mosler",
  pngUrl: "https://www.carlogos.org/logo/Mosler-logo.png",
  country: "USA",
  region: "American",
  founded: 1985,
  hex: "003087",
};

export const Mosler: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Mosler",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Mosler-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Mosler;
