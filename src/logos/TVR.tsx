import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "TVR",
  slug: "tvr",
  pngUrl: "https://www.carlogos.org/logo/TVR-logo.png",
  country: "UK",
  region: "British",
  founded: 1947,
  hex: "8B0000",
};

export const TVR: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "TVR",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/TVR-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default TVR;
