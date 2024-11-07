import { Box, Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./EventSection.styles";
import GADivider from "../../general/GADivider/GADivider";
import EventInfo from "./components/EventInfo/EventInfo";

const EventSection = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container spacing={2} columns={12}>
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
          <EventInfo />
        </Grid>
        <Grid size={6}>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventSection;
