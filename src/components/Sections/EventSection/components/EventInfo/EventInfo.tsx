import { Box, CardMedia, Fade } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./EventInfo.styles";
import GADivider from "../../../../general/GADivider/GADivider";
import { EventInfoProps } from "./EventInfo.types";

const EventInfo = ({ isOpen }: EventInfoProps) => {
  const classes = useStyles();
  return (
    <Fade in={isOpen}>
      <Box className={classes.box}>
        <Grid
          className={classes.infoWrapperGrid}
          container
          columns={12}
          direction="column"
        >
          <Grid size={12}>
            <Grid className={classes.qrGrid}>
              <CardMedia
                className={classes.qrImage}
                image="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                title="Event QR"
              />
            </Grid>
            <GADivider margin={3}>
              <span className={classes.infoHeader}>Event Info</span>
            </GADivider>
          </Grid>
          <Grid size={12}>
            <Grid className={classes.infoText} size={4}>
              <span>10.6. 2025 18:00</span>
            </Grid>
            <Grid className={classes.infoText} size={4}>
              <span>Chata Hubertka</span>
            </Grid>
            <Grid className={classes.infoText} size={4}>
              <span>400Kč</span>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default EventInfo;
