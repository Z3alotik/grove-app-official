import { Alert, Snackbar } from "@mui/material";
import { GASnackbarProps } from "./GASnackbar.types";

const GASnackbar = ({
  open,
  severity,
  message,
  handleClose,
}: GASnackbarProps) => {
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GASnackbar;
