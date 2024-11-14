import useStyles from "./HomeSection.styles";
import { homeContent } from "./HomeSection.consts";

const HomeSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <h1 className={classes.title}>
        <span>{homeContent.title_1}</span>
        <span>{homeContent.title_2}</span>
      </h1>

      <p className={classes.p}>{homeContent.mottoText}</p>
    </div>
  );
};

export default HomeSection;
