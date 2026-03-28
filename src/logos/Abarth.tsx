import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Abarth",
  slug: "abarth",
  pngUrl: "https://www.carlogos.org/logo/Abarth-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1949,
  hex: "CC0000",
};

export const Abarth: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Abarth",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Abarth-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Abarth;
