import { api } from "./api";

export const getCurrentEventRequest = () => {
  return api.get("/events/current");
};
