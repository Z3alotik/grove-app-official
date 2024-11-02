import Grid from "@mui/material/Grid2";
import useStyles from "./AboutSection.styles";
import EventStepper from "./components/EventStepper/EventStepper";
import { Box } from "@mui/material";
import { aboutContent } from "./AboutSection.consts";

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid className={classes.wrapperGrid} container spacing={8} columns={12}>
        <Grid size={12}>
          <h1 className={classes.aboutTitle}>
            <span>O akci</span>
          </h1>
        </Grid>
        <Grid size={6}>
          <span className={classes.aboutText}>{aboutContent.text}</span>
        </Grid>
        <Grid size={6}>
          <EventStepper />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
