import Grid from "@mui/material/Grid2";
import GACard from "../../general/GACard/GACard";

const AboutSection = () => {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid size={6}>
        <GACard>
          AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
        </GACard>
      </Grid>
      <Grid size={6}>
        <GACard>
          AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
        </GACard>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
