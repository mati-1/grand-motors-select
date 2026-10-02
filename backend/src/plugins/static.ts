import fp from "fastify-plugin";
import fastifyStatic from "@fastify/static";
import path from "node:path";

export const staticPlugin = fp(async (server) => {
  await server.register(fastifyStatic, {
    root: path.resolve(process.cwd(), "storage"),
    prefix: "/uploads/",
    decorateReply: false,
  });
});
