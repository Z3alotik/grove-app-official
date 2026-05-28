import { api } from "./api";

export const getParticipantsRequest = () => {
  return api.get("/participation");
};
