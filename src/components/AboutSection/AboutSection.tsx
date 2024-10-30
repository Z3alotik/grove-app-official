import { Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./AboutSection.styles";

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} columns={16}>
      <Grid size={8}>
        <Card className={classes.aboutCard}>About</Card>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
