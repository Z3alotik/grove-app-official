import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./EventInfo.styles";

const EventInfo = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid
        className={classes.wrapperGrid}
        container
        direction="column"
        size={6}
      >
        {/* First row grid */}
        <Grid container size={6}>
          <Grid size={3}>
            <span>DATUM</span>
          </Grid>
          <Grid size={3}>
            <span>MÍSTO</span>
          </Grid>
        </Grid>
        {/* Second row grid */}
        <Grid container size={6}>
          <Grid size={6}>
            <span>CENA</span>
          </Grid>
        </Grid>
        {/* Third row grid */}
        <Grid container size={6}>
          <Grid size={6}>
            <span>INFORMACE</span>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventInfo;
