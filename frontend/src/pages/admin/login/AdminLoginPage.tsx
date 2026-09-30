import { useState, type FormEvent } from "react";

import { FormInput } from "../../../components/form/FormInput";
import { LogoComponent } from "../../../components/logo";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/auth/useLogin";

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
          bg-[#b99a5c]/[0.035]
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
            <span className="text-[11px] text-[#b99a5c]">Panel firmy</span>

            <h1
              className="
                text-[20px]
                font-medium
                tracking-[-0.02em]
                text-white
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
              <button
                type="submit"
                disabled={loginMutation.isPending}
                className="
                  flex
                  h-11
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#d2b878]
                  px-6
                  text-[11px]
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#e0c98b]
                  disabled:cursor-default
                  disabled:opacity-60
                "
              >
                {loginMutation.isPending ? "Logowanie..." : "Zaloguj się"}
              </button>
            </div>
          </form>
        </div>

        <p
          className="
            mt-6
            text-center
            text-[10px]
            text-white/20
          "
        >
          Panel administracyjny · Grand Motors Select
        </p>
      </div>
    </main>
  );
};
