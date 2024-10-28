import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InfoIcon from "@mui/icons-material/Info";
import useStyles from "./AppMenu.styles";
import { Link } from "react-scroll";

const AppMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
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
  );
};

export default AppMenu;
