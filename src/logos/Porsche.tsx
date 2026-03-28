import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Porsche",
  slug: "porsche",
  pngUrl: "https://www.carlogos.org/logo/Porsche-logo.png",
  country: "Germany",
  region: "German",
  founded: 1931,
  hex: "1A1A1A",
};

export const Porsche: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Porsche",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Porsche-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Porsche;
