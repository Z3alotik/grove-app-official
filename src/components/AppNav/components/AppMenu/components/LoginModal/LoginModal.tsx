import useStyles from "./LoginModal.styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LoginModalProps } from "./LoginModal.types";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const LoginModal = ({ openLogin, handleClose }: LoginModalProps) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog open={openLogin} onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <form>
            <div className={classes.inputWrapper}>
              <input
                className={classes.inputBox}
                type="text"
                placeholder="Name"
                required
              />
              <PersonIcon />
            </div>
            <div className={classes.inputWrapper}>
              <input
                className={classes.inputBox}
                type="password"
                placeholder="Password"
                required
              />
              <LockIcon />
            </div>
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginModal;
