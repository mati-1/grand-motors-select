import type { db } from "../prisma/db.js";

declare module "fastify" {
  interface FastifyInstance {
    db: typeof db;
  }
}
