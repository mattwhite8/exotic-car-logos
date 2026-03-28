import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Bugatti",
  slug: "bugatti",
  pngUrl: "https://www.carlogos.org/logo/Bugatti-logo.png",
  country: "France",
  region: "French",
  founded: 1909,
  hex: "1B1F8A",
};

export const Bugatti: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Bugatti",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Bugatti-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Bugatti;
