import { Backdrop, Box, SpeedDial, SpeedDialAction } from "@mui/material";
import useStyles from "./AppMenu.styles";
import MenuIcon from "@mui/icons-material/Menu";
import useAppMenu from "./useAppMenu";
import LoginModal from "./components/LoginModal/LoginModal";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import { getActionsDefinition } from "./AppMenu.consts";

const AppMenu = () => {
  const classes = useStyles();
  const {
    handleOpenCreateEvent,
    handleOpenLogin,
    handleCloseLogin,
    handleOpenParticipants,
    handleCloseMenu,
    handleOpenMenu,
    openMenu,
    openLogin,
    openCreateEvent,
    handleCloseCreateEvent,
  } = useAppMenu();

  const actions = getActionsDefinition({
    handleOpenCreateEvent,
    handleOpenLogin,
    handleOpenParticipants,
  });

  return (
    <>
      <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Backdrop open={openMenu} />
        <SpeedDial
          className={classes.speedDial}
          ariaLabel="AppMenu"
          icon={<MenuIcon />}
          onClose={handleCloseMenu}
          onOpen={handleOpenMenu}
          open={openMenu}
          direction="left"
        >
          {actions.map((action) => (
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
      <LoginModal openLogin={openLogin} handleClose={handleCloseLogin} />
      <CreateEvent
        openCreateEvent={openCreateEvent}
        handleCloseCreateEvent={handleCloseCreateEvent}
      />
    </>
  );
};

export default AppMenu;
