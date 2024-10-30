import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SettingProps } from "./Settings.types";
import LoginIcon from "@mui/icons-material/Login";
import useStyles from "./Settings.styles";
import { NavLink } from "react-router-dom";

const Settings = ({ openSettings, onCloseSettings }: SettingProps) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer open={openSettings} onClose={onCloseSettings} anchor="right">
        <Box className={classes.boxPaper}>
          <List>
            <NavLink to="/login">
              <ListItem key="login" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log In" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Settings;
