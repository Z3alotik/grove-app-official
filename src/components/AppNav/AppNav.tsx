import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-scroll";
import useStyles from "./AppNav.styles";
import AppMenu from "./components/AppMenu/AppMenu";
import useAppNav from "./useAppNav";

const AppNav = () => {
  const classes = useStyles();
  const { handleCloseMenu, handleOpenMenu, openMenu } = useAppNav();

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
      <div className={classes.menu}>
        {/* <IconButton size="large" aria-label="info" onClick={hand}>
          <MenuIcon />
        </IconButton> */}
        <AppMenu
          onOpenMenu={handleOpenMenu}
          onCloseMenu={handleCloseMenu}
          openMenu={openMenu}
        />
      </div>
    </>
  );
};

export default AppNav;
