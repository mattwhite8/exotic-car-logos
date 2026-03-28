import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Polestar",
  slug: "polestar",
  pngUrl: "https://www.carlogos.org/logo/Polestar-logo.png",
  country: "Sweden",
  region: "Swedish",
  founded: 2017,
  hex: "1A1A1A",
};

export const Polestar: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Polestar",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Polestar-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Polestar;
