import { createContext, useContext, useEffect, useState } from "react";
import {
  EventContextType,
  EventData,
  EventDataProviderProps,
} from "./EventDataProvider.types";
import axios from "axios";
import { format } from "date-fns";
import { useSnackbar } from "./SnackbarProvider";

// Event data context
const EventDataContext = createContext<EventContextType | undefined>(undefined);
// Base API URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const EventDataProvider = ({ children }: EventDataProviderProps) => {
  const { showSnackbar } = useSnackbar();
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

  useEffect(() => {
    fetchCurrentEvent();
  }, []);

  // Fetch current event data
  const fetchCurrentEvent = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events/current`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Console log data fetched from BE
      console.log("Data fetched from BE:", data);

      // Format the date to a dd.mm.yyyy format
      const formattedDate = format(new Date(data.date), "dd.MM.yyyy");
      // Update the context state
      setEventData({ ...data, date: formattedDate });
    } catch (error) {
      //alert("There was a problem loading data...");
    }
  };

  // Create event and send event data to BE and Postgres DB
  const createEvent = async (data: FormData) => {
    const response = await api.post("/events", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 201) {
      console.log("Data sent to BE:", response.data);
      fetchCurrentEvent();
      showSnackbar("Nová událost vytvořena", "success");
    } else {
      showSnackbar("Událost nebylo možné vytvořit", "error");
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
