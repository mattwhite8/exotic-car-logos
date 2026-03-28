import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Pininfarina",
  slug: "pininfarina",
  pngUrl: "https://www.carlogos.org/logo/Pininfarina-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1930,
  hex: "1A1A1A",
};

export const Pininfarina: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Pininfarina",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Pininfarina-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Pininfarina;
