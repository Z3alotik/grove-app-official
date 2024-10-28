import useStyles from "./HomeSection.styles";

const HomeSection = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>Welcome to Grove Night official website</h1>

      <p className={classes.p}>
        Here you can find anything about upcoming events, music that we play and
        more ...
      </p>
    </div>
  );
};

export default HomeSection;
