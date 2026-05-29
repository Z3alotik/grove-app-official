import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { format } from "date-fns";
import {
  EventContextType,
  EventData,
  EventDataProviderProps,
  Participant,
} from "./EventDataProvider.types";
import { useSnackbar } from "../SnackbarState/SnackbarProvider";
import { useAuth } from "../AuthState/AuthProvider";
import { getCurrentEventRequest } from "../../api/get-current-event";
import { createEventRequest } from "../../api/create-event";
import { handleParticipateRequest } from "../../api/handle-participate";
import { getParticipantsRequest } from "../../api/get-participants";

/**
 * Default event data displayed when no event is found
 * @type {EventData}
 */
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

/**
 * Event data context for managing event state across the application
 * @type {React.Context<EventContextType | undefined>}
 */
const EventDataContext = createContext<EventContextType | undefined>(undefined);

/**
 * EventDataProvider component that manages event state and provides methods to interact with events
 * @component
 * @param {EventDataProviderProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 * @returns {React.ReactElement} The provider component with event context
 */
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

  /**
   * Fetches the current event data from the backend and formats the date
   * Falls back to default event data if the request fails
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const fetchCurrentEvent = useCallback(async () => {
    try {
      const response = await getCurrentEventRequest();
      const data = response.data;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  /**
   * Creates a new event and sends event data to the backend
   * On success, fetches updated event data and shows success message
   * On failure, handles form validation errors
   * @async
   * @function
   * @param {FormData} data - Form data containing event details (date, time, place, price, news, banner, qr)
   * @returns {Promise<void>}
   */
  const createEvent = async (data: FormData) => {
    try {
      await createEventRequest(data);
      fetchCurrentEvent();
      showSnackbar("Nová událost vytvořena", "success");
    } catch (err) {
      if (err) {
        handleEventFormErrors(err);
      } else {
        showSnackbar("Událost nebylo možné vytvořit", "error");
        console.error(err);
      }
    }
  };

  /**
   * Registers the current user as a participant in the event
   * Shows a warning if the user is already a participant
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const handleParticipate = async () => {
    try {
      await handleParticipateRequest(token);

      showSnackbar("Účast potrvzena !", "success");
      setIsParticipating(true);
    } catch (err) {
      showSnackbar("Tvá účast je již potrvzena !", "warning");
    }
  };

  /**
   * Fetches all event participants from the backend
   * Updates the participants state with the fetched data
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const handleFetchParticipants = useCallback(async () => {
    try {
      const response = await getParticipantsRequest();
      const data = response.data;
      setParticipants(data);
    } catch (err) {
      showSnackbar("Fetching participants failed!", "warning");
    }
  }, []);

  /**
   * Checks if the current user is a participant in the event
   * Updates the isParticipating state accordingly
   * @function
   * @returns {void}
   */
  const handleCheckUserParticipation = useCallback(() => {
    if (participants.some((participant) => participant.name === user?.name)) {
      setIsParticipating(true);
    } else {
      setIsParticipating(false);
    }
  }, [participants, user]);

  /**
   * Handles errors from event form submission
   * Extracts validation errors from the response and passes them for field validation
   * @function
   * @param {any} error - Error object from the failed request (should contain response.data)
   * @returns {void}
   */
  const handleEventFormErrors = (error: any) => {
    handleFieldValidation(error.response.data);
  };

  /**
   * Displays validation error messages for each field in a snackbar
   * Iterates through the error data and shows each error as a warning notification
   * @function
   * @param {any} errorData - Object containing field-level validation errors
   * @returns {void}
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
        participants,
      }}
    >
      {children}
    </EventDataContext.Provider>
  );
};

/**
 * Hook to use the EventDataContext
 * Must be used within an EventDataProvider component
 * @function
 * @returns {EventContextType} The event context value containing state and methods
 * @throws {Error} If used outside of EventDataProvider
 */
export const useEvent = () => {
  const context = useContext(EventDataContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventDataProvider");
  }
  return context;
};
