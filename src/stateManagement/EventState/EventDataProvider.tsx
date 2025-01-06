import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { format } from "date-fns";
import {
  EventContextType,
  EventData,
  EventDataProviderProps,
  Participant,
} from "./EventDataProvider.types";
import { useSnackbar } from "../SnackbarState/SnackbarProvider";
import { useAuth } from "../AuthState/AuthProvider";

const defaultEvent = {
  banner:
    "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
  date: "NaN",
  time: "NaN",
  place: "NaN",
  price: "NaN",
  news: "NaN",
  qr: "",
};

// Event data context
const EventDataContext = createContext<EventContextType | undefined>(undefined);

export const EventDataProvider = ({ children }: EventDataProviderProps) => {
  const { token, user } = useAuth();
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
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isParticipating, setIsParticipating] = useState(false);
  const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

  /**
   * Fetch current event data
   */
  const fetchCurrentEvent = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/events/current`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Format the date to a dd.mm.yyyy format
      const formattedDate = format(new Date(data.date), "dd.MM.yyyy");
      // Update the context state
      setEventData({ ...data, date: formattedDate });
    } catch (error) {
      // Show default event data
      setEventData(defaultEvent);
      // showSnackbar("Fetching event data failed!", "warning");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    fetchCurrentEvent();
  }, [fetchCurrentEvent]);

  useEffect(() => {
    if (user) {
      handleCheckUserParticipation();
    }
  }, [user]);

  /**
   * Create event and send event data to BE and Postgres DB
   * @param data - Form data
   */
  const createEvent = async (data: FormData) => {
    try {
      const response = await api.post("/events", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      if (response.status === 201) {
        fetchCurrentEvent();
        showSnackbar("Nová událost vytvořena", "success");
      } else {
        showSnackbar("Událost nebylo možné vytvořit", "error");
      }
    } catch (err) {
      if (err) {
        handleEventFormErrors(err);
      } else {
        showSnackbar("Something went wrong!", "error");
        console.error(err);
      }
    }
  };

  /**
   * Create participation for user
   */
  const handleParticipate = async () => {
    try {
      const response = await api.post("/participation", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) showSnackbar("Účast potrvzena !", "success");
      setIsParticipating(true);
      console.log(isParticipating);
    } catch (err) {
      showSnackbar("Tvá účast je již potrvzena !", "warning");
      console.log(isParticipating);
    }
  };

  /**
   * Get all event participants
   */
  const handleFetchParticipants = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/participation`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setParticipants(data);
    } catch (err) {
      showSnackbar("Fetching participants failed!", "warning");
    }
  }, []);

  const handleCheckUserParticipation = useCallback(() => {
    if (participants.some((participant) => participant.name === user?.name)) {
      setIsParticipating(true);
      console.log(true);
    } else {
      setIsParticipating(false);
      console.log(false);
    }
  }, [participants, user]);

  /**
   * Handles register form errors
   * @param error - error from response
   */
  const handleEventFormErrors = (error: any) => {
    handleFieldValidation(error.response.data);
  };

  /**
   * Handles validations for fields.
   * @param errorData - field errors
   */
  const handleFieldValidation = (errorData: any) => {
    Object.entries(errorData).forEach((value) => {
      showSnackbar(`${value[1]}`, "warning");
    });
  };

  return (
    <EventDataContext.Provider
      value={{
        eventData,
        createEvent,
        handleFetchParticipants,
        handleParticipate,
        isParticipating,
      }}
    >
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
