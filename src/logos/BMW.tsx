import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "BMW",
  slug: "bmw",
  pngUrl: "https://www.carlogos.org/logo/BMW-logo.png",
  country: "Germany",
  region: "German",
  founded: 1916,
  hex: "0066B2",
};

export const BMW: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "BMW",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/BMW-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default BMW;
