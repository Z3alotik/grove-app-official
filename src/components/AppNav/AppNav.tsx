import useStyles from "./AppNav.styles";
import AppMenu from "./components/AppMenu/AppMenu";
import { navButtons } from "./AppNav.consts";
import GALinkButton from "../general/GALinkButton/GALinkButton";

const AppNav = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navigation}>
        <div className={classes.navMenu}>
          {navButtons.map((navButton, index) => (
            <GALinkButton
              key={index}
              linkTag={navButton.linkTag}
              title={navButton.title}
              iconChildren={navButton.icon}
            />
          ))}
        </div>

        <div className={classes.menu}>
          <AppMenu />
        </div>
      </div>
    </>
  );
};

export default AppNav;
