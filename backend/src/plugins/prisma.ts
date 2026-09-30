import fp from "fastify-plugin";
import { db } from "../prisma/db.js";

export const prismaPlugin = fp(async (server) => {
  server.decorate("db", db);
});
