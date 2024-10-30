import { Backdrop, Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { AppMenuProps } from "./AppMenu.types";
import useStyles from "./AppMenu.styles";
import { actions } from "./AppMenu.consts";
import MenuIcon from "@mui/icons-material/Menu";

const AppMenu = ({ onOpenMenu, onCloseMenu, openMenu }: AppMenuProps) => {
  const classes = useStyles();

  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Backdrop open={openMenu} />
      <SpeedDial
        ariaLabel="AppMenu"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<MenuIcon />}
        onClose={onCloseMenu}
        onOpen={onOpenMenu}
        open={openMenu}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={onCloseMenu}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default AppMenu;
