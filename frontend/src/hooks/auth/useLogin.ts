import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login, type LoginInput } from "../../api/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: LoginInput) => login(input),

    onSuccess: (data) => {
      queryClient.setQueryData(["auth", "me"], data);
    },
  });
};
