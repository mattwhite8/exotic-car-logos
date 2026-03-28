import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Arash",
  slug: "arash",
  pngUrl: "https://www.carlogos.org/logo/Arash-logo.png",
  country: "UK",
  region: "British",
  founded: 1999,
  hex: "1A1A1A",
};

export const Arash: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Arash",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Arash-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Arash;
