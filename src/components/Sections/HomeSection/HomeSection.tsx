import useStyles from "./HomeSection.styles";

const HomeSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <h1 className={classes.title}>
        <span>Grove</span>
        <span>Night</span>
      </h1>

      <p className={classes.p}>Small but uncommon dance party ...</p>
    </div>
  );
};

export default HomeSection;
