import Fastify from "fastify";
import cors from "@fastify/cors";

import { prismaPlugin } from "./plugins/prisma.js";
import { jwtPlugin } from "./plugins/jwt.js";
import { cookiePlugin } from "./modules/plugins/cookie.js";
import { multipartPlugin } from "./plugins/multipart.js";
import { staticPlugin } from "./plugins/static.js";

import { authRoutes } from "./modules/auth/routes.js";
import { carsRoutes } from "./modules/cars/routes.js";

const server = Fastify({
  logger: true,
});

await server.register(cors, {
  origin: process.env.FRONTEND_URL,
  credentials: true,
});

await server.register(prismaPlugin);
await server.register(jwtPlugin);
await server.register(cookiePlugin);
await server.register(multipartPlugin);
await server.register(staticPlugin);

await server.register(authRoutes, {
  prefix: "/api/auth",
});
await server.register(carsRoutes, {
  prefix: "/api/cars",
});

server.get("/", async () => {
  return {
    message: "Grand Motors Select API działa",
  };
});

const start = async () => {
  try {
    await server.listen({
      port: 3000,
      host: "0.0.0.0",
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
