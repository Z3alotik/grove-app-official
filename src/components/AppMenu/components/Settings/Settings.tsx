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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import useStyles from "./Settings.styles";

const Settings = ({ openSettings, onCloseSettings }: SettingProps) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer open={openSettings} onClose={onCloseSettings} anchor="right">
        <Box className={classes.boxPaper}>
          <List>
            <ListItem key="login" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Log In" />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem key="register" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Settings;
