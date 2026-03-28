import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Pagani",
  slug: "pagani",
  pngUrl: "https://www.carlogos.org/logo/Pagani-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1992,
  hex: "1A1A1A",
};

export const Pagani: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Pagani",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Pagani-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Pagani;
