import React from "react";
import type { ReactCarLogoProps } from "./types";
import { SIZE_MAP } from "./types";
import { brands } from "./brands";

export const ReactCarLogo: React.FC<ReactCarLogoProps> = ({
  name,
  size = "md",
  width,
  height,
  alt,
  loading = "lazy",
  style,
  ...props
}) => {
  const brand = brands[name];
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src={brand.pngUrl}
      alt={alt ?? brand.title}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default ReactCarLogo;
