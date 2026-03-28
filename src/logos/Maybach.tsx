import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Maybach",
  slug: "maybach",
  pngUrl: "https://www.carlogos.org/logo/Maybach-logo.png",
  country: "Germany",
  region: "German",
  founded: 1909,
  hex: "1A1A1A",
};

export const Maybach: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Maybach",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Maybach-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Maybach;
