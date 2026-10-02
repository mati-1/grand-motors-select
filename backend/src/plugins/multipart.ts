import fp from "fastify-plugin";
import multipart from "@fastify/multipart";

export const multipartPlugin = fp(async (server) => {
  await server.register(multipart, {
    limits: {
      fileSize: 15 * 1024 * 1024,
      files: 30,
    },
  });
});
