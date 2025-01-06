import { ReactNode } from "react";
import { Role } from "../AuthState/AuthProvider.types";

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
  handleFetchParticipants: () => void;
  handleParticipate: () => void;
  isParticipating: boolean;
}

export interface EventDataProviderProps {
  children: ReactNode;
}

export type Participant = {
  id: number;
  name: string;
  roles: Role[];
};
