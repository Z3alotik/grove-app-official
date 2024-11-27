import { Dialog } from "@mui/material";
import useStyles from "../CreateEvent/CreateEvent.styles";
import LoginContent from "./LoginContent/LoginContent";
import RegisterContent from "./RegisterContent/RegisterContent";
import { useAuth } from "../../../../../../stateManagement/AuthState/AuthProvider";

const AuthDialog = () => {
  const classes = useStyles();
  const {
    openAuthDialog,
    handleCloseAuthDialog,
    isLogin,
    handleChangeAuthContent,
  } = useAuth();

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
