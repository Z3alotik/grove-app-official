import useStyles from "../../../../../../common/commonStyles.styles";
import LoginContent from "./LoginContent/LoginContent";
import RegisterContent from "./RegisterContent/RegisterContent";
import { useAuth } from "../../../../../../stateManagement/AuthState/AuthProvider";
import { GADialog } from "../../../../../General/GADialog/GADialog";
import useLoginContent from "./LoginContent/useLoginContent";
import useRegisterContent from "./RegisterContent/useRegisterContent";

const AuthDialog = () => {
  const classes = useStyles();
  const {
    openAuthDialog,
    handleCloseAuthDialog,
    isLogin,
    handleChangeAuthContent,
  } = useAuth();

  const { handleLoginSubmit, loginState, loginDispatch } = useLoginContent();
  const { handleRegisterSubmit, registerState, registerDispatch } =
    useRegisterContent();

  return (
    <GADialog
      open={openAuthDialog}
      onClose={handleCloseAuthDialog}
      title={isLogin ? "Přihlásit se" : "Zaregistrovat se"}
      size="sm"
      dividers="both"
      onAccept={() => (isLogin ? handleLoginSubmit() : handleRegisterSubmit())}
      acceptButtonText={isLogin ? "Přihlásit se" : "Zaregistrovat se"}
    >
      {isLogin ? (
        <LoginContent state={loginState} dispatch={loginDispatch} />
      ) : (
        <RegisterContent state={registerState} dispatch={registerDispatch} />
      )}
      <div className={classes.spanDiv}>
        <span className={classes.spanButton} onClick={handleChangeAuthContent}>
          {isLogin
            ? "Nemáš profil? Zaregistruj se zde.."
            : "Už máš profil? Přihlaš se zde.."}
        </span>
      </div>
    </GADialog>
  );
};

export default AuthDialog;
