import { useReducer } from "react";
import { useEvent } from "../../../../../../stateManagement/EventState/EventDataProvider";
import { CreateEventHookProps } from "./CreateEventDialog.types";
import { formatTime } from "../../../../../../utility/DatetimeFormatting";

/**
 * Initial state object for event form
 * Contains empty string values for all event fields
 * @type {Object}
 * @property {string} date - Event date in ISO format
 * @property {string} time - Event time in HH:mm format
 * @property {string} place - Event location/venue name
 * @property {string} price - Event ticket price
 * @property {string} news - Event description/news
 * @property {string} banner - Event banner image file
 * @property {string} qr - Event QR code file
 */
const initialState = {
  date: "",
  time: "",
  place: "",
  price: "",
  news: "",
  banner: "",
  qr: "",
};

/**
 * Reducer function to manage event form state
 * Handles different action types to update specific form fields or reset the entire state
 * @function
 * @param {Object} state - Current state object containing event form data
 * @param {Object} action - Dispatch action object
 * @param {string} action.type - Action type (setDate, setTime, setPlace, setPrice, setNews, setBanner, setQr, resetState)
 * @param {any} action.payload - Value to update in state (optional, not used for resetState)
 * @returns {Object} Updated state object
 * @throws {Error} If action type is not recognized
 * @example
 * dispatch({ type: "setDate", payload: "2026-05-29" });
 * dispatch({ type: "resetState" });
 */
const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "setDate":
      return { ...state, date: action.payload };
    case "setTime":
      return { ...state, time: action.payload };
    case "setPlace":
      return { ...state, place: action.payload };
    case "setPrice":
      return { ...state, price: action.payload };
    case "setNews":
      return { ...state, news: action.payload };
    case "setBanner":
      return {
        ...state,
        banner: action.payload,
      };
    case "setQr":
      return { ...state, qr: action.payload };
    case "resetState":
      return initialState;
    default:
      throw new Error("Nothing to do !!");
  }
};

/**
 * Custom hook for managing event creation form state and submission
 * Handles form validation, file uploads, and API communication
 * @function
 * @param {CreateEventHookProps} props - Hook props
 * @param {Function} props.handleCloseCreateEventDialog - Callback to close the event creation dialog
 * @returns {Object} Hook return object
 * @returns {Function} return.dispatch - Reducer dispatch function to update form state
 * @returns {Function} return.handleSubmitCreatedEvent - Async form submission handler
 * @returns {Object} return.state - Current form state containing all event fields
 * @example
 * const { dispatch, handleSubmitCreatedEvent, state } = useCreateEvent({ handleCloseCreateEventDialog });
 *
 * // Update a form field
 * dispatch({ type: "setDate", payload: "2026-05-29" });
 *
 * // Submit the form
 * await handleSubmitCreatedEvent(e);
 */
const useCreateEvent = ({
  handleCloseCreateEventDialog,
}: CreateEventHookProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createEvent } = useEvent();

  const { date, time, place, price, news, banner, qr } = state;

  /**
   * Handles event form submission
   * Validates form data, prepares FormData object with all fields, and sends to backend
   * Closes the dialog after submission regardless of success or failure
   * @async
   * @function
   * @param {Event} e - Form submission event
   * @returns {Promise<void>}
   */
  const handleSubmitCreatedEvent = async (e: any) => {
    e.preventDefault();

    // Format time to HH:mm:ss
    const formattedTime = formatTime(time);

    // Create a new FormData object
    const formData = new FormData();
    // Append text field values from the reducer state
    formData.append("date", date);
    formData.append("time", formattedTime);
    formData.append("place", place);
    formData.append("price", price);
    formData.append("news", news);
    if (banner) {
      formData.append("banner", banner);
    }
    if (qr) {
      formData.append("qr", qr);
    }

    // Console log the data that I wanna sent to BE
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    // Call create event POST function
    createEvent(formData);
    handleCloseCreateEventDialog();
  };

  return {
    dispatch,
    handleSubmitCreatedEvent,
    state,
  };
};

export default useCreateEvent;
