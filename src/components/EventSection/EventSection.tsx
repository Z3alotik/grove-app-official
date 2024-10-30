import Grid from "@mui/material/Grid2";
import useStyles from "./EventSection.styles";
import { Card } from "@mui/material";
import EventStepper from "./components/EventStepper/EventStepper";

const EventSection = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} columns={12}>
      <Grid size={6}>
        <Card className={classes.eventCard}>
          <img alt="" src="GRN8.png" width="1000" height="600" />
        </Card>
      </Grid>
      <Grid size={6}>
        <Card className={classes.eventCard}>
          <Grid container spacing={6} columns={6} sx={{ height: "300px" }}>
            <Grid size={3} sx={{ width: 400 }}>
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              />
            </Grid>
            <Grid size={3} sx={{ width: 400 }}>
              <EventStepper />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EventSection;
