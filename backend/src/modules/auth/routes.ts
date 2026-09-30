import type { FastifyPluginAsync } from "fastify";

export const authRoutes: FastifyPluginAsync = async (server) => {
  server.get("/users", async () => {
    const users = await server.db.orm.public.User.all();

    return users;
  });
};
