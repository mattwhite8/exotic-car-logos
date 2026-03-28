import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Alpine",
  slug: "alpine",
  pngUrl: "https://www.carlogos.org/logo/Alpine-logo.png",
  country: "France",
  region: "French",
  founded: 1955,
  hex: "003087",
};

export const Alpine: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Alpine",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Alpine-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Alpine;
