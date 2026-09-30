import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";

export const jwtPlugin = fp(async (server) => {
  await server.register(fastifyJwt, {
    secret: process.env.JWT_SECRET!,
    cookie: {
      cookieName: "gms_token",
      signed: false,
    },
  });
});
