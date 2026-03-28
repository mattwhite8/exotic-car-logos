import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Mercedes-AMG",
  slug: "mercedes-amg",
  pngUrl: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png",
  country: "Germany",
  region: "German",
  founded: 1967,
  hex: "1A1A1A",
};

export const MercedesAMG: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Mercedes-AMG",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/car-logos/mercedes-benz-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default MercedesAMG;
