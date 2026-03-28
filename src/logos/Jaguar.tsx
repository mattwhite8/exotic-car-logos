import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Jaguar",
  slug: "jaguar",
  pngUrl: "https://www.carlogos.org/logo/Jaguar-logo.png",
  country: "UK",
  region: "British",
  founded: 1935,
  hex: "003F7C",
};

export const Jaguar: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Jaguar",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Jaguar-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Jaguar;
