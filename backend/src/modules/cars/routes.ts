import type { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import { LocalStorage } from "../../storage/localStorage.js";

import {
  createCarSchema,
  carIdParamsSchema,
  updateCarSchema,
  updateCarImageSchema,
  updateCarImagePrimarySchema,
  updateCarImagePositionSchema,
} from "./schemas.js";
import { createSlug } from "./utils.js";

const storage = new LocalStorage();

export const carsRoutes: FastifyPluginAsync = async (server) => {
  server.get("/", async () => {
    const cars = await server.db.orm.public.Car.all();

    return {
      cars,
    };
  });

  server.get<{
    Params: {
      id: string;
    };
  }>(
    "/:id",
    {
      schema: {
        params: carIdParamsSchema,
      },
    },
    async (request, reply) => {
      const cars = await server.db.orm.public.Car.all();

      const car = cars.find((item) => item.id === request.params.id);

      if (!car) {
        return reply.code(404).send({
          message: "Samochód nie został znaleziony.",
        });
      }

      const images = await server.db.orm.public.CarImage.all();

      const carImages = images
        .filter((image) => image.carId === car.id)
        .sort((a, b) => a.position - b.position)
        .map((image) => ({
          id: image.id,
          fileName: image.fileName,
          storageKey: image.storageKey,
          mimeType: image.mimeType,
          size: image.size,
          position: image.position,
          isPrimary: image.isPrimary,
          url: storage.getUrl(image.storageKey),
        }));

      return {
        car: {
          ...car,
          images: carImages,
        },
      };
    },
  );

  server.post("/", async (request, reply) => {
    const result = createCarSchema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({
        message: "Nieprawidłowe dane samochodu.",
        errors: result.error.issues.map((issue: z.ZodIssue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const body = result.data;

    const slug = createSlug(body.brand, body.model, body.year);

    const car = await server.db.orm.public.Car.create({
      brand: body.brand,
      model: body.model,
      condition: body.condition,

      vin: body.vin,
      year: body.year,
      mileage: body.mileage,

      engine: body.engine,
      power: body.power,
      transmission: body.transmission,
      drive: body.drive,
      fuel: body.fuel,

      carvertical: body.carvertical,

      price: body.price,
      location: body.location,
      voivodeship: body.voivodeship,

      negotiation: body.negotiation,
      accidentFree: body.accidentFree,

      description: body.description,

      status: body.status,
      statusType: body.statusType ?? "sale",

      invoice: body.invoice,

      featured: body.featured,

      equipment: body.equipment,

      body: body.details.body,
      color: body.details.color,
      interior: body.details.interior,
      seats: body.details.seats,
      doors: body.details.doors,
      country: body.details.country,

      slug,
    });

    return reply.code(201).send({
      car,
    });
  });

  server.patch<{
    Params: {
      id: string;
    };
  }>(
    "/:id",
    {
      schema: {
        params: carIdParamsSchema,
      },
    },
    async (request, reply) => {
      const result = updateCarSchema.safeParse(request.body);

      if (!result.success) {
        return reply.code(400).send({
          message: "Nieprawidłowe dane samochodu.",
          errors: result.error.issues.map((issue: z.ZodIssue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });
      }

      const cars = await server.db.orm.public.Car.all();

      const existingCar = cars.find((item) => item.id === request.params.id);

      if (!existingCar) {
        return reply.code(404).send({
          message: "Samochód nie został znaleziony.",
        });
      }

      const body = result.data;

      const updatedCar = await server.db.orm.public.Car.where({
        id: request.params.id,
      }).update(body);

      return {
        car: updatedCar,
      };
    },
  );

  server.delete<{
    Params: {
      id: string;
    };
  }>(
    "/:id",
    {
      schema: {
        params: carIdParamsSchema,
      },
    },
    async (request, reply) => {
      const cars = await server.db.orm.public.Car.all();

      const existingCar = cars.find((item) => item.id === request.params.id);

      if (!existingCar) {
        return reply.code(404).send({
          message: "Samochód nie został znaleziony.",
        });
      }

      const deletedCar = await server.db.orm.public.Car.where({
        id: request.params.id,
      }).delete();

      return {
        car: deletedCar,
      };
    },
  );

  server.post<{
    Params: {
      id: string;
    };
  }>(
    "/:id/images",
    {
      schema: {
        params: carIdParamsSchema,
      },
    },
    async (request, reply) => {
      const cars = await server.db.orm.public.Car.all();

      const car = cars.find((item) => item.id === request.params.id);

      if (!car) {
        return reply.code(404).send({
          message: "Samochód nie został znaleziony.",
        });
      }

      const file = await request.file();

      if (!file) {
        return reply.code(400).send({
          message: "Nie przesłano pliku.",
        });
      }

      if (!file.mimetype.startsWith("image/")) {
        return reply.code(400).send({
          message: "Do samochodu można dodać tylko pliki graficzne.",
        });
      }

      const buffer = await file.toBuffer();

      const storedFile = await storage.save(
        buffer,
        file.filename,
        file.mimetype,
        "cars",
      );

      const images = await server.db.orm.public.CarImage.all();

      const carImages = images.filter(
        (image) => image.carId === request.params.id,
      );

      const image = await server.db.orm.public.CarImage.create({
        carId: request.params.id,
        fileName: storedFile.fileName,
        storageKey: storedFile.storageKey,
        mimeType: storedFile.mimeType,
        size: storedFile.size,
        position: carImages.length,
        isPrimary: carImages.length === 0,
      });

      return reply.code(201).send({
        image,
      });
    },
  );

  server.get<{
    Params: {
      id: string;
    };
  }>(
    "/:id/images",
    {
      schema: {
        params: carIdParamsSchema,
      },
    },
    async (request, reply) => {
      const cars = await server.db.orm.public.Car.all();

      const car = cars.find((item) => item.id === request.params.id);

      if (!car) {
        return reply.code(404).send({
          message: "Samochód nie został znaleziony.",
        });
      }

      const images = await server.db.orm.public.CarImage.all();

      const carImages = images
        .filter((image) => image.carId === request.params.id)
        .sort((a, b) => a.position - b.position);

      return {
        images: carImages.map((image) => ({
          id: image.id,
          fileName: image.fileName,
          storageKey: image.storageKey,
          mimeType: image.mimeType,
          size: image.size,
          position: image.position,
          isPrimary: image.isPrimary,
          url: storage.getUrl(image.storageKey),
        })),
      };
    },
  );

  server.delete<{
    Params: {
      carId: string;
      imageId: string;
    };
  }>("/:carId/images/:imageId", async (request, reply) => {
    const { carId, imageId } = request.params;

    const cars = await server.db.orm.public.Car.all();

    const car = cars.find((item) => item.id === carId);

    if (!car) {
      return reply.code(404).send({
        message: "Samochód nie został znaleziony.",
      });
    }

    const images = await server.db.orm.public.CarImage.all();

    const image = images.find(
      (item) => item.id === imageId && item.carId === carId,
    );

    if (!image) {
      return reply.code(404).send({
        message: "Zdjęcie nie zostało znalezione.",
      });
    }

    await storage.delete(image.storageKey);

    const deletedImage = await server.db.orm.public.CarImage.where({
      id: imageId,
    }).delete();

    if (image.isPrimary) {
      const remainingImages = await server.db.orm.public.CarImage.all();

      const carImages = remainingImages
        .filter((item) => item.carId === carId)
        .sort((a, b) => a.position - b.position);

      if (carImages.length > 0) {
        await server.db.orm.public.CarImage.where({
          id: carImages[0].id,
        }).update({
          isPrimary: true,
        });
      }
    }

    return {
      image: deletedImage,
    };
  });

  server.patch<{
    Params: {
      carId: string;
      imageId: string;
    };
  }>("/:carId/images/:imageId", async (request, reply) => {
    const { carId, imageId } = request.params;

    const result = updateCarImagePrimarySchema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({
        message: "Nieprawidłowe dane zdjęcia.",
        errors: result.error.issues.map((issue: z.ZodIssue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const cars = await server.db.orm.public.Car.all();

    const car = cars.find((item) => item.id === carId);

    if (!car) {
      return reply.code(404).send({
        message: "Samochód nie został znaleziony.",
      });
    }

    const images = await server.db.orm.public.CarImage.all();

    const image = images.find(
      (item) => item.id === imageId && item.carId === carId,
    );

    if (!image) {
      return reply.code(404).send({
        message: "Zdjęcie nie zostało znalezione.",
      });
    }

    const { isPrimary } = result.data;

    if (isPrimary) {
      const otherPrimaryImages = images.filter(
        (item) => item.carId === carId && item.isPrimary && item.id !== imageId,
      );

      for (const otherImage of otherPrimaryImages) {
        await server.db.orm.public.CarImage.where({
          id: otherImage.id,
        }).update({
          isPrimary: false,
        });
      }
    }

    const updatedImage = await server.db.orm.public.CarImage.where({
      id: imageId,
    }).update({
      isPrimary,
    });

    return {
      image: updatedImage,
    };
  });

  server.patch<{
    Params: {
      carId: string;
      imageId: string;
    };
  }>("/:carId/images/:imageId/position", async (request, reply) => {
    const { carId, imageId } = request.params;

    const result = updateCarImagePositionSchema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({
        message: "Nieprawidłowa pozycja zdjęcia.",
        errors: result.error.issues.map((issue: z.ZodIssue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const cars = await server.db.orm.public.Car.all();

    const car = cars.find((item) => item.id === carId);

    if (!car) {
      return reply.code(404).send({
        message: "Samochód nie został znaleziony.",
      });
    }

    const images = await server.db.orm.public.CarImage.all();

    const carImages = images
      .filter((item) => item.carId === carId)
      .sort((a, b) => a.position - b.position);

    const imageIndex = carImages.findIndex((item) => item.id === imageId);

    if (imageIndex === -1) {
      return reply.code(404).send({
        message: "Zdjęcie nie zostało znalezione.",
      });
    }

    const { position } = result.data;

    if (position >= carImages.length) {
      return reply.code(400).send({
        message: "Nieprawidłowa pozycja zdjęcia.",
      });
    }

    const reorderedImages = [...carImages];

    const [movedImage] = reorderedImages.splice(imageIndex, 1);

    reorderedImages.splice(position, 0, movedImage);

    for (let index = 0; index < reorderedImages.length; index++) {
      await server.db.orm.public.CarImage.where({
        id: reorderedImages[index].id,
      }).update({
        position: index,
      });
    }

    const updatedImages = await server.db.orm.public.CarImage.all();

    return {
      images: updatedImages
        .filter((item) => item.carId === carId)
        .sort((a, b) => a.position - b.position),
    };
  });
};
