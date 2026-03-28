import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Rimac",
  slug: "rimac",
  pngUrl: "https://www.carlogos.org/logo/Rimac-logo.png",
  country: "Croatia",
  region: "Other",
  founded: 2009,
  hex: "0033A0",
};

export const Rimac: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Rimac",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Rimac-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Rimac;
