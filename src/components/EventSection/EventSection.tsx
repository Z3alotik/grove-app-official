import useStyles from "./EventSection.styles";

const EventSection = () => {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.p}>No upcoming events in the near future.</p>
    </div>
  );
};

export default EventSection;
