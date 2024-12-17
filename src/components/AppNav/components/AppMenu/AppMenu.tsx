import {
  Avatar,
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import useStyles from "./AppMenu.styles";
import MenuIcon from "@mui/icons-material/Menu";
import useAppMenu from "./useAppMenu";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import AuthDialog from "./components/AuthDialog/AuthDialog";
import ParticipantsDialog from "./components/ParticipantsDialog/ParticipantsDialog";
import { useAuth } from "../../../../stateManagement/AuthState/AuthProvider";

const AppMenu = () => {
  const classes = useStyles();
  const {
    handleCloseParticipants,
    handleCloseMenu,
    handleOpenMenu,
    openParticipants,
    openMenu,
    openCreateEvent,
    handleCloseCreateEvent,
    getActionsDefinition,
  } = useAppMenu();

  const actions = getActionsDefinition();
  const { token } = useAuth();

  return (
    <>
      <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Backdrop open={openMenu} />
        <SpeedDial
          className={classes.speedDial}
          ariaLabel="AppMenu"
          icon={
            token ? (
              <Avatar
                alt="userProfile"
                src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                sx={{ width: 40, height: 40 }}
              />
            ) : (
              <MenuIcon />
            )
          }
          onClose={handleCloseMenu}
          onOpen={handleOpenMenu}
          open={openMenu}
          direction="left"
        >
          {actions?.map((action) => (
            <SpeedDialAction
              className={classes.speedDialAction}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.action}
            />
          ))}
        </SpeedDial>
      </Box>
      <AuthDialog />
      <CreateEvent
        openCreateEvent={openCreateEvent}
        handleCloseCreateEvent={handleCloseCreateEvent}
      />
      <ParticipantsDialog
        openParticipants={openParticipants}
        handleCloseParticipants={handleCloseParticipants}
      />
    </>
  );
};

export default AppMenu;
