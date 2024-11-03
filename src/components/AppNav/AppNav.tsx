import { IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InfoIcon from "@mui/icons-material/Info";
import RuleIcon from "@mui/icons-material/Rule";
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
            <Tooltip title="Domů">
              <IconButton className={classes.iconButton} aria-label="home">
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Link to="about" smooth={true} duration={500}>
            <Tooltip title="O akci">
              <IconButton className={classes.iconButton} aria-label="info">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Link to="event" smooth={true} duration={500}>
            <Tooltip title="Událost">
              <IconButton className={classes.iconButton} aria-label="event">
                <EventIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Link to="music" smooth={true} duration={500}>
            <Tooltip title="Hudba">
              <IconButton className={classes.iconButton} aria-label="music">
                <MusicNoteIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Link to="rules" smooth={true} duration={500}>
            <Tooltip title="Pravidla">
              <IconButton className={classes.iconButton} aria-label="music">
                <RuleIcon />
              </IconButton>
            </Tooltip>
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
