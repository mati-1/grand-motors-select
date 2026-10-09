import { apiClient } from "./client";

export type CarImage = {
  id: string;
  fileName: string;
  storageKey: string;
  mimeType: string;
  size: number;
  position: number;
  isPrimary: boolean;
  url: string;
};

export type ApiCar = {
  id: string;
  brand: string;
  model: string;
  condition: "Nowy" | "Używany";
  vin: string;
  year: number;
  mileage: string;
  engine: string;
  power: string;
  transmission: string;
  drive: string;
  fuel: string;
  carvertical: boolean;
  price: string;
  location: string;
  voivodeship: string;
  negotiation: boolean;
  accidentFree: boolean;
  description: string;
  status: "available" | "reservation" | "sold";
  statusType: "sale" | "preparing" | "sold";
  invoice: "VAT 23%" | "VAT MARŻA";
  featured: boolean;
  equipment: string[];

  body: string;
  color: string;
  interior: string;
  seats: string;
  doors: string;
  country: string;

  slug: string;
  createdAt: string;
  updatedAt: string;
  finance: {
    purchasePrice: number;
    expenses: number;
    totalCost: number;
  };
  images: CarImage[];
};

export type CarFilters = {
  search?: string;
  brand?: string;
  minYear?: number;
  maxYear?: number;
  minPrice?: number;
  maxPrice?: number;
  fuel?: string;
  sort?: "default" | "priceAsc" | "priceDesc" | "yearDesc" | "mileageAsc";
};

export type CreateCarInput = {
  brand: string;
  model: string;
  condition: "Nowy" | "Używany";
  vin: string;
  year: number;
  mileage: string;
  engine: string;
  power: string;
  transmission: string;
  drive: string;
  fuel: string;
  carvertical: boolean;
  price: string;
  location: string;
  voivodeship: string;
  negotiation: boolean;
  accidentFree: boolean;
  description: string;
  status: "available" | "reservation" | "sold";
  statusType?: "sale" | "preparing" | "sold";
  invoice: "VAT 23%" | "VAT MARŻA";
  featured: boolean;
  equipment: string[];

  details: {
    body: string;
    color: string;
    interior: string;
    seats: string;
    doors: string;
    country: string;
  };
};

export type CarsResponse = {
  cars: ApiCar[];
};

export type CarResponse = {
  car: ApiCar;
};

export type CarImagesResponse = {
  images: CarImage[];
};

const buildCarsQuery = (filters: CarFilters = {}) => {
  const params = new URLSearchParams();

  if (filters.search?.trim()) {
    params.set("search", filters.search.trim());
  }

  if (filters.brand && filters.brand !== "all") {
    params.set("brand", filters.brand);
  }

  if (filters.minYear !== undefined) {
    params.set("minYear", String(filters.minYear));
  }

  if (filters.maxYear !== undefined) {
    params.set("maxYear", String(filters.maxYear));
  }

  if (filters.minPrice !== undefined) {
    params.set("minPrice", String(filters.minPrice));
  }

  if (filters.maxPrice !== undefined) {
    params.set("maxPrice", String(filters.maxPrice));
  }

  if (filters.fuel && filters.fuel !== "all") {
    params.set("fuel", filters.fuel);
  }

  if (filters.sort && filters.sort !== "default") {
    params.set("sort", filters.sort);
  }

  const query = params.toString();

  return query ? `?${query}` : "";
};

export const getCars = async (
  filters: CarFilters = {},
): Promise<CarsResponse> => {
  return apiClient<CarsResponse>(`/api/cars${buildCarsQuery(filters)}`);
};

export const getAdminCars = async () => {
  const response = await fetch("/api/cars/admin", {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Błąd pobierania aut: ${response.status} ${message}`);
  }

  return response.json() as Promise<{ cars: any[] }>;
};

export const getCar = async (carId: string): Promise<CarResponse> => {
  return apiClient<CarResponse>(`/api/cars/${carId}`);
};

export const getCarImages = async (
  carId: string,
): Promise<CarImagesResponse> => {
  return apiClient<CarImagesResponse>(`/api/cars/${carId}/images`);
};

export const updateCar = async (
  carId: string,
  data: CreateCarInput,
): Promise<CarResponse> => {
  return apiClient<CarResponse>(`/api/cars/${carId}`, {
    method: "PATCH",
    body: data,
  });
};

export const createCar = async (data: CreateCarInput): Promise<CarResponse> => {
  return apiClient<CarResponse>("/api/cars", {
    method: "POST",
    body: data,
  });
};

export const uploadCarImage = async (
  carId: string,
  file: File,
): Promise<CarImagesResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/cars/${carId}/images`,
    {
      method: "POST",
      credentials: "include",
      body: formData,
    },
  );

  if (!response.ok) {
    let message = "Nie udało się przesłać zdjęcia.";

    try {
      const error = await response.json();

      if (typeof error?.message === "string") {
        message = error.message;
      }
    } catch {}

    throw new Error(message);
  }

  return response.json() as Promise<CarImagesResponse>;
};

export const deleteCarImage = async (
  carId: string,
  imageId: string,
): Promise<void> => {
  await apiClient<void>(`/api/cars/${carId}/images/${imageId}`, {
    method: "DELETE",
  });
};

export const setCarImagePrimary = async (
  carId: string,
  imageId: string,
): Promise<void> => {
  await apiClient<void>(`/api/cars/${carId}/images/${imageId}`, {
    method: "PATCH",
    body: {
      isPrimary: true,
    },
  });
};

export const updateCarImagePosition = async (
  carId: string,
  imageId: string,
  position: number,
): Promise<void> => {
  await apiClient<void>(`/api/cars/${carId}/images/${imageId}/position`, {
    method: "PATCH",
    body: {
      position,
    },
  });
};
