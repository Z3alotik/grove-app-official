import { Element } from "react-scroll";
import AboutSection from "./components/AboutSection/AboutSection";
import AppMenu from "./components/AppMenu/AppMenu";
import EventSection from "./components/EventSection/EventSection";
import HomeSection from "./components/HomeSection/HomeSection";
import MusicSection from "./components/MusicSection/MusicSection";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Element name="home" className="section section-home">
          <HomeSection />
        </Element>

        <Element name="event" className="section section-event">
          <EventSection />
        </Element>

        <Element name="music" className="section section-music">
          <MusicSection />
        </Element>

        <Element name="about" className="section section-about">
          <AboutSection />
        </Element>
      </div>
      <AppMenu />
    </div>
  );
}

export default App;
