import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Dodge",
  slug: "dodge",
  pngUrl: "https://www.carlogos.org/logo/Dodge-logo.png",
  country: "USA",
  region: "American",
  founded: 1900,
  hex: "CC0000",
};

export const Dodge: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Dodge",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Dodge-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Dodge;
