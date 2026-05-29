import { DialogContent, FormControl, TextField } from "@mui/material";
import { CreateEventDialogProps } from "./CreateEventDialog.types";
import useCreateEvent from "./useCreateEvent";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ImageIcon from "@mui/icons-material/Image";
import { GADialog } from "../../../../../General/GADialog/GADialog";

const CreateEventDialog = ({
  openCreateEventDialog,
  handleCloseCreateEventDialog,
}: CreateEventDialogProps) => {
  const { dispatch, handleSubmitCreatedEvent, state } = useCreateEvent({
    handleCloseCreateEventDialog,
  });

  return (
    <GADialog
      open={openCreateEventDialog}
      onClose={handleCloseCreateEventDialog}
      onAccept={() => handleSubmitCreatedEvent}
      title="Vytvořit událost"
      dividers="both"
      size="sm"
      acceptButtonText="Vytvořit"
    >
      <DialogContent>
        <FormControl sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            size="small"
            type="date"
            value={state.date}
            onChange={(e) =>
              dispatch({ type: "setDate", payload: e.target.value })
            }
          />

          <TextField
            size="small"
            type="time"
            value={state.time}
            onChange={(e) =>
              dispatch({ type: "setTime", payload: e.target.value })
            }
          />

          <TextField
            size="small"
            label="Place"
            value={state.place}
            onChange={(e) =>
              dispatch({ type: "setPlace", payload: e.target.value })
            }
          />

          <TextField
            size="small"
            label="Price"
            value={state.price}
            onChange={(e) =>
              dispatch({ type: "setPrice", payload: e.target.value })
            }
          />

          <TextField
            label="Info"
            multiline
            rows={4}
            value={state.news}
            onChange={(e) =>
              dispatch({ type: "setNews", payload: e.target.value })
            }
          />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ImageIcon sx={{ color: "text.primary" }} />
            <input
              type="file"
              onChange={(e) =>
                e.target.files &&
                dispatch({ type: "setBanner", payload: e.target.files[0] })
              }
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <QrCode2Icon sx={{ color: "text.primary" }} />
            <input
              type="file"
              onChange={(e) =>
                e.target.files &&
                dispatch({ type: "setQr", payload: e.target.files[0] })
              }
            />
          </div>
        </FormControl>
      </DialogContent>
    </GADialog>
  );
};

export default CreateEventDialog;
