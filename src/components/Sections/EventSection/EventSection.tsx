import { Box, Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./EventSection.styles";
import GADivider from "../../general/GADivider/GADivider";

const EventSection = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid className={classes.wrapperGrid} container spacing={8} columns={12}>
        <Grid size={6}>
          <Grid>
            <Card>
              <CardMedia
                className={classes.media}
                image="GRN8.png"
                title="Event Image"
              />
            </Card>
          </Grid>
          <GADivider margin={3}>
            <span className={classes.infoHeader}>Event Info</span>
          </GADivider>
          <Grid className={classes.infoGrid}>
            <Box>
              <span className={classes.p}>wsdw</span>
            </Box>
          </Grid>
        </Grid>
        <Grid size={6}>
          <Card>
            <CardMedia image="https://pngimg.com/uploads/qr_code/qr_code_PNG10.png" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventSection;
