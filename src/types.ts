import { ImgHTMLAttributes } from "react";

/** Available logo size presets */
export type LogoSize = "sm" | "md" | "lg";

/**
 * Pixel dimensions for each size tier.
 */
export const SIZE_MAP: Record<LogoSize, number> = {
  sm: 80, // Thumbnails, nav icons, table cells
  md: 160, // Cards, lists, sidebars (default)
  lg: 320, // Hero sections, detail views
};

/**
 * Width in pixels used when fetching logo images.
 */
export const CDN_WIDTH_MAP: Record<LogoSize, number> = {
  sm: 640,
  md: 640,
  lg: 640,
};

/**
 * Props accepted by every car logo component.
 * Extends standard <img> HTML attributes (minus src/width/height which are controlled).
 */
export interface CarLogoProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  /**
   * Size preset. Controls both the rendered dimension and the PNG resolution fetched.
   * - `'sm'`  -> renders at 80px,  fetches 160px PNG (2x retina)
   * - `'md'`  -> renders at 160px, fetches 320px PNG (2x retina) -- DEFAULT
   * - `'lg'`  -> renders at 320px, fetches 640px PNG (2x retina)
   */
  size?: LogoSize;

  /**
   * Custom pixel width. Overrides `size` if provided.
   * The highest available PNG resolution (640px) will be fetched.
   */
  width?: number;

  /**
   * Custom pixel height. Overrides `size` if provided.
   * The highest available PNG resolution (640px) will be fetched.
   */
  height?: number;

  /**
   * Accessible alt text for screen readers.
   * Defaults to the brand's display name (e.g., "Ferrari").
   */
  alt?: string;

  /**
   * Native browser image loading strategy.
   * Defaults to 'lazy' for performance.
   */
  loading?: "lazy" | "eager";
}

/**
 * Metadata object exported alongside each logo component.
 * Useful for building dynamic UIs, lists, and filters.
 */
export interface CarLogoMeta {
  /** Brand display name, e.g. "Rolls-Royce" */
  title: string;

  /** URL-safe slug, e.g. "rolls-royce" */
  slug: string;

  /** PNG logo URL */
  pngUrl: string;

  /** Country of origin, e.g. "Italy" */
  country: string;

  /** Regional grouping: "Italian" | "German" | "British" | "French" | "American" | "Swedish" | "Other" */
  region: string;

  /** Year the brand was founded */
  founded: number;

  /** Primary brand hex color (without #), e.g. "CD212A" */
  hex: string;

  /** Link to the brand's official guidelines page (if known) */
  guidelines?: string;
}
