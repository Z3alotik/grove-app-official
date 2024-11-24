import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  TextField,
} from "@mui/material";
import { CreateEventProps } from "./CreateEvent.types";
import useCreateEvent from "./useCreateEvent";
import useStyles from "./CreateEvent.styles";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ImageIcon from "@mui/icons-material/Image";

const CreateEvent = ({
  openCreateEvent,
  handleCloseCreateEvent,
}: CreateEventProps) => {
  const { dispatch, handleSubmitCreatedEvent, state } = useCreateEvent({
    handleCloseCreateEvent,
  });
  const classes = useStyles();

  return (
    <div>
      <Dialog
        className={classes.dialog}
        open={openCreateEvent}
        onClose={handleCloseCreateEvent}
      >
        <DialogTitle
          sx={{
            color: "white",
            fontFamily: "Bebas Neue",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Vytvořit událost
        </DialogTitle>
        <Divider variant="middle" sx={{ borderColor: "white" }} />
        <DialogContent>
          <FormControl className={classes.eventForm}>
            <TextField
              className={classes.textField}
              size="small"
              type="date"
              label="Date"
              margin="dense"
              required
              value={state.date}
              onChange={(e) =>
                dispatch({ type: "setDate", payload: e.target.value })
              }
            />
            <TextField
              className={classes.textField}
              size="small"
              label="Time"
              type="time"
              margin="dense"
              required
              value={state.time}
              onChange={(e) =>
                dispatch({ type: "setTime", payload: e.target.value })
              }
            />
            <TextField
              className={classes.textField}
              size="small"
              label="Place"
              margin="dense"
              required
              value={state.place}
              onChange={(e) =>
                dispatch({ type: "setPlace", payload: e.target.value })
              }
            />
            <TextField
              className={classes.textField}
              size="small"
              label="Price"
              margin="dense"
              required
              value={state.price}
              onChange={(e) =>
                dispatch({ type: "setPrice", payload: e.target.value })
              }
            />
            <TextField
              className={classes.textField}
              label="News"
              multiline
              margin="dense"
              rows={4}
              value={state.news}
              onChange={(e) =>
                dispatch({ type: "setNews", payload: e.target.value })
              }
            />
            <div className={classes.fileInputDiv}>
              <ImageIcon
                sx={{
                  color: "white",
                }}
              />
              <input
                className={classes.imageInput}
                required
                placeholder="Banner URL"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    dispatch({ type: "setBanner", payload: e.target.files[0] });
                  }
                }}
              />
            </div>
            <div className={classes.fileInputDiv}>
              <QrCode2Icon
                sx={{
                  color: "white",
                }}
              />
              <input
                className={classes.imageInput}
                required
                placeholder="QR Image"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    dispatch({ type: "setQr", payload: e.target.files[0] });
                  }
                }}
              />
            </div>
          </FormControl>
        </DialogContent>
        <DialogActions
          sx={{
            display: "contents",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmitCreatedEvent}
            sx={{
              color: "black",
              backgroundColor: "white",
              fontFamily: "Bebas Neue",
              fontSize: "1.5rem",
            }}
          >
            Vytvořit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateEvent;
