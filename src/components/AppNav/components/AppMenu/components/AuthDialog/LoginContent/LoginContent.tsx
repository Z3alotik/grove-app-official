import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import useStyles from "../../CreateEvent/CreateEvent.styles";
import useLoginContent from "./useLoginContent";

const LoginContent = () => {
  const classes = useStyles();
  const { state, dispatch, handleLoginSubmit } = useLoginContent();
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
        Přihlášení
      </DialogTitle>
      <Divider variant="middle" sx={{ borderColor: "white" }} />
      <DialogContent>
        <FormControl className={classes.eventForm}>
          <div className={classes.iconTextField}>
            <TextField
              className={classes.textField}
              size="small"
              label="Email"
              margin="dense"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
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
          <FormControlLabel
            value="Zapamatovat si mě"
            control={
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="Zapamatovat si mě"
            labelPlacement="end"
            className={classes.formControlLabel}
          />
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
            onClick={handleLoginSubmit}
          >
            {"Přihlásit se"}
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default LoginContent;
