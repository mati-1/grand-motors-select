import type { CarType } from "../cars";

export type CarGalleryProps = {
  images: string[];
  alt: string;
  car: CarType;
};

export type GalleryDirection = "left" | "right";

export type GalleryPosition = {
  x: number;
  y: number;
};
