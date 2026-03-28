import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Aston Martin",
  slug: "aston-martin",
  pngUrl: "https://www.carlogos.org/logo/Aston-Martin-logo.png",
  country: "UK",
  region: "British",
  founded: 1913,
  hex: "004225",
};

export const AstonMartin: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Aston Martin",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Aston-Martin-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default AstonMartin;
