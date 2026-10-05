import { useState, type FormEvent } from "react";

import { FormInput } from "../../../components/form/FormInput";
import { LogoComponent } from "../../../components/logo";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/auth/useLogin";
import { ButtonComponent } from "../../../components/button";

export const AdminLoginPage = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginMutation.mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate("/admin", { replace: true });
        },
      },
    );
  };

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        px-4
        py-12
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-125
          w-125
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#4C9FE5]/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10 flex w-full max-w-105 flex-col items-center">
        <div className="mb-8">
          <LogoComponent />
        </div>

        <div
          className="
            w-full
            rounded-[10px]
            border
            border-white/10
            bg-[#090909]
            p-6
            sm:p-8
          "
        >
          <div className="mb-7 text-center">
            <span className="text-[11px] text-[#4C9FE5]">Panel firmy</span>

            <h1
              className="
                text-[20px]
                font-medium
                tracking-[-0.02em]
                text-[#E8E9E7]
              "
            >
              Zaloguj się
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <FormInput
              id="email"
              name="email"
              label="E-mail"
              type="email"
              autoComplete="email"
              required
              placeholder="admin@grandmotorsselect.pl"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <FormInput
              id="password"
              name="password"
              label="Hasło"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Wprowadź hasło"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            {loginMutation.isError && (
              <p className="text-[10px] text-red-300">
                {loginMutation.error.message}
              </p>
            )}

            <div className="pt-2">
              <ButtonComponent
                type="submit"
                variant="main"
                className="min-w-full"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Logowanie..." : "Zaloguj się"}
              </ButtonComponent>
            </div>
          </form>
        </div>

        <p
          className="
            mt-6
            text-center
            text-[10px]
            text-[#E8E9E7]/20
          "
        >
          Panel administracyjny · Grand Motors Select
        </p>
      </div>
    </main>
  );
};
