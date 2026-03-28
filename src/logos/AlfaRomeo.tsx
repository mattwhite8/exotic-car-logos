import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Alfa Romeo",
  slug: "alfa-romeo",
  pngUrl: "https://www.carlogos.org/logo/Alfa-Romeo-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1910,
  hex: "CC0000",
};

export const AlfaRomeo: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Alfa Romeo",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Alfa-Romeo-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default AlfaRomeo;
