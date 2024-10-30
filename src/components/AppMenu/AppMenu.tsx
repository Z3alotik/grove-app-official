import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import useAppMenu from "./useAppMenu";
import Settings from "./components/Settings/Settings";
import useStyles from "./AppMenu.styles";

const AppMenu = () => {
  const classes = useStyles();
  const { handleCloseSettings, handleOpenSettings, openSettings } =
    useAppMenu();

  return (
    <>
      <div className={classes.navigation}>
        <Link to="home" smooth={true} duration={500}>
          <IconButton size="large" aria-label="home">
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="event" smooth={true} duration={500}>
          <IconButton size="large" aria-label="event">
            <EventIcon />
          </IconButton>
        </Link>

        <Link to="music" smooth={true} duration={500}>
          <IconButton size="large" aria-label="music">
            <MusicNoteIcon />
          </IconButton>
        </Link>

        <Link to="about" smooth={true} duration={500}>
          <IconButton size="large" aria-label="info">
            <InfoIcon />
          </IconButton>
        </Link>
      </div>
      <div className={classes.settings}>
        <IconButton size="large" aria-label="info" onClick={handleOpenSettings}>
          <MenuIcon />
        </IconButton>
        <Settings
          openSettings={openSettings}
          onCloseSettings={handleCloseSettings}
        />
      </div>
    </>
  );
};

export default AppMenu;
