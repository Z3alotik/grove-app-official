import AboutSection from "../Sections/AboutSection/AboutSection";
import AppMenu from "../AppNav/AppNav";
import EventSection from "../Sections/EventSection/EventSection";
import HomeSection from "../Sections/HomeSection/HomeSection";
import MusicSection from "../Sections/MusicSection/MusicSection";
import { Element } from "react-scroll";
import useStyles from "./AppLayout.styles";
import RulesSection from "../Sections/RulesSection/RulesSection";

const eventImage = "GRN8.png";

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
          style={{
            backgroundImage: `url(${eventImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <EventSection />
        </Element>

        <Element
          name="music"
          className={` ${classes.section} ${classes.sectionMusic}`}
        >
          <MusicSection />
        </Element>

        <Element
          name="rules"
          className={` ${classes.section} ${classes.sectionRules}`}
        >
          <RulesSection />
        </Element>
      </div>
      <AppMenu />
    </div>
  );
};

export default AppLayout;
