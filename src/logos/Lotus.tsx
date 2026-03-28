import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Lotus",
  slug: "lotus",
  pngUrl: "https://www.carlogos.org/logo/Lotus-logo.png",
  country: "UK",
  region: "British",
  founded: 1948,
  hex: "005C3E",
};

export const Lotus: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Lotus",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Lotus-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Lotus;
