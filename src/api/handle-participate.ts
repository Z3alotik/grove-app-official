import { api } from "./api";

export const handleParticipateRequest = (token: string) => {
  return api.post("/participation", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
