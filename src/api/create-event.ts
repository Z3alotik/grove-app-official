import { api } from "./api";

export const createEventRequest = (data: FormData) => {
  return api.post("/events", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
