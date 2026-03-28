import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Saleen",
  slug: "saleen",
  pngUrl: "https://www.carlogos.org/logo/Saleen-logo.png",
  country: "USA",
  region: "American",
  founded: 1983,
  hex: "1A1A1A",
};

export const Saleen: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Saleen",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Saleen-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Saleen;
