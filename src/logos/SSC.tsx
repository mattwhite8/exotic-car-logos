import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "SSC",
  slug: "ssc",
  pngUrl: "https://www.carlogos.org/logo/SSC-logo.png",
  country: "USA",
  region: "American",
  founded: 1998,
  hex: "1A1A1A",
};

export const SSC: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "SSC",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/SSC-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default SSC;
