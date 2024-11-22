import { format } from "date-fns";

export const formatTime = (time: string) => {
  if (time.length === 5) {
    return time + ":00";
  }
  return time;
};
