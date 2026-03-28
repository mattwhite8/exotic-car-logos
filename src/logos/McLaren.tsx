import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "McLaren",
  slug: "mclaren",
  pngUrl: "https://www.carlogos.org/logo/McLaren-logo.png",
  country: "UK",
  region: "British",
  founded: 1963,
  hex: "FF8000",
};

export const McLaren: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "McLaren",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/McLaren-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default McLaren;
