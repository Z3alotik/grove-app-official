import { createContext, useContext, useState } from "react";
import {
  EventContextType,
  EventData,
  EventDataProviderProps,
} from "./EventDataProvider.types";

const EventDataContext = createContext<EventContextType | undefined>(undefined);

export const EventDataProvider = ({ children }: EventDataProviderProps) => {
  const [eventData, setEventData] = useState<EventData>({
    date: "",
    time: "",
    place: "",
    price: "",
    image: "",
    qr: "",
  });

  const createEvent = (data: EventData) => {
    setEventData(data);
  };

  return (
    <EventDataContext.Provider value={{ eventData, createEvent }}>
      {children}
    </EventDataContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventDataContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventDataProvider");
  }
  return context;
};
