import { ReactNode } from "react";

export type EventData = {
  date: string;
  time: string;
  place: string;
  price: string;
  news: string;
  banner: string;
  qr: string;
};

export interface EventContextType {
  eventData: EventData;
  createEvent: (data: FormData) => void;
}

export interface EventDataProviderProps {
  children: ReactNode;
}
