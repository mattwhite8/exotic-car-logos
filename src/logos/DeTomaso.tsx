import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "De Tomaso",
  slug: "de-tomaso",
  pngUrl: "https://www.carlogos.org/logo/De-Tomaso-logo.png",
  country: "Italy",
  region: "Italian",
  founded: 1959,
  hex: "003087",
};

export const DeTomaso: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "De Tomaso",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/De-Tomaso-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default DeTomaso;
