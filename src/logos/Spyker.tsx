import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Spyker",
  slug: "spyker",
  pngUrl: "https://www.carlogos.org/logo/Spyker-logo.png",
  country: "Netherlands",
  region: "Other",
  founded: 1999,
  hex: "003087",
};

export const Spyker: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Spyker",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Spyker-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Spyker;
