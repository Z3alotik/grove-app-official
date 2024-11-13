import { createContext, useContext, useEffect, useState } from "react";
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

  // Load current event data on reloads
  useEffect(() => {
    const savedEventData = localStorage.getItem("upcomingEvent");
    if (savedEventData) {
      setEventData(JSON.parse(savedEventData));
    }
  }, []);

  const createEvent = (data: EventData) => {
    //Set upcoming event data to state
    setEventData(data);
    //Set upcoming event data to local storage
    localStorage.setItem("upcomingEvent", JSON.stringify(data));
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
