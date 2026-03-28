import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Maserati",
  slug: "maserati",
  pngUrl: "https://www.carlogos.org/logo/Maserati-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1914,
  hex: "003087",
};

export const Maserati: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Maserati",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Maserati-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Maserati;
