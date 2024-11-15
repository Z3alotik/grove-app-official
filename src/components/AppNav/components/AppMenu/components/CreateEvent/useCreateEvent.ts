import { useReducer } from "react";
import { useEvent } from "../../../../../../stateManagement/EventDataProvider";
import { CreateEventHookProps } from "./CreateEvent.types";

const initialState = {
  date: "",
  time: "",
  place: "",
  price: "",
  news: "",
  image: "",
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
      case "setImage":
        return {
          ...state,
          image: URL.createObjectURL(action.payload),
        };
      case "setQr":
        return { ...state, qr: URL.createObjectURL(action.payload) };
      case "resetState":
        return initialState;
      default:
        throw new Error("Nothing to do !!");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createEvent } = useEvent();

  const { date, time, place, price, news, image, qr } = state;

  const handleSubmitCreatedEvent = (e: any) => {
    e.preventDefault();

    const upcomingEvent = {
      date,
      time,
      place,
      price,
      news,
      image,
      qr,
    };
    createEvent(upcomingEvent);
    handleCloseCreateEvent();
  };

  return {
    dispatch,
    handleSubmitCreatedEvent,
    state,
  };
};

export default useCreateEvent;
