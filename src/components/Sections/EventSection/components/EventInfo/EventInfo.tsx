import { Box, CardMedia, Fade } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./EventInfo.styles";
import GADivider from "../../../../general/GADivider/GADivider";
import { EventInfoProps } from "./EventInfo.types";
import { useEvent } from "../../../../../stateManagement/EventDataProvider";

const EventInfo = ({ isOpen }: EventInfoProps) => {
  const classes = useStyles();
  const { eventData } = useEvent();
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
              {eventData?.qr ? (
                <CardMedia
                  className={classes.qrImage}
                  image={eventData?.qr}
                  title="Event QR"
                />
              ) : (
                <span>No QR Code available</span>
              )}
            </Grid>
            <GADivider margin={3}>
              <span className={classes.infoHeader}>Event Info</span>
            </GADivider>
          </Grid>
          <Grid size={12}>
            <span className={classes.infoText}>
              {eventData?.date} {eventData?.time}
            </span>
            <span className={classes.infoText}>{eventData?.place}</span>
            <span className={classes.infoText}>{`${eventData?.price}Kč`}</span>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default EventInfo;
