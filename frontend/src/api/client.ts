const API_URL = import.meta.env.VITE_API_URL;

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export const apiClient = async <T>(
  endpoint: string,
  options: ApiRequestOptions = {},
): Promise<T> => {
  const hasBody = options.body !== undefined;

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(hasBody ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    body: hasBody ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      window.dispatchEvent(new Event("gms-auth-expired"));
    }

    let message = "Wystąpił błąd podczas komunikacji z serwerem.";

    try {
      const error = await response.json();

      if (typeof error?.message === "string") {
        message = error.message;
      }
    } catch {
      // Brak poprawnego JSON-a w odpowiedzi.
    }

    throw new Error(message);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
};
