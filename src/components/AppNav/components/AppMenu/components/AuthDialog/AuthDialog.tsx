import { Dialog } from "@mui/material";
import useStyles from "../CreateEvent/CreateEvent.styles";
import LoginContent from "./LoginContent/LoginContent";
import RegisterContent from "./RegisterContent/RegisterContent";
import { AuthDialogProps } from "./AuthDialog.types";

const AuthDialog = ({
  openAuthDialog,
  handleCloseAuthDialog,
  isLogin,
  handleChangeAuthContent,
}: AuthDialogProps) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      open={openAuthDialog}
      onClose={handleCloseAuthDialog}
    >
      {isLogin ? <LoginContent /> : <RegisterContent />}
      <div className={classes.spanDiv}>
        <span className={classes.spanButton} onClick={handleChangeAuthContent}>
          {isLogin
            ? "Nemáš profil? Zaregistruj se zde.."
            : "Už máš profil? Přihlaš se zde.."}
        </span>
      </div>
    </Dialog>
  );
};

export default AuthDialog;
