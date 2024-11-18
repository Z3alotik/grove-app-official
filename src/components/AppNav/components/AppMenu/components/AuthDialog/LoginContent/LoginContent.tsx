import {
  Checkbox,
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

const LoginContent = () => {
  const classes = useStyles();
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
              label="Name"
              margin="dense"
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
      </DialogContent>
    </>
  );
};

export default LoginContent;
