import type { ApiCar } from "../../api/cars";
import type { CarType } from "./cars";

export const mapApiCarToCarType = (car: ApiCar): CarType => {
  const sortedImages = [...car.images].sort((a, b) => a.position - b.position);

  const primaryImage = sortedImages.find((image) => image.isPrimary);

  const otherImages = sortedImages.filter((image) => !image.isPrimary);

  const orderedImages = primaryImage
    ? [primaryImage, ...otherImages]
    : sortedImages;

  const imageUrls = orderedImages.map((image) => image.url);

  return {
    id: car.id,
    slug: car.slug,
    brand: car.brand,
    model: car.model,
    condition: car.condition,
    vin: car.vin,
    year: car.year,
    mileage: car.mileage,
    engine: car.engine,
    power: car.power,
    transmission: car.transmission,
    drive: car.drive,
    fuel: car.fuel,
    carvertical: car.carvertical,
    price: car.price,
    image: imageUrls[0] ?? "/logohd emblem.png",
    images: imageUrls,
    location: car.location,
    voivodeship: car.voivodeship,
    negotiation: car.negotiation,
    accidentFree: car.accidentFree,
    description: car.description,
    status: car.status,
    invoice: car.invoice,
    equipment: car.equipment,
    details: {
      body: car.body,
      color: car.color,
      interior: car.interior,
      seats: car.seats,
      doors: car.doors,
      country: car.country,
    },
    history: [],
    featured: car.featured,
    createdAt: car.createdAt,
  };
};
