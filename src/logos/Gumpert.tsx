import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Gumpert",
  slug: "gumpert",
  pngUrl: "https://www.carlogos.org/logo/Gumpert-logo.png",
  country: "Germany",
  region: "German",
  founded: 2004,
  hex: "1A1A1A",
};

export const Gumpert: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Gumpert",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Gumpert-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Gumpert;
