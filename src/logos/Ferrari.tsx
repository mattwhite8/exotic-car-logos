import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Ferrari",
  slug: "ferrari",
  pngUrl: "https://www.carlogos.org/logo/Ferrari-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1939,
  hex: "CD212A",
};

export const Ferrari: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Ferrari",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Ferrari-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Ferrari;
