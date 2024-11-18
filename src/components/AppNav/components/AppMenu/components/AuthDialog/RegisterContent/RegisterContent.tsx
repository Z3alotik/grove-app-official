import {
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

const RegisterContent = () => {
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
        </FormControl>
      </DialogContent>
    </>
  );
};

export default RegisterContent;
