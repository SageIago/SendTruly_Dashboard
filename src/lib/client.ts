import { ErrorResponse } from "@/types";
import ky from "ky";

const createHttpInstance = () => {
  // const prefixUrl = import.meta.env.VITE_API_URL;

  const customKy = ky.extend({
    prefixUrl: "/api",
    credentials: "include",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    hooks: {
      beforeRequest: [
        async (request) => {
          const sessionToken = await sessionStorage.getItem("token-storage");
          
          if (sessionToken) {
            request.headers.set("Authorization", `Bearer ${sessionToken}`);
          }
        },
      ],
      beforeError: [
        async (error) => {
          const body = await error.response.json<ErrorResponse>();

          if (error.response && body) {
            error.message = body.message;
          }

          return error;
        },
      ],
      afterResponse: [
        async (request, _options, response) => {
          if (response.status === 401) {
            try {
              const sessionToken = await sessionStorage.getItem("token-storage");

              if (sessionToken) {
                request.headers.set("Authorization", `Bearer ${sessionToken}`);
              }
              return ky(request);
            } catch (error) {
              return new Response(
                JSON.stringify({
                  success: false,
                  code: "FORBIDDEN",
                  message: `Failed to refresh token ${error}`,
                }),
                { status: 403 },
              );
            }
          }

          return response;
        },
      ],
    },
    throwHttpErrors: true,
  });

  return customKy;
};

export const httpClient = createHttpInstance();