import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "W Motors",
  slug: "w-motors",
  pngUrl: "https://www.carlogos.org/logo/W-Motors-logo.png",
  country: "UAE",
  region: "Other",
  founded: 2012,
  hex: "1A1A1A",
};

export const WMotors: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "W Motors",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/W-Motors-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default WMotors;
