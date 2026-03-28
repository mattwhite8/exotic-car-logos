import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Zenvo",
  slug: "zenvo",
  pngUrl: "https://www.carlogos.org/logo/Zenvo-logo.png",
  country: "Denmark",
  region: "Other",
  founded: 2004,
  hex: "1A1A1A",
};

export const Zenvo: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Zenvo",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Zenvo-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Zenvo;
