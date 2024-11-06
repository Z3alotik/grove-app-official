import Grid from "@mui/material/Grid2";
import useStyles from "./AboutSection.styles";
import EventStepper from "./components/EventStepper/EventStepper";
import { Box } from "@mui/material";
import { aboutContent } from "./AboutSection.consts";

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid className={classes.wrapperGrid} container spacing={6} columns={12}>
        <Grid container size={12}>
          <Grid size={6}>
            <h1 className={classes.aboutTitle}>
              <span>{aboutContent.title}</span>
            </h1>
          </Grid>
          <Grid size={6} className={classes.imageGrid}>
            <img
              className={classes.stepperImg}
              src="hiw.png"
              alt="How It Works"
            />
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={6}>
            <span className={classes.aboutText}>{aboutContent.text}</span>
          </Grid>
          <Grid size={6}>
            <EventStepper />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
