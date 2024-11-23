import { useReducer } from "react";
import { useEvent } from "../../../../../../stateManagement/EventDataProvider";
import { CreateEventHookProps } from "./CreateEvent.types";
import { formatTime } from "../../../../../../utility/DatetimeFormatting";

const initialState = {
  date: "",
  time: "",
  place: "",
  price: "",
  news: "",
  banner: "",
  qr: "",
};

const useCreateEvent = ({ handleCloseCreateEvent }: CreateEventHookProps) => {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createEvent } = useEvent();

  const { date, time, place, price, news, banner, qr } = state;

  // Submit form function
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
    handleCloseCreateEvent();
  };

  return {
    dispatch,
    handleSubmitCreatedEvent,
    state,
  };
};

export default useCreateEvent;
