import { Dialog, DialogTitle, Divider } from "@mui/material";
import useStyles from "./ParticipantsDialog.styles";
import { ParticipantsDialogProps } from "./ParticipantsDialog.types";
import ParticipantsTable from "./components/ParticipantsTable/ParticipantsTable";

const ParticipantsDialog = ({
  openParticipants,
  handleCloseParticipants,
}: ParticipantsDialogProps) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      open={openParticipants}
      onClose={handleCloseParticipants}
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
        Účastníci
      </DialogTitle>
      <Divider variant="middle" sx={{ borderColor: "white" }} />
      <ParticipantsTable />
    </Dialog>
  );
};

export default ParticipantsDialog;
