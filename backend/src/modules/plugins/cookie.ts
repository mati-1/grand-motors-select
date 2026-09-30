import fp from "fastify-plugin";
import fastifyCookie from "@fastify/cookie";

export const cookiePlugin = fp(async (server) => {
  await server.register(fastifyCookie);
});
