import { createContext, useContext, useEffect, useState } from "react";
import {
  EventContextType,
  EventData,
  EventDataProviderProps,
} from "./EventDataProvider.types";
import axios from "axios";
import { format } from "date-fns";

const EventDataContext = createContext<EventContextType | undefined>(undefined);

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const EventDataProvider = ({ children }: EventDataProviderProps) => {
  const [eventData, setEventData] = useState<EventData>({
    banner: "",
    date: "",
    time: "",
    place: "",
    price: "",
    news: "",
    qr: "",
  });
  const api = axios.create({ baseURL: API_BASE_URL });

  // Fetch current event data
  useEffect(() => {
    const fetchCurrentEvent = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/events/current`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched from BE:", data);

        // Format the date to a dd.mm.yyyy format
        const formattedDate = format(new Date(data.date), "dd.MM.yyyy");
        // Set the current event data, so we can than use them across our application via context API
        setEventData({ ...data, date: formattedDate });
      } catch {
        alert("There was a problem loading data...");
      }
    };
    fetchCurrentEvent();
  }, []);

  // Create event and send event data to BE and Postgres DB
  const createEvent = async (data: FormData) => {
    const response = await api.post("/events", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 201) {
      console.log("Event created successfully");
      console.log("Data sent to BE:", response.data);
      // window.location.reload();
    } else {
      console.error("Failed to create event");
    }
  };

  return (
    <EventDataContext.Provider value={{ eventData, createEvent }}>
      {children}
    </EventDataContext.Provider>
  );
};

// Helper function for easier use of event context
export const useEvent = () => {
  const context = useContext(EventDataContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventDataProvider");
  }
  return context;
};
