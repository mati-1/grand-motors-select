import type { FastifyPluginAsync } from "fastify";

import argon2 from "argon2";

export const authRoutes: FastifyPluginAsync = async (server) => {
  server.post<{
    Body: {
      email: string;
      password: string;
    };
  }>("/login", async (request, reply) => {
    const { email, password } = request.body;

    const users = await server.db.orm.public.User.all();

    const user = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase(),
    );

    if (!user) {
      return reply.code(401).send({
        message: "Nieprawidłowy e-mail lub hasło.",
      });
    }

    const passwordValid = await argon2.verify(user.password, password);

    if (!passwordValid) {
      return reply.code(401).send({
        message: "Nieprawidłowy e-mail lub hasło.",
      });
    }

    const token = await server.jwt.sign(
      {
        sub: user.id,
        email: user.email,
        name: user.name,
      },
      {
        expiresIn: "3d",
      },
    );

    reply.setCookie("gms_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 3,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  });

  server.get("/me", async (request, reply) => {
    try {
      await request.jwtVerify();

      return {
        user: {
          id: request.user.sub,
          email: request.user.email,
          name: request.user.name,
        },
      };
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }
  });
};
