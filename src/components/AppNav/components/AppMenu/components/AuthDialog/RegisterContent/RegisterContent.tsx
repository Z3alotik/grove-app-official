import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import useStyles from "../../CreateEvent/CreateEvent.styles";
import EmailIcon from "@mui/icons-material/Email";
import useRegisterContent from "./useRegisterContent";

const RegisterContent = () => {
  const classes = useStyles();
  const { state, dispatch, handleRegister } = useRegisterContent();
  return (
    <>
      <DialogTitle
        sx={{
          color: "white",
          fontFamily: "Bebas Neue",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Registrace
      </DialogTitle>
      <Divider variant="middle" sx={{ borderColor: "white" }} />
      <DialogContent>
        <FormControl className={classes.eventForm}>
          <div className={classes.iconTextField}>
            <TextField
              className={classes.textField}
              size="small"
              label="E-mail"
              margin="dense"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
              }
            />
            <EmailIcon
              sx={{ color: "white", position: "absolute", right: 10 }}
            />
          </div>
          <div className={classes.iconTextField}>
            <TextField
              className={classes.textField}
              size="small"
              label="Name"
              margin="dense"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
            />
            <PersonIcon
              sx={{ color: "white", position: "absolute", right: 10 }}
            />
          </div>
          <div className={classes.iconTextField}>
            <TextField
              className={classes.textField}
              size="small"
              label="Password"
              margin="dense"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "setPassword", payload: e.target.value })
              }
            />
            <LockIcon
              sx={{ color: "white", position: "absolute", right: 10 }}
            />
          </div>
        </FormControl>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "white",
              fontFamily: "Bebas Neue",
              fontSize: "1.5rem",
            }}
            onClick={handleRegister}
          >
            {"Registrovat"}
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default RegisterContent;
