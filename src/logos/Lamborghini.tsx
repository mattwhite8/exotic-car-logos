import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Lamborghini",
  slug: "lamborghini",
  pngUrl: "https://www.carlogos.org/logo/Lamborghini-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1963,
  hex: "D4AF37",
};

export const Lamborghini: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Lamborghini",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Lamborghini-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Lamborghini;
