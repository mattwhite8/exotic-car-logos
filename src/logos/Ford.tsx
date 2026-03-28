import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Ford",
  slug: "ford",
  pngUrl: "https://www.carlogos.org/logo/Ford-logo.png",
  country: "USA",
  region: "American",
  founded: 1903,
  hex: "003087",
};

export const Ford: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Ford",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Ford-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Ford;
