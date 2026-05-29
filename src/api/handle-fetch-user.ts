import { api } from "./api";

export const handleFetchUserRequest = (jwtToken: string) => {
  return api.get("/auth/loggedUser", {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
};
