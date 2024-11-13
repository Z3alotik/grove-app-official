import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { CreateEventProps } from "./CreateEvent.types";
import useCreateEvent from "./useCreateEvent";

const CreateEvent = ({
  openCreateEvent,
  handleCloseCreateEvent,
}: CreateEventProps) => {
  const { dispatch, handleSubmitCreatedEvent, state } = useCreateEvent({
    handleCloseCreateEvent,
  });
  return (
    <div>
      <Dialog open={openCreateEvent} onClose={handleCloseCreateEvent}>
        <DialogTitle>Vytvořit událost</DialogTitle>
        <DialogContent>
          <form>
            <input
              required
              placeholder="Date"
              type="text"
              value={state.date}
              onChange={(e) =>
                dispatch({ type: "setDate", payload: e.target.value })
              }
            />
            <input
              required
              placeholder="Time"
              type="text"
              value={state.time}
              onChange={(e) =>
                dispatch({ type: "setTime", payload: e.target.value })
              }
            />
            <input
              required
              placeholder="Place"
              type="text"
              value={state.place}
              onChange={(e) =>
                dispatch({ type: "setPlace", payload: e.target.value })
              }
            />
            <input
              required
              placeholder="Price"
              type="text"
              value={state.price}
              onChange={(e) =>
                dispatch({ type: "setPrice", payload: e.target.value })
              }
            />
            <input
              required
              placeholder="Image URL"
              type="text"
              value={state.image}
              onChange={(e) =>
                dispatch({ type: "setImage", payload: e.target.value })
              }
            />
            <input
              required
              placeholder="QR Image"
              type="text"
              value={state.qr}
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
