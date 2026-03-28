import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Hennessey",
  slug: "hennessey",
  pngUrl: "https://www.carlogos.org/logo/Hennessey-logo.png",
  country: "USA",
  region: "American",
  founded: 1991,
  hex: "1A1A1A",
};

export const Hennessey: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Hennessey",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Hennessey-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Hennessey;
