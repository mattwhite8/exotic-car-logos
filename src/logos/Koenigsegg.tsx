import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Koenigsegg",
  slug: "koenigsegg",
  pngUrl: "https://www.carlogos.org/logo/Koenigsegg-logo.png",
  country: "Sweden",
  region: "Swedish",
  founded: 1994,
  hex: "FFCC00",
};

export const Koenigsegg: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Koenigsegg",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Koenigsegg-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Koenigsegg;
