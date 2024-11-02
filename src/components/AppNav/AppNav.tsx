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
        <div className={classes.navMenu}>
          <Link to="home" smooth={true} duration={500}>
            <IconButton className={classes.iconButton} aria-label="home">
              <HomeIcon />
            </IconButton>
          </Link>

          <Link to="about" smooth={true} duration={500}>
            <IconButton className={classes.iconButton} aria-label="info">
              <InfoIcon />
            </IconButton>
          </Link>

          <Link to="event" smooth={true} duration={500}>
            <IconButton className={classes.iconButton} aria-label="event">
              <EventIcon />
            </IconButton>
          </Link>

          <Link to="music" smooth={true} duration={500}>
            <IconButton className={classes.iconButton} aria-label="music">
              <MusicNoteIcon />
            </IconButton>
          </Link>
        </div>

        <div className={classes.menu}>
          <AppMenu
            onOpenMenu={handleOpenMenu}
            onCloseMenu={handleCloseMenu}
            openMenu={openMenu}
          />
        </div>
      </div>
    </>
  );
};

export default AppNav;
