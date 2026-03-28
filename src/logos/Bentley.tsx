import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Bentley",
  slug: "bentley",
  pngUrl: "https://www.carlogos.org/logo/Bentley-logo.png",
  country: "UK",
  region: "British",
  founded: 1919,
  hex: "1A5276",
};

export const Bentley: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Bentley",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Bentley-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Bentley;
