import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { CreateEventProps } from "./CreateEvent.types";
import { useReducer } from "react";
import { useEvent } from "../../../../../../stateManagement/EventDataProvider";

const initialState = {
  date: "",
  time: "",
  place: "",
  price: "",
  image: "",
  qr: "",
};

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
    case "setImage":
      return { ...state, image: action.payload };
    case "setQr":
      return { ...state, qr: action.payload };
    case "resetState":
      return initialState;
    default:
      throw new Error("Nothing to do !!");
  }
};

const CreateEvent = ({
  openCreateEvent,
  handleCloseCreateEvent,
}: CreateEventProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createEvent } = useEvent();

  const { date, time, place, price, image, qr } = state;

  const handleSubmitCreatedEvent = (e: any) => {
    e.preventDefault();

    const newEvent = {
      date,
      time,
      place,
      price,
      image,
      qr,
    };
    createEvent(newEvent);
    dispatch({ type: "resetState" });
    handleCloseCreateEvent();
  };

  return (
    <div>
      <Dialog open={openCreateEvent} onClose={handleCloseCreateEvent}>
        <DialogTitle>Vytvořit událost</DialogTitle>
        <DialogContent>
          <form>
            <input
              placeholder="Date"
              type="text"
              value={date}
              onChange={(e) =>
                dispatch({ type: "setDate", payload: e.target.value })
              }
            />
            <input
              placeholder="Time"
              type="text"
              value={time}
              onChange={(e) =>
                dispatch({ type: "setTime", payload: e.target.value })
              }
            />
            <input
              placeholder="Place"
              type="text"
              value={place}
              onChange={(e) =>
                dispatch({ type: "setPlace", payload: e.target.value })
              }
            />
            <input
              placeholder="Price"
              type="text"
              value={price}
              onChange={(e) =>
                dispatch({ type: "setPrice", payload: e.target.value })
              }
            />
            <input
              placeholder="Image URL"
              type="text"
              value={image}
              onChange={(e) =>
                dispatch({ type: "setImage", payload: e.target.value })
              }
            />
            <input
              placeholder="QR Image"
              type="text"
              value={qr}
              onChange={(e) =>
                dispatch({ type: "setQr", payload: e.target.value })
              }
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitCreatedEvent}>Vytvořit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateEvent;
