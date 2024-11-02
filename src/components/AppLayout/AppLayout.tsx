import AboutSection from "../Sections/AboutSection/AboutSection";
import AppMenu from "../AppNav/AppNav";
import EventSection from "../Sections/EventSection/EventSection";
import HomeSection from "../Sections/HomeSection/HomeSection";
import MusicSection from "../Sections/MusicSection/MusicSection";
import { Element } from "react-scroll";
import useStyles from "./AppLayout.styles";

const AppLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div>
        <Element
          name="home"
          className={` ${classes.section} ${classes.sectionHome} `}
        >
          <HomeSection />
        </Element>

        <Element
          name="about"
          className={` ${classes.section} ${classes.sectionAbout}`}
        >
          <AboutSection />
        </Element>

        <Element
          name="event"
          className={` ${classes.section} ${classes.sectionEvent}`}
        >
          <EventSection />
        </Element>

        <Element
          name="music"
          className={` ${classes.section} ${classes.sectionMusic}`}
        >
          <MusicSection />
        </Element>
      </div>
      <AppMenu />
    </div>
  );
};

export default AppLayout;
